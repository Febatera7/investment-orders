import { CustomersController } from "../controllers";
import { Router } from "express";

const { create, read, update, activeInactive } = CustomersController;

const routes = Router();

routes.post("/", create);
routes.get("/", read);
routes.patch("/update/:customerId", update);
routes.patch("/inactive/:customerId", activeInactive);

export default routes;
