import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";
import Freelancer from "../models/freelancer.model";

export const loginFreelancer = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const freelancer = await Freelancer.findOne({ email: email });
  if (!freelancer) {
    res.status(404).json({ message: "User not found" });
  } else {
    const checkPass = bcrypt.compareSync(password, freelancer.password);
    if (!checkPass) {
      res.status(402).json({ message: "Your password or email is incorrect." });
    } else {
      const token = generateToken({ id: freelancer._id });
      const { firstname, lastname, email } = freelancer;
      res.status(200).json({
        message: "Successfull",
        token,
        freelancer: { firstname, lastname, email },
      });
    }
  }
};

export const signupFreelancer = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: "signup failed" });
    }

    const createdFreelancer = await Freelancer.create({
      firstname,
      lastname,
      email,
      password,
      number: "",
    });
    res
      .status(201)
      .json({ message: "Signup Freelancer", freelancer: createdFreelancer });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong", error: error });
    console.log("Failed", error);
  }
};

export const currentFreelancer = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    const freelancer = await Freelancer.findById(id).populate({
      path: "skills.skill",
      model: "Skill",
      select: "name category",
    });
    res.status(200).json({ freelancer: freelancer, message: "success" });
  } catch (error) {
    res.status(404).json({ message: "User not found", error: error });
  }
};

export const getAllFreelancers = async (req: Request, res: Response) => {
  try {
    const allFreelancers = await Freelancer.find({}).populate({
      path: "skills.skill",
      model: "Skill",
      select: "name category",
    });
    res.status(200).json({ message: "Succeed", freelancer: allFreelancers });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
export const getFreelancers = async (req: Request, res: Response) => {
  try {
    const FreelancersCount = await Freelancer.countDocuments();
    res.status(200).json({ message: "Succeed", FreelancersCount });
    // console.log("employer", Employer);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const updateFreelancer = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    const updatedFreelancer = await Freelancer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Ажил горилогчийн мэдээлэл амжилттай шинэчлэгдлээ.",
      updatedFreelancer,
    });
  } catch (error) {
    res.status(404).json({ message: "User not found", error: error });
  }
};

export const getFreelancerById = async (req: Request, res: Response) => {
  try {
    const { freelancerId } = req.params;
    const freelancer = await Freelancer.findById(freelancerId);
    res.status(200).json({ message: "Succeed", freelancer });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
