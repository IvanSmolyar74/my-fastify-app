"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongo = void 0;
const mongodb_1 = require("mongodb");
class MongoService {
    constructor(uri) {
        this.db = null;
        console.log("uri", uri);
        this.client = new mongodb_1.MongoClient(uri);
    }
    async connect() {
        if (!this.db) {
            await this.client.connect();
            this.db = this.client.db("sample_guides");
        }
    }
    async disconnect() {
        if (this.client) {
            await this.client.close();
            this.db = null;
        }
    }
    async find(collectionName, filter, options) {
        if (!this.db) {
            throw new Error("Database not connected");
        }
        const collection = this.db.collection(collectionName);
        return await collection.find(filter, options).toArray();
    }
}
exports.mongo = new MongoService(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.bqzwf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
