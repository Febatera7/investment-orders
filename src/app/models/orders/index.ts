import { Schema, model } from "mongoose";

const ordersSchema = new Schema({
    orderId: { type: Number, required: true, unique: true },
    productValue: { type: Number, required: true },
    productQuantity: { type: Number, required: true },
    totalValue: { type: Number, required: true },
    orderDate: { type: Date, required: true },
    userId: { type: Number, ref: "Users", required: true },
    customerId: { type: Number, ref: "Customers", required: true },
    productId: { type: Number, ref: "Products", required: true },
}, { _id: false });

const OrdersModel = model("Orders", ordersSchema);

export default OrdersModel;
