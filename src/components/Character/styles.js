import styled from 'styled-components';
import { rem, em } from 'polished';
import { Wrapper as Title } from '../shared/Title/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled(Title)`
  margin: ${rem('32px')} ${rem('16px')};

  @media (max-width: 1300px) {
    margin: ${rem('32px')} ${rem('8px')};
    font-size: ${em('50px')};
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  border: 5px solid #40e0d0;
  border-radius: 5px;
  padding: ${rem('16px')};
`;

export const Text = styled.span`
  font-size: ${em('16px')};
  margin: ${rem('8px')};

  @media (max-width: 1300px) {
    font-size: ${em('16px')};
  }
`;

export const EpisodesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 30%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Episode = styled.span`
  margin: ${rem('16px')};
  font-size: ${rem('18px')};
  font-weight: 300;
  font-style: italic;
  cursor: pointer;

  @media (max-width: 1300px) {
    font-size: ${em('16px')};
    margin: ${rem('8px')};
  }
`;

export const StyledLink = styled(Text)`
  cursor: pointer;
  font-style: italic;
`;

export const Image = styled.img`
  max-width: 80%;
  min-width: 30%;
  margin: ${rem('8px')};
`;
