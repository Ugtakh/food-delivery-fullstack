import { NextFunction, Response } from "express";
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";

export const createOrder = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const newOrder = {
      // ...
    };
  } catch (error) {
    next(error);
  }
};
