import fastify from 'fastify';
import { setRoutes } from './routes/index';
import { MongoService } from './services/mongo.service';

const app = fastify({ logger: true });

app.register(setRoutes);

export const mongo = new MongoService("mongodb+srv://ivansmolar09001:BujL5AxCU5Zod1uo@cluster0.bqzwf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const start = () => {
  app.listen({ port: 3000 }, (err, address) => {
      if (err) {
        app.log.error(err);
        process.exit(1);
      } else {
        app.log.info(`Server listening at ${address}`);
        mongo.connect()
      }
    });
};

start();
