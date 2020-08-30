const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = `${__dirname}/src/templates/blogPostTemplate.js`;

  return graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
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
      posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1];
        const next = index === 0 ? null : posts[index - 1];

        createPage({
          path: post.slug,
          component: blogPostTemplate,
          context: {
            slug: post.slug,
            previous,
            next,
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
