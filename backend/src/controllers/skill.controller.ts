import { Request, Response } from "express";
import Skill, { ISkill } from "../models/skill.model";
import Category, { ICategory } from "../models/category.model";

export const getAllSkill = async (req: Request, res: Response) => {
  try {
    const allSkills = await Skill.find({}).populate("category");
    res.status(200).json({ message: "Succeed", Skill: allSkills });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const createSkill = async (req: Request, res: Response) => {
  try {
    const { name, category } = req.body;

    if (!name || !category) {
      return res.status(400).json({ message: "Хоосон утга байж болохгүй" });
    }
    const newCategory = await Skill.create({
      name,
      category,
    });
    res.status(201).json({ message: "Succeed", Skill: newCategory });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getSkills = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find().lean();
    const allSkills = await Skill.find({})
      .populate<ISkill & { category: ICategory }>("category")
      .lean();

    const stat = categories
      .map((cat) => ({
        catName: cat.name,
        skillCount: allSkills.filter((a) => a.category.name === cat.name)
          .length,
      }))
      .sort((a, b) => b.skillCount - a.skillCount);
    console.log(stat);
    res.status(200).json({ message: "Succeed", stat });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
