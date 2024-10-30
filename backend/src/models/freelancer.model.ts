import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
interface IFreelancer {
  _id: Schema.Types.ObjectId;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  number: number;
  image: string;
  company: string;
  position: string;
  skills: [
    {
      skill: Schema.Types.ObjectId;
      experience: number;
      ratings: [
        {
          rating: number;
          comment: string;
        }
      ];
      salaryType: string;
      startingSalary: number;
    }
  ];
  type: string;
  description: string;
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
    skills: [
      {
        skill: {
          type: Schema.Types.ObjectId,
          ref: "Skill",
          required: true,
        },
        experience: {
          type: Number,
          required: true,
        },
        ratings: [
          {
            rating: {
              type: Number,
            },
            comment: {
              type: String,
            },
          },
        ],
        salaryType: {
          type: String,
          enum: ["Hourly", "Times"],
          default: "Hourly",
        },
        startingSalary: {
          type: Number,
          required: true,
        },
      },
    ],
    type: {
      type: String,
      enum: ["Active", "Passive"],
      default: "Active",
    },
    description: {
      type: String,
      default: "comment",
    },
  },
  {
    timestamps: true,
  }
);

freelancerSchema.pre("save", function (next) {
  if(!this.isModified("password")) {
    next();
  } else {
    const hashedPass = bcrypt.hashSync(this.password, 8);
    this.password = hashedPass;
    next();
  }
})


const Freelancer = model<IFreelancer>("Freelancer", freelancerSchema);

export default Freelancer;
