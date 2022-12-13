"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../../utils/logger"));
exports.default = async (req, res, next) => {
    try {
        const { name, birthday, cpf, email } = req.body;
        if (name && typeof name !== "string")
            throw new Error("Name must to be a string");
        const dateSplit = birthday ? birthday.toString().split("-") : [];
        if (birthday && !(dateSplit.length === 3
            && parseInt(dateSplit[0])
            && parseInt(dateSplit[1])
            && parseInt(dateSplit[2])
            && new Date(birthday)))
            throw new Error("Birthday is not in the Date format");
        if (cpf
            && typeof cpf !== "string"
            || cpf.length !== 11
            || !/^\d+$/.test(cpf))
            throw new Error("CPF must to be a string with 11 characters and have only numbers");
        const emailRegex = /\S+@\S+\.\S+/;
        const emailVerify = email ? emailRegex.test(email) : true;
        if (!emailVerify)
            throw new Error("Email is not in the correct format");
        next();
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
