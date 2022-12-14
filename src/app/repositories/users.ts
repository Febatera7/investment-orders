import { UserParams } from "../interfaces/users";
import Users from "../models/users/dto";
import UsersModel from "../models/users";
import logger from "../../utils/logger";

const createUser = async (user: UserParams): Promise<Users> => {
    try {
        const newUser: Users = await UsersModel.create(user);

        return newUser;
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
    createUser,
    findUser,
    updateUser,
    findByEmail
};
