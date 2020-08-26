function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  const res = await fetch('');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
