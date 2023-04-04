const supertest = require("supertest");

import { EmployeeDTO } from "../../modules/employee/types/Employee.dto";
import {
  employeeCreationData,
  employeeCreationNullValues,
  employeeUpdateData,
} from "../Payload/Employee";

const app = require("../../index");

const createEmployee = async (data: EmployeeDTO) => {
  const { statusCode, body } = await supertest(app)
    .post("/employee/")
    .send(data);
  return { statusCode, body };
};

const expectation = (value: any, toBe: any) => {
  return expect(value).toBe(toBe);
};

describe("employee", () => {
  it("should return all employees with 200 status code", async () => {
    const { statusCode } = await supertest(app).get("/employee/list");
    expectation(statusCode, 200);
  });

  it("should be able to save the employee", async () => {
    const { statusCode, body } = await createEmployee(employeeCreationData);
    expect(statusCode).toBe(201);
    expect(body.data.firstName).toBe(employeeCreationData.firstName);
    expect(body.data.lastName).toBe(employeeCreationData.lastName);
    expect(body.data.email).toBe(employeeCreationData.email);
    expect(body.data.phone).toBe(employeeCreationData.phone);
    expect(body.data.gender).toBe(employeeCreationData.gender);
  });

  it("required all the fields", async () => {
    const { statusCode } = await createEmployee(employeeCreationNullValues);
    expect(statusCode).toBe(422);
  });

  it("given employee id does not exist", async () => {
    const employeeId = "64239e8a7b54ecd91fee588c";
    const { statusCode } = await supertest(app).get(`/employee/${employeeId}`);
    expect(statusCode).toBe(404);
  });

  it("delete employee record using invalid id", async () => {
    const employeeId = "64239e8a7b54ecd91fee588c";
    const { statusCode } = await supertest(app).delete(
      `/employee/${employeeId}`
    );
    expect(statusCode).toBe(404);
  });

  it("update employee record using invalid id", async () => {
    const employeeId = "64239e8a7b54ecd91fee588c";
    const { statusCode } = await supertest(app)
      .put(`/employee/${employeeId}`)
      .send(employeeUpdateData);
    expect(statusCode).toBe(404);
  });

  it("update employee record using valid id", async () => {
    const { body } = await createEmployee(employeeCreationData);

    const { statusCode } = await supertest(app)
      .put(`/employee/${body.data._id}`)
      .send(employeeUpdateData);
    expect(statusCode).toBe(200);
  });
});
