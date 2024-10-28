import { model, Schema } from "mongoose";

interface IFreelancer {
  _id: Schema.Types.ObjectId;
  firstname: string;
  lastname: string;
  email: string;
  password: String;
  number: number;
  image: string;
  company: string;
  position: string;
  type: string;
  description: string;
  membership: string;
}

const freelancerSchema = new Schema<IFreelancer>(
  {
    firstname: {
      type: String,
      required: [true, "Хэрэглэгчийн нэрийг заавал оруулна уу."],
    },
    lastname: {
      type: String,
      required: [true, "Хэрэглэгчийн овгийг заавал оруулна уу."],
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
      type: Number,
    },
    image: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1726516335449-eaa942fd4c2f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    },
    company: {
      type: String,
    },
    position: {
      type: String,
    },
    type: {
      type: String,
      enum: ["Active", "Passive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

const Freelancer = model<IFreelancer>("Freelancer", freelancerSchema);

export default Freelancer;
