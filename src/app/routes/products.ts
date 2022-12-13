import { ProductsController } from "../controllers";
import { Router } from "express";
import productsValidator from "../middlewares/validation/products";

const { create, read, update, activeInactive } = ProductsController;

const routes = Router();

routes.post("/", productsValidator, create);
routes.get("/", read);
routes.patch("/update/:productId", productsValidator, update);
routes.patch("/inactive/:productId", activeInactive);

export default routes;
