import { OrdersController } from "../controllers";
import { Router } from "express";

const { create, read, update } = OrdersController;

const routes = Router();

routes.post("/", create);
routes.get("/", read);
routes.patch("/", update);

export default routes;
