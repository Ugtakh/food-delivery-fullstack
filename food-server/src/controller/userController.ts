import { NextFunction, Request, Response } from "express";

import User from "../model/user";
import cloudinary from "../utils/cloudinary";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(201).json({ message: "Бүх хэрэглэгч олдлоо", users });
  } catch (error) {
    res.status(400).json({
      message: "Бүх хэрэглэгчийн мэдээллийг авах үед алдаа гарлаа.",
      error,
    });
  }
};

export const uploadPhoto = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    next(error);
  }
};
