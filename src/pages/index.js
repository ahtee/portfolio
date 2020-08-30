import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

const Image = styled(Img)`
  border-radius: 5px;
`;

export default ({ data }) => {
  return (
    <Layout>
      <IndexWrapper>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              {!!frontmatter.cover ? (
                <Image sizes={frontmatter.cover.childImageSharp.sizes} />
              ) : null}
              <h1>{frontmatter.title}</h1>
              <p>{excerpt}</p>
              <small>{frontmatter.date}</small>
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
          date(formatString: "MMM Do YYYY")
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;
