import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";
import { sendEmail } from "../utils/sendEmail";
import User from "../model/user";
import { generateHash, otp } from "../utils/functions";
import MyError from "../utils/myError";

export const sendEmailToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("SEND_EMAIL");
  try {
    const { email } = req.body;

    const findUser = await User.findOne({ email });

    if (!findUser) {
      throw new MyError(`${email}-тэй хэрэглэгч олдсонгүй`, 400);
    }
    const otpCode = otp(4);
    findUser.otp = await generateHash(otpCode);

    await findUser.save();
    await sendEmail({ email, otp: otpCode });

    res.status(201).json({ message: "Email амжилттай илгээгдлээ." });
  } catch (error) {
    next(error);
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    const findUser = await User.findOne({ email });
    console.log("USER", findUser);
    if (!findUser) {
      return res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
    }

    const validOtp = await bcrypt.compare(otp, findUser?.otp);

    if (!validOtp) {
      return res.status(400).json({ message: "Код буруу байна" });
    }
    console.log("valid", validOtp);
    res.status(200).json({ message: "OTP is validated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server is internal error", error });
  }
};

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Verify");
    const { token } = req.query;

    const { email } = jwt.verify(
      token as string,
      process.env.JWT_PRIVATE_KEY as string
    ) as { email: string };

    const findUser = await User.findOne({ email: email });

    if (!findUser) {
      res.status(500).send("Not verified");
    } else {
    }
    findUser?.isVerified && true;
    await findUser?.save();

    res.status(200).send(`<h1 style="color: green">Valid Link </h1>`);
  } catch (error) {
    next(error);
  }
};

export const resetPassword = (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    res.status(500).json({ message: "Server is internal error", error });
  }
};
