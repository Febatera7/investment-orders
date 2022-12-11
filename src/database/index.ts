import logger from "../utils/logger";
import sequelizeConnection from "./connection";

const initializeDatabases = async (): Promise<void> => {
	try {
		await sequelizeConnection.sync();
	} catch(error) {
		logger.error(error);
	}
};

export default initializeDatabases;
