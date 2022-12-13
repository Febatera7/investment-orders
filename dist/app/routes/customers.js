"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const express_1 = require("express");
const customer_1 = __importDefault(require("../middlewares/validation/customer"));
const { create, read, update, activeInactive } = controllers_1.CustomersController;
const routes = (0, express_1.Router)();
routes.post("/", customer_1.default, create);
routes.get("/", read);
routes.patch("/update/:customerId", customer_1.default, update);
routes.patch("/inactive/:customerId", activeInactive);
exports.default = routes;
