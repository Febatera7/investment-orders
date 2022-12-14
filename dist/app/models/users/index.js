"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usersSchema = new mongoose_1.Schema({
    _id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: false, unique: true },
    password: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    birthday: { type: Date, required: true }
}, { _id: false });
const UsersModel = (0, mongoose_1.model)("Users", usersSchema);
exports.default = UsersModel;
