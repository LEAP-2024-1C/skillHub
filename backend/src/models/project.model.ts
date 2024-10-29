import { model, Schema } from "mongoose";

interface IProject {
  _id: Schema.Types.ObjectId;
  employerId: Schema.Types.ObjectId;
  skillId: Schema.Types.ObjectId;
  title: string;
  jobDetail: string;
  salaryType: string;
  startingPrice: number;
  freelancerId: Schema.Types.ObjectId;
  rate: number;
  comment: string;
}

const projectSchema = new Schema<IProject>(
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

    freelancerId: {
      type: Schema.Types.ObjectId,
      ref: "Freelancer",
      required: true,
    },
    rate: {
      type: Number,
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const JobRequest = model<IProject>("JobRequest", projectSchema);

export default JobRequest;
