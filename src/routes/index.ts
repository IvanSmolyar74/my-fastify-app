import { FastifyInstance } from 'fastify';
import { mongo } from "../services/mongo.service";

export async function setRoutes(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    const res = await mongo.find("Themes", {});
    reply.send(res);
  });
  fastify.get<{
    Params: { type: string };
  }>("/:type", async (request, reply) => {
    const { type } = request.params;
    reply.send({ type });
  });
}
