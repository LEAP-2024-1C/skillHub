import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || "";

app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  res.send("Welcome SkillHub API Server");
});

app.listen(PORT, () => {
  console.log(`Server localhost:${PORT} running!`);
});
