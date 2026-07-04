import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getProject, projects } from '@/lib/projects';
import ProjectDetails from '@/components/project-details';
import Footer from '@/components/footer';

export const revalidate = false;
export const dynamicParams = false;

interface Props {
  params: Promise<{ projectId: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ projectId: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectId } = await params;
  const project = getProject(projectId);
  if (!project) return {};

  const description = project.meta.about ?? project.details;
  const title = `${project.projectName} — ${project.meta.category}`;
  const canonical = `https://www.najmiter.dev/${project.id}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${project.projectName} — ${project.meta.tagline || project.meta.category}`,
      description,
      url: canonical,
      type: 'article',
      siteName: 'Najam ul Hassan',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.projectName} by Najam ul Hassan`,
      description,
      creator: '@najmiter',
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { projectId } = await params;
  const project = getProject(projectId);
  if (!project) notFound();

  return (
    <main className="relative min-h-screen py-20 px-5 sm:px-8 md:px-16 lg:px-24 bg-background text-foreground">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-14 font-mono text-xs text-muted-foreground">
          <Link href="/" className="hover:text-theme transition-colors">
            najmiter.dev
          </Link>{' '}
          <span aria-hidden className="text-line select-none">
            /
          </span>{' '}
          <span className="text-foreground/70">{project.id}</span>
        </nav>
        <ProjectDetails project={project} />
        <Footer />
      </div>
    </main>
  );
}
