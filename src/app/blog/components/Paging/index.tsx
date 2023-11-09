import Link from 'next/link';

interface PagingProps {
  activePage: number;
  totalElements: number;
}

export const PAGE_CNT = 5;

export default function Paging({ activePage, totalElements }: PagingProps) {
  const startPage = Math.floor((activePage - 1) / PAGE_CNT) * PAGE_CNT + 1;
  const lastPage = Math.ceil(totalElements / PAGE_CNT);
  const lastPageOfThisRange = startPage + PAGE_CNT;
  const pages = [];

  const generateLinkClass = (active = false) => {
    return `${
      active ? 'bg-cyan-800' : 'bg-cyan-950'
    } p-2 px-4 rounded text-white cursor-pointer hover:bg-cyan-800`;
  };

  if (activePage > PAGE_CNT) {
    pages.push(
      <Link
        key="prev"
        href={`/blog?page=${startPage - 1}`}
        className={generateLinkClass()}
      >
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
        key={i}
        href={`/blog?page=${i}`}
        className={generateLinkClass(i === activePage)}
      >
        {i}
      </Link>
    );
  }

  if (lastPageOfThisRange < lastPage) {
    pages.push(
      <Link
        key="next"
        href={`/blog?page=${lastPageOfThisRange}`}
        className={generateLinkClass()}
      >
        {'>'}
      </Link>
    );
  }

  return <div className="flex gap-x-2">{pages}</div>;
}
