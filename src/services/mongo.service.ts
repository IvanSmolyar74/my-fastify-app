import { MongoClient, Db, Document, Filter, FindOptions } from 'mongodb';

class MongoService {
  private client: MongoClient;
  private db: Db | null = null;

  constructor(uri: string) {
    this.client = new MongoClient(uri);
  }

  async connect(): Promise<void> {
    if (!this.db) {
      await this.client.connect();
      this.db = this.client.db("FrontendQuiz");
    }
  }

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.db = null;
    }
  }

  async find(
    collectionName: string,
    filter: Filter<Document>,
    options?: FindOptions
  ): Promise<any[]> {
    if (!this.db) {
      throw new Error("Database not connected");
    }
    const collection = this.db.collection(collectionName);
    return await collection.find(filter, options).toArray();
  }
}

export const mongo = new MongoService(process.env.MONGO_URI || "");
