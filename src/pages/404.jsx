/* eslint max-len: 0 */

import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import config from '../../config/website';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Container from '../components/Container';

const ErrorPage = () => (
  <React.Fragment>
    <Helmet title={`404 | ${config.siteTitle}`} />
    <Header title="404" />
    <Container>
      <p />
      <h1>
        Oh. Something went wrong here{' '}
        <span role="img" aria-label="thinking">
          🤔
        </span>
      </h1>
      <h3>The page you wanted to visit no longer exists or is currently unreachable.</h3>
      <p>
        Here are some helpful links instead: <br />
        <Link to="/">Homepage</Link>
      </p>
      <p />
    </Container>
    <Container>
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          overflow: 'hidden',
          width: '100%',
          height: 'auto',
          marginBottom: '2rem',
        }}
      >
        <img
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            border: '1px solid #021a40',
          }}
          src="/loader.gif"
          alt="Cartoon Spinning on its Head"
        />
      </div>
    </Container>
    <Footer />
  </React.Fragment>
);

export default ErrorPage;
