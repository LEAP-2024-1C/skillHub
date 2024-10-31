import { Router } from "express";
import { jobRequest } from "../controllers/job-req-controller";

const router = Router();

router.route("/job-ad").post(jobRequest);

export default router;