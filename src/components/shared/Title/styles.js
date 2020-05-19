import styled from 'styled-components';
import { rem, em } from 'polished';

export const Wrapper = styled.h1`
  text-align: center;
  margin: ${rem('64px')} ${rem('16px')};
  font-weight: normal;
  font-family: 'Turbinado', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: ${em('90px')};
  background: #40e0d0;
  background: linear-gradient(to left, #ff0080, #ff8c00, #40e0d0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 5px;
  padding-right: 8px;

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: 1s ease-out 0s 1 appear;

  @media (max-width: 740px) {
    font-size: ${em('70px')};
  }
`;
