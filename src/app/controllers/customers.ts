import { CustomersParams, CustomersResponse } from "../interfaces/customers";
import { Request, Response } from "express";
import { customersServices } from "../services";
import logger from "../../utils/logger";

const {
    createCustomers,
    findCustomers,
    updateCustomer,
    activeInactiveCustomer
} = customersServices;

const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: number = req.userId;

        const customer: CustomersParams = req.body;

        const response: CustomersResponse = await createCustomers(customer, userId);

        res.status(201).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const read = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: number = req.userId;

        const response: CustomersResponse[] = await findCustomers(userId);

        res.status(200).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const update = async (req: Request, res: Response): Promise<void> => {
    try {
        const { customerId } = req.params;

        const customerBody: CustomersParams = req.body;

        const customerIdParse: number = parseInt(customerId);

        const customer: CustomersParams = { _id: customerIdParse, ...customerBody };

        const response: CustomersResponse = await updateCustomer(customer);

        res.status(200).send({
            oldData: response,
            modifiedData: customerBody
        });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const activeInactive = async (req: Request, res: Response): Promise<void> => {
    try {
        const { customerId } = req.params;

        const customerIdParse: number = parseInt(customerId);

        const response: CustomersResponse = await activeInactiveCustomer(customerIdParse);

        res.status(200).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

export default { create, read, update, activeInactive };
