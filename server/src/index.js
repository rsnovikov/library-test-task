import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import express from "express";
import { db } from "./db.js";
import errorHandleMiddleware from "./middlewares/errorHandleMiddleware.js";
import routes from "./routes/routes.js";

const bootstrap = async () => {
  dotenvConfig();

  const app = express();
  app.use(cors({ origin: "*" }));
  app.use(express.json());
  app.use("/api", routes);
  app.use(errorHandleMiddleware);

  const PORT = process.env.PORT ?? 8080;

  try {
    // check first db connection
    const connection = await db.connect();
    await connection.done();

    app.listen(PORT, () => {
      console.log(`Server successfully has been started on port: ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

bootstrap();
