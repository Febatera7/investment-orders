/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../../repositories";
import logger from "../../../utils/logger";
import { validateToken } from "../../helpers/genValidateToken";

const { findUser } = UsersRepository;

interface Decoded {
    userId?: number,
    iat?: number,
    exp?: number
}

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
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
        logger.error(error);
        res.status(401).send({ error: error.message || "Session expired" });
    }
};

export default authMiddleware;
