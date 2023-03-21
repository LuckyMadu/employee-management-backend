import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

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

const cspDefaults = helmet.contentSecurityPolicy.getDefaultDirectives();
delete cspDefaults["upgrade-insecure-requests"];

app.use(
  helmet({
    contentSecurityPolicy: { directives: cspDefaults },
  })
);

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

const customeSwaggerStyles = {
  customCssUrl: [
    "https://raw.githubusercontent.com/deywersonp/ghibli-50-api/main/src/public/css/swagger-ui.css",
  ],
};

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, customeSwaggerStyles)
);

// app listener
app.listen(process.env.PORT || PORT, () =>
  console.log(`Backend server is running on port ${PORT}`)
);
