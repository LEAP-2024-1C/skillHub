import { Router } from "express";
import {
  currentEmployer,
  getAllEmployers,
  getEmployers,
  loginEmployer,
  signupEmployer,
  updateEmployer,
} from "../controllers/employer-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.route("/current-employer").get(authentication, currentEmployer);
router.route("/get-all-employers").get(authentication, getAllEmployers);
router.route("/employers").get(getEmployers);
router.route("/signup").post(signupEmployer);
router.route("/login").post(loginEmployer);
router.route("/update-employer").put(authentication, updateEmployer);

export default router;
