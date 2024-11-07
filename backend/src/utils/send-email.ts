import nodemailer from "nodemailer";
import { generateHtmlTemplate } from "./generateHtmlTemplate";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
export const sendEmail = async (email: string, otp: string) => {
  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM_USER, // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: generateHtmlTemplate(otp), // html body
  });
};
