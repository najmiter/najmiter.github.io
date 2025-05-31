import { getGitHubActivity } from '@/lib/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const year = req.nextUrl.searchParams.get('year') ?? new Date().getFullYear();
  return NextResponse.json(await getGitHubActivity(+year), {
    status: 200,
    headers: {
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
