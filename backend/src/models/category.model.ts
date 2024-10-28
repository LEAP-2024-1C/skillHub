import { model, Schema } from "mongoose";

interface ICategory {
  _id: Schema.Types.ObjectId;
  name: string;
}

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Category = model<ICategory>("Category", categorySchema);

export default Category;
