import PropTypes from 'prop-types';
import Head from 'next/head';

import { client } from '../../services/ApolloClient';
import { GET_EPISODE } from '../../queries';
import Episode from '../../components/Episode';

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
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </title>
    </Head>
    <Episode episode={episode} />
  </>
);

EpisodeRoute.propTypes = {
  episode: PropTypes.object,
};

export default EpisodeRoute;
