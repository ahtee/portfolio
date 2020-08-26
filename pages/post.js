function Post({ post }) {
  return <div>{post.title}</div>;
}

export async function getStaticPaths() {}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default Post;
