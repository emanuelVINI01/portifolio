import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetailContent from '@/components/ProjectDetailContent';
import { getProjects, type Project } from '@/data/projects';

const BASE_URL = 'https://emanuelmissena.com';
const projects = getProjects('pt');

function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.id === slug);
}

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    return { title: 'Projeto não encontrado' };
  }

  const image = project.captures?.[0]?.src ?? '/profile.png';

  return {
    title: project.name,
    description: project.shortDesc,
    keywords: [project.name, project.category, ...project.tech],
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.name} | Emanuel Vini`,
      description: project.shortDesc,
      url: `${BASE_URL}/projects/${project.id}`,
      type: 'article',
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} | Emanuel Vini`,
      description: project.shortDesc,
      images: [image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) notFound();

  const projectUrl = `${BASE_URL}/projects/${project.id}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.longDesc,
    url: projectUrl,
    ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
    ...(project.liveUrl ? { sameAs: [project.liveUrl] } : {}),
    keywords: project.tech.join(', '),
    author: {
      '@type': 'Person',
      name: 'Emanuel Vini',
      url: BASE_URL,
    },
    ...(project.year ? { dateCreated: String(project.year) } : {}),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Projetos', item: `${BASE_URL}/projects` },
      { '@type': 'ListItem', position: 3, name: project.name, item: projectUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <ProjectDetailContent projectId={project.id} />
    </>
  );
}
