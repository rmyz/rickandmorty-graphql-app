import PropTypes from 'prop-types';
import Head from 'next/head';

import { client } from '../../services/ApolloClient';
import { GET_LOCATION } from '../../queries';
import Location from '../../components/Location';
import NavBar from '../../components/shared/NavBar';

export async function getServerSideProps(context) {
  const {
    params: { id },
  } = context;

  const {
    data: { location },
  } = await client.query({ query: GET_LOCATION, variables: { id } });

  return {
    props: { location },
  };
}

const LocationRoute = ({ location }) => (
  <>
    <Head>
      <title>{location.name} - Rick and Morty</title>
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
    </Head>
    <NavBar />
    <Location location={location} />
  </>
);

LocationRoute.propTypes = {
  location: PropTypes.object,
};

export default LocationRoute;
