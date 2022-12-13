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

const findOrdersByCustomer = async (customerId: number): Promise<Orders[]> => {
    try {
        const orders: Orders[] = await OrdersModel.find({ customerId });

        return orders;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findOrdersByProduct = async (productId: number): Promise<Orders[]> => {
    try {
        const orders: Orders[] = await OrdersModel.find({ productId });

        return orders;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};


const deleteOrder = async (orderId: number): Promise<Orders> => {
    try {
        const order: Orders = await OrdersModel.findByIdAndDelete(orderId);

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
