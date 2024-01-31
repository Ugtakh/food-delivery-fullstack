import { Router } from "express";
import {
  sendEmailToUser,
  verifyOtp,
  resetPassword,
  verifyUser,
} from "../controller/verifyController";

const router = Router();

router.route("/user").get(verifyUser);
router.route("/send-email").post(sendEmailToUser);
router.route("/otp").post(verifyOtp);
router.route("/reset-password").post(resetPassword);

export default router;
