"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRouter = void 0;
var express_1 = __importDefault(require("express"));
var employee_controller_1 = __importDefault(require("@/modules/employee/controllers/employee_controller"));
var employee_validation_1 = require("@/modules/employee/validation/employee_validation");
var router = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Employee
 *   description: The employee managing API
 * /employee/list:
 *   get:
 *     summary: Get all employee list
 *     tags: [Employee]
 *     responses:
 *       200:
 *         description: Employee list fetched successfully!
 *       400:
 *         description: Employee list fetched failed!
 *       500:
 *         description: Some server error!
 *
 */
router.get("/list", employee_controller_1.default.getAllEmployeeController);
/**
 * @swagger
 * tags:
 *   name: Employee
 *   description:  Search employees
 * /employee/search:
 *   get:
 *     summary: Search employees
 *     tags: [Employee]
 *
 */
router.get("/search", employee_controller_1.default.searchEmployeeController);
/**
 * @swagger
 * tags:
 *   name: Employee
 *   description: Get single employee
 * /employee/{empId}:
 *   delete:
 *     summary: Get single employee
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: empId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The Employee ID
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/employee'
 *     responses:
 *       200:
 *         description: Employee fetched successfully!
 *       400:
 *         description: Employee fetched failed!
 *       500:
 *         description: Some server error!
 *
 */
router.get("/:empId", employee_controller_1.default.getSingleEmployeeController);
/**
 * @swagger
 * tags:
 *   name: Employee
 *   description: Add new employee
 * /employee:
 *   post:
 *     summary: Add new employee
 *     tags: [Employee]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/employee'
 *     responses:
 *       200:
 *         description: Employee added successfully!
 *       400:
 *         description: Employee added failed!
 *       500:
 *         description: Some server error!
 *
 */
router.post("/", employee_validation_1.addEmployeeValidation, employee_controller_1.default.addEmployeeController);
/**
 * @swagger
 * tags:
 *   name: Employee
 *   description: Update employee
 * /employee/{empId}:
 *   put:
 *     summary: Update employee
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: empId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The Employee ID
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/employee'
 *     responses:
 *       200:
 *         description: Employee updated successfully!
 *       400:
 *         description: Employee updated failed!
 *       500:
 *         description: Some server error!
 *
 */
router.put("/:empId", employee_controller_1.default.updateEmployeeController);
/**
 * @swagger
 * tags:
 *   name: Employee
 *   description: Delete employee
 * /employee/{empId}:
 *   delete:
 *     summary: Delete employee
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: empId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The Employee ID
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/employee'
 *     responses:
 *       200:
 *         description: Employee deleted successfully!
 *       400:
 *         description: Employee deleted failed!
 *       500:
 *         description: Some server error!
 *
 */
router.delete("/:empId", employee_controller_1.default.deleteEmployeeController);
var employeeRouter = router;
exports.employeeRouter = employeeRouter;
