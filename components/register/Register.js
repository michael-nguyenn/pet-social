import classes from './Register.module.scss';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useRef } from 'react';

const Register = () => {
  const router = useRouter();
  const { userId } = router.query;

  const nameInputRef = useRef();
  const dateOfBirthInputRef = useRef();
  const animalTypeInputRef = useRef();
  const breedInputRef = useRef();
  const cityInputRef = useRef();
  const favouriteToysInputRef = useRef();
  const favouriteFoodInputRef = useRef();

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await axios.patch(`/api/register/${userId}`, {
        name: nameInputRef.current.value,
        dateOfBirth: dateOfBirthInputRef.current.value,
        animalType: animalTypeInputRef.current.value,
        breed: breedInputRef.current.value,
        city: cityInputRef.current.value,
        favouriteToys: favouriteToysInputRef.current.value,
        favouriteFood: favouriteFoodInputRef.current.value,
      });
    } catch (error) {
      console.log('Error! Did not register.', error);
    }
    event.target.reset();
  };

  return (
    <form className={classes.form}>
      <div className={classes.container}>
        <h1 className={classes.title}>Tell Us About Yourself!</h1>
        <input
          placeholder="Name"
          className={classes.input}
          id="name"
          ref={nameInputRef}
          required
        ></input>
        <input
          placeholder="Date of Birth"
          className={classes.input}
          type="date"
          id="dateOfBirth"
          ref={dateOfBirthInputRef}
          required
        ></input>
        <input
          placeholder="Animal Type"
          className={classes.input}
          id="animalType"
          ref={animalTypeInputRef}
          required
        ></input>
        <input
          placeholder="Breed"
          className={classes.input}
          id="breed"
          ref={breedInputRef}
          required
        ></input>
        <input
          placeholder="City"
          className={classes.input}
          id="city"
          ref={cityInputRef}
          required
        ></input>
        <input
          placeholder="Favourite Toys"
          className={classes.input}
          id="favouriteToys"
          ref={favouriteToysInputRef}
          required
        ></input>
        <input
          placeholder="Favourite Food"
          className={classes.input}
          id="favouriteFood"
          ref={favouriteFoodInputRef}
          required
        ></input>
        <button className={classes.button} onSubmit={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Register;
