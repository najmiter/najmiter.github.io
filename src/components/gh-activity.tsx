'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { getGitHubActivity } from '@/lib/server';
import { IGitHubActivity } from '@/types';

const chartConfig = {
  views: {
    label: 'Daily Activity',
  },
  contributionCount: {
    label: 'Contributions',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export default function GithubActivity() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState<IGitHubActivity[] | null>(null);
  const [year, setYear] = React.useState(new Date().getFullYear());

  const contributions = React.useMemo(
    () => data?.map((week) => week.contributionDays).flat() ?? [],
    [data]
  );
  console.log('contributions', contributions);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await getGitHubActivity();
      setIsLoading(false);
      setData(res?.data);
    })();
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>
            GitHub Activity{' '}
            <a
              target="_blank"
              href="https://github.com/najmiter"
              className="text-blue-500 hover:text-blue-600 font-semibold transition-colors underline underline-offset-1"
            >
              @najmiter
            </a>
          </CardTitle>
          <CardDescription>
            GitHub contributions in the year {year}
          </CardDescription>
        </div>
        {/* <div className="flex">
          {['codePushes'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div> */}
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[450px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={contributions ?? []}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="contributionCount"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    });
                  }}
                />
              }
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
