"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
require("dotenv/config");
const index_1 = require("./routes/index");
const mongo_service_1 = require("./services/mongo.service");
const app = (0, fastify_1.default)({ logger: true });
app.register(index_1.setRoutes);
const PORT = process.env.PORT || 3000;
const start = () => {
    app.listen({ port: +PORT }, (err, address) => {
        try {
            if (err) {
                app.log.error(err);
                process.exit(1);
            }
            else {
                app.log.info(`Server listening at ${address}`);
                mongo_service_1.mongo
                    .connect()
                    .then(() => {
                    console.log("Connected to MongoDB");
                })
                    .catch((e) => {
                    console.log("Failed connect to MongoDB: ", e);
                });
            }
        }
        catch (e) {
            console.log(e);
            process.exit(1);
        }
    });
};
start();
