import { NextFunction, Request, Response } from "express";
import { ProductsParams } from "../../interfaces/products";
import logger from "../../../utils/logger";

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { name, value }: ProductsParams = req.body;

        if (name && typeof name !== "string") throw new Error("Name must to be a string");

        if (value && typeof value !== "number") throw new Error("Value must to be a number integer or float");

        next();
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};