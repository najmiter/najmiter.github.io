import { Fraunces, Instrument_Sans, JetBrains_Mono } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import React, { Suspense } from 'react';
import LoadingContent from '@/components/loading-content';
import StatusBar from '@/components/status-bar';
import { metadata } from '@/lib/metadata';
import LdJson from '@/components/ld-json';

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});
const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export { metadata };

export const revalidate = false;

export default async function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className="dark" dir="ltr" suppressHydrationWarning>
      <head>
        <LdJson />
      </head>
      <body className={cn(instrumentSans.variable, fraunces.variable, jetbrainsMono.variable, 'font-sans')}>
        <Suspense fallback={<LoadingContent />}>
          {/* kids */}
          {children}
          {/* grown ups? */}
          <StatusBar />
        </Suspense>
      </body>
    </html>
  );
}
