import { NextFunction, Request, Response } from "express";
import { CustomersParams } from "../../interfaces/customers";
import logger from "../../../utils/logger";

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { name, birthday, cpf, email }: CustomersParams = req.body;

        if (name && typeof name !== "string") throw new Error("Name must to be a string");

        const dateSplit = birthday ? birthday.toString().split("-") : [];

        if (birthday && !(dateSplit.length === 3
            && parseInt(dateSplit[0])
            && parseInt(dateSplit[1])
            && parseInt(dateSplit[2])
            && new Date(birthday)
        )) throw new Error("Birthday is not in the Date format");

        if (cpf && typeof cpf !== "string" || cpf && cpf.length !== 11)
            throw new Error("CPF must to be a string with 11 characters");

        const emailRegex = /\S+@\S+\.\S+/;

        const emailVerify = email ? emailRegex.test(email) : true;

        if (!emailVerify) throw new Error("Email is not in the correct format");

        next();
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};