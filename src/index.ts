import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

import connectDB from "./config/db";

import { employeeRouter } from "./modules/employee/routers/employee_route";
import { healthcheckRouter } from "./modules/healthcheck/routers/healthcheck_route";
import { options } from "./utils/swaggerOptions";
import { errorHandler } from "./utils/errorHandler";

//defined port
const PORT = 3000;
const app = express();

// configure env variables
dotenv.config();

//connect database
connectDB();

// enable cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// health check route
app.use("/", healthcheckRouter);
// employee route
app.use("/employee", employeeRouter);

// error handler middleware
app.use(errorHandler);

//swagger documentation
const specs = swaggerJsDoc(options);
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, { explorer: true })
);

// app listener
app.listen(process.env.PORT || PORT, () =>
  console.log(`Backend server is running on port ${PORT}`)
);
