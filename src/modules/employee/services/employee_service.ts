import Express from "express";
import { EmployeeDTO } from "../../../DTO/Employee.dto";
import EmployeeRepo from "../repository/employee_repo";

// fetch all employees
const getAllEmployeeService = () => EmployeeRepo.getAllEmployeeRepo();
// add employee
const addEmployeeService = (requestBody: EmployeeDTO) =>
  EmployeeRepo.addEmployeeRepo(requestBody);
// update employee
const updateEmployeeService = (empId: string, requestBody: EmployeeDTO) =>
  EmployeeRepo.updateEmployeeRepo(empId, requestBody);
// delete employee
const deleteEmployeeService = (empId: string) =>
  EmployeeRepo.deleteEmployeeRepo(empId);

export default {
  getAllEmployeeService,
  addEmployeeService,
  updateEmployeeService,
  deleteEmployeeService,
};
