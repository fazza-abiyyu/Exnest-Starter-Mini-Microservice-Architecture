import express from "express";
import router from "./endpoints/health.endpoint";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());
app.use("/api", router);

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});