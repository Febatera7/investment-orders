import { Request, Response } from "express";
import { customersServices } from "../services";
import logger from "../../utils/logger";

const { testCustomers } = customersServices;

export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(201).send({ message: testCustomers() });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

export const read = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).send({ message: testCustomers() });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

export const update = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).send({ message: testCustomers() });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

export const inactive = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).send({ message: testCustomers() });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

export default { create, read, update, inactive };
