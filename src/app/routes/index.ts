import { Router } from "express";
import customersRoutes from "./customers";
import ordersRoutes from "./orders";
import productsRoutes from "./products";
import usersRoutes from "./users";

const routes = Router();

routes.use("/customers", customersRoutes);
routes.use("/orders", ordersRoutes);
routes.use("/products", productsRoutes);
routes.use("/users", usersRoutes);

export default routes;
