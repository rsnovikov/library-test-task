import { Router } from "express";
import booksRoutes from "./books.routes.js";
import categoriesRoutes from "./categories.routes.js";
const routes = new Router();

routes.use("/categories", categoriesRoutes);
routes.use("/books", booksRoutes);

export default routes;
