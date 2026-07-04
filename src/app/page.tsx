import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { resumeData } from '@/lib/data';

import Footer from '@/components/footer';
import GithubActivity from '@/components/gh-activity';
import type { AnimateInViewProps, Contribution, FadeInCharsProps, WorkExperience } from '@/types';
import FadeInChars from '@/components/fade-in-chars';

const ViewProfile = dynamic(() => import('@/components/view-profile'));

export const revalidate = false;

const AnimateInView: React.FC<AnimateInViewProps> = ({ children }) => {
  return <div className={'come-into-view'}>{children}</div>;
};

const SectionHeading = ({ index, title }: { index: string; title: string }) => (
  <div className="mb-10">
    <h2 className="sr-only">{title}</h2>
    <div aria-hidden className="flex items-baseline gap-4">
      <span className="font-mono text-xs text-theme/80 select-none tracking-widest">{index}</span>
      <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight">
        <FadeInChars title={title} />
      </h2>
    </div>
    <div aria-hidden className="animate-underline mt-4" />
  </div>
);

const Tag = ({ children, index }: React.PropsWithChildren<{ index: number }>) => (
  <div
    style={{ '--slide-in-delay': `${index * 0.1}ms` } as any}
    className="inline-block slide-in-animation cursor-default border border-line font-mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-theme hover:border-theme/40 transition-colors px-2.5 py-1 mr-2 mb-2">
    {children}
  </div>
);

export default async function MainPage() {
  const { personalInfo, professionalSummary, workExperience, skills, education, links } = resumeData;
  const [firstName, ...restOfName] = personalInfo.name.split(' ');

  const renderSkills = () => {
    return skills.map((skill: string, index: number) => (
      <div key={index}>
        <Tag index={index}>{skill}</Tag>
      </div>
    ));
  };

  return (
    <main className="relative min-h-screen py-20 px-5 sm:px-8 md:px-16 lg:px-24 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <AnimateInView>
          <header className="mb-20">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Full Stack Developer
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight leading-[1.05] mb-8">
              {firstName} <em className="text-theme">{restOfName.join(' ')}</em>
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground border-t border-line pt-5">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-theme transition-colors">
                {personalInfo.email}
              </a>
              <span aria-hidden className="text-line select-none">
                /
              </span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-theme transition-colors">
                LinkedIn
              </a>
              <span aria-hidden className="text-line select-none">
                /
              </span>
              <ViewProfile />
            </div>
          </header>
        </AnimateInView>

        <AnimateInView>
          <section className="mb-24">
            <h2 className="sr-only">Summary</h2>
            <p className="font-display text-2xl md:text-3xl font-light leading-snug text-foreground/90">
              {professionalSummary}
            </p>
          </section>
        </AnimateInView>

        <section className="mb-24">
          <SectionHeading index="01" title="GitHub Activity" />
          <GithubActivity />
        </section>

        <section className="mb-24">
          <SectionHeading index="02" title="Experience" />
          <div className="flex flex-col gap-20">
            {workExperience.map((job: WorkExperience, index: number) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 mb-1">
                  <h3 className="sr-only">{job.company}</h3>
                  <h3 aria-hidden className="font-display text-2xl font-normal">
                    <FadeInChars title={job.company} />
                  </h3>
                  <div className="font-mono text-theme/90">
                    <FadeInChars title={job.period} ltr className="text-xs" />
                  </div>
                </div>
                <div className="sr-only">
                  {job.position} {job.location && `• ${job.location}`}
                </div>
                <div aria-hidden className="font-mono text-muted-foreground uppercase tracking-wider">
                  <FadeInChars className="text-[11px]" isLong title={`${job.position} — ${job.location}`} />
                </div>

                <div className="mt-8 border-l border-line space-y-8">
                  {job.description.map((project: Contribution, pIndex: number) => (
                    <AnimateInView key={pIndex}>
                      <article className="group relative pl-6 sm:pl-8">
                        <span
                          aria-hidden
                          className="absolute -left-px top-2 h-5 w-px bg-theme transition-all group-hover:h-9"
                        />
                        <h4 className="text-lg mb-2">
                          <Link
                            href={`/${project.id}`}
                            className="font-display cursor-pointer font-medium text-foreground hover:text-theme transition-colors inline-flex items-baseline gap-2">
                            {project.projectName}
                            <span
                              aria-hidden
                              className="font-mono text-xs text-theme opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                              →
                            </span>
                          </Link>
                        </h4>
                        <p className="text-foreground/75 group-hover:text-foreground leading-relaxed mb-4 max-w-2xl">
                          {project.details}
                        </p>

                        {project.technologies && (
                          <p className="font-mono text-xs text-muted-foreground mb-4">
                            <span className="text-theme/70 transition-colors group-hover:text-theme">stack</span> —{' '}
                            <span className="group-hover:text-foreground">{project.technologies}</span>
                          </p>
                        )}

                        {project.features && (
                          <ul className="space-y-1.5 text-foreground/70 text-[15px] leading-relaxed">
                            {project.features.map((feature: string, fIndex: number) => (
                              <Li key={fIndex}>{feature}</Li>
                            ))}
                          </ul>
                        )}

                        {project.contributions && (
                          <ul className="space-y-1.5 text-foreground/70 text-[15px] leading-relaxed">
                            {project.contributions.map((contribution: string, cIndex: number) => (
                              <Li key={cIndex}>{contribution}</Li>
                            ))}
                          </ul>
                        )}
                      </article>
                    </AnimateInView>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <SectionHeading index="03" title="Skills" />
          <div className="flex flex-wrap gap-y-0.5">{renderSkills()}</div>
        </section>

        <AnimateInView>
          <section className="mb-24">
            <SectionHeading index="04" title="Education" />
            <div className="flex items-baseline gap-4">
              <span aria-hidden className="font-mono text-xs text-theme select-none">
                —
              </span>
              <div>
                <div className="font-display text-xl">{education[0].degree}</div>
                {education[0].institution && <div className="text-foreground/70">{education[0].institution}</div>}
                {education[0].year && (
                  <div className="font-mono text-xs text-muted-foreground">{education[0].year}</div>
                )}
              </div>
            </div>
          </section>
        </AnimateInView>

        <AnimateInView>
          <section className="mb-24">
            <SectionHeading index="05" title="Links" />
            <div className="space-y-3">
              {links.map((link, i) => (
                <div key={i} className="flex items-baseline gap-4">
                  <span aria-hidden className="font-mono text-xs text-theme select-none">
                    —
                  </span>
                  <a
                    href={link.href}
                    target="_blank"
                    className="font-mono text-sm text-foreground/80 hover:text-theme transition-colors">
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </AnimateInView>
        <Footer />
      </div>
    </main>
  );
}

function Li({ children }: React.PropsWithChildren) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden
        className="font-mono text-xs text-theme/70 transition-colors group-hover:text-theme leading-relaxed select-none mt-px">
        {'//'}
      </span>
      <div className="group-hover:text-foreground">{children}</div>
    </li>
  );
}
