import express from "express";

import EmployeeController from "@/modules/employee/controllers/employee_controller";
import { addEmployeeValidation } from "@/modules/employee/validation/employee_validation";

const router = express.Router();

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
router.get("/list", EmployeeController.getAllEmployeeController);

/**
 * @swagger
 * tags:
 *   name: Employee
 *   description:  Search employees
 * /employee/search:
 *   get:
 *     summary: Search employees
 *     tags: [Employee]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *           minimum: 1
 *         description: The search string
 *
 */
router.get("/search", EmployeeController.searchEmployeeController);

/**
 * @swagger
 * tags:
 *   name: Employee
 *   description: Get single employee
 * /employee/{empId}:
 *   get:
 *     summary: Get single employee
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: empId
 *         required: true
 *         schema:
 *           type: string
 *           minimum: 1
 *         description: The Employee ID
 *     responses:
 *       200:
 *         description: Employee fetched successfully!
 *       400:
 *         description: Employee fetched failed!
 *       500:
 *         description: Some server error!
 *
 */
router.get("/:empId", EmployeeController.getSingleEmployeeController);

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
router.post(
  "/",
  addEmployeeValidation,
  EmployeeController.addEmployeeController
);

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
 *           type: string
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
router.put("/:empId", EmployeeController.updateEmployeeController);

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
 *           type: string
 *           minimum: 1
 *         description: The Employee ID
 *     responses:
 *       200:
 *         description: Employee deleted successfully!
 *       400:
 *         description: Employee deleted failed!
 *       500:
 *         description: Some server error!
 *
 */
router.delete("/:empId", EmployeeController.deleteEmployeeController);

const employeeRouter = router;
export { employeeRouter };
