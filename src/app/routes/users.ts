import { Router } from "express";
import { UsersController } from "../controllers";
import authMiddleware from "../middlewares/authentication";
import userValidator from "../middlewares/validation/user";

const { create, read, update, activeInactive } = UsersController;

const routes = Router();

routes.post("/", userValidator, create);
routes.get("/", authMiddleware, read);
routes.patch("/update", authMiddleware, userValidator, update);
routes.patch("/inactive", authMiddleware, activeInactive);

export default routes;
