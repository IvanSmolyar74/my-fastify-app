"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoutes = setRoutes;
const mongo_service_1 = require("../services/mongo.service");
async function setRoutes(fastify) {
    fastify.get("/", async (request, reply) => {
        const res = await mongo_service_1.mongo.find("planets", {}, {
            sort: { orderFromSun: 1 },
        });
        reply.send({ message: res });
    });
    fastify.get("/:type", async (request, reply) => {
        const { type } = request.params;
        reply.send({ type });
    });
}
