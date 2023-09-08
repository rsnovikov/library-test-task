import { Router } from "express";
import { param } from "express-validator";
import booksController from "../controllers/books.controller.js";
import booksValidation from "../validations/books.validation.js";
const booksRoutes = new Router();

booksRoutes.post("/", booksValidation, booksController.create);
booksRoutes.get("/", booksController.getAll);
booksRoutes.put(
  "/:id",
  param("id").isInt().withMessage("id должен быть целым числом"),
  booksValidation,
  booksController.update
);
booksRoutes.delete(
  "/:id",
  param("id").isInt().withMessage("id должен быть целым числом"),
  booksController.remove
);

export default booksRoutes;
