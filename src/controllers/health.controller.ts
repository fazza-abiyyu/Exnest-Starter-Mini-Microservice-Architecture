import { Request, Response, NextFunction } from "express";
import { HealthService } from "../services/health.service";
import { okResponse } from "../utils/response";

export class HealthController {
  private readonly service: HealthService;

  constructor() {
    this.service = new HealthService();
    this.getStatus = this.getStatus.bind(this);
  }

  async getStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.service.check();
      return okResponse(res, data);
    } catch (error) {
      return next(error);
    }
  }
}
