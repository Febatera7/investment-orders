import crypto from "crypto";
import logger from "../../utils/logger";

const generateId = (): number => {
    try {
        const id = crypto.randomInt(99999999);

        return id;
    } catch (error) {
        logger.error(error);
    }
};

export default generateId;
