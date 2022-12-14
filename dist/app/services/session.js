"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const genValidateToken_1 = require("../helpers/genValidateToken");
const logger_1 = __importDefault(require("../../utils/logger"));
const passwordHash_1 = require("../helpers/passwordHash");
const _1 = require(".");
exports.default = async (email, password) => {
    try {
        const findUser = await _1.usersServices.findByEmail(email);
        const verifyPass = await (0, passwordHash_1.passwordRead)(password, findUser.password);
        logger_1.default.info(verifyPass);
        logger_1.default.info(findUser);
        if (!findUser || !verifyPass)
            throw new Error("Email or password dont registered");
        const token = (0, genValidateToken_1.generateToken)(findUser._id);
        const response = {
            token,
            name: findUser.name
        };
        return response;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
