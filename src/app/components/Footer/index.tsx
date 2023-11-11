import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
];

export default function Footer() {
  return (
    <footer className="text-sm flex flex-col gap-y-2 justify-center items-center bg-gray-100 text-gray-600 p-4 border-t-[1px] border-gray-300">
      <h3 className="text-center">
        Languges are the key to communicating with the world and understanding
        yourself better.
      </h3>
      <ul className="flex list-disc marker:text-blue-600 gap-x-6 ">
        {navItems.map((navItem) => (
          <li key={navItem.label}>
            <Link
              href={navItem.href}
              className="text-blue-600 text-sm hover:text-blue-400 cursor-pointer"
            >
              {navItem.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="https://github.com/hsk-kr/nextjs-isr-example"
        target="_blank"
        className="flex gap-x-1 text-black cursor-pointer hover:text-gray-600"
      >
        <Image
          width={20}
          height={16}
          src="/github-mark.svg"
          alt="github repository"
        />
        <span>nextjs-isr-example</span>
      </Link>
    </footer>
  );
}
