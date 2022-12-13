"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../config/auth"));
const logger_1 = __importDefault(require("../../utils/logger"));
const generateToken = (id) => {
    try {
        const token = (0, jsonwebtoken_1.sign)({ userId: id }, auth_1.default.secret, {
            expiresIn: auth_1.default.expiresIn,
        });
        return token;
    }
    catch (error) {
        logger_1.default.error(error);
    }
};
exports.generateToken = generateToken;
const validateToken = (token) => {
    try {
        const decoded = (0, jsonwebtoken_1.verify)(token, auth_1.default.secret);
        return JSON.stringify(decoded);
    }
    catch (error) {
        logger_1.default.error(error);
    }
};
exports.validateToken = validateToken;
