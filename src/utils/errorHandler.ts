import { commonResponse } from "./response";
import commonResponseType from "../static/static.json";

import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // render the error page
  let response = commonResponse(
    commonResponseType.RESPONSE_SUCCESS.FALSE,
    {},
    commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
    {}
  );
  return res
    .status(commonResponseType.HTTP_RESPONSE.HTTP_BAD_REQUEST)
    .json(response);
};
