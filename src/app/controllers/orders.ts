import { Request, Response } from "express";
import logger from "../../utils/logger";
import { ordersServices } from "../services";

const { testOrders } = ordersServices;

const create = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(201).send({ message: testOrders() });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const read = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).send({ message: testOrders() });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const update = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).send({ message: testOrders() });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

export default { create, read, update };
