"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../repositories");
const generateId_1 = __importDefault(require("../helpers/generateId"));
const logger_1 = __importDefault(require("../../utils/logger"));
const { createOrder: create, findOrders: find, findOrdersByCustomer: findByCustomer, findOrdersByProduct: findByProduct, deleteOrder: deleteOne } = repositories_1.OrdersRepository;
const createOrder = async (productQuantity, userId, customerId, product) => {
    try {
        const orderId = (0, generateId_1.default)();
        const totalValue = productQuantity * product.value;
        const newOrder = await create({
            _id: orderId,
            orderDate: new Date(),
            productQuantity,
            productValue: product.value,
            totalValue,
            productId: product._id,
            customerId,
            userId
        });
        return newOrder;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findOrders = async (userId) => {
    try {
        const orders = await find(userId);
        return orders;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findOrdersByCustomer = async (customerId, userId) => {
    try {
        const orders = await findByCustomer(customerId, userId);
        return orders;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findOrdersByProduct = async (productId, userId) => {
    try {
        const orders = await findByProduct(productId, userId);
        return orders;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const deleteOrder = async (orderId, userId) => {
    try {
        const order = await deleteOne(orderId, userId);
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
