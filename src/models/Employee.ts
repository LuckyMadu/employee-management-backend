import { Schema, model } from "mongoose";

interface IEmployee {
  first_name: string;
  last_name: string;
  email?: string;
  number?: string;
  gender?: string;
  photo?: string;
}

const employeeSchema = new Schema<IEmployee>(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
    },
    number: {
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
