import ResponseSession from "../interfaces/session";
import { UsersResponse } from "../interfaces/users";
import { generateToken } from "../helpers/genValidateToken";
import logger from "../../utils/logger";
import { passwordRead } from "../helpers/passwordHash";
import { usersServices } from ".";

export default async (email: string, password: string): Promise<ResponseSession> => {
    try {
        const findUser: UsersResponse = await usersServices.findByEmail(email);

        const verifyPass: boolean = await passwordRead(password, findUser.password);

        logger.info(verifyPass);
        logger.info(findUser);

        if(!findUser || !verifyPass) throw new Error("Email or password dont registered");

        const token: string = generateToken(findUser._id);

        const response: ResponseSession =  {
            token,
            name: findUser.name
        };

        return response;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

