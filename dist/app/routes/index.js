"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_1 = __importDefault(require("../middlewares/authentication"));
const customers_1 = __importDefault(require("./customers"));
const orders_1 = __importDefault(require("./orders"));
const products_1 = __importDefault(require("./products"));
const session_1 = __importDefault(require("./session"));
const users_1 = __importDefault(require("./users"));
const routes = (0, express_1.Router)();
routes.use("/customers", authentication_1.default, customers_1.default);
routes.use("/orders", authentication_1.default, orders_1.default);
routes.use("/products", authentication_1.default, products_1.default);
routes.use("/session", session_1.default);
routes.use("/users", users_1.default);
exports.default = routes;
