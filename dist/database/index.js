"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utils/logger"));
const connection_1 = __importDefault(require("./connection"));
const initializeDatabases = async () => {
    try {
        await (0, connection_1.default)();
    }
    catch (error) {
        logger_1.default.error(error);
    }
};
exports.default = initializeDatabases;
