import Post from './components/Post';
import MorePosts from './components/MorePosts';
import { getMorePosts, getPost, getPostIds } from '@/lib/db/posts';
import { notFound } from 'next/navigation';
import { convertDateFormatForPost } from '@/lib/blog';

interface PostPageProps {
  params: {
    postId: string;
  };
}

export async function generateStaticParams() {
  const postIds = await getPostIds();

  return postIds.map((postId) => ({
    postId,
  }));
}

export default async function PostPage({ params: { postId } }: PostPageProps) {
  const post = await getPost(postId);
  const posts = await getMorePosts({ exceptionId: postId });

  if (!post) {
    notFound();
  }

  return (
    <>
      <Post
        title={post.title}
        content={post.content}
        createdAt={convertDateFormatForPost(post.createdAt)}
      />
      <div className="border-b-[1px] border-gray-800 my-6" />
      <MorePosts
        posts={posts.map((post) => ({
          id: post._id,
          title: post.title,
          createdAt: convertDateFormatForPost(post.createdAt),
        }))}
      />
    </>
  );
}
