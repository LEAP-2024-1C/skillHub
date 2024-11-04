import { Request, Response } from "express";
import JobRequest from "../models/jobRequest.model";


export const jobRequest = async (req: Request, res: Response) => {
    const { eid, sid, title, jobDetail, sPrice, fid } = req.body;
    try {
        const employrid = await JobRequest.findOne({ employerId: eid });
        if (!employrid) {
            const createJobAd = await JobRequest.create({
                employerId: eid,
                skillId: sid,
                title: title,
                jobDetail: jobDetail,
                startingPrice: sPrice,
                freelancers: { freelancerId: fid }
            })
            return res.status(201).json({ message: "Job ad created", jobrequest: createJobAd });
        };


        if (!employrid) {
            res.status(404).json({ message: "user not found"});
       }
        const jobrequest = await employrid.save();
        res.status(200).json({
            message: "updated cart",
            jobrequest,
          });
    } catch (error) {
        res.status(404).json({ message: "Something went wrong", error: error });
        console.log("Failed", error);
    }
   
}