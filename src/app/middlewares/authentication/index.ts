/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from "express";
import Decoded from "../../interfaces/authMiddleware";
import logger from "../../../utils/logger";
import { usersServices } from "../../services";
import { validateToken } from "../../helpers/genValidateToken";

const { findUser } = usersServices;

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        if(req.headers.customerid) req.customerId = parseInt(req.headers.customerid.toString());
        if(req.headers.productid) req.productId = parseInt(req.headers.productid.toString());

        const authHeader = req.headers.authorization;
        if (!authHeader) throw new Error("Unauthorized");

        const [, token] = authHeader.split(" ");

        if (!token) throw new Error("Unauthorized");

        const decoded = validateToken(token);

        const decodedParse: Decoded = JSON.parse(decoded);

        const user = await findUser(decodedParse.userId);

        if (!user) throw new Error("Unauthorized");

        req.userId = decodedParse.userId;

        next();
    } catch (error) {
        res.status(401).send({ 
            error: error.message === "Unexpected token u in JSON at position 0" ? "Session expired" : error.message 
        });
    }
};

