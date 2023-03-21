import { EmployeeDTO } from "../../../DTO/Employee.dto";
import { Employee } from "../../../models/Employee";

const getAllEmployeeRepo = async () => {
  return Employee.find({});
};

const addEmployeeRepo = async (requestBody: EmployeeDTO) => {
  return Employee.create(requestBody);
};

const updateEmployeeRepo = async (empId: string, requestBody: EmployeeDTO) => {
  return Employee.findOneAndUpdate(
    { id: empId },
    { $set: requestBody },
    { new: true }
  );
};

const deleteEmployeeRepo = async (empId: string) => {
  return Employee.deleteOne({
    id: empId,
  });
};

export default {
  getAllEmployeeRepo,
  addEmployeeRepo,
  updateEmployeeRepo,
  deleteEmployeeRepo,
};
