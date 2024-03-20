import express, { Application, Request, Response } from "express";
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

app.use("api/v1/auth", authRoute);
app.use("api/v1/users", userRoute);
app.use("api/v1/foods", FoodRoute);
app.use("api/v1/verify", verifyRoute);
app.use("api/v1/categories", categoryRoute);
app.use("api/v1/upload", uploadRoute);
app.use("api/v1/basket", basketRoute);
app.use("api/v1/order", orderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Food Delivery</h1>");
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running ${PORT}`.yellow));
