import { Router } from "express";
import { jobRequest, getJobAds } from "../controllers/job-req-controller";

const router = Router();

router.route("/job-ad").post(jobRequest);
router.route("/get-ads").get(getJobAds);

export default router;