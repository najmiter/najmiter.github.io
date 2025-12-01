'use server';

import { GetGithubActivity, IGitHubActivity } from '@/types';

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const YEAR = new Date().getFullYear();

const query = (year: number) => `
  query {
    user(login: "${GITHUB_USERNAME}") {
      contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

const fetchContributions = async (year: number) => {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: query(year) }),
  });

  if (!response.ok) {
    console.error('Failed to fetch contributions:', response.statusText);
    return;
  }

  const result = (await response.json()) as any;
  return result?.data?.user?.contributionsCollection?.contributionCalendar?.weeks as IGitHubActivity[];
};

export async function getGitHubActivity(year: number): GetGithubActivity {
  try {
    const events = await fetchContributions(year);
    return { length: events?.length ?? 0, data: events ?? null, error: null };
  } catch (error) {
    return { error: 'Failed to fetch GitHub activity', data: null, length: 0 };
  }
}
