import styled from 'styled-components';

import { em } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  height: 3vh;
  margin: 2vh;
  justify-content: space-evenly;
`;

export const StyledLink = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${em('18px')};
  cursor: pointer;
`;
