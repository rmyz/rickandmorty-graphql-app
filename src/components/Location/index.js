import PropTypes from 'prop-types';
import Link from 'next/link';

import { Wrapper, StyledTitle, Card, Text, CharactersWrapper, Character } from './styles';

const Location = ({ location }) => {
  const { id, name, type, dimension, residents } = location;

  const renderResidents = () => {
    return residents.map((character, key) => (
      <Link href={`/character/${character.id}`} key={key}>
        <Character>{character.name}</Character>
      </Link>
    ));
  };

  return (
    <Wrapper>
      <Card>
        <StyledTitle>{name}</StyledTitle>
        <Text>
          <b>ID:</b> {id}
        </Text>
        <Text>
          <b>Type:</b> {type}
        </Text>
        <Text>
          <b>Dimension:</b> {dimension}
        </Text>
        <Text>
          <b>Residents</b>
        </Text>
        <CharactersWrapper>{renderResidents()}</CharactersWrapper>
      </Card>
    </Wrapper>
  );
};

Location.propTypes = {
  location: PropTypes.object,
};

export default Location;
