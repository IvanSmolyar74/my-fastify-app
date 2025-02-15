import fastify from "fastify";
import { setRoutes } from "./routes/index";
import { mongo } from "./services/mongo.service";

const app = fastify({ logger: true });

app.register(setRoutes);

const start = () => {
  app.listen({ port: 10000 }, (err, address) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    } else {
      app.log.info(`Server listening at ${address}`);
      mongo.connect();
    }
  });
};

start();
