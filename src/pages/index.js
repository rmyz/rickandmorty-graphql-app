import Head from 'next/head';

import Home from '../components/Home';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
