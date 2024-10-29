import { model, Schema } from "mongoose";

interface IEmployer {
  _id: Schema.Types.ObjectId;
  fullnameOrCompany: string;
  type: string;
  email: string;
  password: String;
  number: string;
  image: string;
  description: string;
  company: string;
  membership: string;
}

const employerSchema = new Schema<IEmployer>(
  {
    fullnameOrCompany: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Person", "Company"],
      default: "Person",
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Хэрэглэгчийн email заавал оруулна уу."],
    },
    password: {
      type: String,
      minlength: [8, "Хэрэглэгчийн нууц үг хамгийн багадаа 8 тэмдэгт байна."],
      required: [true, "Хэрэглэгчийн нууц үгийг заавал оруулна уу."],
    },
    number: {
      type: String,
      default: "0",
    },
    image: {
      type: String,
      default: "image",
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
