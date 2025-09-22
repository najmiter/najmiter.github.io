import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import React, { Suspense } from 'react';
import LoadingContent from '@/components/loading-content';
import { Icons } from '@/components/ui/icons';
import WhatsHot from '@/components/whats-hot';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '700', '800', '900'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.najmiter.dev/'),
  title: 'Najam ul Hassan - Full Stack Software Developer Portfolio',
  description: 'Najam ul Hassan full stack software developer portfolio',
  robots: 'index, follow',
  authors: [{ name: 'Najam ul Hassan', url: 'https://github.com/najmiter' }],
  category: 'profile',
  applicationName: 'Najam ul Hassan – Full Stack Software Developer Portfolio',
  referrer: 'origin-when-cross-origin',
  creator: 'Najam ul Hassan',
  publisher: 'Najam ul Hassan',
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  icons: [
    {
      rel: 'icon',
      url: '/logo.png',
      type: 'image/png',
    },
  ],
  openGraph: {
    title: 'Najam ul Hassan - Full Stack Software Developer Portfolio',
    description: "Najam ul Hassan Full Stack Software Developer's portfolio",
    url: 'https://www.najmiter.dev/',
    siteName: 'Najam ul Hassan',
    locale: 'en_US',
    type: 'profile',
    countryName: 'Pakistan',
    images: [
      {
        url: 'https://www.najmiter.dev/logo.png',
        width: 800,
        height: 800,
        alt: "Najam ul Hassan Full Stack Software Developer's portfolio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Najam ul Hassan',
    description: "Najam ul Hassan Full Stack Software Developer's portfolio",
    creator: '@najmiter',
  },
  alternates: {
    canonical: 'https://www.najmiter.dev/',
  },
  appleWebApp: {
    title: 'Najam ul Hassan',
    statusBarStyle: 'default',
    capable: true,
  },
  manifest: '/manifest.json',
  keywords: [
    'Najam ul Hassan',
    'Najam',
    'najmiter',
    'Najam ul Hassan portfolio',
    'Najam ul Hassan software developer',
    'Najam ul Hassan Full Stack Software Developer',
    'Najam ul Hassan developer',
    'Najam ul Hassan web developer',
    'Najam ul Hassan frontend developer',
    'Najam ul Hassan full stack developer',
    'Najam ul Hassan software engineer',
    'Najam ul Hassan software engineer portfolio',
    'Najam ul Hassan software engineer resume',
    'Najam ul Hassan resume',
    'Najam ul Hassan CV',
  ],
};

export const revalidate = false;

const itemClasses = 'flex items-center gap-1 px-2 h-full text-xs text-gray-400 hover:opacity-90 transition-all';

export default async function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className="dark" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'website',
              name: 'Najam',
              url: 'https://www.najmiter.dev/',
              potentialAction: [
                {
                  '@type': 'ViewAction',
                  target: 'https://www.najmiter.dev/api/me',
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'website',
              name: 'Najam',
              url: 'https://www.najmiter.dev/',
              logo: 'https://www.najmiter.dev/logo.png',
              sameAs: [
                'https://www.linkedin.com/in/najmiter',
                'https://x.com/najmiterer',
                'https://www.facebook.com/najmiter',
                'https://www.instagram.com/najmiter',
                'https://github.com/najmiter',
                'https://www.youtube.com/@najmiter',
              ],
            }),
          }}
        />
      </head>
      <body className={cn(poppins.className, 'selection:bg-indigo-500 selection:text-white')}>
        {/* kids */}
        <Suspense fallback={<LoadingContent />}>{children}</Suspense>
        {/* grown ups? */}
        <div
          aria-label="status bar"
          aria-roledescription="status bar at the bottom"
          className="fixed fade-in y px-10 hidden sm:flex justify-between bottom-0 h-6 w-full border border-t-[#303030] bg-[#212121]">
          <section>
            <a
              type="button"
              href="https://github.com/najmiter/najmiter.github.io"
              target="_blank"
              className={itemClasses}>
              <Icons.Git size={14} />
              <span className="text-xs">main</span>
            </a>
          </section>
          <section className="flex items-center gap-3">
            <a role="button" href="https://nextjs.org/" target="_blank" className={itemClasses}>
              <Icons.Code size={14} />
              <span className="text-xs">Next.js</span>
            </a>
            <div className={itemClasses} title="Last updated">
              <Icons.Sync size={14} />
              <span className="text-xs">
                <time dateTime={new Date().toLocaleDateString('en-us')}>{new Date().toLocaleDateString('en-us')}</time>
              </span>
            </div>
            <WhatsHot />
          </section>
        </div>
      </body>
    </html>
  );
}
