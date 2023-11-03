import Link from 'next/link';

interface BlogListItemProps {
  id: number;
  title: string;
  content: string;
  estimatedTime: string;
  createdAt: string;
}

export default function BlogListItem({
  id,
  title,
  content,
  estimatedTime,
  createdAt,
}: BlogListItemProps) {
  return (
    <Link
      href={`/blog/${id}`}
      className="border p-4 rounded cursor-pointer hover:bg-black group transition duration-300"
    >
      <h2 className="text-xl font-bold group-hover:text-white mb-2">{title}</h2>
      <p className="truncate text-xs group-hover:text-white mb-2">{content}</p>
      <div className="text-sm text-gray-600 group-hover:text-gray-400">
        <span className="font-bold">{estimatedTime}</span> ·{' '}
        <span>{createdAt}</span>
      </div>
    </Link>
  );
}
