import { connectToDatabase } from '../../../utilities/db';
import { hashPassword } from '../../../utilities/auth';

async function handler(req, res) {
  const data = req.body;

  const { email, password } = data;

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 6
  ) {
    res.status(422).json({
      message: 'Invalid Input!',
    });

    return;
  }

  let client = await connectToDatabase();

  const db = client.db();

  const hashedPassword = await hashPassword(password);

  const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    res
      .status(422)
      .send({ message: 'User exists already! Please use different Email' });

    client.close();
    return;
  }

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'created User!' });
}

export default handler;
