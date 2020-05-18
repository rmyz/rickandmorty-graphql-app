import { createGlobalStyle } from 'styled-components';

import normalize from './normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};
`;

export default GlobalStyles;
