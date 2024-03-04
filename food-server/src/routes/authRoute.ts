import { Router } from "express";
import {
  signup,
  login,
  sendEmailToUser,
  verifyUser,
  resetPassword,
} from "../controller/authController";

const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/user").get(verifyUser);
router.route("/send-email").post(sendEmailToUser);
router.route("/reset-password").post(resetPassword);

export default router;
