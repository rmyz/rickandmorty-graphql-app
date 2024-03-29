import PropTypes from 'prop-types';
import Head from 'next/head';

import { client } from '../../services/ApolloClient';
import { GET_CHARACTERS } from '../../queries';
import Characters from '../../components/Characters';
import NavBar from '../../components/shared/NavBar';

export async function getServerSideProps() {
  const {
    data: { characters },
  } = await client.query({ query: GET_CHARACTERS, variables: { page: 1 } });

  return { props: { characters } };
}

const CharactersRoute = ({ characters }) => {
  return (
    <>
      <Head>
        <title>Characters - Rick and Morty</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <NavBar />
      <Characters characters={characters} />
    </>
  );
};

CharactersRoute.propTypes = {
  characters: PropTypes.object,
};

export default CharactersRoute;
