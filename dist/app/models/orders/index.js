"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ordersSchema = new mongoose_1.Schema({
    _id: { type: Number, required: true, unique: true },
    productValue: { type: Number, required: true },
    productQuantity: { type: Number, required: true },
    totalValue: { type: Number, required: true },
    orderDate: { type: Date, required: true },
    userId: { type: Number, ref: "Users", required: true },
    customerId: { type: Number, ref: "Customers", required: true },
    productId: { type: Number, ref: "Products", required: true },
}, { _id: false });
const OrdersModel = (0, mongoose_1.model)("Orders", ordersSchema);
exports.default = OrdersModel;
