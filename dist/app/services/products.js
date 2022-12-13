"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../repositories");
const generateId_1 = __importDefault(require("../helpers/generateId"));
const logger_1 = __importDefault(require("../../utils/logger"));
const { createProduct: create, findProducts: findAll, findProduct: findOne, updateProduct: update, activeInactiveProduct: activeInactive } = repositories_1.ProductsRepository;
const createProduct = async (product, userId) => {
    try {
        const customerId = (0, generateId_1.default)();
        const newProduct = await create({
            _id: customerId,
            name: product.name,
            value: product.value,
            userId
        });
        return newProduct;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findProducts = async (userId) => {
    try {
        const products = await findAll(userId);
        return products;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const findProduct = async (productId, userId) => {
    try {
        const product = await findOne(productId, userId);
        return product;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const updateProduct = async (productData, userId) => {
    try {
        const product = await update(productData, userId);
        return product;
    }
    catch (error) {
        logger_1.default.error(error);
        return error.message;
    }
};
const activeInactiveProduct = async (productId, userId) => {
    try {
        const product = await activeInactive(productId, userId);
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
    activeInactiveProduct
};
