import logger from "../../utils/logger";

const testUsers = (): string => {
    try {
        return "Ok";
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

export default { testUsers };
