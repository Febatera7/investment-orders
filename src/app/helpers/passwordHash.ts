import bcrypt from "bcryptjs";
import logger from "../../utils/logger";

const passwordGenerate = async (password: string): Promise<string> => {
    try {
        const passwordHash = await bcrypt.hash(password, 8);

        return passwordHash;
    } catch(error) {
        logger.error(error);
    }
};

const passwordRead = async (password: string, userPassword: string): Promise<boolean> => {
    try {
        const passwordCompare = await bcrypt.compare(password, userPassword);

        return passwordCompare;
    } catch(error) {
        logger.error(error);
    }
};

export {
    passwordGenerate,
    passwordRead
};
