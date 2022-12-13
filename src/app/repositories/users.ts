import { UserParams } from "../interfaces/users";
import Users from "../models/users/dto";
import UsersModel from "../models/users";
import logger from "../../utils/logger";

const createUsers = async (user: UserParams): Promise<Users> => {
    try {
        const createUser: Users = await UsersModel.create(user);

        return createUser;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findUser = async (userId: number): Promise<Users> => {
    try {
        const user: Users = await UsersModel.findById(userId);

        return user;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const updateUser = async (user: UserParams): Promise<Users> => {
    try {
       const oldUserDocument: Users = await UsersModel.findByIdAndUpdate(
            user._id,
            { ...user }
        );

        return oldUserDocument;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const activeInactiveUser = async (userId: number): Promise<Users> => {
    try {
        const user: Users = await UsersModel.findById(userId);

        const active = user.active ? false : true;

        await user.update({ active });

        user.active = active;

        return user;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

const findByEmail = async (email: string): Promise<Users> => {
    try {
        const user: Users = await UsersModel.findOne({ email });

        return user;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

export default {
    createUsers,
    findUser,
    updateUser,
    activeInactiveUser,
    findByEmail
};
