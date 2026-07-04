import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://www.najmiter.dev/'),
  title: {
    default: 'Najam ul Hassan (najmiter) — Full Stack Software Developer',
    template: '%s | Najam ul Hassan',
  },
  description:
    'Portfolio of Najam ul Hassan (najmiter), a full stack software developer building web and mobile apps with React, Next.js, Node.js, and TypeScript. Explore projects like Strivio, Kayya, PdfRizz, and more.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    title: 'Najam ul Hassan — Full Stack Software Developer',
    description:
      'Portfolio of Najam ul Hassan (najmiter), a full stack software developer building web and mobile apps with React, Next.js, Node.js, and TypeScript.',
    url: 'https://www.najmiter.dev/',
    siteName: 'Najam ul Hassan',
    locale: 'en_US',
    type: 'profile',
    countryName: 'Pakistan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Najam ul Hassan — Full Stack Software Developer',
    description:
      'Portfolio of Najam ul Hassan (najmiter), a full stack software developer building web and mobile apps with React, Next.js, Node.js, and TypeScript.',
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
    'najmiter dev',
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
    'full stack developer Pakistan',
    'React developer',
    'Next.js developer',
    'Node.js developer',
    'TypeScript developer',
    'web developer portfolio',
    'mobile app developer',
  ],
};
