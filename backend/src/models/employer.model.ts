import { model, Schema } from "mongoose";

interface IEmployer {
  _id: Schema.Types.ObjectId;
  fullNameOrCompany: string;
  type: string;
  number: number;
  images: [string];
  description: string;
  company: string;
  membership: string;
}

const employerSchema = new Schema<IEmployer>(
  {
    fullNameOrCompany: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Person", "Company"],
      default: "Person",
    },
    number: {
      type: Number,
      required: true,
    },
    images: {
      type: [String],
      default: ["image"],
    },
    description: {
      type: String,
      default: "comment",
    },
    company: {
      type: String,
    },
    membership: {
      type: String,
      enum: ["Vip", "Basic"],
      default: "Basic",
    },
  },
  {
    timestamps: true,
  }
);

const Employer = model<IEmployer>("Employer", employerSchema);

export default Employer;
