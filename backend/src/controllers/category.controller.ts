import { Request, Response } from "express";
import Category from "../models/category.model";

export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const allCategories = await Category.find({});
    res.status(200).json({ message: "Succeed", category: allCategories });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const { catId } = req.params;
    const category = await Category.findById(catId);
    res.status(200).json({ message: "Succeed", category });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Хоосон утга байж болохгүй" });
    }
    const newCategory = await Category.create({
      name,
    });
    res.status(201).json({ message: "Succeed", category: newCategory });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteCategoryById = async (req: Request, res: Response) => {
  try {
    const { catId } = req.params;
    const category = await Category.findByIdAndDelete(catId);
    res.status(200).json({ message: "Succeed delete", category });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
