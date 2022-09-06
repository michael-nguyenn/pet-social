import { getSession } from 'next-auth/client';

async function handler(req, res) {
  if (req.method !== 'PATCH') {
    return;
  }

  // GRAB SESSION TOKEN AND USE TO AUTHORIZE USER
  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: 'Not authorized!' });
    return;
  }

  const userEmail = session.user.email;
  const name = req.body.name;
  const dateOfBirth = req.body.dateOfBirth;
  const animalType = req.body.animalType;
  const breed = req.body.breed;
  const city = req.body.city;
  const favouriteToys = req.body.favouriteToys;
  const favouriteFood = req.body.favouriteFood;

  const client = await connectToDatabase();

  const usersCollection = client.db().collection('users');

  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: 'User not found.' });
    client.close();
    return;
  }

  const result = await usersCollection.updateOne(
    { email: userEmail },
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
  res.status(200).json({ message: 'User updated!' });
}

export default handler;
