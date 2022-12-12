
import { Schema, model } from "mongoose";

const usersSchema = new Schema({
    userId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: false, unique: true },
    password: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    birthday: { type: Date, required: true},
    active: { type: Boolean, default: true, required: true }
}, { _id: false });

const UsersModel = model("Users", usersSchema);

export default UsersModel;
