"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utils/logger"));
const mongoose_1 = __importDefault(require("mongoose"));
const { MONGO_HOST, APP_NAME } = process.env;
const mongoConnection = async () => {
    try {
        await mongoose_1.default.connect(MONGO_HOST);
        logger_1.default.info(`${APP_NAME} Database connected`);
    }
    catch (error) {
        logger_1.default.error(`Error on connected to ${APP_NAME} Database: ${error}`);
    }
};
exports.default = mongoConnection;
