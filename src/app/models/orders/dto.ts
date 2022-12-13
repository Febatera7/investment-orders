import { Document } from "mongoose";


interface Orders extends Document {
    _id?: number,
    productValue: number,
    productQuantity: number,
    totalValue: number,
    orderDate: Date,
    userId: number,
    customerId: number,
    productd: number,
}

export default Orders;
