import { Router } from "express";
import {
  createCategory,
  getAllCategory,
} from "../controllers/category.controller";

const router = Router();

router.route("/categories").get(getAllCategory);
router.route("/create").post(createCategory);

export default router;