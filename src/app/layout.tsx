import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '700'] });

export const metadata: Metadata = {
  title: 'najmiter land',
  description: "Najam's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(poppins.className)}>{children}</body>
    </html>
  );
}
