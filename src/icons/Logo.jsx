import React from 'react';
import styled from 'react-emotion';

const Icon = styled.img`
  max-width: 64px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    max-width: 32px;
  }
`;

const Logo = () => <Icon src="/favicons/android-chrome-192x192.png" alt="s22 logo" />;

export default Logo;
