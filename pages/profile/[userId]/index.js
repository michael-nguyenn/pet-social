import { Fragment } from 'react';
import ProfileHeader from '../../../components/profile/profileHeader/ProfileHeader';
import ProfileImages from '../../../components/profile/profileImages/ProfileImages';

function ProfilePage() {
  return (
    <Fragment>
      <ProfileHeader />
      <ProfileImages />
    </Fragment>
  );
}

export default ProfilePage;
