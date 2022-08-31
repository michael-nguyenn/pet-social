import classes from './Register.module.scss';
import axios from 'axios';

const Register = () => {
  const handleSubmit = async event => {
    // Put or patch?
    // Will signup post new user or will register?
    // Should we put all functions in app level?
    event.preventDefault();

    const userId = this.props.match.params.id;
    try {
      await axios.post(`http://localhost:3000/register/${userId}`, {
        name: event.target.name.value,
        dateOfBirth: event.target.dateOfBirth.value,
        animalType: event.target.animalType.value,
        breed: event.target.breed.value,
        city: event.target.city.value,
        favouriteToys: event.target.favouriteToys.value,
        favouriteFood: event.target.favouriteFood.value,
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
          required
        ></input>
        <input
          placeholder="Date of Birth"
          className={classes.input}
          type="date"
          id="dateOfBirth"
          required
        ></input>
        <input
          placeholder="Animal Type"
          className={classes.input}
          id="animalType"
          required
        ></input>
        <input
          placeholder="Breed"
          className={classes.input}
          id="breed"
          required
        ></input>
        <input
          placeholder="City"
          className={classes.input}
          id="city"
          required
        ></input>
        <input
          placeholder="Favourite Toys"
          className={classes.input}
          id="favouriteToys"
          required
        ></input>
        <input
          placeholder="Favourite Food"
          className={classes.input}
          id="favouriteFood"
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
