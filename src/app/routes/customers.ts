import { CustomersController } from "../controllers";
import { Router } from "express";
import customerValidator from "../middlewares/validation/customer";

const { create, read, update, activeInactive } = CustomersController;

const routes = Router();

routes.post("/", customerValidator, create);
routes.get("/", read);
routes.patch("/update/:customerId", update);
routes.patch("/inactive/:customerId", activeInactive);

export default routes;
