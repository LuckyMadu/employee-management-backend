import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import path from "path";

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

import connectDB from "./config/db";

import { employeeRouter } from "./modules/employee/routers/employee_route";
import { healthcheckRouter } from "./modules/healthcheck/routers/healthcheck_route";
import { options as swaggerDocument } from "./utils/swaggerOptions";
import { errorHandler } from "./utils/errorHandler";

//defined port
const PORT = 3000;
const app = express();

const ROOT_FOLDER = path.join(__dirname, "..");
const SRC_FOLDER = path.join(ROOT_FOLDER, "src");

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
const specs = swaggerJsDoc(swaggerDocument);

const options = {
  customCssUrl: "/public/swagger-ui.css",
  customSiteTitle: "The Words That I Know API - Swagger",
};

app.use("/public", express.static(path.join(SRC_FOLDER, "public")));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs, options));

// app listener
app.listen(process.env.PORT || PORT, () =>
  console.log(`Backend server is running on port ${PORT}`)
);
