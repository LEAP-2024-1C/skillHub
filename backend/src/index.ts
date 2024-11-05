import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import freelancerRoute from "./routes/freelancer-route";
import employerRoute from "./routes/employer-route";
import categoryRoute from "./routes/category-route";
import skillRoute from "./routes/skill-route";
import jobreqRoute from "./routes/job-ad-route";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/employer", employerRoute);
app.use("/api/v1/freelancer", freelancerRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/skill", skillRoute);
app.use("/api/v1/jobreq", jobreqRoute);

app.get("/", async (req: Request, res: Response) => {
  res.send("Welcome SkillHub API Server");
});
connectDB(MONGO_URI);

app.listen(PORT, () => {
  console.log(`Server localhost:${PORT} running!`);
});
