import logger from "../../utils/logger";

const testProducts = (): string => {
    try {
        return "Ok";
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

export default { testProducts };
