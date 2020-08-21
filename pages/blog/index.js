import React, { useEffect } from 'react';
import { Layout } from 'components/Layout';

function BlogPage({ entries }) {
  useEffect(() => {
    async function getInitialProps() {
      const api = new BlogApi();
      const entries = await api.fetchBlogEntries();
      return { entries };
    }
    getInitialProps();
    return () => 
  });

  return (
    <Layout>
      <h1>Blog</h1>
    </Layout>
  );
}

export default BlogPage;
