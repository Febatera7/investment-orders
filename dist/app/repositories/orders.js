"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = __importDefault(require("../models/orders"));
const logger_1 = __importDefault(require("../../utils/logger"));
const createOrder = async (order) => {
    try {
        const newOrder = await orders_1.default.create(order);
        return newOrder;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findOrders = async (userId) => {
    try {
        const orders = await orders_1.default.find({ userId });
        return orders;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findOrdersByCustomer = async (customerId, userId) => {
    try {
        const orders = await orders_1.default.find({ customerId, userId });
        return orders;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findOrdersByProduct = async (productId, userId) => {
    try {
        const orders = await orders_1.default.find({ productId, userId });
        return orders;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const deleteOrder = async (orderId, userId) => {
    try {
        const order = await orders_1.default.findOneAndDelete({ _id: orderId, userId });
        return order;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
exports.default = {
    createOrder,
    findOrders,
    findOrdersByCustomer,
    findOrdersByProduct,
    deleteOrder
};
