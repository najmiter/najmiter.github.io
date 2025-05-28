import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import React from 'react';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '700'] });

export const metadata: Metadata = {
  title: 'Najam ul Hassan',
  description: 'Najam ul Hassan software developer portfolio',
  robots: 'index, follow',
  authors: [{ name: 'Najam ul Hassan', url: 'https://github.com/najmiter' }],
  category: 'portfolio',
  openGraph: {
    title: 'Najam ul Hassan',
    description: "Najam ul Hassan software developer's portfolio",
    url: 'https://najmiter.vercel.app',
    siteName: 'Najam ul Hassan',
    locale: 'en_US',
    type: 'website',
    countryName: 'Pakistan',
  },
  keywords: [
    'Najam ul Hassan',
    'Najam',
    'najmiter',
    'Najam ul Hassan portfolio',
    'Najam ul Hassan software developer',
    'Najam ul Hassan developer',
    'Najam ul Hassan web developer',
    'Najam ul Hassan frontend developer',
    'Najam ul Hassan full stack developer',
    'Najam ul Hassan software engineer',
    'Najam ul Hassan software engineer portfolio',
    'Najam ul Hassan software engineer resume',
    'Najam ul Hassan resume',
    'Najam ul Hassan CV',
    'software developer portfolio',
    'software developer',
    'web developer',
    'frontend developer',
    'full stack developer',
    'software engineer',
    'software engineer portfolio',
    'software engineer resume',
    'software engineer CV',
  ],
};

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <html lang="en" className="dark">
      <body className={cn(poppins.className)}>{children}</body>
    </html>
  );
}
