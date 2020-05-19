import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/react-hooks';

import GlobalStyles from '../styles/globalStyles';
import { client } from '../services/ApolloClient';

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
