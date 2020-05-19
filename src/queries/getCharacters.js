import { gql } from 'apollo-boost';

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int! = 1) {
    characters(page: $page) {
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
