import PropTypes from 'prop-types';
import Head from 'next/head';

import { client } from '../../services/ApolloClient';
import { GET_EPISODES } from '../../queries';
import Episodes from '../../components/Episodes';

export async function getServerSideProps() {
  const {
    data: { episodes },
  } = await client.query({ query: GET_EPISODES, variables: { page: 1 } });

  return { props: { episodes } };
}

const EpisodesRoute = ({ episodes }) => (
  <>
    <Head>
      <title>Episodes - Rick and Morty</title>
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
    </Head>
    <Episodes episodes={episodes} />
  </>
);

EpisodesRoute.propTypes = {
  episodes: PropTypes.object,
};

export default EpisodesRoute;
