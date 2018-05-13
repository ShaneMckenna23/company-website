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

const Services = styled.section`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px 25px;
  position: relative;
  width: 50%;
  z-index: 10;
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08), 0px 20px 31px 3px rgba(0, 0, 0, 0.09),
    0px 8px 20px 7px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;

  * {
    text-align: center;
    text-transform: uppercase;
  }

  ul {
    font-weight: 600;
    letter-spacing: 1px;
    list-style-type: none;
    margin: 0;
  }

  li {
    border-top: 1px solid #e1f1ff;
    font-size: 15px;
    line-height: 1.5;
    padding: 15px 0;
    margin-bottom: 0;
  }

  li:last-child {
    border-bottom: 1px solid #e1f1ff;
  }
`;

const GetStartedThree = props => (
  <React.Fragment>
    <Helmet title={`Get Started | ${config.siteTitle}`} />
    <Header title="Get Started: Business+" />
    <Container type="big">
      <Title>Quota Form</Title>
      <Wrapper>
        <QuoteForm budgetMin={750} budgetMax={2500} />
        <Services>
          <h2 style={{ marginTop: ".5em" }}>Services</h2>
          <ul>
            <li>Content Management System</li>
            <li>Multi-Page Design</li>
            <li>1 Year Hosting</li>
            <li>Custom Domain</li>
            <li>Global CDN</li>
            <li>HTTPS connection</li>
          </ul>
        </Services>
      </Wrapper>
    </Container>
    <Footer />
  </React.Fragment>
);

export default GetStartedThree;
