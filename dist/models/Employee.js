"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var mongoose_1 = require("mongoose");
var employeeSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
var Employee = (0, mongoose_1.model)("employees", employeeSchema);
exports.Employee = Employee;
