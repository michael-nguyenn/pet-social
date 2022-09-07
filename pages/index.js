import { Fragment } from 'react';
import Head from 'next/head';
import AuthForm from '../components/auth/auth-form';
import Hero from '../components/hero/Hero';

const LandingPage = props => {
  return (
    <Fragment>
      <Head>
        <title>Pet Social</title>
        <meta
          name="description"
          content="This needs a description eventually..."
        />
      </Head>
      <Hero user={props.user} />
      <AuthForm />
    </Fragment>
  );
};

export default LandingPage;
