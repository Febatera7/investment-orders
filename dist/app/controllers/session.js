"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../utils/logger"));
const services_1 = require("../services");
exports.default = async (req, res) => {
    try {
        const { email, password } = req.body;
        const session = await (0, services_1.sessionService)(email, password);
        res.status(200).send(session);
    }
    catch (error) {
        logger_1.default.error("Error on login: ", error);
        res.status(401).send({ error: error.message });
    }
};
