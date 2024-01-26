import { Request, Response } from "express";
import User from "../model/user";

export const signup = async (req: Request, res: Response) => {
  // User Model
  try {
    const newUser = req.body;
    const user = await User.create(newUser);
    res.status(201).json({ message: "Шинэ хэрэглэгч амжилттай бүртгэгдлээ" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Шинэ хэрэглэгч бүртгэх үед алдаа гарлаа.", error });
  }
};

export const login = async (req: Request, res: Response) => {
  // User Model
  try {
    const { email, password } = req.body;
    console.log("EMAIL", email);
    const user = await User.findOne({ email });

    console.log("User", user);

    res.status(201).json({ message: "Хэрэглэгч амжилттай нэвтэрлээ", user });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Шинэ хэрэглэгч бүртгэх үед алдаа гарлаа.", error });
  }
};
