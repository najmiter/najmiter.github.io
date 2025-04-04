import React, { ReactNode } from 'react';
import { resumeData } from '@/lib/data';
import Footer from '@/components/footer';

export const revalidate = false;

interface AnimateInViewProps {
  children: ReactNode;
}

interface Contribution {
  projectName: string;
  details: string;
  technologies?: string;
  contributions?: string[];
  features?: string[];
}

interface WorkExperience {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: Contribution[];
}

// Animation component using CSS animations
const AnimateInView: React.FC<AnimateInViewProps> = ({ children }) => {
  return <div className={'come-into-view'}>{children}</div>;
};

const Tag = ({
  children,
  index,
}: React.PropsWithChildren<{ index: number }>) => (
  <div
    style={{ '--slide-in-delay': `${index * 0.1}ms` } as any}
    className="inline-block slide-in-animation bg-gray-800 text-white text-xs px-2 py-1 rounded-md mr-2 mb-2"
  >
    {children}
  </div>
);

export default function MainPage(): React.JSX.Element {
  const {
    personalInfo,
    professionalSummary,
    workExperience,
    skills,
    education,
  } = resumeData;

  // Modified skills section to use AnimateInView for each skill
  const renderSkills = () => {
    return skills.map((skill: string, index: number) => (
      <div key={index}>
        <Tag index={index}>{skill}</Tag>
      </div>
    ));
  };

  return (
    <main className="relative min-h-screen py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-zinc-900 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <AnimateInView>
          <div className="mb-16 border-b border-gray-800 pb-8">
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
              <span>{personalInfo.phone}</span>
            </div>
          </div>
        </AnimateInView>

        {/* Professional Summary */}
        <AnimateInView>
          <section className="mb-16">
            <div className="w-fit mb-8">
              <h2 className="text-2xl font-semibold inline-block pb-1">
                Professional Summary
              </h2>
              <div aria-hidden className="animate-underline" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              {professionalSummary}
            </p>
          </section>
        </AnimateInView>

        {/* Work Experience */}
        <section className="mb-16">
          <div className="w-fit mb-8">
            <h2 className="text-2xl font-semibold inline-block pb-1">
              Work Experience
            </h2>
            <div aria-hidden className="animate-underline" />
          </div>
          <div className="flex flex-col gap-12">
            {workExperience.map((job: WorkExperience, index: number) => (
              <div key={index}>
                <div className="border-l-2 border-gray-800 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <h3 className="text-xl font-semibold text-blue-400">
                      {job.company}
                    </h3>
                    <div className="text-gray-400">{job.period}</div>
                  </div>
                  <div className="text-lg text-gray-300 mb-3">
                    {job.position} {job.location && `• ${job.location}`}
                  </div>

                  <div className="space-y-6 mt-4">
                    {job.description.map(
                      (project: Contribution, pIndex: number) => (
                        <AnimateInView key={pIndex}>
                          <div className="bg-zinc-800 p-5 rounded-lg">
                            <h4 className="text-lg font-medium text-white mb-2">
                              {project.projectName}
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
                          </div>
                        </AnimateInView>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <div className="w-fit mb-8">
            <h2 className="text-2xl font-semibold inline-block pb-1">Skills</h2>
            <div aria-hidden className="animate-underline" />
          </div>
          <div className="flex flex-wrap gap-2">{renderSkills()}</div>
        </section>

        {/* Education */}
        <AnimateInView>
          <section className="mb-16">
            <div className="w-fit mb-8">
              <h2 className="text-2xl font-semibold inline-block pb-1">
                Education
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

        {/* Footer */}
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
