import { Router } from "express";
import { loginFreelancer, signupFreelancer, currentFreelancer } from "../controllers/freelancer-controller";
import { authentication } from "../middlewares/authentication";


const router = Router();

router.route("/login").post(loginFreelancer);
router.route("/signup").post(signupFreelancer);
router.route("/get-current-freelancer").get(authentication, currentFreelancer);
export default router;

