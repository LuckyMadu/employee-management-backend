"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var supertest = require("supertest");
var Employee_1 = require("../Payload/Employee");
var app = require("../../index");
var createEmployee = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, statusCode, body;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, supertest(app)
                    .post("/employee/")
                    .send(data)];
            case 1:
                _a = _b.sent(), statusCode = _a.statusCode, body = _a.body;
                return [2 /*return*/, { statusCode: statusCode, body: body }];
        }
    });
}); };
var expectation = function (value, toBe) {
    return expect(value).toBe(toBe);
};
describe("employee", function () {
    it("should return all employees with 200 status code", function () { return __awaiter(void 0, void 0, void 0, function () {
        var statusCode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest(app).get("/employee/list")];
                case 1:
                    statusCode = (_a.sent()).statusCode;
                    expectation(statusCode, 200);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should be able to save the employee", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, statusCode, body;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, createEmployee(Employee_1.employeeCreationData)];
                case 1:
                    _a = _b.sent(), statusCode = _a.statusCode, body = _a.body;
                    expect(statusCode).toBe(201);
                    expect(body.data.firstName).toBe(Employee_1.employeeCreationData.firstName);
                    expect(body.data.lastName).toBe(Employee_1.employeeCreationData.lastName);
                    expect(body.data.email).toBe(Employee_1.employeeCreationData.email);
                    expect(body.data.phone).toBe(Employee_1.employeeCreationData.phone);
                    expect(body.data.gender).toBe(Employee_1.employeeCreationData.gender);
                    return [2 /*return*/];
            }
        });
    }); });
    it("required all the fields", function () { return __awaiter(void 0, void 0, void 0, function () {
        var statusCode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createEmployee(Employee_1.employeeCreationNullValues)];
                case 1:
                    statusCode = (_a.sent()).statusCode;
                    expect(statusCode).toBe(422);
                    return [2 /*return*/];
            }
        });
    }); });
    it("given employee id does not exist", function () { return __awaiter(void 0, void 0, void 0, function () {
        var employeeId, statusCode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    employeeId = "64239e8a7b54ecd91fee588c";
                    return [4 /*yield*/, supertest(app).get("/employee/".concat(employeeId))];
                case 1:
                    statusCode = (_a.sent()).statusCode;
                    expect(statusCode).toBe(404);
                    return [2 /*return*/];
            }
        });
    }); });
    it("delete employee record using invalid id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var employeeId, statusCode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    employeeId = "64239e8a7b54ecd91fee588c";
                    return [4 /*yield*/, supertest(app).delete("/employee/".concat(employeeId))];
                case 1:
                    statusCode = (_a.sent()).statusCode;
                    expect(statusCode).toBe(404);
                    return [2 /*return*/];
            }
        });
    }); });
    it("update employee record using invalid id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var employeeId, statusCode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    employeeId = "64239e8a7b54ecd91fee588c";
                    return [4 /*yield*/, supertest(app)
                            .put("/employee/".concat(employeeId))
                            .send(Employee_1.employeeUpdateData)];
                case 1:
                    statusCode = (_a.sent()).statusCode;
                    expect(statusCode).toBe(404);
                    return [2 /*return*/];
            }
        });
    }); });
    it("update employee record using valid id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var body, statusCode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createEmployee(Employee_1.employeeCreationData)];
                case 1:
                    body = (_a.sent()).body;
                    return [4 /*yield*/, supertest(app)
                            .put("/employee/".concat(body.data._id))
                            .send(Employee_1.employeeUpdateData)];
                case 2:
                    statusCode = (_a.sent()).statusCode;
                    expect(statusCode).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
