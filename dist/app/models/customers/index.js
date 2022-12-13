"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const customersSchema = new mongoose_1.Schema({
    _id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: false, unique: true },
    cpf: { type: String, required: true, unique: true },
    birthday: { type: Date, required: true },
    userId: { type: Number, ref: "Users", required: true },
    active: { type: Boolean, default: true, required: true }
}, { _id: false });
const CustomersModel = (0, mongoose_1.model)("Customers", customersSchema);
exports.default = CustomersModel;
