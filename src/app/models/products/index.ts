import { Schema, model } from "mongoose";

const productsSchema = new Schema({
    productId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    value: { type: Number, required: true },
    active: { type: Boolean, default: true, required: true }
}, { _id: false });

const ProductsModel = model("Products", productsSchema);

export default ProductsModel;