"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = exports.ProductsRepository = exports.OrdersRepository = exports.CustomersRepository = void 0;
const customers_1 = __importDefault(require("./customers"));
exports.CustomersRepository = customers_1.default;
const orders_1 = __importDefault(require("./orders"));
exports.OrdersRepository = orders_1.default;
const products_1 = __importDefault(require("./products"));
exports.ProductsRepository = products_1.default;
const users_1 = __importDefault(require("./users"));
exports.UsersRepository = users_1.default;
