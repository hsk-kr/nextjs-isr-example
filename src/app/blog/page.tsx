import { getPosts } from '@/lib/db/posts';
import Blog from './components/Blog';
import { Metadata } from 'next';
import { generateMetaTitleAndDesc } from '@/lib/seo';

const title = 'Blog';
const description = 'Articles motivate you to start learning languages.';

export const metadata: Metadata = {
  ...generateMetaTitleAndDesc(title, description),
};

export default async function BlogPage() {
  const posts = await getPosts();

  return <Blog posts={posts} />;
}
