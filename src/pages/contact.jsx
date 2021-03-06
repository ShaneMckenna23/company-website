/* eslint max-len: 0 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { LinkCard } from '../components/Card';
import Header from '../components/Header';
import Button from '../components/Button';
import config from '../../config/website';
import Paperplane from '../icons/Paperplane';
import Discord from '../icons/Discord';
import Instagram from '../icons/Instagram';
import Behance from '../icons/Behance';
import YouTube from '../icons/YouTube';

const CenteredContainer = styled(Container)`
  text-align: center;
  svg {
    fill: white;
  }
`;

const Wrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const MyLinkCard = styled(LinkCard)`
  flex-basis: calc(99% * 1 / 4 - 1rem);
  max-width: calc(99% * 1 / 4 - 1rem);
  width: calc(99% * 1 / 4 - 1rem);
  margin-bottom: 2rem;
  @media (max-width: 1135px) {
    flex-basis: calc(99% * 1 / 2 - 1rem);
    max-width: calc(99% * 1 / 2 - 1rem);
    width: calc(99% * 1 / 2 - 1rem);
  }
  @media (max-width: 690px) {
    flex-basis: calc(99% * 1 / 1);
    max-width: calc(99% * 1 / 1);
    width: calc(99% * 1 / 1);
  }
`;

const CardContainer = styled(Container)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 4rem;
`;

const Contact = () => (
  <React.Fragment>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header title="Contact" />
    <Wrapper>
      <Container type="article">
        <h3 style={{ textAlign: 'center' }}>
          We are looking forward to hearing from you - whether you have a project request, need advice or just want to chat
        </h3>
      </Container>
      <CenteredContainer>
        <a href="mailto:info@s22.studio">
          <Button type="primary">
            <Paperplane /> E-Mail
          </Button>
        </a>
      </CenteredContainer>
      <CardContainer>
        <MyLinkCard link="https://www.discordapp.com" discord>
          <Discord />
          Comming Soon
        </MyLinkCard>
        <MyLinkCard link="https://www.instagram.com/" instagram>
          <Instagram />
          Comming Soon
        </MyLinkCard>
        <MyLinkCard link="https://www.behance.net/" behance>
          <Behance />
          Comming Soon
        </MyLinkCard>
        <MyLinkCard link="https://youtube.com/" youtube>
          <YouTube />
          Comming Soon
        </MyLinkCard>
      </CardContainer>
    </Wrapper>
    <Footer />
  </React.Fragment>
);

export default Contact;
