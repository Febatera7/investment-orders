"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const authentication_1 = __importDefault(require("../middlewares/authentication"));
const user_1 = __importDefault(require("../middlewares/validation/user"));
const { create, read, update } = controllers_1.UsersController;
const routes = (0, express_1.Router)();
routes.post("/", user_1.default, create);
routes.get("/", authentication_1.default, read);
routes.patch("/", authentication_1.default, user_1.default, update);
exports.default = routes;
