import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Languages',
  description: 'Time to learn languages',
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
