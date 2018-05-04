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
    <Header title="Contact">
      I'm looking forward to hearing from you - whether you have a project request, need advice or just want to chat
    </Header>
    <Wrapper>
      <Container type="article">
        <h3>
          Want to work with us? We’re always looking for great challenges. Let us know a little more about your
          objectives using the form below and we’ll get back to you
        </h3>
      </Container>
      <CenteredContainer>
        <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#108;&#101;&#107;&#111;&#097;&#114;&#116;&#115;&#046;&#100;&#101;">
          <Button type="primary">
            <Paperplane /> E-Mail
          </Button>
        </a>
      </CenteredContainer>
      <CardContainer>
        <MyLinkCard link="https://www.discordapp.com" discord>
          <Discord />
          Name
        </MyLinkCard>
        <MyLinkCard link="https://www.instagram.com/.de" instagram>
          <Instagram />
          Name
        </MyLinkCard>
        <MyLinkCard link="https://www.behance.net/" behance>
          <Behance />
          Name
        </MyLinkCard>
        <MyLinkCard link="https://youtube.com/" youtube>
          <YouTube />
          Name
        </MyLinkCard>
      </CardContainer>
    </Wrapper>
    <Footer />
  </React.Fragment>
);

export default Contact;
