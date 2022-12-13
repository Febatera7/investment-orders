"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../../utils/logger"));
exports.default = async (req, res, next) => {
    try {
        const { productQuantity } = req.body;
        if (productQuantity
            && typeof productQuantity !== "number"
            || Math.floor(productQuantity) !== productQuantity)
            throw new Error("Product Quantity must to be a integer");
        next();
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(400).send({ error: error.message });
    }
};
