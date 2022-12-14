"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const logger_1 = __importDefault(require("../../utils/logger"));
const { createOrder, findOrders, findOrdersByCustomer, findOrdersByProduct, deleteOrder } = services_1.ordersServices;
const create = async (req, res) => {
    try {
        const { productQuantity } = req.body;
        const userId = req.userId;
        const customerId = req.customerId;
        const productId = req.productId;
        const customer = await services_1.customersServices.findCustomer(customerId, userId);
        if (!customer)
            throw new Error("Customer not found");
        const product = await services_1.productsServices.findProduct(productId, userId);
        if (!product)
            throw new Error("Product not found");
        const response = await createOrder(productQuantity, userId, customerId, product);
        res.status(201).send(response);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
const readAll = async (req, res) => {
    try {
        const userId = req.userId;
        const response = await findOrders(userId);
        if (!response.length)
            throw new Error("User dont have any order");
        res.status(200).send(response);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
const readByCustomer = async (req, res) => {
    try {
        const { customerId } = req.params;
        const userId = req.userId;
        const customerIdParse = parseInt(customerId);
        const response = await findOrdersByCustomer(customerIdParse, userId);
        if (!response.length)
            throw new Error("This customer dont have any order");
        res.status(200).send(response);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
const readByProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.userId;
        const productIdParse = parseInt(productId);
        const response = await findOrdersByProduct(productIdParse, userId);
        if (!response.length)
            throw new Error("This product dont have any order");
        res.status(200).send(response);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
const deleteOne = async (req, res) => {
    try {
        const { orderId } = req.params;
        const userId = req.userId;
        const orderIdParse = parseInt(orderId);
        const response = await deleteOrder(orderIdParse, userId);
        if (!response)
            throw new Error("Order not found");
        res.status(200).send(response);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
exports.default = { create, readAll, readByCustomer, readByProduct, deleteOne };
