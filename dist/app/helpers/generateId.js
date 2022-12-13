"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const logger_1 = __importDefault(require("../../utils/logger"));
const generateId = () => {
    try {
        const id = crypto_1.default.randomInt(99999999);
        return id;
    }
    catch (error) {
        logger_1.default.error(error);
    }
};
exports.default = generateId;
