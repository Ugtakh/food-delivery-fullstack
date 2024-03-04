import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../model/user";

import MyError from "../utils/myError";

export const verifyOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, otp } = req.body;

    const findUser = await User.findOne({ email });
    console.log("USER", findUser);
    if (!findUser) {
      // return res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
      throw new MyError("Хэрэглэгч олдсонгүй", 400);
    }

    const validOtp = await bcrypt.compare(otp, findUser?.otp);

    if (!validOtp) {
      // return res.status(400).json({ message: "Код буруу байна" });
      throw new MyError("Код буруу байна", 400);
    }
    console.log("valid", validOtp);
    res.status(200).json({ message: "OTP is validated" });
  } catch (error) {
    next(error);
  }
};
