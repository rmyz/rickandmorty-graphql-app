import { gql } from 'apollo-boost';

export const GET_EPISODES = gql`
  query getEpisodes($page: Int! = 1) {
    episodes(page: $page) {
      results {
        id
        name
        episode
      }
      info {
        next
        count
      }
    }
  }
`;
