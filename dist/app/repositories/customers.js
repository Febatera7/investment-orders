"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customers_1 = __importDefault(require("../models/customers"));
const logger_1 = __importDefault(require("../../utils/logger"));
const createCustomer = async (customer) => {
    try {
        const newCustomer = await customers_1.default.create(customer);
        return newCustomer;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findCustomers = async (userId) => {
    try {
        const customers = await customers_1.default.find({ userId });
        return customers;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findCustomer = async (customerId, userId) => {
    try {
        const customer = await customers_1.default.findOne({ _id: customerId, userId });
        return customer;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const updateCustomer = async (customer, userId) => {
    try {
        const oldCustomerDocument = await customers_1.default.findOneAndUpdate({ _id: customer._id, userId }, { ...customer });
        return oldCustomerDocument;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const activeInactiveCustomer = async (customerId, userId) => {
    try {
        const customer = await customers_1.default.findOne({ _id: customerId, userId });
        const active = customer.active ? false : true;
        await customer.update({ active });
        customer.active = active;
        return customer;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findByEmail = async (email) => {
    try {
        const customer = await customers_1.default.findOne({ email });
        return customer;
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
