"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordRead = exports.passwordGenerate = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const logger_1 = __importDefault(require("../../utils/logger"));
const passwordGenerate = async (password) => {
    try {
        const passwordHash = await bcryptjs_1.default.hash(password, 8);
        return passwordHash;
    }
    catch (error) {
        logger_1.default.error(error);
    }
};
exports.passwordGenerate = passwordGenerate;
const passwordRead = async (password, userPassword) => {
    try {
        const passwordCompare = await bcryptjs_1.default.compare(password, userPassword);
        return passwordCompare;
    }
    catch (error) {
        logger_1.default.error(error);
    }
};
exports.passwordRead = passwordRead;
