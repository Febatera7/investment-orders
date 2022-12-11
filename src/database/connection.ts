import { Sequelize } from "sequelize";
import databaseConfig from "../config/database";
import logger from "../utils/logger";

const {
    database,
    host,
    password,
    port,
    username
} = databaseConfig;

const sequelizeConnection = new Sequelize(
    database,
    username,
    password,
    {
        host,
        port,
        dialect: "mysql",
        // logging: false
    },
);

sequelizeConnection.authenticate().then(() => {
    logger.info(`Sequelize connected to database ${database}`);
}).catch((error) => {
    logger.error(`Sequelize not connected to database: ${error}`);
});

export default sequelizeConnection;
