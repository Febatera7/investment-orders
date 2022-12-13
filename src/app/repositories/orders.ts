import logger from "../../utils/logger";

const testOrders = (): string => {
    try {
        return "Ok";
    } catch (error) {
        logger.error(error);
        return error.message;
    }
};

export default { testOrders };
