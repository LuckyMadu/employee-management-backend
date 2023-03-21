import express from 'express';
const router = express.Router();
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
router.get("/", (req,res) => res.json("API is working!!!"));

const healthcheckRouter = router
export {healthcheckRouter}