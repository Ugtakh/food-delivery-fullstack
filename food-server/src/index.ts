import express, { Application, Request, Response } from "express";
import color from "colors";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db";
import authRout from "./routes/authRoute";

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

const app: Application = express();

connectDB(MONGO_URI);

app.use(express.json());
app.use("/auth", authRout);

app.listen(PORT, () => console.log(color.rainbow("Server is running " + PORT)));
