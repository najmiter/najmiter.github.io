import { ReactNode } from 'react';

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

export interface Contribution {
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
