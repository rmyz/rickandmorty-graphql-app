import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  @media (max-width: 740px) {
    overflow-x: hidden;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 75%;
  justify-content: space-evenly;

  @media (max-width: 740px) {
    flex-wrap: wrap;
  }
`;
