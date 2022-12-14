import { CreateResponse, UserParams, UsersResponse } from "../interfaces/users";
import { Request, Response } from "express";
import logger from "../../utils/logger";
import { usersServices } from "../services";

const {
    createUser,
    findUser,
    updateUser,
} = usersServices;

const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const user: UserParams = req.body;

        const response: CreateResponse = await createUser(user);

        res.status(201).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const read = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: number = req.userId;

        const response: UsersResponse = await findUser(userId);

        if(!response) throw new Error("User not found");

        res.status(200).send(response);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const update = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.userId;

        const userBody: UserParams = req.body;

        const user: UserParams = { _id: userId, ...userBody };

        const response: UsersResponse = await updateUser(user);

        if(!response) throw new Error("User not found");

        res.status(200).send({
            oldData: response,
            modifiedData: userBody
        });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

export default { create, read, update };
