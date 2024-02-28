import express, { Application } from "express";
import color from "colors";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import { connectDB } from "./config/db";
import authRoute from "./routes/authRoute";
import userRoute from "./routes/userRoute";
import FoodRoute from "./routes/foodRoute";
import verifyRoute from "./routes/verifyRoute";
import uploadRoute from "./routes/uploadRoute";
import categoryRoute from "./routes/categoryRoute";
import basketRoute from "./routes/basketRoutes";
import orderRoute from "./routes/orderRoutes";

import errorHandler from "./middleware/errorHandler";

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

const app: Application = express();

connectDB(MONGO_URI);

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log("REQ", req.originalUrl);
  next();
});
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/foods", FoodRoute);
app.use("/verify", verifyRoute);
app.use("/categories", categoryRoute);
app.use("/upload", uploadRoute);
app.use("/basket", basketRoute);
app.use("/order", orderRoute);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running ${PORT}`.yellow));
