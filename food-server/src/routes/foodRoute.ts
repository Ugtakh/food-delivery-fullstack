import { Router } from "express";
import {
  createFood,
  getFood,
  getAllFood,
  updateFood,
  deleteFood,
} from "../controller/foodController";

const router = Router();

router.route("/").get(getAllFood).post(createFood);

router.route("/:foodId").get(getFood).put(updateFood).delete(deleteFood);

export default router;
