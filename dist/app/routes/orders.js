"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const express_1 = require("express");
const orders_1 = __importDefault(require("../middlewares/validation/orders"));
const { create, readAll, readByCustomer, readByProduct, deleteOne } = controllers_1.OrdersController;
const routes = (0, express_1.Router)();
routes.post("/", orders_1.default, create);
routes.get("/all", readAll);
routes.get("/customer/:customerId", readByCustomer);
routes.get("/product/:productId", readByProduct);
routes.delete("/:orderId", deleteOne);
exports.default = routes;
