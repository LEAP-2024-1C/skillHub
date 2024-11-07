import { Router } from "express";
import {
  jobRequest,
  getJobAds,
  getJobAdById,
} from "../controllers/job-req-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.route("/job-ad").post(jobRequest);
router.route("/get-ads").get(getJobAds);
router.route("/:jobAdId").get(authentication, getJobAdById);

export default router;
