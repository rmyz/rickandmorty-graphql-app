import { gql } from 'apollo-boost';

export const GET_LOCATION = gql`
  query getLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
      }
    }
  }
`;
