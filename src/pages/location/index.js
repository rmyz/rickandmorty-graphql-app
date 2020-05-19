import PropTypes from 'prop-types';
import Head from 'next/head';

import { client } from '../../services/ApolloClient';
import { GET_LOCATIONS } from '../../queries';
import Locations from '../../components/Locations';
import NavBar from '../../components/shared/NavBar';

export async function getServerSideProps() {
  const {
    data: { locations },
  } = await client.query({ query: GET_LOCATIONS, variables: { page: 1 } });

  return { props: { locations } };
}

const LocationsRoute = ({ locations }) => {
  return (
    <>
      <Head>
        <title>Locations - Rick and Morty</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <NavBar />
      <Locations locations={locations} />
    </>
  );
};

LocationsRoute.propTypes = {
  locations: PropTypes.object,
};

export default LocationsRoute;
