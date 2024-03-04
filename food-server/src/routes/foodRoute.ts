import { Router } from "express";
import {
  createFood,
  getFood,
  getAllFoods,
  updateFood,
  deleteFood,
} from "../controller/foodController";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").get(getAllFoods).post(authenticate, createFood);

router
  .route("/:foodId")
  .get(getFood)
  .put(authenticate, updateFood)
  .delete(authenticate, deleteFood);

export default router;
