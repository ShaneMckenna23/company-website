import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import config from '../../config/website';
import ItemProject from '../components/ItemProject';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Container from '../components/Container';

const Base = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  column-gap: 2rem;
  column-width: 500px;
`;

const Projects = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <React.Fragment>
    <Helmet title={`Projects | ${config.siteTitle}`} />
    <Header title="Projects">
      Specializing in graphic and web design, I combine minimalist design with modern weaving techniques
    </Header>
    <Container type="big">
      <Base>
        {edges.map(project => (
          <ItemProject
            key={project.node.frontmatter.title}
            path={project.node.fields.slug}
            cover={project.node.frontmatter.cover.childImageSharp.sizes}
            customer={project.node.frontmatter.customer}
            title={project.node.frontmatter.title}
          />
        ))}
      </Base>
    </Container>
    <Footer />
  </React.Fragment>
);

export default Projects;

Projects.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }),
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "projects" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            customer
            cover {
              childImageSharp {
                sizes(maxWidth: 900, quality: 90, traceSVG: { color: "#2B2B2F" }) {
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
