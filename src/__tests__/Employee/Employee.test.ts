// const supertest = require("supertest");
// const app = require("../../index");
// const {
//   getAllEmployeeRepo,
// } = require("../../modules/employee/controllers/employee_controller");
// const Employee = require("../../models/Employee");

// import { EmployeeDTO } from "../../modules/employee/types/Employee.dto";
// import {
//   employeeCreationData,
//   employeeCreationWithOutValues,
//   employeeUpdateData,
// } from "../Payload/Employee";

// const createEmployee = async (data: EmployeeDTO) => {
//   const { statusCode, body } = await supertest(app)
//     .post("/employee/")
//     .send(data);
//   return { statusCode, body };
// };

// const expectation = (value: any, toBe: any) => {
//   return expect(value).toBe(toBe);
// };

// describe("employee", () => {
//   it("should return all employees with 200 status code", async () => {
//     const { statusCode } = await supertest(app).get("/employee/list");
//     expectation(statusCode, 200);
//   });
// });
