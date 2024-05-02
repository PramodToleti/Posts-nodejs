import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { connect } from "./config/admin.js";
import router from "./routes/posts.routes.js";
import ErrorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/posts", router);

app.use(ErrorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  await connect();
});
