import { gql } from 'apollo-boost';

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int!) {
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
