import { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.najmiter.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: ['https://www.najmiter.dev/najam-ul-hassan.png'],
    },
    ...projects.map((project) => ({
      url: `https://www.najmiter.dev/${project.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
