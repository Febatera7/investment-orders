import "dotenv/config";
import cors from "cors";
import express from "express";
import routes from "./routes";

const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

export default app;
