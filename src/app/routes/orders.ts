import { OrdersController } from "../controllers";
import { Router } from "express";
import ordersValidator from "../middlewares/validation/orders";

const { create, readAll, readByCustomer, readByProduct, deleteOne } = OrdersController;

const routes = Router();

routes.post("/", ordersValidator, create);
routes.get("/all", readAll);
routes.get("/customer/:customerId", readByCustomer);
routes.get("/product/:productId", readByProduct);
routes.delete("/:orderId", deleteOne);

export default routes;
