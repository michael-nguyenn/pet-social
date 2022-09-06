import './ProfileImages.module.scss';
import Image from 'next/image';
import classes from './ProfileImages.module.scss';
import dummyImage1 from '../../../assets/images/dummy-image1.png';
import dummyImage2 from '../../../assets/images/dummy-image2.png';
import dummyImage3 from '../../../assets/images/dummy-image3.png';
import dummyImage4 from '../../../assets/images/dummy-image4.png';
import dummyImage5 from '../../../assets/images/dummy-image5.png';
import dummyImage6 from '../../../assets/images/dummy-image6.png';

function ProfileImages() {
  return (
    <section className={classes.images}>
      <div className={classes.images__container}>
        <Image
          src={dummyImage1}
          layout="fill"
          className={classes.images__image}
        ></Image>
      </div>
      <div className={classes.images__container}>
        <Image
          src={dummyImage2}
          layout="fill"
          className={classes.images__image}
        ></Image>
      </div>
      <div className={classes.images__container}>
        <Image
          src={dummyImage3}
          layout="fill"
          className={classes.images__image}
        ></Image>
      </div>
      <div className={classes.images__container}>
        <Image
          src={dummyImage4}
          layout="fill"
          className={classes.images__image}
        ></Image>
      </div>
      <div className={classes.images__container}>
        <Image
          src={dummyImage5}
          layout="fill"
          className={classes.images__image}
        ></Image>
      </div>
      <div className={classes.images__container}>
        <Image
          src={dummyImage6}
          layout="fill"
          className={classes.images__image}
        ></Image>
      </div>
    </section>
  );
}

export default ProfileImages;
