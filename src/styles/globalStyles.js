import { createGlobalStyle } from 'styled-components';

import normalize from './normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  body {
    background: #121212;
    color: #ddd;
  }
`;

export default GlobalStyles;
