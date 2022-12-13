import { OrdersParams, OrdersResponse } from "../interfaces/orders";
import { Request, Response } from "express";
import { ordersServices, productsServices } from "../services";
import { ProductsResponse } from "../interfaces/products";
import logger from "../../utils/logger";

const {
    createOrder,
    findOrders,
    findOrdersByCustomer,
    findOrdersByProduct,
    deleteOrder
} = ordersServices;

const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const { productQuantity }: OrdersParams = req.body;
        const { customerid, productid } = req.headers;
        const userId: number = req.userId;

        const customerId: number = parseInt(customerid.toString());
        const productId: number = parseInt(productid.toString());

        const product: ProductsResponse = await productsServices.findProduct(productId);

        const response: OrdersResponse = await createOrder(productQuantity, userId, customerId, product);

        res.status(201).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const readAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: number = req.userId;

        const response: OrdersResponse[] = await findOrders(userId);

        res.status(200).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const readByCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
        const { customerId } = req.params;

        const customerIdParse: number = parseInt(customerId);

        const response: OrdersResponse[] = await findOrdersByCustomer(customerIdParse);

        res.status(200).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const readByProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { productId } = req.params;

        const productIdParse: number = parseInt(productId);

        const response: OrdersResponse[] = await findOrdersByProduct(productIdParse);

        res.status(200).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const deleteOne = async (req: Request, res: Response): Promise<void> => {
    try {
        const { orderId } = req.params;

        const orderIdParse: number = parseInt(orderId);

        const response: OrdersResponse = await deleteOrder(orderIdParse);

        res.status(200).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

export default { create, readAll, readByCustomer, readByProduct, deleteOne };
