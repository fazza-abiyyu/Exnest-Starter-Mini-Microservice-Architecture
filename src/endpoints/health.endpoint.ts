import { Router } from "express";
import healthRouter from "../modules/health/health.route";

const health = Router();

health.use("/health", healthRouter);

export default health;
