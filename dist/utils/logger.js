"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = __importDefault(require("log4js"));
log4js_1.default.configure({
    appenders: {
        out: {
            type: "stdout",
            layout: {
                type: "pattern",
                pattern: "%[[%d{dd/MM/yy hh:mm:ss}] [%p] %c:%] %m",
            },
        },
    },
    categories: { default: { appenders: ["out"], level: "all" } },
    pm2: true,
});
const logger = log4js_1.default.getLogger(process.env.APP_NAME);
exports.default = logger;
