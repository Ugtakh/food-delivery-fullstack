import { NextFunction, Request, Response } from "express";
import Category from "../model/category";
import MyError from "../utils/myError";

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCategory = req.body;
    await Category.create(newCategory);

    res.status(201).json({ message: "Категори амжилттай үүслээ." });
  } catch (error) {
    next(error);
  }
};

export const getCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);

    if (!category) {
      throw new MyError(`${categoryId}-тэй категори олдсонгүй.`, 400);
    }

    res.status(200).json({
      message: `${categoryId}-тэй категори олдлоо`,
      category,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      message: `Бүх категори олдлоо`,
      categories,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const updateCategory = req.body;

    const category = await Category.findByIdAndUpdate(
      categoryId,
      updateCategory
    );

    if (!category) {
      throw new MyError(`${categoryId}-тэй категори олдсонгүй.`, 400);
    }

    res.status(200).json({
      message: `${categoryId}-тэй категори шинэчлэгдлээ.`,
      category,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findByIdAndDelete(categoryId);

    if (!category) {
      throw new MyError(`${categoryId}-тэй категори олдсонгүй.`, 400);
    }

    res.status(200).json({
      message: `${categoryId}-тэй категори устгалаа.`,
      category,
    });
  } catch (error) {
    next(error);
  }
};
