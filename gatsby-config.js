const siteMetadata = {
  title: `Ben Otte Blog`,
  description: `Coding blog where I write about my thoughts and journey as a Web Software Developer.`,
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
  ],
};
