'use client';

import { Post } from '@/types/blog';
import BlogListItem from '../BlogListItem';
import Paging, { PAGE_CNT } from '../Paging';
import SearchInput from '../SearchInput';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { convertDateFormatForPost, estimateReadingTime } from '@/lib/blog';
import { ComponentProps, useMemo } from 'react';

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  let page = Number(searchParams.get('page') ?? 1);
  page = Number.isNaN(page) ? 1 : page;
  const keyword = searchParams.get('keyword') ?? '';

  const filteredPostsByKeyword = useMemo(() => {
    if (!keyword) return posts;

    return posts.filter((post) =>
      post.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [posts, keyword]);

  const filteredPosts = useMemo(() => {
    const startIdx = PAGE_CNT * (page - 1);
    const endIdx = startIdx + PAGE_CNT - 1;
    const posts = [];

    for (
      let i = startIdx;
      i <= endIdx && i < filteredPostsByKeyword.length;
      i++
    ) {
      posts.push(filteredPostsByKeyword[i]);
    }

    return posts;
  }, [filteredPostsByKeyword, page]);

  const handleSearch: ComponentProps<typeof SearchInput>['onSearch'] = (
    keyword
  ) => {
    router.replace(`${pathname}?page=1&keyword=${keyword}`);
  };

  return (
    <div>
      <SearchInput
        onSearch={handleSearch}
        searchResultCnt={filteredPostsByKeyword.length}
        keyword={keyword}
      />
      <div className="flex flex-col gap-y-4 pt-6">
        {filteredPosts.map((post) => (
          <BlogListItem
            key={post._id}
            id={post._id}
            title={post.title}
            content={post.content}
            createdAt={convertDateFormatForPost(post.createdAt)}
            estimatedTime={estimateReadingTime(post.content)}
          />
        ))}
      </div>
      <div className="w-fit mx-auto pt-3">
        <Paging
          activePage={page}
          totalElements={filteredPostsByKeyword.length}
        />
      </div>
    </div>
  );
}
