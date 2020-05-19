import { gql } from 'apollo-boost';

export const GET_EPISODE = gql`
  query getEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
      }
    }
  }
`;
