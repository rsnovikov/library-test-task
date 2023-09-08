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
    const {
      category: { id: categoryId },
      ...rest
    } = book;
    const formattedBook = { ...rest, categoryId };

    const query = pgp.helpers.insert(formattedBook, columnSet) + " RETURNING *";
    return db.one(query);
  },

  async getAll() {
    const query = `SELECT $(booksTable:name).id, title, author, publisher, year, rating,
    $(booksTable:name).created_at as "createdAt", category_id as "categoryId",
    $(categoriesTable:name).name as "categoryName" FROM $(booksTable:name) LEFT JOIN
    $(categoriesTable:name) ON $(booksTable:name).category_id = $(categoriesTable:name).id`;

    const books = await db.any(query, { booksTable: table, categoriesTable: "categories" });

    const formattedBooks = books.map(({ categoryId, categoryName, ...rest }) => ({
      ...rest,
      category: { name: categoryName, id: categoryId },
    }));

    return formattedBooks;
  },

  update(id, book) {
    const {
      category: { id: categoryId },
      ...rest
    } = book;
    const formattedBook = { ...rest, categoryId };

    const query = pgp.helpers.update(formattedBook, columnSet) + " WHERE id=$(id) RETURNING *";
    return db.one(query, { id });
  },

  remove(id) {
    const query = "DELETE FROM $(table:name) WHERE id=$(id) RETURNING id";
    return db.one(query, { table, id });
  },
};

export default booksModel;
