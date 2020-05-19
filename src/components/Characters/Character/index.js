import { useRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Wrapper, CharacterName } from './styles';

const Episode = ({ character }) => {
  const randomNumber = useRef(Math.floor(Math.random() * 3 + 1));
  const colors = {
    1: '#ff0080',
    2: '#ff8c00',
    3: '#40e0d0',
  };

  return (
    <Link href={`/character/${character.id}`}>
      <Wrapper color={colors[randomNumber.current]}>
        <CharacterName>{character.name}</CharacterName>
      </Wrapper>
    </Link>
  );
};

Episode.propTypes = {
  character: PropTypes.object,
};

export default Episode;
