import TypeSection from './TypeSection';

import Title from '../shared/Title';

import { Wrapper, SectionWrapper } from './styles';

const Home = () => (
  <Wrapper>
    <Title>Rick and Morty&apos;s GraphQL app</Title>
    <SectionWrapper>
      <TypeSection url="/character" title="CHARACTERS" imgSrc="/characters.png" color="#ff0080" />
      <TypeSection url="/episode" title="EPISODES" imgSrc="/episodes.png" color="#ff8c00" />
      <TypeSection url="/location" title="LOCATIONS" imgSrc="/locations.png" color="#40e0d0" />
    </SectionWrapper>
  </Wrapper>
);

export default Home;
