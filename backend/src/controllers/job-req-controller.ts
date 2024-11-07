import { Request, Response } from "express";
import JobRequest from "../models/jobRequest.model";

export const jobRequest = async (req: Request, res: Response) => {
  const {
    employerId,
    title,
    jobDetail,
    salaryType,
    startingPrice,
    selectedSkill,
    status,
    location,
  } = req.body;
  try {
    const createJobAd = await JobRequest.create({
      employerId: employerId,
      skill: selectedSkill,
      title: title,
      jobDetail: jobDetail,
      salaryType: salaryType,
      startingPrice: startingPrice,
      status: status,
      location: location,
    });
    res
      .status(201)
      .json({ message: "Job ad created", jobrequest: createJobAd });

    // const jobrequest = await employrid.save();
    // res.status(200).json({
    //   message: "updated cart",
    // });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong", error: error });
    console.log("Failed", error);
  }
};

export const getJobAds = async (req: Request, res: Response) => {
  try {
    const allAds = await JobRequest.find({})
      .populate("employerId")
      .populate("skill")
      .sort({ createdAt: -1 });
    res.status(200).json({ message: "Succeed", allAds: allAds });
  } catch (error) {
    res.status(400).json({ message: "Failed to get job ads", error });
  }
};

export const getJobAdById = async (req: Request, res: Response) => {
  try {
    const { jobAdId } = req.params;
    const jobAd = await JobRequest.findById(jobAdId)
      .populate("employerId")
      .populate("skill");
    res.status(200).json({ message: "Succeed", jobAd });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getJobAdsCount = async (req: Request, res: Response) => {
  try {
    const JobAdCount = await JobRequest.countDocuments();
    res.status(200).json({ message: "Succeed", JobAdCount });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
