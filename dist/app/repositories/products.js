"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("../models/products"));
const logger_1 = __importDefault(require("../../utils/logger"));
const createProduct = async (product) => {
    try {
        const newProduct = await products_1.default.create(product);
        return newProduct;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findProducts = async (userId) => {
    try {
        const products = await products_1.default.find({ userId });
        return products;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findProduct = async (productId, userId) => {
    try {
        const product = await products_1.default.findOne({ _id: productId, userId });
        return product;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const updateProduct = async (product, userId) => {
    try {
        const oldProductDocument = await products_1.default.findOneAndUpdate({ _id: product._id, userId }, { ...product });
        return oldProductDocument;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const activeInactiveProduct = async (productId, userId) => {
    try {
        const product = await products_1.default.findOne({ _id: productId, userId });
        const active = product.active ? false : true;
        await product.update({ active });
        product.active = active;
        return product;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
exports.default = {
    createProduct,
    findProducts,
    findProduct,
    updateProduct,
    activeInactiveProduct,
};
