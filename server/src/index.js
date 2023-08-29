import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import express from "express";
import { db } from "./db";

const bootstrap = async () => {
  dotenvConfig();

  const app = express();
  app.use(cors());

  const PORT = process.env.PORT ?? 8080;

  try {
    db.connect();

    app.listen(8080, () => {
      console.log(`Server successfully has been started on port: ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

bootstrap();
