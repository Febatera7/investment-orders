import app from "./api/app";
import logger from "./utils/logger";

const { APP_NAME: appName, PORT: port } = process.env;

app.listen(port, () => logger.info(`${appName} running on port: ${port}`));
