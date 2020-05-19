import { useRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Wrapper, LocationName } from './styles';

const Location = ({ location }) => {
  const randomNumber = useRef(Math.floor(Math.random() * 3 + 1));
  const colors = {
    1: '#ff0080',
    2: '#ff8c00',
    3: '#40e0d0',
  };

  return (
    <Link href={`/location/${location.id}`}>
      <Wrapper color={colors[randomNumber.current]}>
        <LocationName>{location.name}</LocationName>
      </Wrapper>
    </Link>
  );
};

Location.propTypes = {
  location: PropTypes.object,
};

export default Location;
