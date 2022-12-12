import { Request, Response } from "express";
import logger from "../../utils/logger";
import { usersServices } from "../services";

const { testUsers } = usersServices;

const create = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(201).send({ message: testUsers() });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const read = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).send({ message: testUsers() });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const update = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).send({ message: testUsers() });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const inactive = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).send({ message: testUsers() });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

export default { create, read, update, inactive };
