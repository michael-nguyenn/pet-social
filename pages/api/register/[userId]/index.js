import { connectToDatabase } from '../../../../utilities/db';
const { ObjectId } = require('mongodb');

async function registerHandler(req, res) {
  const data = req.body;
  const {
    name,
    dateOfBirth,
    animalType,
    breed,
    city,
    favouriteToys,
    favouriteFood,
  } = data;

  let client = await connectToDatabase();
  const db = client.db();

  const user = await db
    .collection('users')
    .findOne({ _id: ObjectId(req.url.slice(14)) });

  if (!user) {
    res.status(422).send({ message: 'User does not exist!' });

    client.close();
    return;
  }

  const result = await db.collection('users').updateOne(
    { _id: ObjectId(req.url.slice(14)) },
    {
      $set: {
        name: name,
        dateOfBirth: dateOfBirth,
        animalType: animalType,
        breed: breed,
        city: city,
        favouriteToys: favouriteToys,
        favouriteFood: favouriteFood,
      },
    }
  );

  client.close();

  res.status(201).json({ message: 'Successfully registered!' });
}

export default registerHandler;
