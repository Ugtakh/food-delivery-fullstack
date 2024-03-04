import { NextFunction, Request, Response } from "express";
import Food from "../model/food";
import MyError from "../utils/myError";

export const createFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newFood = req.body;
    await Food.create(newFood);

    res.status(201).json({ message: "Хоол амжилттай үүслээ." });
  } catch (error) {
    next(error);
  }
};

export const getFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const food = await Food.findById(foodId);

    if (!food) {
      throw new MyError(`${foodId}-тэй хоол олдсонгүй.`, 400);
    }

    res.status(200).json({
      message: `${foodId}-тэй хоол олдлоо`,
      food,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllFoods = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const foods = await Food.find().populate("category", "_id name").lean();

    res.status(200).json({
      message: `Бүх хоол.`,
      foods,
    });
  } catch (error) {
    next(error);
  }
};

export const updateFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const updateCategory = req.body;

    const food = await Food.findByIdAndUpdate(foodId, updateCategory).lean();

    if (!food) {
      throw new MyError(`${foodId}-тэй хоол олдсонгүй.`, 400);
    }

    res.status(200).json({
      message: `${foodId}-тэй хоол шинэчлэгдлээ.`,
      food,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const food = await Food.findByIdAndDelete(foodId);

    if (!food) {
      throw new MyError(`${foodId}-тэй хоол олдсонгүй.`, 400);
    }

    res.status(200).json({
      message: `${foodId}-тэй хоол устгалаа.`,
      food,
    });
  } catch (error) {
    next(error);
  }
};
