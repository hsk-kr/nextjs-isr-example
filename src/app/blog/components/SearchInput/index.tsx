import Image from 'next/image';
import { HTMLAttributes, useRef } from 'react';

interface SearchInputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'onKeyUp' | 'type'> {
  keyword?: string;
  searchResultCnt: number;
  onSearch: (keyword: string) => void;
}

export default function SearchInput({
  className,
  keyword,
  searchResultCnt,
  onSearch,
  ...restProps
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = () => {
    onSearch(inputRef.current?.value || '');
  };

  return (
    <div>
      <div className="flex h-12 relative">
        <input
          {...restProps}
          ref={inputRef}
          type="text"
          className={`h-full border w-full rounded-lg p-4 pr-10 ${
            className ?? ''
          }`}
          onKeyUp={(e) => {
            if (e.key === 'Enter') submit();
          }}
        />
        <Image
          src="/magnifying-glass.svg"
          alt="search"
          width="16"
          height="16"
          className="w-6 h-6 absolute top-1/2 right-2 translate-y-[-50%] cursor-pointer"
          onClick={submit}
        />
      </div>
      <span className="text-sm mt-2 text-gray-800">{`${searchResultCnt.toLocaleString()} results${
        keyword ? ` - keyword: ${keyword}` : ''
      }`}</span>
    </div>
  );
}
