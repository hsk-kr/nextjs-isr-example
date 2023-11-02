import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Languages Blog',
  description: 'We let you know why you should learn languages.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="px-8 max-w-4xl mx-auto pt-12">{children}</main>;
}
