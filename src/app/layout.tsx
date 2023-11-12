import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { generateMetaTitleAndDesc } from '@/lib/seo';

const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

const title = {
  default: 'Home | Languages',
  template: '%s | Languages',
};

const description =
  'Time to learn languages. Expand your world and talk to the world';

export const metadata: Metadata = {
  ...generateMetaTitleAndDesc(title, description),
  metadataBase: new URL(process.env.BASE_URL ?? ''),
  keywords: ['blog', 'language', 'motivation'],
  creator: 'hsk.coder@gmail.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
