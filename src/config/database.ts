import Connection from "./database.dto";

const {
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_HOST,
    MYSQL_PORT,
} = process.env;

const databaseConfig: Connection = {
    database: MYSQL_DATABASE,
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    host: MYSQL_HOST,
    port: parseInt(MYSQL_PORT)
};

export = databaseConfig;
