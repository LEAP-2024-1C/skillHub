import { model, Schema } from "mongoose";

interface IJobRequest {
  _id: Schema.Types.ObjectId;
  employerId: Schema.Types.ObjectId;
  skillId: Schema.Types.ObjectId;
  title: string;
  jobDetail: string;
  salaryType: string;
  startingPrice: number;
  freelancers: [{ freelancerId: Schema.Types.ObjectId }];
}

const jobRequestSchema = new Schema<IJobRequest>(
  {
    employerId: {
      type: Schema.Types.ObjectId,
      ref: "Employer",
      required: true,
    },
    skillId: {
      type: Schema.Types.ObjectId,
      ref: "Skill",
      required: true,
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
      default: "Person",
    },
    startingPrice: {
      type: Number,
      required: true,
    },
    freelancers: [
      {
        freelancerId: {
          type: Schema.Types.ObjectId,
          ref: "Freelancer",
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const JobRequest = model<IJobRequest>("JobRequest", jobRequestSchema);

export default JobRequest;
