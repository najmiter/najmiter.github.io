import React, { ReactNode, SVGElementType } from 'react';

export interface IGitHubActivity {
  contributionDays: Array<{
    date: string;
    contributionCount: number;
  }>;
}

export type GetGithubActivity = Promise<{
  length: number;
  data: IGitHubActivity[] | null;
  error: null | string;
}>;

export interface AnimateInViewProps {
  children: ReactNode;
}

export interface FadeInCharsProps {
  title: string;
  isLong?: boolean;
  ltr?: boolean;
  className?: string;
}

export interface Contribution {
  id: string;
  projectName: string;
  details: string;
  link: string;
  technologies?: string;
  contributions?: string[];
  features?: string[];
}

export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: Contribution[];
}

export interface IGitHubActivityProps {
  initialData: IGitHubActivity[] | null;
}

export interface SvgProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface TechStackItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'infrastructure' | 'tools' | 'ai' | 'testing';
  icon?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon?: string;
  highlights?: string[];
}

export interface ProjectArchitecture {
  overview: string;
  components: Array<{
    name: string;
    description: string;
    technologies: string[];
  }>;
  dataFlow?: string;
}

export interface ProjectChallenge {
  problem: string;
  solution: string;
  outcome: string;
}

export interface ProjectScreenshot {
  url: string;
  title: string;
  description?: string;
}

export interface ProjectTestimonial {
  author: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
}

export interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: string;
  status: 'live' | 'in-development' | 'completed' | 'archived';
  
  // Links
  liveUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  playstoreUrl?: string;
  appstoreUrl?: string;
  chromeStoreUrl?: string;
  
  // Technical details
  techStack: TechStackItem[];
  features: ProjectFeature[];
  
  // Metrics
  metrics?: ProjectMetric[];
  
  // Architecture
  architecture?: ProjectArchitecture;
  
  // Challenges and solutions
  challenges?: ProjectChallenge[];
  
  // Media
  heroImage?: string;
  screenshots?: ProjectScreenshot[];
  videoUrl?: string;
  
  // Timeline
  startDate?: string;
  endDate?: string;
  duration?: string;
  
  // Team and collaboration
  teamSize?: number;
  role?: string;
  
  // Impact
  impact?: string[];
  testimonials?: ProjectTestimonial[];
  
  // Meta
  tags?: string[];
  featured?: boolean;
}
