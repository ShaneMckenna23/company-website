import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import Button from '../components/Button';

const Wrapper = styled.section``;

const Text = styled.span`
  background-image: linear-gradient(30deg, #009cf3, #16d6d9);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  position: relative;
  font-size: 66px;
  font-weight: 400;
  text-transform: uppercase;
`;

const WhoWeAre = () => (
  <Wrapper>
    CREATE MEANINGFUL IMPACT<br />
    <Text>disrupt</Text>
    WE DISRUPT INDUSTRIES, DEFINE NEW FRONTIERS, AND DELIVER TANGIBLE RESULTS
  </Wrapper>
);

export default WhoWeAre;
