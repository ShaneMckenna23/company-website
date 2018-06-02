/* eslint no-unused-expressions: 0 */

import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import Headroom from 'react-headroom';
import Logo from '../icons/Logo';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  svg {
    height: 2.5rem;
    margin-bottom: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.heading};
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid ${props => props.theme.colors.white.base};
      color: ${props => props.theme.colors.white.base};
    }
    &:focus {
      color: ${props => props.theme.colors.white.base};
    }
  }
`;

const Navigation = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <Logo />
    </StyledLink>
    <Nav>
      <Link to="/projects" activeClassName="active" />
      <Link to="/contact" activeClassName="active">
        Contact
      </Link>
    </Nav>
  </Headroom>
);

export default Navigation;
