import { Router } from "express";
import { oneOf, param } from "express-validator";
import booksController from "../controllers/books.controller.js";
import booksValidation from "../validations/books.validation.js";
const booksRoutes = new Router();

booksRoutes.post("/", booksValidation, booksController.create);
booksRoutes.get("/", booksController.getAll);
booksRoutes.patch(
  "/:id",
  param("id").isInt().withMessage("id должен быть целым числом"),
  oneOf(booksValidation, {
    message:
      "Нужно передать как минимум один параметр и все переданные параметры должны соответствовать валидации",
  }),
  booksController.update
);
booksRoutes.delete(
  "/:id",
  param("id").isInt().withMessage("id должен быть целым числом"),
  booksController.remove
);

export default booksRoutes;
