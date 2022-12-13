import { CreateResponse, UserParams, UsersResponse } from "../interfaces/users";
import { UsersRepository } from "../repositories";
import generateId from "../helpers/generateId";
import { generateToken } from "../helpers/genValidateToken";
import logger from "../../utils/logger";
import { passwordGenerate } from "../helpers/passwordHash";

const {
    createUser: create,
    findUser: find,
    updateUser: update,
    activeInactiveUser: activeInactive,
    findByEmail: findEmail
} = UsersRepository;

const createUser = async (user: UserParams): Promise<CreateResponse> => {
    try {
        const userId = generateId();

        const passwordHash = await passwordGenerate(user.password);

        const newUser: UsersResponse = await create({
            _id: userId,
            name: user.name,
            password: passwordHash,
            email: user.email,
            cpf: user.cpf,
            birthday: user.birthday,
        });

        const token: string = generateToken(userId);

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

const activeInactiveUser = async (userId: number): Promise<UsersResponse> => {
    try {
        const user: UsersResponse = await activeInactive(userId);

        return user;
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
    activeInactiveUser,
    findByEmail
};
