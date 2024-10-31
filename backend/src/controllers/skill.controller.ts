import { Request, Response } from "express";
import Skill from "../models/skill.model";

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
