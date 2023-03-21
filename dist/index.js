"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var swaggerJsDoc = require("swagger-jsdoc");
var swaggerUI = require("swagger-ui-express");
var db_1 = __importDefault(require("./config/db"));
var employee_route_1 = require("./modules/employee/routers/employee_route");
var healthcheck_route_1 = require("./modules/healthcheck/routers/healthcheck_route");
var swaggerOptions_1 = require("./utils/swaggerOptions");
var errorHandler_1 = require("./utils/errorHandler");
//defined port
var PORT = 3000;
var app = (0, express_1.default)();
// configure env variables
dotenv_1.default.config();
//connect database
(0, db_1.default)();
// enable cors
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// health check route
app.use("/", healthcheck_route_1.healthcheckRouter);
// employee route
app.use("/employee", employee_route_1.employeeRouter);
// error handler middleware
app.use(errorHandler_1.errorHandler);
//swagger documentation
var specs = swaggerJsDoc(swaggerOptions_1.options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs, { explorer: true }));
// app listener
app.listen(process.env.PORT || PORT, function () {
    return console.log("Backend server is running on port ".concat(PORT));
});
