import { getPosts } from '@/lib/db/posts';
import Blog from './components/Blog';

export default async function BlogPage() {
  const posts = await getPosts();

  return <Blog posts={posts} />;
}
