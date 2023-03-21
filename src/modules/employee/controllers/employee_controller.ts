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
  } catch (err) {
    res
      .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
      .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
  }
};

const updateEmployeeController = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    const empId = req.params.empId;
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
    const empId = req.params.empId;
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

export default {
  getAllEmployeeController,
  addEmployeeController,
  updateEmployeeController,
  deleteEmployeeController,
};
