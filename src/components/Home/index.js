import TypeSection from './TypeSection';

import { Wrapper, Title, SectionWrapper } from './styles';

const Home = () => {
  return (
    <Wrapper>
      <Title>Rick and Morty&apos;s GraphQL app</Title>
      <SectionWrapper>
        <TypeSection title="CHARACTERS" imgSrc="/characters.png" color="#ff0080" />
        <TypeSection title="EPISODES" imgSrc="/episodes.png" color="#ff8c00" />
        <TypeSection title="LOCATIONS" imgSrc="/locations.png" color="#40e0d0" />
      </SectionWrapper>
    </Wrapper>
  );
};

export default Home;
