import pgPromise from "pg-promise";

const pgp = pgPromise();

export const db = pgp({
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT),
  host: process.env.POSTGRES_HOST,
});
