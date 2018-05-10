import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Header from '../components/Header';
import config from '../../config/website';

const DataProtection = props => (
  <React.Fragment>
    <Helmet title={`Get Started | ${config.siteTitle}`} />
    <Header title="Get Started" />
    <div style={{ marginTop: '3rem' }}>
      <Container type="article">
        <h2>Get Started {console.log(props)}</h2>
      </Container>
    </div>
    <Footer />
  </React.Fragment>
);

export default DataProtection;
