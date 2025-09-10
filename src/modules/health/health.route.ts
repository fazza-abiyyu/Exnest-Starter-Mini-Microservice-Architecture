import { Router } from "express";
import { HealthController } from "~/modules/health/health.controller";

const router = Router();
const controller = new HealthController();

router.get("/", controller.getStatus);

export default router;
