import { FastifyInstance } from 'fastify';
import { mongo } from '../app';
// import { IndexController } from '../controllers/index';

export async function setRoutes(fastify: FastifyInstance) {
    // const indexController = new IndexController();
    fastify.get('/', async (request, reply) => {
        const res = await mongo.find('planets', {}, {
            sort: { orderFromSun: 1 },
        })
        reply.send({ message: res });
    });
    fastify.get<{
        Params: { type: string };
    }>('/:type', async (request, reply) => {
        const {type} = request.params;
        reply.send({type});
    });
}
