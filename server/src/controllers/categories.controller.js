import handleValidationErrors from "../lib/validation/handleValidation.js";
import categoriesModel from "../models/categories.model.js";
const categoriesController = {
  async create(req, res, next) {
    try {
      handleValidationErrors(req);

      const category = await categoriesModel.create(req.body);
      res.json(category);
    } catch (e) {
      next(e);
    }
  },

  async getAll(req, res, next) {
    try {
      handleValidationErrors(req);

      const { limit, page } = req.query;

      const categories = await categoriesModel.getAll(Number(limit), Number(page));
      res.json(categories);
    } catch (e) {
      next(e);
    }
  },

  async update(req, res, next) {
    try {
      handleValidationErrors(req);

      const category = await categoriesModel.update(req.params.id, req.body);
      res.json(category);
    } catch (e) {
      next(e);
    }
  },

  async remove(req, res, next) {
    try {
      handleValidationErrors(req);

      const category = await categoriesModel.remove(req.params.id);
      res.json(category);
    } catch (e) {
      next(e);
    }
  },
};

export default categoriesController;
