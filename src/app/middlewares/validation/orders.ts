import { NextFunction, Request, Response } from "express";
import { OrdersParams } from "../../interfaces/orders";
import logger from "../../../utils/logger";

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { productQuantity }: OrdersParams = req.body;

        if (productQuantity
            && typeof productQuantity !== "number"
            || Math.floor(productQuantity) !== productQuantity
        ) throw new Error("Product Quantity must to be a integer");


        next();
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};