const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = `${__dirname}/src/templates/blogPostTemplate.js`;

  return graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            title
          }
          slug
        }
      }
    }
  `)
    .then((res) => {
      const posts = res.data.allMdx.nodes;
      // Create a page for each .mdx file
      posts.forEach((post) => {
        createPage({
          path: post.slug,
          component: blogPostTemplate,
          context: {
            slug: post.slug,
          },
        });
      });
    })
    .catch((error) => error);
};

// Create the file path (URL) for each of the blog posts
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
