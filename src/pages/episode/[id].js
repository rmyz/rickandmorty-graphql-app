import PropTypes from 'prop-types';
import Head from 'next/head';

import { client } from '../../services/ApolloClient';
import { GET_EPISODE } from '../../queries';
import Episode from '../../components/Episode';
import NavBar from '../../components/shared/NavBar';

export async function getServerSideProps(context) {
  const {
    params: { id },
  } = context;

  const {
    data: { episode },
  } = await client.query({ query: GET_EPISODE, variables: { id } });

  return {
    props: { episode },
  };
}

const EpisodeRoute = ({ episode }) => (
  <>
    <Head>
      <title>
        {episode.episode} - {episode.name} - Rick and Morty
      </title>
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
    </Head>
    <NavBar />
    <Episode episode={episode} />
  </>
);

EpisodeRoute.propTypes = {
  episode: PropTypes.object,
};

export default EpisodeRoute;
