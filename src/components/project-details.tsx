import React from 'react';
import { cn } from '@/lib/utils';
import type { Project } from '@/lib/projects';
import FadeInChars from './fade-in-chars';

export default function ProjectDetails({ project, inModal = false }: { project: Project; inModal?: boolean }) {
  const { meta } = project;
  const sections: Array<{ title: string; body: React.ReactNode }> = [];

  sections.push({
    title: 'Overview',
    body: <p className="text-foreground/80 leading-relaxed max-w-2xl">{meta.about ?? project.details}</p>,
  });

  if (project.features?.length) {
    sections.push({
      title: 'Features',
      body: (
        <ul className="space-y-2.5">
          {project.features.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
          ))}
        </ul>
      ),
    });
  }

  if (project.contributions?.length) {
    sections.push({
      title: 'What I did',
      body: (
        <ul className="space-y-2.5">
          {project.contributions.map((contribution, index) => (
            <FeatureItem key={index} text={contribution} />
          ))}
        </ul>
      ),
    });
  }

  if (meta.stack?.length) {
    sections.push({
      title: 'Stack',
      body: (
        <div className="flex flex-wrap gap-y-0.5">
          {meta.stack.map((tech) => (
            <span
              key={tech}
              className="inline-block cursor-default border border-line font-mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-theme hover:border-theme/40 transition-colors px-2.5 py-1 mr-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
      ),
    });
  }

  return (
    <article className={cn(!inModal && 'max-w-3xl')}>
      <header className="mb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
          {meta.category} <span className="text-line select-none">/</span> {meta.platform}
          {meta.status === 'archived' && (
            <>
              {' '}
              <span className="text-line select-none">/</span> <span className="text-theme/70">archived</span>
            </>
          )}
        </p>
        <h1
          className={cn(
            'font-display font-light tracking-tight leading-[1.08] mb-4',
            inModal ? 'text-3xl md:text-4xl' : 'text-4xl md:text-6xl',
          )}>
          <em className="text-theme">{project.projectName}</em>
        </h1>
        {meta.tagline && (
          <p className="font-display text-lg md:text-xl font-light text-foreground/70 leading-snug max-w-2xl">
            {meta.tagline}
          </p>
        )}
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 border-y border-line py-5 mb-12">
        <MetaCell label="Role">{project.position}</MetaCell>
        <MetaCell label="At">{project.company}</MetaCell>
        <MetaCell label="Period">{project.period}</MetaCell>
        <MetaCell label="Where">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme hover:underline underline-offset-4 decoration-theme/40">
            {hostOf(project.link)} ↗
          </a>
        </MetaCell>
      </div>

      {meta.highlights && meta.highlights.length > 0 && (
        <div className="flex flex-wrap gap-8 mb-12">
          {meta.highlights.map((highlight) => (
            <div key={highlight.label}>
              <div className="font-display text-2xl font-light text-foreground">{highlight.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                {highlight.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-12">
        {sections.map((section, index) => (
          <section key={section.title}>
            <SectionLabel index={String(index + 1).padStart(2, '0')} title={section.title} />
            {section.body}
          </section>
        ))}
      </div>

      <footer className="mt-14 pt-6 border-t border-line flex flex-wrap items-baseline gap-x-8 gap-y-3">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group font-display text-lg text-foreground hover:text-theme transition-colors">
          Visit {hostOf(project.link)}{' '}
          <span
            aria-hidden
            className="inline-block font-mono text-sm text-theme transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
        {meta.repo && meta.repo !== project.link && (
          <a
            href={meta.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-theme transition-colors">
            source ↗
          </a>
        )}
      </footer>
    </article>
  );
}

function hostOf(link: string) {
  try {
    return new URL(link).hostname.replace(/^www\./, '');
  } catch {
    return link;
  }
}

const SectionLabel = ({ index, title }: { index: string; title: string }) => (
  <div className="mb-6">
    <div className="flex items-baseline gap-3">
      <span aria-hidden className="font-mono text-[10px] text-theme/80 select-none tracking-widest">
        {index}
      </span>
      <h2 className="font-display text-xl md:text-2xl font-light tracking-tight">
        <FadeInChars title={title} />
      </h2>
    </div>
    <div
      aria-hidden
      className="mt-3 h-px animate-underline"
      style={{ background: 'linear-gradient(to right, hsl(var(--theme) / 0.9), hsl(var(--line)))' }}
    />
  </div>
);

const MetaCell = ({ label, children }: React.PropsWithChildren<{ label: string }>) => (
  <div className="min-w-0">
    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">{label}</div>
    <div className="text-sm text-foreground/90 truncate">{children}</div>
  </div>
);

const FeatureItem = ({ text }: { text: string }) => {
  const splitAt = text.indexOf(': ');
  const title = splitAt > 0 ? text.slice(0, splitAt) : null;
  const rest = splitAt > 0 ? text.slice(splitAt + 2) : text;
  return (
    <li className="flex items-start gap-3">
      <span aria-hidden className="font-mono text-xs text-theme/70 leading-relaxed select-none mt-px">
        {'//'}
      </span>
      <span className="text-foreground/75 text-[15px] leading-relaxed">
        {title && <span className="text-foreground font-medium">{title} — </span>}
        {rest}
      </span>
    </li>
  );
};
