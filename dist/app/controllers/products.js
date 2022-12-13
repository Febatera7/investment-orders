"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../utils/logger"));
const services_1 = require("../services");
const { createProduct, findProducts, updateProduct, activeInactiveProduct } = services_1.productsServices;
const create = async (req, res) => {
    try {
        const userId = req.userId;
        const product = req.body;
        const response = await createProduct(product, userId);
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
        const response = await findProducts(userId);
        if (!response.length)
            throw new Error("Dont have products registered");
        res.status(200).send(response);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
const update = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.userId;
        const productBody = req.body;
        const productIdParse = parseInt(productId);
        const product = { _id: productIdParse, ...productBody };
        const response = await updateProduct(product, userId);
        if (!response)
            throw new Error("Product not found");
        res.status(200).send({
            oldData: response,
            modifiedData: productBody
        });
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
const activeInactive = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.userId;
        const productIdParse = parseInt(productId);
        const response = await activeInactiveProduct(productIdParse, userId);
        if (!response)
            throw new Error("Product not found");
        res.status(200).send(response);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
exports.default = { create, read, update, activeInactive };
