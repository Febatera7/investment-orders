import logger from "../utils/logger";
import mongoConnection from "./connection";

const initializeDatabases = async (): Promise<void> => {
	try {
		await mongoConnection();
	} catch(error) {
		logger.error(error);
	}
};

export default initializeDatabases;
