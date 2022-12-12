import { Router } from "express";
import { UsersController } from "../controllers";

const { create, read, update, inactive } = UsersController;

const routes = Router();

routes.post("/", create);
routes.get("/", read);
routes.patch("/update", update);
routes.patch("/inactive", inactive);

export default routes;
