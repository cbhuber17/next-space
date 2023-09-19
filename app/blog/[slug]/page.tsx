// ISR; update the cache every n seconds
export const revalidate = 1200;

interface Post {
  title: string;
  content: string;
  slug: string;
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  );

  // Find the post that matches the slug
  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
