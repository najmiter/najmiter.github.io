import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.najmiter.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: ['https://www.najmiter.dev/logo.png'],
    },
  ];
}
