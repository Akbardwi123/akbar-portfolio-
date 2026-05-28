import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LangProvider } from '@/context/LangContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Akbar Dwi Pebriansyah — Junior Web Developer',
  description:
    'Portfolio of Akbar Dwi Pebriansyah — Junior Web Developer specializing in Laravel & Node.js. Building real-world web applications with passion and precision.',
  keywords: [
    'Akbar Dwi Pebriansyah',
    'Junior Web Developer',
    'Laravel Developer',
    'Node.js Developer',
    'Portfolio',
    'Web Development',
    'Indonesia',
  ],
  authors: [{ name: 'Akbar Dwi Pebriansyah' }],
  openGraph: {
    title: 'Akbar Dwi Pebriansyah — Junior Web Developer',
    description:
      'Junior Web Developer specializing in Laravel & Node.js with real-world professional experience.',
    type: 'website',
    locale: 'id_ID',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
