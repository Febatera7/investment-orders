"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../models/users"));
const logger_1 = __importDefault(require("../../utils/logger"));
const createUser = async (user) => {
    try {
        const newUser = await users_1.default.create(user);
        return newUser;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findUser = async (userId) => {
    try {
        const user = await users_1.default.findById(userId);
        return user;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const updateUser = async (user) => {
    try {
        const oldUserDocument = await users_1.default.findByIdAndUpdate(user._id, { ...user });
        return oldUserDocument;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const activeInactiveUser = async (userId) => {
    try {
        const user = await users_1.default.findById(userId);
        const active = user.active ? false : true;
        await user.update({ active });
        user.active = active;
        return user;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findByEmail = async (email) => {
    try {
        const user = await users_1.default.findOne({ email });
        return user;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
exports.default = {
    createUser,
    findUser,
    updateUser,
    activeInactiveUser,
    findByEmail
};
