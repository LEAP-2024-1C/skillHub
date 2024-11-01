import { Router } from "express";
import {
  loginFreelancer,
  signupFreelancer,
  currentFreelancer,
  getAllFreelancers,
} from "../controllers/freelancer-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.route("/login").post(loginFreelancer);
router.route("/signup").post(signupFreelancer);
router.route("/get-current-freelancer").get(authentication, currentFreelancer);
router.route("/get-all-freelancers").get(authentication, getAllFreelancers);
export default router;
