"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthcheckRouter = void 0;
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: HealthCheck
 *   description: Health Check Monitoring API
 * /:
 *   get:
 *     summary: Health Check Monitoring API
 *     tags: [Healthcheck]
 *     responses:
 *       200:
 *         description: Healthcheck OK!
 *       400:
 *         description: Healthcheck FAILED!
 *       500:
 *         description: Some server error!
 *
 */
router.get("/", function (req, res) { return res.status(200).json("API is working!!!"); });
var healthcheckRouter = router;
exports.healthcheckRouter = healthcheckRouter;
