"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../repositories");
const generateId_1 = __importDefault(require("../helpers/generateId"));
const logger_1 = __importDefault(require("../../utils/logger"));
const verifyEmailExists_1 = __importDefault(require("../helpers/verifyEmailExists"));
const { createCustomer: create, findCustomers: findAll, findCustomer: findOne, updateCustomer: update, activeInactiveCustomer: activeInactive, findByEmail: findEmail } = repositories_1.CustomersRepository;
const createCustomer = async (customer, userId) => {
    try {
        const customerId = (0, generateId_1.default)();
        if (await (0, verifyEmailExists_1.default)(customer.email))
            throw new Error("E-mail already registered");
        const newCustomer = await create({
            _id: customerId,
            name: customer.name,
            email: customer.email,
            cpf: customer.cpf,
            birthday: customer.birthday,
            userId
        });
        return newCustomer;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findCustomers = async (userId) => {
    try {
        const customers = await findAll(userId);
        return customers;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findCustomer = async (customerId, userId) => {
    try {
        const customer = await findOne(customerId, userId);
        return customer;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const updateCustomer = async (customerData, userId) => {
    try {
        const customer = await update(customerData, userId);
        return customer;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const activeInactiveCustomer = async (customerId, userId) => {
    try {
        const customer = await activeInactive(customerId, userId);
        return customer;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findByEmail = async (email) => {
    try {
        const user = await findEmail(email);
        return user;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
exports.default = {
    createCustomer,
    findCustomers,
    findCustomer,
    updateCustomer,
    activeInactiveCustomer,
    findByEmail
};
