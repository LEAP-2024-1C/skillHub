import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
interface IFreelancer {
  _id: Schema.Types.ObjectId;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  number: string;
  image: string;
  company: string;
  position: string;
  skills: [
    {
      skill: Schema.Types.ObjectId;
      name: string;
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
  location: string;
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
      type: String,
    },
    image: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg",
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
        },
        name: {
          type: String,
        },
        experience: {
          type: Number,
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
      default: "Хоосон байна.",
    },
    location: {
      type: String,
      default: "Сонгохгүй",
    },
  },
  {
    timestamps: true,
  }
);

freelancerSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    next();
  } else {
    const hashedPass = bcrypt.hashSync(this.password, 8);
    this.password = hashedPass;
    next();
  }
});

const Freelancer = model<IFreelancer>("Freelancer", freelancerSchema);

export default Freelancer;
