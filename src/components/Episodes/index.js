import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLazyQuery } from '@apollo/react-hooks';
import InfiniteScroll from 'react-infinite-scroll-component';

import Title from '../shared/Title';
import Loader from '../shared/Loader';
import { GET_EPISODES } from '../../queries';
import { EpisodesIcon } from '../shared/Icons';

import { Wrapper, IconWrapper } from './styles';
import Episode from './Episode';

const Episodes = ({ episodes }) => {
  const {
    results,
    info: { next },
  } = episodes;
  const [nextLink, setNextLink] = useState(next);
  const [allEpisodes, setAllEpisodes] = useState(results);
  const [getEpisodes, { data }] = useLazyQuery(GET_EPISODES);

  useEffect(() => {
    if (!data || !data.episodes) return;
    const {
      episodes: {
        results: newResults,
        info: { next: newNextLink },
      },
    } = data;

    setNextLink(newNextLink);
    setAllEpisodes([...allEpisodes, ...newResults]);
  }, [data]);

  const renderEpisodes = () => {
    return allEpisodes.map((episode, key) => <Episode key={key} episode={episode} />);
  };

  const loadMoreData = () => {
    getEpisodes({ variables: { page: nextLink } });
  };

  return (
    <Wrapper>
      <Title>Episodes</Title>
      <IconWrapper>
        <EpisodesIcon />
      </IconWrapper>
      <InfiniteScroll
        dataLength={allEpisodes?.length}
        next={loadMoreData}
        hasMore={nextLink}
        height="60vh"
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
        loader={<Loader />}
      >
        {renderEpisodes()}
      </InfiniteScroll>
    </Wrapper>
  );
};

Episodes.propTypes = {
  episodes: PropTypes.object,
};

export default Episodes;
