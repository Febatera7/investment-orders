import { Router } from "express";
import { UsersController } from "../controllers";

const { create, read, update, activeInactive } = UsersController;

const routes = Router();

routes.post("/", create);
routes.get("/", read);
routes.patch("/update", update);
routes.patch("/inactive", activeInactive);

export default routes;
