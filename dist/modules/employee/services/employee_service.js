"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var employee_repo_1 = __importDefault(require("../repository/employee_repo"));
// fetch all employees
var getAllEmployeeService = function () { return employee_repo_1.default.getAllEmployeeRepo(); };
// add employee
var addEmployeeService = function (requestBody) {
    return employee_repo_1.default.addEmployeeRepo(requestBody);
};
// update employee
var updateEmployeeService = function (empId, requestBody) {
    return employee_repo_1.default.updateEmployeeRepo(empId, requestBody);
};
// delete employee
var deleteEmployeeService = function (empId) {
    return employee_repo_1.default.deleteEmployeeRepo(empId);
};
exports.default = {
    getAllEmployeeService: getAllEmployeeService,
    addEmployeeService: addEmployeeService,
    updateEmployeeService: updateEmployeeService,
    deleteEmployeeService: deleteEmployeeService,
};
