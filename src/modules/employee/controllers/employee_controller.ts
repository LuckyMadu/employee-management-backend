import Express from "express";

import { commonResponse } from "../../../utils/response";
import * as commonResponseType from "../../../static/static.json";
import EmployeeService from "../services/employee_service";
import { EmployeeDTO } from "../../../DTO/Employee.dto";

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

const getSingleEmployeeController = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    const { empId } = req.params;

    console.info("Single Employee endpoint...");

    const data = await EmployeeService.getSingleEmployeeService(empId);
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

const addEmployeeController = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    const requestBody: EmployeeDTO = req.body;
    const data = await EmployeeService.addEmployeeService(requestBody);

    const response = commonResponse(
      commonResponseType.RESPONSE_SUCCESS.TRUE,
      data,
      commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_REGISTER_SUCCESS,
      {}
    );
    res.status(commonResponseType.HTTP_RESPONSE.HTTP_SUCCESS).json(response);
  } catch (err: any) {
    console.log(err);
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

const updateEmployeeController = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    const { empId } = req.params;
    const requestBody = req.body;
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
    res
      .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
      .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
  }
};

const deleteEmployeeController = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    const { empId } = req.params;
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

const searchEmployeeController = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
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
