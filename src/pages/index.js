import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { graphql, Link } from 'gatsby';

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

export default ({ data }) => {
  return (
    <Layout>
      <IndexWrapper>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
          <PostWrapper key={id}>
            <Link to={slug}>
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </Link>
          </PostWrapper>
        ))}
      </IndexWrapper>
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date
          title
        }
        slug
      }
    }
  }
`;