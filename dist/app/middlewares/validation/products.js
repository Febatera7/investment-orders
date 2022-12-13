"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../../utils/logger"));
exports.default = async (req, res, next) => {
    try {
        const { name, value } = req.body;
        if (name && typeof name !== "string")
            throw new Error("Name must to be a string");
        if (value && typeof value !== "number")
            throw new Error("Value must to be a number integer or float");
        next();
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
