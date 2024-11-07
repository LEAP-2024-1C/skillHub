import { Router } from "express";
import {
  currentEmployer,
  forgetPassword,
  getAllEmployers,
  getEmployers,
  loginEmployer,
  signupEmployer,
  updateEmployer,
  verifyOtp,
  verifyPassword,
} from "../controllers/employer-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.route("/current-employer").get(authentication, currentEmployer);
router.route("/get-all-employers").get(authentication, getAllEmployers);
router.route("/employers").get(getEmployers);
router.route("/signup").post(signupEmployer);
router.route("/login").post(loginEmployer);
router.route("/update-employer").put(authentication, updateEmployer);
router.route("/forget-password").post(forgetPassword);
router.route("/verify-otp").post(verifyOtp);
router.route("/verify-password").post(verifyPassword);

export default router;
