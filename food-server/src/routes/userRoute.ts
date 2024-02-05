import { Router } from "express";
import { getUsers, uploadPhoto } from "../controller/userController";
import multer from "multer";

const router = Router();
const upload = multer({ dest: "./uploads" });

router.route("/").get(getUsers);
router.route("/photo/upload").post(upload.single("image"), uploadPhoto);

export default router;
