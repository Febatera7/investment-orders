import { Router } from "express";
import session from "../controllers/session";

const routes = Router();

routes.post("/", session);

export default routes;
