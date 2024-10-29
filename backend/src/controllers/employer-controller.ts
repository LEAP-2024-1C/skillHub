import { Request, Response } from "express";
import Employer from "../models/employer.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

export const signupEmployer = async (req: Request, res: Response) => {
  try {
    const { fullnameOrCompany, type, email, password } = req.body;

    if (!fullnameOrCompany || !type || !email || !password) {
      return res.status(400).json({ message: "Хоосон утга байж болохгүй." });
    }

    const createdEmployer = await Employer.create({
      fullnameOrCompany,
      type,
      email,
      password,
    });
    res.status(201).json({
      message: "create employer is successfull",
      employer: createdEmployer,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

export const loginEmployer = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const employer = await Employer.findOne({ email: email });
    if (!employer) {
      res.status(404).json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй." });
    } else {
      const isCheck = bcrypt.compareSync(
        password,
        employer.password.toString()
      );
      if (!isCheck) {
        res
          .status(400)
          .json({ message: "Хэрэглэгчийн и-мэйл эсвэл нууц үг буруу байна." });
      } else {
        const token = generateToken({ id: employer._id });
        const { fullnameOrCompany, image, email } = employer;
        res.status(200).json({
          message: "Хэрэглэгч амжилттай нэвтэрлээ",
          token,
          employer: { fullnameOrCompany, image, email },
        });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Хэрэглэгч нэвтрэхэд алдаа гарлаа" });
  }
};

export const currentEmployer = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    const findEmployer = await Employer.findById(id);
    res.status(200).json({ employer: findEmployer, message: "Success" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Хэрэглэгчийн мэдээллийг авахад алдаа гарлаа." });
  }
};
