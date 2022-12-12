import { Request, Response } from "express";
import generateId from "../helpers/generateId";
import { generateToken } from "../helpers/genValidateToken";
import logger from "../../utils/logger";
import { usersServices } from "../services";

const { createUsers } = usersServices;

const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = req.body;

        const id = generateId();

        const token = generateToken(id);

        const newUser = await createUsers({ id, ...user });

        res.status(201).send({ newUser, token });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const read = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).send({ message: "ok" });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const update = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).send({ message: "ok" });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const inactive = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).send({ message: "ok" });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

export default { create, read, update, inactive };
