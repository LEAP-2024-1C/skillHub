import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

interface IEmployer {
  _id: Schema.Types.ObjectId;
  fullnameOrCompany: string;
  type: string;
  email: string;
  password: string;
  number: string;
  image: string;
  description: string;
  company: string;
  membership: string;
  otp: string;
  passwordResetToken: String;
  passwordResetTokenExpire: Date;
  created_at: Date;
  updated_at: Date;
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

employerSchema.pre("save", function (next) {
  if(!this.isModified("password")) {
    next();
  } else {
    const hashedPass = bcrypt.hashSync(this.password, 8);
    this.password = hashedPass;
    next();
  }
})

const Employer = model<IEmployer>("Employer", employerSchema);

export default Employer;
