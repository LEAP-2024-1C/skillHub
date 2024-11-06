import { Request, Response } from "express";
import Employer from "../models/employer.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";
import { sendEmail } from "../utils/send-email";
import crypto from "crypto";

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
      const isCheck = bcrypt.compareSync(password, employer.password);
      if (!isCheck) {
        res
          .status(404)
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
    res.status(404).json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй." });
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
//  forget pass
export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const findUser = await Employer.findOne({ email: email });
    if (!findUser) {
      return res
        .status(400)
        .json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    }
    const rndOtp = Math.floor(Math.random() * 10_000)
      .toString()
      .padStart(4, "0");
    findUser.otp = rndOtp;
    await findUser.save();
    await sendEmail(email, rndOtp);
    res.status(200).json({ message: "OTP code sent to email success" });
  } catch (error) {}
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otpValue } = req.body;
  const findUser = await Employer.findOne({ email: email, otp: otpValue });
  if (!findUser) {
    return res
      .status(400)
      .json({ message: "Бүртгэлтэй хэрэглэгч эсвэл OTP код олдсонгүй" });
  }
  //sendEmail
  const resetToken = crypto.randomBytes(25).toString("hex");
  const hashedResetToken = crypto
    .createHash("she256")
    .update(resetToken)
    .digest("hex");
  findUser.passwordResetToken = hashedResetToken;
  findUser.passwordResetTokenExpire = new Date(Date.now() + 10 * 60 * 1000);
  await findUser.save();
  console.log("RESET TOKEN", resetToken);
  await sendEmail(
    email,
    `<a href="http://localhost:8000/forgetpass/newpass?resettoken=${resetToken}">Нууц үг сэргээх холбоос</a>`
  );
  res.status(200).json({ message: "Нууц үг сэргээх имэйл илгээлээ" });
};

export const verifyPassword = async (req: Request, res: Response) => {
  const { password, resetToken } = req.body;
  console.log("shalgah", password, resetToken);

  const hashedResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  console.log("hash", hashedResetToken);
  const findUser = await Employer.findOne({
    passwordResetToken: hashedResetToken,
    passwordResetTokenExpire: { $gt: Date.now() },
  });
  console.log("finduser", findUser);
  if (!findUser) {
    return (
      res
        .status(400)
        .json({ message: "Таны нууц үг сэргээх хугацаа дууссан байна:" }),
      console.log("Res", res)
    );
  }

  findUser.password = password;
  await findUser.save();
  console.log("user", findUser);
  res.status(200).json({ message: "Нууц үг  амжилттэй сэргээлээ" });
};

export const updateEmployer = async (req: Request, res: Response) => {
  try {
    const { id } = req.user;
    const updatedEmployer = await Employer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Хэрэглэгчийн мэдээлэл амжилттай шинэчлэгдлээ.",
      updatedEmployer,
    });
  } catch (error) {
    res.status(404).json({ message: "User not found", error: error });
  }
};

export const getAllEmployers = async (req: Request, res: Response) => {
  try {
    const allEmployers = await Employer.find({});
    res.status(200).json({ message: "Succeed", Employer: allEmployers });
    // console.log("employer", Employer);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getEmployers = async (req: Request, res: Response) => {
  try {
    const employerCount = await Employer.countDocuments();
    res.status(200).json({ message: "Succeed", employerCount });
    // console.log("employer", Employer);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
