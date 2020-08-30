import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '../components/Layout';
import styled from 'styled-components';

const FlexButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      <FlexButtons>
        {previous && (
          <Link to={`/${previous.slug}`}>
            <p>Previous Post</p>
          </Link>
        )}
        {next && (
          <Link to={`/${next.slug}`}>
            <p>Next Post</p>
          </Link>
        )}
      </FlexButtons>
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date(formatString: "MMM DD YYYY")
      }
    }
  }
`;
