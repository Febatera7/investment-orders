"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productsSchema = new mongoose_1.Schema({
    _id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    value: { type: Number, required: true },
    userId: { type: Number, ref: "Users", required: true },
    active: { type: Boolean, default: true, required: true }
}, { _id: false });
const ProductsModel = (0, mongoose_1.model)("Products", productsSchema);
exports.default = ProductsModel;
