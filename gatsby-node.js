const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  // Get array of all projects, that contain slugs
  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // Create pages of all projects
  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/projects/' + node.frontmatter.slug, // Set path (route) for the Project Details page
      component: path.resolve('./src/templates/project-details.js'), // Set Component to be used as a template to create Project Details page
      context: { slug: node.frontmatter.slug }, // Query variables
    });
  });
};
