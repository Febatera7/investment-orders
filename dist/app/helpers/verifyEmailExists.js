"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const logger_1 = __importDefault(require("../../utils/logger"));
exports.default = async (email) => {
    try {
        const emailOnUsers = await services_1.usersServices.findByEmail(email);
        const emailOnCustomers = await services_1.customersServices.findByEmail(email);
        if (emailOnCustomers || emailOnUsers)
            return true;
        return false;
    }
    catch (error) {
        logger_1.default.error(error);
    }
};
