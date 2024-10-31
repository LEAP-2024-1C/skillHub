import { Router } from "express";
import { createSkill, getAllSkill } from "../controllers/skill.controller";

const router = Router();

router.route("/skills").get(getAllSkill);
router.route("/create").post(createSkill);

export default router;
