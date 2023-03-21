import Express from "express";
const Joi = require("joi");
import * as commonResponseType from "../../../static/static.json";

export const addEmployeeValidation = (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const schema = Joi.object({
    first_name: Joi.string().required().label("Firs name is required"),
    last_name: Joi.string().required().label("Last name is required"),
    email: Joi.string().required().label("Email is required"),
    number: Joi.string().required().label("Phone number is required"),
    gender: Joi.string().required().label("Gender is required"),
  });

  const result = schema.validate(req.body);
  if (result.error) {
    console.log(result.error.message);
    res
      .status(commonResponseType.HTTP_RESPONSE.HTTP_VALIDATION_ERROR)
      .send(result.error.message);
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
