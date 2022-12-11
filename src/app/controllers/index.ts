import { Request, Response } from "express";
import { helloWorldServices } from "../services";
import logger from "../../utils/logger";

export const helloWorldController = async(req: Request, res: Response): Promise<void> => {
    try {
        const helloWorld = helloWorldServices();

        res.status(200).send({ message: helloWorld });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};
