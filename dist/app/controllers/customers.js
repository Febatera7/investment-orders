"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const logger_1 = __importDefault(require("../../utils/logger"));
const { createCustomer, findCustomers, updateCustomer, activeInactiveCustomer } = services_1.customersServices;
const create = async (req, res) => {
    try {
        const userId = req.userId;
        const customer = req.body;
        const response = await createCustomer(customer, userId);
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
        const response = await findCustomers(userId);
        if (!response.length)
            throw new Error("Cannot find any customers registered");
        res.status(200).send(response);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
const update = async (req, res) => {
    try {
        const { customerId } = req.params;
        const userId = req.userId;
        const customerBody = req.body;
        const customerIdParse = parseInt(customerId);
        const customer = { _id: customerIdParse, ...customerBody };
        const response = await updateCustomer(customer, userId);
        if (!response)
            throw new Error("Customer not found");
        res.status(200).send({
            oldData: response,
            modifiedData: customerBody
        });
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
const activeInactive = async (req, res) => {
    try {
        const { customerId } = req.params;
        const userId = req.userId;
        const customerIdParse = parseInt(customerId);
        const response = await activeInactiveCustomer(customerIdParse, userId);
        if (!response)
            throw new Error("Customer not found");
        res.status(200).send(response);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
exports.default = { create, read, update, activeInactive };
