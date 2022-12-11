import logger from "../utils/logger";
import sequelizeConnection from "./connection";

const initializeDatabases = async (): Promise<void> => {
	try {
		await sequelizeConnection.sync({ force: true });
	} catch(error) {
		logger.error(error);
	}
};

export default initializeDatabases;
