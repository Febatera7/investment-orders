"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const express_1 = require("express");
const products_1 = __importDefault(require("../middlewares/validation/products"));
const { create, read, update, activeInactive } = controllers_1.ProductsController;
const routes = (0, express_1.Router)();
routes.post("/", products_1.default, create);
routes.get("/", read);
routes.patch("/update/:productId", products_1.default, update);
routes.patch("/inactive/:productId", activeInactive);
exports.default = routes;
