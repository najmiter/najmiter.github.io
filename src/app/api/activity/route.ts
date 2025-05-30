import { getGitHubActivity } from '@/lib/server';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const year = req.nextUrl.searchParams.get('year') ?? new Date().getFullYear();
  return await getGitHubActivity(+year);
}
