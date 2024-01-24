import { Request, Response } from "express";
import User from "../model/user";

export const signup = async (req: Request, res: Response) => {
  const newUser = {
    name: "user",
    email: "user@gmail.com",
    password: "user123",
  };

  // User Model
  const user = await User.create(newUser);

  res.json({ message: "Шинэ хэрэглэгч үүслээ.", user });
};
