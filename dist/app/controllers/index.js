"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = exports.ProductsController = exports.OrdersController = exports.CustomersController = void 0;
const customers_1 = __importDefault(require("./customers"));
exports.CustomersController = customers_1.default;
const orders_1 = __importDefault(require("./orders"));
exports.OrdersController = orders_1.default;
const products_1 = __importDefault(require("./products"));
exports.ProductsController = products_1.default;
const users_1 = __importDefault(require("./users"));
exports.UsersController = users_1.default;
