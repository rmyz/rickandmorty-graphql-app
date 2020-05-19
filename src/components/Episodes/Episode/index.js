import { useRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Wrapper, EpisodeCode, EpisodeName } from './styles';

const Episode = ({ episode }) => {
  const randomNumber = useRef(Math.floor(Math.random() * 3 + 1));
  const colors = {
    1: '#ff0080',
    2: '#ff8c00',
    3: '#40e0d0',
  };

  return (
    <Link href={`/episode/${episode.id}`}>
      <Wrapper color={colors[randomNumber.current]}>
        <EpisodeCode>{episode.episode}</EpisodeCode> - <EpisodeName>{episode.name}</EpisodeName>
      </Wrapper>
    </Link>
  );
};

Episode.propTypes = {
  episode: PropTypes.object,
};

export default Episode;
