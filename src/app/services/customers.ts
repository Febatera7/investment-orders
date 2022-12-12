import logger from "../../utils/logger";

const testCustomers = (): string => {
    try {
        return "Ok";
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

export default { testCustomers };
