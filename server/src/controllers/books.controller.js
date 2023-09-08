import handleValidationErrors from "../lib/validation/handleValidation.js";
import booksModel from "../models/books.model.js";

const booksController = {
  async create(req, res, next) {
    try {
      handleValidationErrors(req);

      const book = await booksModel.create(req.body);
      res.json(book);
    } catch (e) {
      next(e);
    }
  },

  async getAll(_, res, next) {
    try {
      const books = await booksModel.getAll();
      res.json(books);
    } catch (e) {
      next(e);
    }
  },

  async update(req, res, next) {
    try {
      handleValidationErrors(req);

      const book = await booksModel.update(req.params.id, req.body);
      res.json(book);
    } catch (e) {
      next(e);
    }
  },

  async remove(req, res, next) {
    try {
      handleValidationErrors(req);

      const book = await booksModel.remove(req.params.id);
      res.json(book);
    } catch (e) {
      next(e);
    }
  },
};

export default booksController;
