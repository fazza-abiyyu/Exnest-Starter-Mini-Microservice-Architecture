import express from "express";
import { errorMiddleware } from "../../middlewares/error.middleware";

const app = express();

// Middleware
app.use(express.json());

// Routes - ganti dengan router module Anda
// app.use("/", yourModuleRouter);

// Basic health check untuk microservice
app.get("/", (req, res) => {
  res.json({
    success: true,
    data: {
      service: "template-microservice",
      status: "running",
      timestamp: new Date().toISOString()
    }
  });
});

// Error handling
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`🚀 Template microservice running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/`);
});
