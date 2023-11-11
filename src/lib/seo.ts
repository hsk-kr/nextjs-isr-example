import { Metadata } from 'next';

type Title = Exclude<Metadata['title'], null>;

export const generateMetaTitleAndDesc = (
  title: Title,
  description: string
): Metadata => ({
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
});
