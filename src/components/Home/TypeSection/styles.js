import styled from 'styled-components';
import { rem, em } from 'polished';

const getBorderColor = ({ color = '#ddd' }) => `border: 1px solid ${color}`;

export const Wrapper = styled.div`
  height: 75%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: ${rem('16px')};
  cursor: pointer;
  margin: ${rem('16px')};

  ${props => getBorderColor(props)};

  :hover {
    border: 2px solid #ddd;
  }

  @media (max-width: 740px) {
    width: 50%;
  }
`;

export const Image = styled.img`
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  display: flex;
  max-width: ${rem('300px')};
  min-width: ${rem('150px')};
  width: 60%;
  max-height: ${rem('300px')};
  min-height: ${rem('150px')};
  animation: 1s ease-out 0s 1 appear;
`;

export const Text = styled.h1`
  margin-top: ${rem('36px')};

  @media (max-width: 740px) {
    font-size: ${em('24px')};
  }
`;
