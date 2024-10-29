import { model, Schema } from "mongoose";

interface ISkill {
  _id: Schema.Types.ObjectId;
  name: string;
  categoryId: Schema.Types.ObjectId;
}

const skillSchema = new Schema<ISkill>(
  {
    name: {
      type: String,
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

const Skill = model<ISkill>("Skill", skillSchema);

export default Skill;