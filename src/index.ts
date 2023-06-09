import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

import connectDB from "./config/db";

import { employeeRouter } from "@/modules/employee/routers/employee_route";
import { healthcheckRouter } from "@/modules/healthcheck/routers/healthcheck_route";
import { options as swaggerDocument } from "@/utils/swaggerOptions";
import { errorHandler } from "@/utils/errorHandler";
import { setLogger } from "@/utils/logger";

//defined port
const PORT = 3000;
const app = express();

const ROOT_FOLDER = path.join(__dirname, "..");
const SRC_FOLDER = path.join(ROOT_FOLDER, "src");

// configure env variables
dotenv.config();

//connect database
connectDB();

// enable cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// health check route
app.use("/", healthcheckRouter);
// employee route
app.use("/employee", employeeRouter);

// error handler middleware
app.use(errorHandler);

//swagger documentation
const specs = swaggerJsDoc(swaggerDocument);

const options = {
  explorer: true,
  customCssUrl: "/public/swagger-ui.css",
  customSiteTitle: "Employee Management API",
};

app.use("/public", express.static(path.join(SRC_FOLDER, "public")));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs, options));

// app listener
app.listen(process.env.PORT || PORT, () => {
  // prod testing
  setLogger("info", `Backend server is running on port ${PORT}`);
  console.log(`Backend server is running on port ${PORT}`);
});

module.exports = app;
