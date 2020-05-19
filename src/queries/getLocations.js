import { gql } from 'apollo-boost';

export const GET_LOCATIONS = gql`
  query getLocations($page: Int!) {
    locations(page: $page) {
      info {
        next
      }
      results {
        id
        name
      }
    }
  }
`;
