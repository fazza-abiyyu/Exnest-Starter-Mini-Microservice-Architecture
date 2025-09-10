import express from "express";
import healthRouter from "~/modules/health/health.route";
import { errorMiddleware } from "~/middlewares/error.middleware";

const app = express();

// Middleware
app.use(express.json());

// Routes - langsung di root karena ini microservice terpisah
app.use("/", healthRouter);

// Error handling
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`🏥 Health microservice running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/`);
});
