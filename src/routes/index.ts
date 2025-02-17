import { FastifyInstance } from 'fastify';
import { mongo } from "../services/mongo.service";

export async function setRoutes(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    const res = await mongo.find("Themes", {});
    reply.send(res);
  });
  fastify.get<{
    Params: { theme: string };
  }>("/:theme", async (request, reply) => {
    const { theme } = request.params;
    const res = await mongo.find(theme, {});
    reply.send(res);
  });
  fastify.post<{
    Body: { theme: string; id: string };
  }>("/answer", async (request, reply) => {
    const { theme, id } = request.body;
    const res = await mongo.find(`${theme}Answers`, { questionId: id });
    reply.send(res);
  });
}
