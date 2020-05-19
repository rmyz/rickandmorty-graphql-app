import PropTypes from 'prop-types';
import Link from 'next/link';

import { Wrapper, Image, Text } from './styles';

const TypeSection = ({ imgSrc, title, color, url }) => (
  <Link href={url}>
    <Wrapper color={color}>
      <Image src={imgSrc} />
      <Text>{title}</Text>
    </Wrapper>
  </Link>
);

TypeSection.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  url: PropTypes.string,
};

export default TypeSection;
