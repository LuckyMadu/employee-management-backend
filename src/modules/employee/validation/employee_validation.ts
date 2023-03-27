import Express from "express";
const Joi = require("joi");
import * as commonResponseType from "../../../static/static.json";
import { commonResponse } from "../../../utils/response";

export const addEmployeeValidation = (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const schema = Joi.object({
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

  const { error } = schema.validate(req.body);

  if (error) {
    console.log(error);
    const response = commonResponse(
      commonResponseType.RESPONSE_SUCCESS.FALSE,
      {},
      commonResponseType.RESPONSE_MESSAGES.VALIDATION_ERROR,
      {
        message: error.details[0].message,
      }
    );
    res
      .status(commonResponseType.HTTP_RESPONSE.HTTP_VALIDATION_ERROR)
      .json(response);
  } else {
    next();
  }
};

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
