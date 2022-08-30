import { Fragment } from 'react';
import Head from 'next/head';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';

const LandingPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Pet Social</title>
        <meta
          name="description"
          content="This needs a description eventually..."
        />
      </Head>
      <h1>Hello from Home Page</h1>
      <Login />
      <Signup />
    </Fragment>
  );
};

export default LandingPage;
