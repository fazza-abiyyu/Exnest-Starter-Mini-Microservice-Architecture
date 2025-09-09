import { Router } from "express";
import { HealthController } from "../controllers/health.controller";

const router = Router();
const controller = new HealthController();

router.get("/", controller.getStatus);

export default router;
