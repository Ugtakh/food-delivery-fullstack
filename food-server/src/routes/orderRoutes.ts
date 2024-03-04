import { Router } from "express";
import { createOrder, updateOrder } from "../controller/orderController";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").post(authenticate, createOrder);

router.route("/:orderId").put(authenticate, updateOrder);

export default router;
