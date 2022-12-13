import { OrdersController } from "../controllers";
import { Router } from "express";

const { create, readAll, readByCustomer, readByProduct, deleteOne } = OrdersController;

const routes = Router();

routes.post("/", create);
routes.get("/all", readAll);
routes.get("/customer/:customerId", readByCustomer);
routes.get("/product/:productId", readByProduct);
routes.delete("/", deleteOne);

export default routes;
