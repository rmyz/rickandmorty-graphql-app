import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLazyQuery } from '@apollo/react-hooks';
import InfiniteScroll from 'react-infinite-scroll-component';

import Title from '../shared/Title';
import Loader from '../shared/Loader';
import { GET_CHARACTERS } from '../../queries';
import { CharactersIcon } from '../shared/Icons';

import { Wrapper, IconWrapper } from './styles';
import Character from './Character';

const Characters = ({ characters }) => {
  const {
    results,
    info: { next },
  } = characters;
  const [nextLink, setNextLink] = useState(next);
  const [allCharacters, setAllCharacters] = useState(results);
  const [getCharacters, { data }] = useLazyQuery(GET_CHARACTERS);

  useEffect(() => {
    if (!data || !data.characters) return;
    const {
      characters: {
        results: newResults,
        info: { next: newNextLink },
      },
    } = data;

    setNextLink(newNextLink);
    setAllCharacters([...allCharacters, ...newResults]);
  }, [data]);

  const renderCharacters = () => {
    return allCharacters.map((character, key) => <Character key={key} character={character} />);
  };

  const loadMoreData = () => {
    getCharacters({ variables: { page: nextLink } });
  };

  return (
    <Wrapper>
      <Title>Characters</Title>
      <IconWrapper>
        <CharactersIcon />
      </IconWrapper>
      <InfiniteScroll
        dataLength={allCharacters?.length}
        next={loadMoreData}
        hasMore={nextLink}
        height="60vh"
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
        loader={<Loader />}
      >
        {renderCharacters()}
      </InfiniteScroll>
    </Wrapper>
  );
};

Characters.propTypes = {
  characters: PropTypes.object,
};

export default Characters;
