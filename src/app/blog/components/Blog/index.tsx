'use client';

import BlogListItem from '../BlogListItem';
import Paging from '../Paging';
import SearchInput from '../SearchInput';
import { useSearchParams } from 'next/navigation';

export default function Blog() {
  const searchParams = useSearchParams();

  let page = Number(searchParams.get('page') ?? 1);
  page = Number.isNaN(page) ? 1 : page;

  return (
    <div>
      <SearchInput onSearch={() => alert('test')} />
      <div className="flex flex-col gap-y-4 pt-6">
        <BlogListItem
          id={1}
          title="English Englilsh"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          createdAt="2023-11-02"
          estimatedTime="6 mins"
        />
        <BlogListItem
          id={2}
          title="English Englilsh"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          createdAt="2023-11-02"
          estimatedTime="6 mins"
        />
        <BlogListItem
          id={3}
          title="English Englilsh"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          createdAt="2023-11-02"
          estimatedTime="6 mins"
        />
        <BlogListItem
          id={4}
          title="English Englilsh"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          createdAt="2023-11-02"
          estimatedTime="6 mins"
        />
        <BlogListItem
          id={5}
          title="English Englilsh"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          createdAt="2023-11-02"
          estimatedTime="6 mins"
        />
      </div>
      <div className="w-fit mx-auto pt-3">
        <Paging activePage={page} totalElements={1000} />
      </div>
    </div>
  );
}
