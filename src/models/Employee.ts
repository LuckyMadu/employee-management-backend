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
      required: [true, "please add first name"],
    },
    last_name: {
      type: String,
      required: [true, "please add last name"],
    },
    email: {
      type: String,
      required: [true, "please add email"],
    },
    number: {
      type: String,
      required: [true, "please add phone number"],
    },
    gender: {
      type: String,
      required: [true, "please add gender"],
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
