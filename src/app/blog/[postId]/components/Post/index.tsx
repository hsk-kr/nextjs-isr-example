import sanitizeHtml from 'sanitize-html';

interface PostProps {
  title: string;
  content: string;
  createdAt: string;
}

export default function Post({ title, content, createdAt }: PostProps) {
  const sanitizedContent = sanitizeHtml(content);

  return (
    <div>
      <header className="pb-4 mb-6 border-b-[1px] border-gray-800">
        <h1 className="text-5xl">{title}</h1>
        <span className="block text-gray-500 mt-2">Posted on {createdAt}</span>
      </header>
      <div
        className="disable-tailwind"
        dangerouslySetInnerHTML={{
          __html: sanitizedContent,
        }}
      />
    </div>
  );
}
