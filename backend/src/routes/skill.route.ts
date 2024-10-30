import { Router } from "express";
import {
  createSkill,
  getAllSkill,
} from "../controllers/skill.category";

const router = Router();

router.route("/categories").get(getAllSkill);
router.route("/create").post(createSkill);

export default router;