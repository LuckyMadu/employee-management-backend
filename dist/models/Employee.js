"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var mongoose_1 = require("mongoose");
var employeeSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
var Employee = (0, mongoose_1.model)("employees", employeeSchema);
exports.Employee = Employee;
