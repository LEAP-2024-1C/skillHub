import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";
import Freelancer from "../models/freelancer.model";

export const loginFreelancer = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const freelancer = await Freelancer.findOne({ email: email });
    if (!freelancer) {
        res.status(404).json({ message: "User not found" })
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
        // const hashedPassword = bcrypt.hashSync(password, 10);
        const createdFreelancer = await Freelancer.create({
            firstname,
            lastname,
            email,
            password,
            number: "",
        });
        res.status(201).json({ message: "Signup Freelancer", freelancer: createdFreelancer });
    } catch (error) {
        res.status(404).json({ message: "Something went wrong", error: error });
        console.log("Failed", error);
    }
  
};

export const currentFreelancer = async (req: Request, res: Response) => {
    try {
        const { id } = req.user;
        const freelancer = await Freelancer.findById(id);
        res.status(200).json({ freelancer: freelancer, message: "success" });
    } catch (error) {
        res.status(404).json({ message: "User not found", error: error });
    }
}