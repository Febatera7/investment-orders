import "dotenv/config";
import cors from "cors";
import express from "express";
import initializeDatabases from "../database";
import routes from "./routes";

const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

initializeDatabases();

export default app;
