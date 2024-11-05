import { Router } from "express";
import {
  createSkill,
  getAllSkill,
  getSkills,
} from "../controllers/skill.controller";

const router = Router();

router.route("/skills").get(getAllSkill);
router.route("/stat").get(getSkills);
router.route("/create").post(createSkill);

export default router;
