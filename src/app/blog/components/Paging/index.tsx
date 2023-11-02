import Link from 'next/link';

interface PagingProps {
  activePage: number;
  totalElements: number;
}

const PAGE_CNT = 5;

export default function Paging({ activePage, totalElements }: PagingProps) {
  const startPage = Math.floor((activePage - 1) / PAGE_CNT) * PAGE_CNT + 1;
  const lastPage = Math.ceil(totalElements / PAGE_CNT);
  const lastPageOfThisRange = startPage + PAGE_CNT;
  const linkClassName =
    'bg-cyan-950 p-2 px-4 rounded text-white cursor-pointer hover:bg-cyan-800';
  const activeClassName = 'bg-cyan-800';
  const pages = [];

  if (activePage > PAGE_CNT) {
    pages.push(
      <Link href={`/blog?page=${startPage - 1}`} className={linkClassName}>
        {'<'}
      </Link>
    );
  }

  for (let i = startPage; i < lastPageOfThisRange; i++) {
    if (i > lastPage) {
      break;
    }

    pages.push(
      <Link
        href={`/blog?page=${i}`}
        className={`${linkClassName} ${
          i === activePage ? activeClassName : ''
        }`}
      >
        {i}
      </Link>
    );
  }

  if (lastPageOfThisRange < lastPage) {
    pages.push(
      <Link
        href={`/blog?page=${lastPageOfThisRange}`}
        className={linkClassName}
      >
        {'>'}
      </Link>
    );
  }

  return <div className="flex gap-x-2">{pages}</div>;
}
