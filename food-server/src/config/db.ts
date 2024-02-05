import mongoose from "mongoose";
import color from "colors";

export const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log("Database is connected".green);
  } catch (error) {
    console.log(color.bgRed("Database is failed to connect."));
  }
};
