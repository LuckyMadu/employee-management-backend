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
        first_name: Joi.string().required().messages({
            "any.required": "First name is required",
        }),
        last_name: Joi.string().required().messages({
            "any.required": "Last name is required",
        }),
        email: Joi.string().required().messages({
            "any.required": "Email is required",
        }),
        number: Joi.string().required().messages({
            "any.required": "Phone Number is required",
        }),
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
// exports.getOneBranchValidation = (req, res, next) => {
//   const schema = Joi.object({
//     id: Joi.string().required().label("Branch Id Is required"),
//   });
//   const result = schema.validate(req.params);
//   if (result.error) {
//     console.log(result.error.message);
//     res.status(422).send(result.error.message);
//   } else {
//     next();
//   }
// };
// exports.searchBranchesValidation = (req, res, next) => {
//   const schema = Joi.object({
//     page: Joi.number().required(),
//     limit: Joi.number().required(),
//     coordinates: Joi.string().optional(),
//     name: Joi.string().optional(),
//     price: Joi.string().optional(),
//   });
//   const result = schema.validate(req.query);
//   if (result.error) {
//     console.log(result.error.message);
//     res.status(422).send(result.error.message);
//   } else {
//     next();
//   }
// };
