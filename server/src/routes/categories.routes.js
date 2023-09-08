import { Router } from "express";
import { param, query } from "express-validator";
import categoriesController from "../controllers/categories.controller.js";
import categoriesValidation from "../validations/categories.validation.js";
const categoriesRoutes = new Router();

categoriesRoutes.post("/", categoriesValidation, categoriesController.create);
categoriesRoutes.get(
  "/",
  query("limit").optional().isInt().withMessage("limit должен быть целым числом"),
  query("page").optional().isInt().withMessage("offset должен быть целым числом"),
  categoriesController.getAll
);
categoriesRoutes.put(
  "/:id",
  param("id").isInt().withMessage("id должен быть целым числом"),
  categoriesValidation,
  categoriesController.update
);
categoriesRoutes.delete(
  "/:id",
  param("id").isInt().withMessage("id должен быть целым числом"),
  categoriesController.remove
);

export default categoriesRoutes;
