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
    firstName: Joi.string()
      .min(6)
      .max(10)
      .pattern(/^[a-zA-Z]+$/)
      .required()
      .messages({
        "any.required": "First name is required",
        "any.min": `First Name should have a minimum length of {#limit}`,
        max: `First Name should have a maximum length of {#limit}`,
        "string.pattern.base": `Only allow alphabet characters `,
      }),
    lastName: Joi.string()
      .required()
      .messages({
        "any.required": "Last name is required",
        "any.min": `First Name should have a minimum length of {#limit}`,
        max: `First Name should have a maximum length of {#limit}`,
        "string.pattern.base": `Only allow alphabet characters `,
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
      .pattern(
        /^(?:\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/
      ),
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
