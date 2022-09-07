import { Fragment } from 'react';
import ProfileHeader from '../../components/profile/profileHeader/ProfileHeader';
import ProfileImages from '../../components/profile/profileImages/ProfileImages';
import { connectToDatabase } from '../../utilities/db';
const { ObjectId } = require('mongodb');

function ProfilePage(props) {
  return (
    <Fragment>
      <ProfileHeader user={props.user} />
      <ProfileImages />
    </Fragment>
  );
}

export default ProfilePage;

export async function getStaticProps() {
  const client = await connectToDatabase();

  const usersCollection = client.db().collection('users');

  const user = await usersCollection.findOne({
    _id: ObjectId('630faad121a8deb9a2f90120'),
  });

  client.close();

  return {
    props: {
      user: {
        id: user._id.toString(),
        name: user.name,
        animalType: user.animalType,
        breed: user.breed,
        city: user.city,
        dateOfBirth: user.dateOfBirth,
        favouriteFood: user.favouriteFood,
        favouriteToys: user.favouriteToys,
      },
    },
    revalidate: 1,
  };
}
