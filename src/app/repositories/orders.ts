import Orders from "../models/orders/dto";
import OrdersModel from "../models/orders";
import { OrdersParams } from "../interfaces/orders";
import logger from "../../utils/logger";

const createOrder = async (order: OrdersParams): Promise<Orders> => {
    try {
        const newOrder: Orders = await OrdersModel.create(order);

        return newOrder;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findOrders = async (userId: number): Promise<Orders[]> => {
    try {
        const orders: Orders[] = await OrdersModel.find({ userId });

        return orders;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findOrdersByCustomer = async (customerId: number, userId: number): Promise<Orders[]> => {
    try {
        const orders: Orders[] = await OrdersModel.find({ customerId, userId });

        return orders;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findOrdersByProduct = async (productId: number, userId: number): Promise<Orders[]> => {
    try {
        const orders: Orders[] = await OrdersModel.find({ productId, userId });

        return orders;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};


const deleteOrder = async (orderId: number, userId: number): Promise<Orders> => {
    try {
        const order: Orders = await OrdersModel.findOneAndDelete({ _id: orderId, userId });

        return order;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};


export default {
    createOrder,
    findOrders,
    findOrdersByCustomer,
    findOrdersByProduct,
    deleteOrder
};
