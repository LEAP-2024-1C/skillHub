import { Request, Response } from "express";
import JobRequest from "../models/jobRequest.model";


export const jobRequest = async (req: Request, res: Response) => {
    const { employerId, title, jobDetail, startingPrice, name } = req.body;
    try {

        const createJobAd = await JobRequest.create({
            employerId: employerId,
            skills:name ,
            title: title,
            jobDetail: jobDetail,
            startingPrice: startingPrice
        });
        res.status(201).json({ message: "Job ad created", jobrequest: createJobAd });
         
        // const jobrequest = await employrid.save();
        res.status(200).json({
            message: "updated cart",
          });
    } catch (error) {
        res.status(404).json({ message: "Something went wrong", error: error });
        console.log("Failed", error);
    }
   
}

export const getJobAds = async (req: Request, res: Response) => {
    try {
        const allAds = await JobRequest.find({});
        res.status(200).json({ message: "Succeed", allAds: allAds });
    } catch (error) {
        res.status(400).json({message:"Failed to get job ads", error});
    }
}