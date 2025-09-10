import express from "express";
import health from "~/endpoints/health.endpoint";
import { errorMiddleware } from "~/middlewares/error.middleware";

const app = express();

app.use(express.json());
app.use("/api", health);

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});