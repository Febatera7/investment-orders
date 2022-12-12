import { Schema, model } from "mongoose";

const customersSchema = new Schema({
    customerId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: false, unique: true },
    cpf: { type: String, required: true, unique: true },
    birthday: { type: Date, required: true},
    userId: { type: Number, ref: "Users",required: true },
    active: { type: Boolean, default: true, required: true }
}, { _id: false });

const CustomersModel = model("Customers", customersSchema);

export default CustomersModel;
