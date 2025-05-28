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
