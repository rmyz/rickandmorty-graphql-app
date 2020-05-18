import PropTypes from 'prop-types';
import Link from 'next/link';

import { Wrapper, Image, Text } from './styles';

const TypeSection = ({ imgSrc, title, color }) => {
  return (
    <Link href={`/${title.toLowerCase()}`}>
      <Wrapper color={color}>
        <Image src={imgSrc} />
        <Text>{title}</Text>
      </Wrapper>
    </Link>
  );
};

TypeSection.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
};

export default TypeSection;
