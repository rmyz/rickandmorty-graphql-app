import Link from 'next/link';

import { Wrapper, StyledLink } from './styles';

const NavBar = () => {
  return (
    <Wrapper>
      <Link href="/">
        <StyledLink>Home</StyledLink>
      </Link>
      <Link href="/character">
        <StyledLink>Characters</StyledLink>
      </Link>
      <Link href="/episode">
        <StyledLink>Episodes</StyledLink>
      </Link>
      <Link href="/location">
        <StyledLink>Locations</StyledLink>
      </Link>
    </Wrapper>
  );
};

export default NavBar;
