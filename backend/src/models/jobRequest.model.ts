import { model, Schema } from "mongoose";

interface IJobRequest {
  _id: Schema.Types.ObjectId;
  employerId: Schema.Types.ObjectId;
  skill: Schema.Types.ObjectId;
  title: string;
  jobDetail: string;
  salaryType: string;
  startingPrice: string;
  freelancers: [{ freelancerId: Schema.Types.ObjectId }];
  status: string;
  location: string;
}

const jobRequestSchema = new Schema<IJobRequest>(
  {
    employerId: {
      type: Schema.Types.ObjectId,
      ref: "Employer",
      required: true,
    },
    skill: {
      type: Schema.Types.ObjectId,
      ref: "Skill",
    },
    title: {
      type: String,
      required: true,
    },
    jobDetail: {
      type: String,
      required: true,
    },
    salaryType: {
      type: String,
      enum: ["hour", "time"],
      default: "hour",
    },
    startingPrice: {
      type: String,
      required: true,
    },
    freelancers: [
      {
        freelancerId: {
          type: Schema.Types.ObjectId,
          ref: "Freelancer",
        },
      },
    ],
    status: {
      type: String,
      enum: ["active", "passive"],
      default: "active",
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const JobRequest = model<IJobRequest>("JobRequest", jobRequestSchema);

export default JobRequest;
