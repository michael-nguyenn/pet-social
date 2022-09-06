import { connectToDatabase } from '../../../utilities/db';

async function handler(req, res) {
  let client = await connectToDatabase();

  const db = client.db();

  const usersCollection = db.collection('users');

  const users = await usersCollection.find();

  client.close();

  res.status(201).json({ users: users });
}

export default handler;
