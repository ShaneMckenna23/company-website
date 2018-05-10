/* eslint max-len: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import Typist from 'react-typist';
import Footer from '../components/Footer';
import Container from '../components/Container';
import FeaturedProject from '../components/FeaturedProject';
import Header from '../components/Header';
import Button from '../components/Button';
import Pricing from '../components/Pricing';
import Impact from '../components/Impact';
import About from '../components/About';
import WhatWeDo from '../components/WhatWeDo';

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10rem;
`;

const Text = styled.p`
  text-align: center;
  font-family: ${props => props.theme.fontFamily.heading};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.5rem;
  max-width: 850px;
  margin: 5rem auto;
  text-shadow: ${props => props.theme.shadow.text.big};
`;

const Index = ({
  data: {
    projects: { edges: projectEdges },
  },
}) => (
  <React.Fragment>
    <Header big title={<React.Fragment>AWARD WINNING WEBSITE DEVELOPMENT</React.Fragment>}>
      <Typist>Animate this text.</Typist>
    </Header>
    <About />
    <WhatWeDo />
    <Container type="big">
      <h1>Recent Projects</h1>
      <ProjectsWrapper>
        {projectEdges.map(project => (
          <FeaturedProject
            key={project.node.frontmatter.title}
            cover={project.node.frontmatter.cover.childImageSharp.sizes}
            customer={project.node.frontmatter.customer}
            path={project.node.fields.slug}
            title={project.node.frontmatter.title}
          />
        ))}
      </ProjectsWrapper>
    </Container>
    <Container>
      <Text>
        We design and build functional and beautiful websites for wonderful clients all over the globe. <br />
        <Link to="/projects">
          <Button type="primary">Projects</Button>
        </Link>
      </Text>
    </Container>
    <Container type="big">
      <Impact />
    </Container>
    <Container type="big">
      <h1>Packages</h1>
      <Pricing />
    </Container>
    <Footer />
  </React.Fragment>
);

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }),
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    projects: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "projects" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            customer
            title
            cover {
              childImageSharp {
                sizes(maxWidth: 1000, quality: 90, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
