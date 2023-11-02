'use client';

import { Chewy } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const chewy = Chewy({
  weight: '400',
  subsets: ['latin'],
});

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

export default function Header() {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNavVisible = () =>
    setMobileNavVisible((prevVisible) => !prevVisible);

  return (
    <>
      <header className="shadow-lg bg-black text-white h-16">
        <div className="px-4 max-w-4xl flex items-center py-2 h-full justify-between mx-auto">
          <div className="flex gap-x-2">
            <Link href="/" className="flex items-center gap-x-1 mr-4">
              <Image
                className="w-8 h-8"
                src="/language.svg"
                alt="logo"
                width="24"
                height="24"
              />
              <h1 className={chewy.className}>Languages</h1>
            </Link>
            {/* PC Navbar */}
            <nav className="py-2 gap-x-2 hidden md:flex">
              {navItems.map((navItem) => (
                <Link key={navItem.label} href={navItem.href}>
                  {navItem.label}
                </Link>
              ))}
            </nav>
          </div>
          <Image
            className="w-10 h-10 cursor-pointer static md:hidden"
            src="/bars.svg"
            alt="open navbar"
            width="24"
            height="24"
            onClick={toggleMobileNavVisible}
          />
        </div>
      </header>
      {/* Mobile Navbar */}
      <nav
        className={`md:hidden top-16 w-screen absolute ${
          mobileNavVisible ? 'scale-y-100' : 'scale-y-0'
        } origin-top transition`}
      >
        {navItems.map((navItem) => (
          <Link
            key={navItem.label}
            href={navItem.href}
            className="block p-4 bg-black text-white hover:bg-gray-900 transition"
          >
            {navItem.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
