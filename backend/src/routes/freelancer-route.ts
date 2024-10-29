import { Router } from "express";
import { loginFreelancer, signupFreelancer } from "../controllers/freelancer-controller";


const router = Router();

router.route("/login").post(loginFreelancer);
router.route("/signup").post(signupFreelancer);
export default router;

