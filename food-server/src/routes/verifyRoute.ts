import { Router } from "express";
import { verifyOtp } from "../controller/verifyController";

const router = Router();

router.route("/otp").post(verifyOtp);

export default router;
