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
  margin-left: 60%;

  .Typist {
    color: white;
    font-size: 5rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    margin-left: 15%;

    .Typist {
      font-size: 4rem;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin-left: 10%;

    .Typist {
      font-size: 3rem;
    }
  }
`;

const Text = styled.span`
  font-size: 5.5rem;
  text-shadow: ${props => props.theme.shadow.text.big};
  color: white;
  font-weight: 700;

  @media only screen and (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 2.8rem;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: 4.5rem;
  }
`;

const Header = ({ children, title, big }) => (
  <Wrapper>
    <TextContainer>
      <Typist>
        <Text>The Award-Winning</Text>
        <Typist.Backspace count={13} delay={500} />
        <Text>Cretiv</Text>
        <Typist.Backspace count={3} delay={300} />
        <Text>ative</Text>
        <Typist.Backspace count={9} delay={500} />
        <Text>Innovative</Text>
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
