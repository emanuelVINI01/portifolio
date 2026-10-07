import type { MetadataRoute } from 'next';
import { getProjects } from '@/data/projects';

const BASE_URL = 'https://emanuelmissena.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjects('pt');

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...projects.map((project) => ({
      url: `${BASE_URL}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
