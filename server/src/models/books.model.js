import { db, pgp } from "../db.js";
import isNotExists from "../lib/db/isNotExists.js";

const table = "books";

const columnSet = new pgp.helpers.ColumnSet(
  [
    { name: "title", skip: isNotExists },
    {
      name: "author",
      skip: isNotExists,
    },
    {
      name: "publisher",
      skip: isNotExists,
    },
    {
      name: "year",
      skip: isNotExists,
    },
    {
      name: "rating",
      skip: isNotExists,
    },
    {
      name: "category_id",
      prop: "categoryId",
      skip: isNotExists,
    },
  ],
  {
    table,
  }
);

const booksModel = {
  create(book) {
    const query = pgp.helpers.insert(book, columnSet) + " RETURNING *";
    return db.one(query);
  },
  getAll() {
    const query = "SELECT * FROM $(table:name)";
    return db.any(query, { table });
  },
  update(id, book) {
    const query = pgp.helpers.update(book, columnSet) + " WHERE id=$(id) RETURNING *";
    return db.one(query, { id });
  },
  remove(id) {
    const query = "DELETE FROM $(table:name) WHERE id=$(id) RETURNING id";
    return db.one(query, { table, id });
  },
};

export default booksModel;
