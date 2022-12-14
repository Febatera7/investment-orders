import { CreateResponse, UserParams, UsersResponse } from "../interfaces/users";
import { UsersRepository } from "../repositories";
import generateId from "../helpers/generateId";
import { generateToken } from "../helpers/genValidateToken";
import logger from "../../utils/logger";
import { passwordGenerate } from "../helpers/passwordHash";
import verifyEmailExists from "../helpers/verifyEmailExists";

const {
    createUser: create,
    findUser: find,
    updateUser: update,
    findByEmail: findEmail
} = UsersRepository;

const createUser = async (user: UserParams): Promise<CreateResponse> => {
    try {
        let userId: number;

        let findId = true;

        while (findId) {
            userId = generateId();
            const idExists = await find(userId);
            if (!idExists) findId = false;
        }
        
        const passwordHash = await passwordGenerate(user.password);

        if(await verifyEmailExists(user.email)) throw new Error("E-mail already registered");
        
        const newUser: UsersResponse = await create({
            _id: userId,
            name: user.name,
            password: passwordHash,
            email: user.email,
            cpf: user.cpf,
            birthday: user.birthday,
        });

        let token: string = generateToken(userId);

        if (typeof newUser === "string") token = "";

        return { newUser, token };
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findUser = async (userId: number): Promise<UsersResponse> => {
    try {
        const user: UsersResponse = await find(userId);

        return user;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const updateUser = async (user: UserParams): Promise<UsersResponse> => {
    try {
        if (user.password) {
            const passwordHash: string = await passwordGenerate(user.password);

            user.password = passwordHash;
        }

        const updateUser: UsersResponse = await update(user);

        return updateUser;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findByEmail = async (email: string): Promise<UsersResponse> => {
    try {
        const user: UsersResponse = await findEmail(email);

        return user;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

export default {
    createUser,
    findUser,
    updateUser,
    findByEmail
};
