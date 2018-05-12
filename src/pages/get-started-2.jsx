import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Header from '../components/Header';
import config from '../../config/website';
import QuoteForm from '../components/QuoteForm';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h2`
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    text-align: center;
  }
`;


const GetStartedTwo = props => (
  <React.Fragment>
    <Helmet title={`Get Started | ${config.siteTitle}`} />
    <Header title="Get Started: Business" />
    <Container type="big">
      <Title>Quota Form</Title>
      <Wrapper>
        <QuoteForm budgetMin={350} budgetMax={1500} />
        <div style={{ backgroundColor: 'red', height: '5em', width: '20em' }} >123</div>
      </Wrapper>
    </Container>
    <Footer />
  </React.Fragment>
);

export default GetStartedTwo;
