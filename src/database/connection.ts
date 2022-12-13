import logger from "../utils/logger";
import mongoose from "mongoose";

const { MONGO_HOST, APP_NAME } = process.env;

const mongoConnection = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGO_HOST);
        logger.info(`${APP_NAME} Database connected`);
    } catch(error) {
        logger.error(`Error on connected to ${APP_NAME} Database: ${error}`);
    }
};

export default mongoConnection;
