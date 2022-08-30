import classes from './Login.module.scss';
import { Fragment } from 'react';

const Login = () => {
  console.log(process.env.DB_URL);
  return (
    <Fragment>
      <h1 className={classes.test}>Hello from Login</h1>
    </Fragment>
  );
};

export default Login;
