import fastify from "fastify";
import "dotenv/config";
import { setRoutes } from "./routes/index";
import { mongo } from "./services/mongo.service";

const app = fastify({ logger: true });

app.register(setRoutes);
const PORT = process.env.PORT || 3000;
const start = () => {
  app.listen({ port: +PORT }, (err, address) => {
    try {
      if (err) {
        app.log.error(err);
        process.exit(1);
      } else {
        app.log.info(`Server listening at ${address}`);
        mongo
          .connect()
          .then(() => {
            console.log("Connected to MongoDB");
          })
          .catch((e) => {
            console.log("Failed connect to MongoDB: ", e);
          });
      }
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  });
};

start();
