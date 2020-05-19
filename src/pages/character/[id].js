import PropTypes from 'prop-types';
import Head from 'next/head';

import { client } from '../../services/ApolloClient';
import { GET_CHARACTER } from '../../queries';
import Character from '../../components/Character';

export async function getServerSideProps(context) {
  const {
    params: { id },
  } = context;

  const {
    data: { character },
  } = await client.query({ query: GET_CHARACTER, variables: { id } });

  return {
    props: { character },
  };
}

const CharacterRoute = ({ character }) => (
  <>
    <Head>
      <title>{character.name} - Rick and Morty</title>
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
    </Head>
    <Character character={character} />
  </>
);

CharacterRoute.propTypes = {
  character: PropTypes.object,
};

export default CharacterRoute;
