import { Router } from "express";
import {
  loginFreelancer,
  signupFreelancer,
  currentFreelancer,
  getAllFreelancers,
  updateFreelancer,
  getFreelancerById,
} from "../controllers/freelancer-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.route("/login").post(loginFreelancer);
router.route("/signup").post(signupFreelancer);
router.route("/get-current-freelancer").get(authentication, currentFreelancer);
router.route("/get-all-freelancers").get(authentication, getAllFreelancers);
router.route("/update-freelancer").put(authentication, updateFreelancer);
router.route("/:freelancerId").get(authentication, getFreelancerById);
export default router;
