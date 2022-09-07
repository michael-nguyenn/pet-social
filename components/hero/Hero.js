import classes from './Hero.module.scss';
import logo from '../../assets/images/dog.png';
import Image from 'next/image';
import petSocialLogo from '../../assets/images/petsocial-logo.png';

function Hero(props) {
  console.log(props.user);
  return (
    <section className={classes.hero}>
      <Image height={100} width={350} src={petSocialLogo}></Image>
      <div className={classes.hero__image}>
        <Image src={logo} alt="dog logo" />
      </div>
    </section>
  );
}

export default Hero;
