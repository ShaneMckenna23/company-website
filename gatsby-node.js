const path = require('path');
const _ = require('lodash');

const pathPrefixes = {
  projects: '/projects',
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const pathPrefix = pathPrefixes[fileNode.sourceInstanceName];
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'customer')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.customer)}-${_.kebabCase(node.frontmatter.title)}`;
    }
    createNodeField({ node, name: 'sourceInstanceName', value: fileNode.sourceInstanceName });
    createNodeField({ node, name: 'slug', value: `${pathPrefix}${slug}` });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const projectPage = path.resolve('src/templates/project.jsx');
    resolve(
      graphql(`
        {
          projects: allMarkdownRemark(
            filter: { fields: { sourceInstanceName: { eq: "projects" } } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  cover {
                    childImageSharp {
                      resize(width: 600) {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const projectsList = result.data.projects.edges;

        projectsList.forEach(project => {
          const filtered = _.filter(projectsList, input => input.node.fields.slug !== project.node.fields.slug);
          const sample = _.sampleSize(filtered, 2);
          const left = sample[0].node;
          const right = sample[1].node;

          createPage({
            path: project.node.fields.slug,
            component: projectPage,
            context: {
              slug: project.node.fields.slug,
              left,
              right,
            },
          });
        });
      })
    );
  });
};
