import { db, pgp } from "../db.js";
import isNotExists from "../lib/db/isNotExists.js";

const table = "categories";

const columnSet = new pgp.helpers.ColumnSet(
  [
    { name: "name", skip: isNotExists },
    {
      name: "description",
      skip: isNotExists,
    },
  ],
  {
    table,
  }
);

const categoriesModel = {
  create(category) {
    const query = pgp.helpers.insert(category, columnSet) + " RETURNING *";
    return db.one(query);
  },
  getAll(limit, page) {
    let query = "SELECT * FROM $(table:name)";

    if (limit > 0) {
      query += pgp.as.format(" LIMIT $(limit)", { limit });
      if (page > 0) {
        const offset = (page - 1) * limit;
        query += pgp.as.format(" OFFSET $(offset)", { offset });
      }
    }

    return db.any(query, { table });
  },
  update(id, category) {
    const query = pgp.helpers.update(category, columnSet) + " WHERE id=$(id) RETURNING *";
    return db.one(query, { id });
  },
  remove(id) {
    const query = "DELETE FROM $(table:name) WHERE id=$(id) RETURNING id";
    return db.one(query, { table, id });
  },
};

export default categoriesModel;
