import { Schema, model } from "mongoose";
import Products from "./dto";

const productsSchema = new Schema({
    _id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    value: { type: Number, required: true },
    userId: { type: Number, ref: "Users", required: true },
    active: { type: Boolean, default: true, required: true }
}, { _id: false });

const ProductsModel = model<Products>("Products", productsSchema);

export default ProductsModel;