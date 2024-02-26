import { NextFunction, Request, Response } from "express";
import Basket from "../model/basket";
import { IReq } from "../utils/interface";

export const addBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  console.log("User", req.user);
  console.log("Body", req.body);

  try {
    const basket = await Basket.create({
      user: req.user._id,
      foods: [
        {
          food: req.body.foodId,
          qty: req.body.quantity,
        },
      ],
      totalPrice: 10000,
    });
    return res.send("Hello-2");
  } catch (error) {
    next(error);
  }
};
