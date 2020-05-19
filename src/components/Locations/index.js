import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLazyQuery } from '@apollo/react-hooks';
import InfiniteScroll from 'react-infinite-scroll-component';

import Title from '../shared/Title';
import Loader from '../shared/Loader';
import { GET_LOCATIONS } from '../../queries';
import { LocationsIcon } from '../shared/Icons';

import { Wrapper, IconWrapper } from './styles';
import Location from './Location';

const Locations = ({ locations }) => {
  const {
    results,
    info: { next },
  } = locations;
  const [nextLink, setNextLink] = useState(next);
  const [allLocations, setAllLocations] = useState(results);
  const [getLocations, { data }] = useLazyQuery(GET_LOCATIONS);

  useEffect(() => {
    if (!data || !data.locations) return;
    const {
      locations: {
        results: newResults,
        info: { next: newNextLink },
      },
    } = data;

    setNextLink(newNextLink);
    setAllLocations([...allLocations, ...newResults]);
  }, [data]);

  const renderLocations = () => {
    return allLocations.map((location, key) => <Location key={key} location={location} />);
  };

  const loadMoreData = () => {
    getLocations({ variables: { page: nextLink } });
  };

  return (
    <Wrapper>
      <Title>Locations</Title>
      <IconWrapper>
        <LocationsIcon />
      </IconWrapper>
      <InfiniteScroll
        dataLength={allLocations?.length}
        next={loadMoreData}
        hasMore={nextLink}
        height="50vh"
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
        loader={<Loader />}
      >
        {renderLocations()}
      </InfiniteScroll>
    </Wrapper>
  );
};

Locations.propTypes = {
  locations: PropTypes.object,
};

export default Locations;
