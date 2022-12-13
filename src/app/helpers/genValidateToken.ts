import { sign, verify } from "jsonwebtoken";
import authConfig from "../config/auth";
import logger from "../../utils/logger";

const generateToken = (id: number): string => {
    try {
        const token = sign({ userId: id }, 
            authConfig.secret, 
            {
            expiresIn: authConfig.expiresIn,
          });

          return token;
    } catch (error) {
        logger.error(error);
    }
};

const validateToken = (token: string): string => {
    try {
        const decoded = verify(token, authConfig.secret);

        return JSON.stringify(decoded);
    } catch (error) {
        logger.error(error);
    }
};

export {
    generateToken,
    validateToken
};
