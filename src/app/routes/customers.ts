import { CustomersController } from "../controllers";
import { Router } from "express";

const { create, read, update, inactive } = CustomersController;

const routes = Router();

routes.post("/", create);
routes.get("/", read);
routes.patch("/update", update);
routes.patch("/inactive", inactive);

export default routes;
