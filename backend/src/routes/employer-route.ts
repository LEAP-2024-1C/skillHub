import { Router } from "express";
import {
  currentEmployer,
  getAllEmployers,
  loginEmployer,
  signupEmployer,
} from "../controllers/employer-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.route("/current-employer").get(authentication, currentEmployer);
router.route("/get-all-employer").get(getAllEmployers);
router.route("/signup").post(signupEmployer);
router.route("/login").post(loginEmployer);

export default router;
