export class HealthService {
  async check() {
    return { status: "ok", timestamp: new Date().toISOString() };
  }
}
