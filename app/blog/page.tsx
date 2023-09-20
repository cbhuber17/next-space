import Link from "next/link";
import { loadPosts } from "@/lib/load-posts";

export default async function Blog() {
  const posts = await loadPosts();

  return (
    <div>
      <h1>Welcome to our Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
