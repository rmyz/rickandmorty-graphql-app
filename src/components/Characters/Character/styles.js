import styled from 'styled-components';
import { rem, em } from 'polished';

const getBorderColor = ({ color = '#ddd' }) => `border: 1px solid ${color}`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 15%;
  margin: ${rem('50px')};
  padding: ${rem('8px')};
  border: 1px solid white;
  border-radius: ${rem('5px')};
  cursor: pointer;

  ${props => getBorderColor(props)};

  :hover {
    border: 2px solid white;
  }

  @media (max-width: 814px) {
    min-width: 50%;
    padding: ${rem('16px')};
    flex-wrap: wrap;
    height: 25%;
  }
`;

export const CharacterName = styled.span`
  font-size: ${em('18px')};
  font-weight: 500;
`;
