import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import { connectDB } from "./config/db";

const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  res.send("Welcome SkillHub API Server");
});
connectDB(MONGO_URI);

app.listen(PORT, () => {
  console.log(`Server localhost:${PORT} running!`);
});
