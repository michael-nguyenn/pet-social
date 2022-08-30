import { MongoClient } from 'mongodb';

const connectToDB = async () => {
  const client = await MongoClient.connect(process.env.DB_URL);

  const db = client.db();
};
