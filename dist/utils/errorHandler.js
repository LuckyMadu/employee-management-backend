"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var response_1 = require("../utils/response");
var static_json_1 = __importDefault(require("../static/static.json"));
var errorHandler = function (err, req, res, next) {
    // render the error page
    var response = (0, response_1.commonResponse)(static_json_1.default.RESPONSE_SUCCESS.FALSE, {}, static_json_1.default.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR, {});
    return res
        .status(static_json_1.default.HTTP_RESPONSE.HTTP_BAD_REQUEST)
        .json(response);
};
exports.errorHandler = errorHandler;
