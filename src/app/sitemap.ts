import { getPostIds } from '@/lib/db/posts';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.BASE_URL ?? '';

  const generateUrl = (url: string) => `${baseUrl}${url}`;

  const postIds = getPostIds();
  const postsSitemap = (await postIds).map((postId) => ({
    url: generateUrl(`/blog/${postId}`),
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: generateUrl('/blog'),
      lastModified: new Date(),
    },
    ...postsSitemap,
  ];
}
