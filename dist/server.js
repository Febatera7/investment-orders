"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const logger_1 = __importDefault(require("./utils/logger"));
const { APP_NAME: appName, PORT: port } = process.env;
app_1.default.listen(port, () => logger_1.default.info(`${appName} running on port: ${port}`));
