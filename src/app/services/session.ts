import ResponseSession from "../interfaces/session";
import Users from "../models/users/dto";
import { UsersRepository } from "../repositories";
import { generateToken } from "../helpers/genValidateToken";
import logger from "../../utils/logger";
import { passwordRead } from "../helpers/passwordHash";

export default async (email: string, password: string): Promise<ResponseSession> => {
    try {
        const findUser: Users = await UsersRepository.findByEmail(email);

        const verifyPass: boolean = await passwordRead(password, findUser.password);

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

