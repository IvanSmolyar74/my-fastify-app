import fastify from "fastify";
import "dotenv/config";
import { setRoutes } from "./routes/index";
import { mongo } from "./services/mongo.service";

const app = fastify({ logger: true });

app.register(setRoutes);
const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await mongo.connect();
    app.log.info("Connected to MongoDB");
    app.listen({ port: +PORT, host: "0.0.0.0" }, async (err, address) => {
      if (err) {
        app.log.error(err);
        process.exit(1);
      } else {
        app.log.info(`Server listening at ${address}`);
      }
    });
  } catch (e) {
    app.log.error("Failed to connect to MongoDB: ", e);
    process.exit(1);
  }
};

start();
