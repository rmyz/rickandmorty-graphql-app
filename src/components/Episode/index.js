import PropTypes from 'prop-types';
import Link from 'next/link';

import { Wrapper, StyledTitle, Card, Text, CharactersWrapper, Character } from './styles';

const Episode = ({ episode }) => {
  const { id, name, air_date, episode: episodeCode, characters } = episode;

  const renderCharacters = () => {
    return characters.map((character, key) => (
      <Link href={`/character/${character.id}`} key={key}>
        <Character>{character.name}</Character>
      </Link>
    ));
  };

  return (
    <Wrapper>
      <Card>
        <StyledTitle>
          {episodeCode} - {name}
        </StyledTitle>
        <Text>
          <b>ID:</b> {id}
        </Text>
        <Text>
          <b>Release Date:</b> {air_date}
        </Text>
        <Text>
          <b>Characters</b>
        </Text>
        <CharactersWrapper>{renderCharacters()}</CharactersWrapper>
      </Card>
    </Wrapper>
  );
};

Episode.propTypes = {
  episode: PropTypes.object,
};

export default Episode;
