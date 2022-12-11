import { Router } from "express";
import { helloWorldController } from "../controllers";

const routes = Router();

routes.get("/", helloWorldController);

export default routes;
