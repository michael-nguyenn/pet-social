import classes from './auth-form.module.scss';
import { useState, useRef } from 'react';
import { createUser } from '../../utilities/createUser';
import { signIn } from 'next-auth/client';

function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin(prevState => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // TO DO: ... ADD VALIDATION ON CLIENT SIDE

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (!result.error) {
        // TO DO... SET SOME AUTH STATE
      }
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={classes.auth}>
      <div className={classes.auth__wrapper}>
        <h1 className={classes.auth__header}>
          {isLogin ? 'Login' : 'Sign Up'}
        </h1>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.form__container}>
            <label htmlFor="email" className={classes.form__label} />
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              ref={emailInputRef}
              className={classes.form__input}
            />
          </div>

          <div className={classes.form__container}>
            <label htmlFor="password" className={classes.form__label} />
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              ref={passwordInputRef}
              className={classes.form__input}
            />
          </div>
          <div className={classes.button}>
            <button className={classes.button__action}>
              {isLogin ? 'Login' : 'Signup'}
            </button>
            <div className={classes.button__switch}>
              {isLogin ? (
                <p className={classes.button__text}>New to Pet Social?</p>
              ) : (
                <p className={classes.button__text}>Already have an account?</p>
              )}
              <button
                type="button"
                className={classes.button__toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? 'Signup' : 'Login'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
