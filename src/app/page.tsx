import React from 'react';
import { CURRENT_YEAR, resumeData } from '@/lib/data';
import Footer from '@/components/footer';
import GithubActivity from '@/components/gh-activity';
import { LucideExternalLink } from 'lucide-react';
import {
  AnimateInViewProps,
  Contribution,
  FadeInCharsProps,
  WorkExperience,
} from '@/types';
import dynamic from 'next/dynamic';
import { getGitHubActivity } from '@/lib/server';
import { cn } from '@/lib/utils';

const ViewProfile = dynamic(() => import('@/components/view-profile'));

export const revalidate = 86_400; // 1 day

const AnimateInView: React.FC<AnimateInViewProps> = ({ children }) => {
  return <div className={'come-into-view'}>{children}</div>;
};

const FadeInChars: React.FC<FadeInCharsProps> = ({ title, isLong, ltr }) => {
  return title.split('').map((char, index, self) => (
    <span
      key={index}
      data-nth={index + 1}
      style={
        {
          '--nth': Math.abs(index + 1 - (ltr ? self.length : 0)),
          '--is-long': String(!!isLong),
        } as React.CSSProperties
      }
      className={cn('fade-in-char inline-block', { ltr })}
    >
      {char === ' ' ? <span>&nbsp;</span> : char}
    </span>
  ));
};

const Tag = ({
  children,
  index,
}: React.PropsWithChildren<{ index: number }>) => (
  <div
    style={{ '--slide-in-delay': `${index * 0.1}ms` } as any}
    className="inline-block slide-in-animation cursor-default bg-[#232323] hover:bg-[#181818] transition-colors text-white text-xs px-2 py-1 rounded-md mr-2 mb-2"
  >
    {children}
  </div>
);

export default async function MainPage() {
  const res = await getGitHubActivity(CURRENT_YEAR);
  const {
    personalInfo,
    professionalSummary,
    workExperience,
    skills,
    education,
  } = resumeData;

  const renderSkills = () => {
    return skills.map((skill: string, index: number) => (
      <div key={index}>
        <Tag index={index}>{skill}</Tag>
      </div>
    ));
  };

  return (
    <main className="relative min-h-screen py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#111] text-white">
      <div className="max-w-5xl mx-auto">
        <AnimateInView>
          <div className="mb-4 border-b border-gray-800 pb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              {personalInfo.name}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-gray-400 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-blue-400 transition-colors"
              >
                {personalInfo.email}
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="hover:text-blue-400 transition-colors"
              >
                {personalInfo.phone}
              </a>
              <span className="hidden md:inline">|</span>
              <ViewProfile />
            </div>
          </div>
        </AnimateInView>

        <div className="mb-16">
          <div className="w-fit mb-4">
            <h2 className="sr-only">GitHub Activity</h2>
            <h2 aria-hidden className="text-2xl font-semibold">
              <FadeInChars title="GitHub Activity" />
            </h2>
            <div aria-hidden className="animate-underline" />
          </div>
          <GithubActivity initialData={res?.data} />
        </div>

        <AnimateInView>
          <section className="mb-16">
            <div className="w-fit mb-8">
              <h2 className="sr-only">Professional Summary</h2>
              <h2
                aria-hidden
                className="text-2xl font-semibold inline-block pb-1"
              >
                <FadeInChars title="Professional Summary" />
              </h2>
              <div aria-hidden className="animate-underline" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              {professionalSummary}
            </p>
          </section>
        </AnimateInView>

        <section className="mb-16">
          <div className="w-fit mb-8">
            <h2 className="sr-only">Work Experience</h2>
            <h2
              aria-hidden
              className="text-2xl font-semibold inline-block pb-1"
            >
              <FadeInChars title="Work Experience" />
            </h2>
            <div aria-hidden className="animate-underline" />
          </div>
          <div className="flex flex-col gap-12">
            {workExperience.map((job: WorkExperience, index: number) => (
              <div key={index}>
                <div className="relative">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <h3 className="sr-only">{job.company}</h3>
                    <h3 aria-hidden className="text-xl font-semibold relative">
                      <FadeInChars title={job.company} />
                    </h3>
                    <div className="text-gray-400">
                      <FadeInChars title={job.period} ltr />
                    </div>
                  </div>
                  <div className="sr-only">
                    {job.position} {job.location && `• ${job.location}`}
                  </div>
                  <div aria-hidden className="text-lg text-gray-300 mb-3">
                    <FadeInChars
                      isLong
                      title={`${job.position} • ${job.location}`}
                    />
                  </div>

                  <div className="space-y-6 mt-4">
                    {job.description.map(
                      (project: Contribution, pIndex: number) => (
                        <AnimateInView key={pIndex}>
                          <article className="bg-[#181818] p-5 rounded-lg">
                            <h4 className="text-lg font-medium text-white mb-2">
                              <a
                                target="_blank"
                                href={project.link}
                                className="underline-offset-2 hover:underline group flex items-center gap-1.5 hover:text-blue-300 transition-colors"
                              >
                                {project.projectName}{' '}
                                <LucideExternalLink
                                  size={16}
                                  className="opacity-0 -translate-x-4 transition-transform group-hover:opacity-100 group-hover:translate-x-0"
                                />
                              </a>
                            </h4>
                            <p className="text-gray-300 mb-3">
                              {project.details}
                            </p>

                            {project.technologies && (
                              <div className="mb-3">
                                <span className="text-gray-400 text-sm mb-1 block">
                                  Technologies:
                                </span>
                                <p className="text-gray-300">
                                  {project.technologies}
                                </p>
                              </div>
                            )}

                            {project.features && (
                              <div className="mb-3">
                                <span className="text-gray-400 text-sm mb-1 block">
                                  Features:
                                </span>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                  {project.features.map(
                                    (feature: string, fIndex: number) => (
                                      <Li key={fIndex}>{feature}</Li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}

                            {project.contributions && (
                              <div>
                                <span className="text-gray-400 text-sm mb-1 block">
                                  Contributions:
                                </span>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                  {project.contributions.map(
                                    (contribution: string, cIndex: number) => (
                                      <Li key={cIndex}>{contribution}</Li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}
                          </article>
                        </AnimateInView>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="w-fit mb-8">
            <h2 className="sr-only">Skills</h2>
            <h2
              aria-hidden
              className="text-2xl font-semibold inline-block pb-1"
            >
              <FadeInChars title="Skills" />
            </h2>
            <div aria-hidden className="animate-underline" />
          </div>
          <div className="flex flex-wrap gap-2">{renderSkills()}</div>
        </section>

        <AnimateInView>
          <section className="mb-16">
            <div className="w-fit mb-8">
              <h2 className="sr-only">Education</h2>
              <h2
                aria-hidden
                className="text-2xl font-semibold inline-block pb-1"
              >
                <FadeInChars title="Education" />
              </h2>
              <div aria-hidden className="animate-underline" />
            </div>
            <div className="border-l-2 border-gray-800 pl-6 relative">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
              <div className="text-lg font-medium">{education[0].degree}</div>
              {education[0].institution && (
                <div className="text-gray-300">{education[0].institution}</div>
              )}
              {education[0].year && (
                <div className="text-gray-400">{education[0].year}</div>
              )}
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
    <li className="flex items-start gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className="min-w-7 min-h-7"
      >
        <path
          fill="#3b82f6"
          d="M6 9.33v5.34c0 3.32 2.35 4.67 5.22 3.02l1.28-.74c.31-.18.5-.51.5-.87V7.92c0-.36-.19-.69-.5-.87l-1.28-.74C8.35 4.66 6 6.01 6 9.33z"
        ></path>
        <path
          fill="#3b82f6"
          d="M14 8.79v6.43c0 .39.42.63.75.43l1.1-.64c2.87-1.65 2.87-4.37 0-6.02l-1.1-.64a.503.503 0 00-.75.44z"
          opacity=".4"
        ></path>
      </svg>
      <div>{children}</div>
    </li>
  );
}
