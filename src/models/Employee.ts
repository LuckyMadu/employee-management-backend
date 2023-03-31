import { Schema, model } from "mongoose";

interface IEmployee {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  gender?: string;
  photo?: string;
}

const employeeSchema = new Schema<IEmployee>(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    gender: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = model<IEmployee>("employees", employeeSchema);
export { Employee };
