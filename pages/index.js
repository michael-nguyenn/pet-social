import { Fragment } from 'react';
import Head from 'next/head';
import AuthForm from '../components/auth/auth-form';

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

      <AuthForm />
    </Fragment>
  );
};

export default LandingPage;
