"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var employee_repo_1 = __importDefault(require("../../../modules/employee/repository/employee_repo"));
// fetch all employees
var getAllEmployeeService = function () { return employee_repo_1.default.getAllEmployeeRepo(); };
// fetch single employees
var getSingleEmployeeService = function (empId) {
    return employee_repo_1.default.getSingleEmployeeRepo(empId);
};
// search employee
var searchEmployeeService = function (query) {
    return employee_repo_1.default.searchEmployeeRepo(query);
};
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
    getSingleEmployeeService: getSingleEmployeeService,
    searchEmployeeService: searchEmployeeService,
    addEmployeeService: addEmployeeService,
    updateEmployeeService: updateEmployeeService,
    deleteEmployeeService: deleteEmployeeService,
};
