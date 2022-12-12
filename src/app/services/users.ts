import UsersModel from "../models/users";
import logger from "../../utils/logger";

const createUsers = async (user): Promise<object> => {
    try {
        const createUser = await UsersModel.create({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            cpf: user.cpf,
            birthday: user.birthday
        });

        return createUser;
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

export default { createUsers };
