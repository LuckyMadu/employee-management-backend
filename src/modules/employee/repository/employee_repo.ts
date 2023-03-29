import { EmployeeDTO } from "../../../DTO/Employee.dto";
import { Employee } from "../../../models/Employee";

const getAllEmployeeRepo = async () => {
  return Employee.find({});
};

const getSingleEmployeeRepo = async (empId: string) => {
  return Employee.findOne({
    _id: empId,
  });
};

const addEmployeeRepo = async (requestBody: EmployeeDTO) => {
  return Employee.create(requestBody);
};

const updateEmployeeRepo = async (empId: string, requestBody: EmployeeDTO) => {
  return Employee.findOneAndUpdate(
    { _id: empId },
    { $set: requestBody },
    { new: true }
  );
};

const deleteEmployeeRepo = async (empId: string) => {
  return Employee.deleteOne({
    _id: empId,
  });
};

export default {
  getAllEmployeeRepo,
  getSingleEmployeeRepo,
  addEmployeeRepo,
  updateEmployeeRepo,
  deleteEmployeeRepo,
};
