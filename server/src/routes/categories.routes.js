import { Router } from "express";
import { oneOf, param, query } from "express-validator";
import categoriesController from "../controllers/categories.controller.js";
import categoriesValidation from "../validations/categories.validation.js";
const categoriesRoutes = new Router();

categoriesRoutes.post("/", categoriesValidation, categoriesController.create);
categoriesRoutes.get(
  "/",
  query("limit").isInt().withMessage("limit должен быть целым числом"),
  query("page").isInt().withMessage("offset должен быть целым числом"),
  categoriesController.getAll
);
categoriesRoutes.patch(
  "/:id",
  param("id").isInt().withMessage("id должен быть целым числом"),
  oneOf(categoriesValidation, {
    message:
      "Нужно передать как минимум один параметр и все переданные параметры должны соответствовать валидации",
  }),
  categoriesController.update
);
categoriesRoutes.delete(
  "/:id",
  param("id").isInt().withMessage("id должен быть целым числом"),
  categoriesController.remove
);

export default categoriesRoutes;
