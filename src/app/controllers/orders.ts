import { OrdersParams, OrdersResponse } from "../interfaces/orders";
import { Request, Response } from "express";
import { customersServices, ordersServices, productsServices } from "../services";
import { CustomersResponse } from "../interfaces/customers";
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

        const product: ProductsResponse = await productsServices.findProduct(productId, userId);

        if(!product) throw new Error("Product not found");

        const customer: CustomersResponse = await customersServices.findCustomer(customerId, userId);

        if(!customer) throw new Error("Customer not found");

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

        if(!response.length) throw new Error("User dont have any order");

        res.status(200).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const readByCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
        const { customerId } = req.params;
        const userId: number = req.userId;

        const customerIdParse: number = parseInt(customerId);

        const response: OrdersResponse[] = await findOrdersByCustomer(customerIdParse, userId);

        if(!response.length) throw new Error("This customer dont have any order");

        res.status(200).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const readByProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { productId } = req.params;
        const userId: number = req.userId;

        const productIdParse: number = parseInt(productId);

        const response: OrdersResponse[] = await findOrdersByProduct(productIdParse, userId);

        if(!response.length) throw new Error("This product dont have any order");

        res.status(200).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const deleteOne = async (req: Request, res: Response): Promise<void> => {
    try {
        const { orderId } = req.params;
        const userId: number = req.userId;

        const orderIdParse: number = parseInt(orderId);

        const response: OrdersResponse = await deleteOrder(orderIdParse, userId);

        if(!response) throw new Error("Order not found");

        res.status(200).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

export default { create, readAll, readByCustomer, readByProduct, deleteOne };
