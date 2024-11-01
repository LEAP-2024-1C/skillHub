import { Request, Response } from "express";
import JobRequest from "../models/jobRequest.model";


export const jobRequest = async (req: Request, res: Response) => {
    try {
        const { eid, sid, title, jobDetail, sPrice, fid } = req.body;
        if (!eid || !sid || !title || jobDetail || sPrice || fid) {
            return res.status(400).json({ message: "Add job ad failed." });
        }
        const createJobAd = await JobRequest.create({
            eid, sid, title, jobDetail, sPrice, fid
        });
        res.status(201).json({ message: "Job ad created", jobrequest: createJobAd });
    } catch (error) {
        res.status(404).json({ message: "Something went wrong", error: error });
        console.log("Failed", error);
    }
   
}