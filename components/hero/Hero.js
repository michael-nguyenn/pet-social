import classes from './Hero.module.scss';
import logo from '../../assets/images/dog.png';
import Image from 'next/image';

function Hero() {
  return (
    <section className={classes.hero}>
      <h1 className={classes.hero__header}>Pet Social</h1>
      <div className={classes.hero__image}>
        <Image src={logo} alt="dog logo" />
      </div>
    </section>
  );
}

export default Hero;
