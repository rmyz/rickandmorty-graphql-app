import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: ' https://rickandmortyapi.com/graphql',
});
