"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var mongoose_1 = require("mongoose");
var employeeSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
employeeSchema.index({ firstName: "text", lastName: "text", email: "text" });
var Employee = (0, mongoose_1.model)("employees", employeeSchema);
exports.Employee = Employee;
