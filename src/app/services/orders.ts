import { OrdersRepository } from "../repositories";
import { OrdersResponse } from "../interfaces/orders";
import { ProductsResponse } from "../interfaces/products";
import generateId from "../helpers/generateId";
import logger from "../../utils/logger";

const {
    createOrder: create,
    findOrders: find,
    findOrdersByCustomer: findByCustomer,
    findOrdersByProduct: findByProduct,
    deleteOrder: deleteOne
} = OrdersRepository;

const createOrder = async (
    productQuantity: number,
    userId: number,
    customerId: number,
    product: ProductsResponse): Promise<OrdersResponse> => {
    try {
        const orderId = generateId();

        const totalValue = productQuantity * product.value;

        const newOrder: OrdersResponse = await create({
            _id: orderId,
            orderDate: new Date(),
            productQuantity,
            productValue: product.value,
            totalValue,
            productId: product._id,
            customerId,
            userId
        });

        return newOrder;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findOrders = async (userId: number): Promise<OrdersResponse[]> => {
    try {
        const orders: OrdersResponse[] = await find(userId);

        return orders;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findOrdersByCustomer = async (customerId: number): Promise<OrdersResponse[]> => {
    try {
        const orders: OrdersResponse[] = await findByCustomer(customerId);

        return orders;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findOrdersByProduct = async (productId: number): Promise<OrdersResponse[]> => {
    try {
        const orders: OrdersResponse[] = await findByProduct(productId);

        return orders;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const deleteOrder = async (orderId: number): Promise<OrdersResponse> => {
    try {
        const order: OrdersResponse = await deleteOne(orderId);

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
