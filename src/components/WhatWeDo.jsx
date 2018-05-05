import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import Button from '../components/Button';

const Wrapper = styled.section`
  position: relative;
  text-transform: uppercase;
  margin: 10em 0em;
`;

const Text = styled.span`
  font-size: 66px;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1;
`;

const blue = 'linear-gradient(30deg, #009cf3, #16d6d9);';
const green = 'linear-gradient(30deg,#16d6d9,#96cc29);';
const orange = 'linear-gradient(30deg,#ffbf02,#ed0082);';

const Colored = styled.span`
  background-image: ${props => props.gradient};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const WhatWeDo = () => (
  <Wrapper>
    <h4>CREATE MEANINGFUL IMPACT</h4>
    <Text>
      WE <Colored gradient={blue}>disrupt</Colored> INDUSTRIES, <Colored gradient={green}>DEFINE</Colored> NEW FRONTIERS, AND <Colored gradient={orange}>DELIVER</Colored> TANGIBLE RESULTS
    </Text>
  </Wrapper>
);

export default WhatWeDo;
