import React from 'react';
import styled from 'react-emotion';
import Typist from 'react-typist';
import PropTypes from 'prop-types';
import 'react-typist/dist/Typist.css';
import Wave from './Wave';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.gradient.rightToLeft};
  height: 650px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 600px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 500px;
  }
  position: relative;
  overflow: hidden;
`;

const TextContainer = styled.div`
  flex: 0 0 100%;
  margin-left: 50%;

  .Typist {
    color: white;
    font-size: 2.5rem;
  }
`;

const Text = styled.span`
  font-size: 3rem;
  text-shadow: ${props => props.theme.shadow.text.big};
  color: white;
  font-weigt: 200%;
`;

const Header = ({ children, title, big }) => (
  <Wrapper>
    <TextContainer>
      <Typist>
        <Text>The First Sentence </Text>
        <Typist.Backspace count={8} delay={200} />
        <Text> Phrase </Text>
      </Typist>
      <Text>Digital Agency</Text>
    </TextContainer>
    <Wave />
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  big: PropTypes.bool,
};

Header.defaultProps = {
  big: false,
};
