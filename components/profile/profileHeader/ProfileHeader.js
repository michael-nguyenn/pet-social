import Image from 'next/image';
import classes from './ProfileHeader.module.scss';

function ProfileHeader() {
  return (
    <section className={classes.information}>
      <div className={classes.information__header}>
        <h2>chillithechinchilla</h2>
        <button className={classes.information__button}>+</button>
      </div>
      <div className={classes.information__details}>
        <div className={classes.information__picture}></div>
        <Image></Image>
        <div>
          <h3>10</h3>
          <p>Posts</p>
        </div>
        <div>
          <h3>20</h3>
          <p>Followers</p>
        </div>
        <div>
          <h3>25</h3>
          <p>Following</p>
        </div>
      </div>
      <h3>Chilli the Chinchilla</h3>
      <div className={classes.information__about}>
        <div>
          <h3>Animal Type</h3>
          <p>Chinchilla</p>
        </div>
        <div>
          <h3>Breed</h3>
          <p>Long-Tailed Chinchilla</p>
        </div>
        <div>
          <h3>Age</h3>
          <p>3</p>
        </div>
        <div>
          <h3>City</h3>
          <p>Toronto</p>
        </div>
        <div>
          <h3>Favourite Food</h3>
          <p>Romaine Lettuce</p>
        </div>
        <div>
          <h3>Favourite Toys</h3>
          <p>Dust Bin</p>
        </div>
      </div>
      <button className={classes.information__edit}>Edit Profile</button>
    </section>
  );
}

export default ProfileHeader;
