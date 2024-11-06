import { Router } from "express";
import {
  createCategory,
  getAllCategory,
  getCategoryById,
} from "../controllers/category.controller";

const router = Router();

router.route("/categories").get(getAllCategory);
router.route("/categories/:catId").get(getCategoryById).put().delete();

router.route("/create").post(createCategory);

export default router;
