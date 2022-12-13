import { ProductsController } from "../controllers";
import { Router } from "express";

const { create, read, update, activeInactive } = ProductsController;

const routes = Router();

routes.post("/", create);
routes.get("/", read);
routes.patch("/update/:productId", update);
routes.patch("/inactive/:productId", activeInactive);

export default routes;
