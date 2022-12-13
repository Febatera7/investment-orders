import { Router } from "express";
import authMiddleware from "../middlewares/authentication";
import customersRoutes from "./customers";
import ordersRoutes from "./orders";
import productsRoutes from "./products";
import sessionRoutes from "./session";
import usersRoutes from "./users";

const routes = Router();

routes.use("/customers", authMiddleware, customersRoutes);
routes.use("/orders", authMiddleware, ordersRoutes);
routes.use("/products", authMiddleware, productsRoutes);
routes.use("/session", sessionRoutes);
routes.use("/users", usersRoutes);

export default routes;
