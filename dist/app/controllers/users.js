"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../utils/logger"));
const services_1 = require("../services");
const { createUser, findUser, updateUser, activeInactiveUser } = services_1.usersServices;
const create = async (req, res) => {
    try {
        const user = req.body;
        const response = await createUser(user);
        res.status(201).send(response);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
const read = async (req, res) => {
    try {
        const userId = req.userId;
        const response = await findUser(userId);
        if (!response)
            throw new Error("User not found");
        res.status(200).send(response);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
const update = async (req, res) => {
    try {
        const userId = req.userId;
        const userBody = req.body;
        const user = { _id: userId, ...userBody };
        const response = await updateUser(user);
        if (!response)
            throw new Error("User not found");
        res.status(200).send({
            oldData: response,
            modifiedData: userBody
        });
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
const activeInactive = async (req, res) => {
    try {
        const userId = req.userId;
        const response = await activeInactiveUser(userId);
        if (!response)
            throw new Error("User not found");
        res.status(200).send(response);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
exports.default = { create, read, update, activeInactive };
