/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request, Response } from "express";
import ResponseSession from "../interfaces/session";
import { UserParams } from "../interfaces/users";
import logger from "../../utils/logger";
import { sessionService } from "../services";

export default async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password }: UserParams = req.body;

        const session: ResponseSession = await sessionService(email, password);

        res.status(200).send(session);
    } catch (error) {
        logger.error("Error on login: ", error);
        res.status(401).send({ error: error.message });
    }
};
