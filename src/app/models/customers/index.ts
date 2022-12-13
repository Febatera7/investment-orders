import { Schema, model } from "mongoose";
import Customers from "./dto";

const customersSchema = new Schema({
    _id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: false, unique: true },
    cpf: { type: String, required: true, unique: true },
    birthday: { type: Date, required: true},
    userId: { type: Number, ref: "Users",required: true },
    active: { type: Boolean, default: true, required: true }
}, { _id: false });

const CustomersModel = model<Customers>("Customers", customersSchema);

export default CustomersModel;
