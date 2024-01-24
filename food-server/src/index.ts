import express, { Application, Request, Response } from "express";
import color from "colors";
import mongoose from "mongoose";
import User from "./model/user";
import { connectDB } from "./config/db";

const MONGO_URI = process.env.MONGO_URI as string;

const app: Application = express();

connectDB(MONGO_URI);

app.use("/auth");

app.listen(8080, () => console.log(color.rainbow("Server is running")));
