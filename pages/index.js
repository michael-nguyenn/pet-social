import { Fragment } from "react";
import Head from "next/head";

const HomePage = () => {
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
    </Fragment>
  );
};

export default HomePage;
