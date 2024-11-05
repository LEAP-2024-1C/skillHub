import { Router } from "express";
import {
  loginFreelancer,
  signupFreelancer,
  currentFreelancer,
  getAllFreelancers,
  updateFreelancer,
  getFreelancers,
} from "../controllers/freelancer-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.route("/login").post(loginFreelancer);
router.route("/signup").post(signupFreelancer);
router.route("/get-current-freelancer").get(authentication, currentFreelancer);
router.route("/get-all-freelancers").get(authentication, getAllFreelancers);
router.route("/freelancers").get(getFreelancers);
router.route("/update-freelancer").put(authentication, updateFreelancer);
export default router;
