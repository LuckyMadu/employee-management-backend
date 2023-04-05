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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var employee_service_1 = __importDefault(require("../../../modules/employee/services/employee_service"));
var response_1 = require("../../../utils/response");
var commonResponseType = __importStar(require("../../../static/static.json"));
/**
 * get employee lists
 * @param req
 * @param res
 * @return {object} is for return employee lists
 */
var getAllEmployeeController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.info("Employee lists endpoint...");
                return [4 /*yield*/, employee_service_1.default.getAllEmployeeService()];
            case 1:
                data = _a.sent();
                response = (0, response_1.commonResponse)(commonResponseType.RESPONSE_SUCCESS.TRUE, data, commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_FETCH_SUCCESS, {});
                res.status(commonResponseType.HTTP_RESPONSE.HTTP_SUCCESS).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res
                    .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
                    .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
/**
 * get single employee detail by given id
 * if there is no record for given id return status code 404
 * @param req
 * @param res
 * @return {object} is for return particular employee detail
 */
var getSingleEmployeeController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var empId, data, response, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.info("Single Employee endpoint...");
                empId = req.params.empId;
                return [4 /*yield*/, employee_service_1.default.getSingleEmployeeService(empId)];
            case 1:
                data = _a.sent();
                if (!data) {
                    return [2 /*return*/, res
                            .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
                            .json(commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_NOT_FOUND)];
                }
                response = (0, response_1.commonResponse)(commonResponseType.RESPONSE_SUCCESS.TRUE, { data: data }, commonResponseType.RESPONSE_MESSAGES.SINGLE_EMPLOYEE_FETCH_SUCCESS, {});
                res.status(commonResponseType.HTTP_RESPONSE.HTTP_SUCCESS).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res
                    .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
                    .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
/**
 * create an employee using given data
 * @param req
 * @param res
 * @return {object} is for return the response is success or failure
 */
var addEmployeeController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requestBody, data, response, err_3, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.info("Employee creation endpoint...");
                requestBody = req.body;
                return [4 /*yield*/, employee_service_1.default.addEmployeeService(requestBody)];
            case 1:
                data = _a.sent();
                response = (0, response_1.commonResponse)(commonResponseType.RESPONSE_SUCCESS.TRUE, data, commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_REGISTER_SUCCESS, {});
                res.status(commonResponseType.HTTP_RESPONSE.HTTP_CREATED).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                response = (0, response_1.commonResponse)(commonResponseType.RESPONSE_SUCCESS.FALSE, {}, commonResponseType.RESPONSE_MESSAGES.VALIDATION_ERROR, {
                    message: err_3.message,
                });
                res
                    .status(commonResponseType.HTTP_RESPONSE.HTTP_VALIDATION_ERROR)
                    .json(response);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
/**
 * update employee detail using given id and data
 * before update the record we checked id exists or not in the db
 * if id is exists user can update the record
 * @param req
 * @param res
 * @return {object} is for return success or failure response
 */
var updateEmployeeController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var empId, requestBody, employee, data, response, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                console.info("Employee update endpoint...");
                empId = req.params.empId;
                requestBody = req.body;
                return [4 /*yield*/, employee_service_1.default.getSingleEmployeeService(empId)];
            case 1:
                employee = _a.sent();
                return [4 /*yield*/, employee_service_1.default.updateEmployeeService(empId, requestBody)];
            case 2:
                data = _a.sent();
                if (!employee) {
                    return [2 /*return*/, res
                            .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
                            .json(commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_NOT_FOUND)];
                }
                response = (0, response_1.commonResponse)(commonResponseType.RESPONSE_SUCCESS.TRUE, { data: data }, commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_UPDATE_SUCCESS, {});
                res.status(commonResponseType.HTTP_RESPONSE.HTTP_SUCCESS).json(response);
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                console.log(err_4);
                res
                    .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
                    .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
/**
 * delete the single employee using given id
 * before delete the record we check id exists or not
 * if id is exists user can delete the record
 * @param req
 * @param res
 * @return {object} is for return success or failure response
 */
var deleteEmployeeController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var empId, data, employee, response, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                console.info("Employee delete endpoint...");
                empId = req.params.empId;
                return [4 /*yield*/, employee_service_1.default.deleteEmployeeService(empId)];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, employee_service_1.default.getSingleEmployeeService(empId)];
            case 2:
                employee = _a.sent();
                if (!employee) {
                    return [2 /*return*/, res
                            .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
                            .json(commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_NOT_FOUND)];
                }
                response = (0, response_1.commonResponse)(commonResponseType.RESPONSE_SUCCESS.TRUE, { data: data }, commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_REMOVE_SUCCESS, {});
                res.status(commonResponseType.HTTP_RESPONSE.HTTP_SUCCESS).json(response);
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                res
                    .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
                    .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
/**
 * search employee using firstname, lastname and email
 * @param req
 * @param res
 * @return {object} is for return the search results
 */
var searchEmployeeController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, data, response, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.info("Employee search endpoint...");
                query = req.query.query;
                if (typeof query !== "string") {
                    return [2 /*return*/, res
                            .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
                            .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR)];
                }
                return [4 /*yield*/, employee_service_1.default.searchEmployeeService(query)];
            case 1:
                data = _a.sent();
                response = (0, response_1.commonResponse)(commonResponseType.RESPONSE_SUCCESS.TRUE, { data: data }, commonResponseType.RESPONSE_MESSAGES.EMPLOYEE_SEARCH_SUCCESS, {});
                res.status(commonResponseType.HTTP_RESPONSE.HTTP_SUCCESS).json(response);
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                res
                    .status(commonResponseType.HTTP_RESPONSE.HTTP_NOT_FOUND)
                    .json(commonResponseType.RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    getAllEmployeeController: getAllEmployeeController,
    getSingleEmployeeController: getSingleEmployeeController,
    addEmployeeController: addEmployeeController,
    updateEmployeeController: updateEmployeeController,
    deleteEmployeeController: deleteEmployeeController,
    searchEmployeeController: searchEmployeeController,
};
