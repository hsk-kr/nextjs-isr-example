import Link from 'next/link';

interface MorePostsProps {
  posts: {
    id: number;
    title: string;
    createdAt: string;
  }[];
}
export default function MorePosts({ posts }: MorePostsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold">More</h2>
      <div className="p-2 flex flex-col gap-y-2">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="border-b-[1px] pb-2 group transition duration-300"
          >
            <h3 className="text-xl group-hover:text-gray-500">{post.title}</h3>
            <span className="text-sm text-gray-500 group-hover:text-gray-400">
              {post.createdAt}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
