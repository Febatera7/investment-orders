"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersServices = exports.sessionService = exports.productsServices = exports.ordersServices = exports.customersServices = void 0;
const customers_1 = __importDefault(require("./customers"));
exports.customersServices = customers_1.default;
const orders_1 = __importDefault(require("./orders"));
exports.ordersServices = orders_1.default;
const products_1 = __importDefault(require("./products"));
exports.productsServices = products_1.default;
const session_1 = __importDefault(require("./session"));
exports.sessionService = session_1.default;
const users_1 = __importDefault(require("./users"));
exports.usersServices = users_1.default;
