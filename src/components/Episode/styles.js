import styled from 'styled-components';
import { rem, em } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 50%;
  height: 80%;
  border: 5px solid #40e0d0;
  border-radius: 5px;
  padding: ${rem('16px')};
`;

export const Text = styled.span`
  font-size: ${em('24px')};
  margin: ${rem('16px')};
`;

export const CharactersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Character = styled.span`
  margin: ${rem('16px')};
  font-size: ${rem('18px')};
  font-weight: 300;
  font-style: italic;
  cursor: pointer;
`;
