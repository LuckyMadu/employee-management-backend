"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEmployeeValidation = void 0;
var Joi = require("joi");
var commonResponseType = __importStar(require("../../../static/static.json"));
var response_1 = require("../../../utils/response");
var addEmployeeValidation = function (req, res, next) {
    var schema = Joi.object({
        firstName: Joi.string()
            .min(6)
            .max(10)
            .pattern(/^[a-zA-Z]+$/)
            .required()
            .messages({
            "any.required": "First name is required",
            "any.min": "First Name should have a minimum length of {#limit}",
            max: "First Name should have a maximum length of {#limit}",
            "string.pattern.base": "Only allow alphabet characters ",
        }),
        lastName: Joi.string()
            .required()
            .messages({
            "any.required": "Last name is required",
            "any.min": "First Name should have a minimum length of {#limit}",
            max: "First Name should have a maximum length of {#limit}",
            "string.pattern.base": "Only allow alphabet characters ",
        })
            .min(6)
            .max(10)
            .pattern(/^[a-zA-Z]+$/),
        email: Joi.string().required().messages({
            "any.required": "Email is required",
        }),
        phone: Joi.string()
            .required()
            .messages({
            "any.required": "Phone Number is required",
        })
            .pattern(/^(?:\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/),
        gender: Joi.string().required().messages({
            "any.required": "Gender is required",
        }),
        photo: Joi.string().optional(),
    });
    var error = schema.validate(req.body).error;
    if (error) {
        console.log(error);
        var response = (0, response_1.commonResponse)(commonResponseType.RESPONSE_SUCCESS.FALSE, {}, commonResponseType.RESPONSE_MESSAGES.VALIDATION_ERROR, {
            message: error.details[0].message,
        });
        res
            .status(commonResponseType.HTTP_RESPONSE.HTTP_VALIDATION_ERROR)
            .json(response);
    }
    else {
        next();
    }
};
exports.addEmployeeValidation = addEmployeeValidation;
