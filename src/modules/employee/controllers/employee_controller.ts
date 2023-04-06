import Express from "express";

import EmployeeService from "@/modules/employee/services/employee_service";
import { EmployeeDTO } from "@/modules/employee/types/Employee.dto";

import { commonResponse } from "@/utils/response";
import * as commonResponseType from "@/static/static.json";

/**
 * get employee lists
 * @param req
 * @param res
 * @return {object} is for return employee lists
 */
const getAllEmployeeController = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    console.info("Employee lists endpoint...");

    const data = await EmployeeService.getAllEmployeeService();
    const response = commonResponse(
      commonResponseType.RESPONSE_SUCCESS.TRUE,
      data,
      commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_FETCH_SUCCESS,
      {}
    );
    res.status(commonResponseType.HTTP_RESPONSE.HTTP_SUCCESS).json(response);
  } catch (err) {
    res
      .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
      .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
  }
};

/**
 * get single employee detail by given id
 * if there is no record for given id return status code 404
 * @param req
 * @param res
 * @return {object} is for return particular employee detail
 */
const getSingleEmployeeController = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    console.info("Single Employee endpoint...");
    const { empId } = req.params;

    const data = await EmployeeService.getSingleEmployeeService(empId);

    if (!data) {
      return res
        .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
        .json(commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_NOT_FOUND);
    }

    const response = commonResponse(
      commonResponseType.RESPONSE_SUCCESS.TRUE,
      { data },
      commonResponseType.RESPONSE_MESSAGES.SINGLE_EMPLOYEE_FETCH_SUCCESS,
      {}
    );
    res.status(commonResponseType.HTTP_RESPONSE.HTTP_SUCCESS).json(response);
  } catch (err) {
    res
      .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
      .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
  }
};

/**
 * create an employee using given data
 * @param req
 * @param res
 * @return {object} is for return the response is success or failure
 */
const addEmployeeController = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    console.info("Employee creation endpoint...");

    const requestBody: EmployeeDTO = req.body;

    const data = await EmployeeService.addEmployeeService(requestBody);

    const response = commonResponse(
      commonResponseType.RESPONSE_SUCCESS.TRUE,
      data,
      commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_REGISTER_SUCCESS,
      {}
    );
    res.status(commonResponseType.HTTP_RESPONSE.HTTP_CREATED).json(response);
  } catch (err: any) {
    const response = commonResponse(
      commonResponseType.RESPONSE_SUCCESS.FALSE,
      {},
      commonResponseType.RESPONSE_MESSAGES.VALIDATION_ERROR,
      {
        message: err.message,
      }
    );
    res
      .status(commonResponseType.HTTP_RESPONSE.HTTP_VALIDATION_ERROR)
      .json(response);
  }
};

/**
 * update employee detail using given id and data
 * before update the record we checked id exists or not in the db
 * if id is exists user can update the record
 * @param req
 * @param res
 * @return {object} is for return success or failure response
 */

const updateEmployeeController = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    console.info("Employee update endpoint...");

    const { empId } = req.params;
    const requestBody = req.body;

    const employee = await EmployeeService.getSingleEmployeeService(empId);

    if (!employee) {
      return res
        .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
        .json(commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_NOT_FOUND);
    }

    const data = await EmployeeService.updateEmployeeService(
      empId,
      requestBody
    );

    const response = commonResponse(
      commonResponseType.RESPONSE_SUCCESS.TRUE,
      { data },
      commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_UPDATE_SUCCESS,
      {}
    );
    res.status(commonResponseType.HTTP_RESPONSE.HTTP_SUCCESS).json(response);
  } catch (err) {
    console.log(err);
    res
      .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
      .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
  }
};

/**
 * delete the single employee using given id
 * before delete the record we check id exists or not
 * if id is exists user can delete the record
 * @param req
 * @param res
 * @return {object} is for return success or failure response
 */
const deleteEmployeeController = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    console.info("Employee delete endpoint...");

    const { empId } = req.params;

    const employee = await EmployeeService.getSingleEmployeeService(empId);

    if (!employee) {
      return res
        .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
        .json(commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_NOT_FOUND);
    }
    const data = await EmployeeService.deleteEmployeeService(empId);

    const response = commonResponse(
      commonResponseType.RESPONSE_SUCCESS.TRUE,
      { data },
      commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_REMOVE_SUCCESS,
      {}
    );
    res.status(commonResponseType.HTTP_RESPONSE.HTTP_SUCCESS).json(response);
  } catch (err) {
    res
      .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
      .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
  }
};

/**
 * search employee using firstname, lastname and email
 * @param req
 * @param res
 * @return {object} is for return the search results
 */
const searchEmployeeController = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    console.info("Employee search endpoint...");

    const { query } = req.query;

    if (typeof query !== "string") {
      return res
        .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
        .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
    }

    const data = await EmployeeService.searchEmployeeService(query);

    const response = commonResponse(
      commonResponseType.RESPONSE_SUCCESS.TRUE,
      { data },
      commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_SEARCH_SUCCESS,
      {}
    );
    res.status(commonResponseType.HTTP_RESPONSE.HTTP_SUCCESS).json(response);
  } catch (err) {
    res
      .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
      .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
  }
};

export default {
  getAllEmployeeController,
  getSingleEmployeeController,
  addEmployeeController,
  updateEmployeeController,
  deleteEmployeeController,
  searchEmployeeController,
};
