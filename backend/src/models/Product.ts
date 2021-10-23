import { IProduct } from "../interfaces/IProduct";
import { Schema, model } from "mongoose";

const schema = new Schema<IProduct>({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
});

const productModel = model<IProduct>("Product", schema);

export default productModel;
