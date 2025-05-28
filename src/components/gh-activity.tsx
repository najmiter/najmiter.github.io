'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

const CACHE = {
  [new Date().getFullYear()]: null as IGitHubActivity[] | null,
};

export default function GithubActivity() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState<IGitHubActivity[] | null>(null);
  const [year, setYear] = React.useState(new Date().getFullYear());

  const contributions = React.useMemo(
    () => data?.map((week) => week.contributionDays).flat() ?? [],
    [data]
  );

  const total = React.useMemo(
    () => contributions.reduce((a, c) => a + c.contributionCount, 0),
    [contributions]
  );

  React.useEffect(() => {
    (async () => {
      if (CACHE[year]) return setData(CACHE[year]);
      setIsLoading(true);
      const res = await getGitHubActivity(year);
      CACHE[year] = res?.data;
      setIsLoading(false);
      setData(res?.data);
    })();
  }, [year]);

  if (isLoading) {
    return (
      <Card>
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <div className="h-6 w-3/4 rounded bg-muted animate-pulse"></div>
            <div className="h-4 w-1/2 rounded bg-muted animate-pulse mt-1"></div>
          </div>
        </CardHeader>
        <CardContent className="px-2 sm:p-6">
          <div className="aspect-auto h-[350px] w-full flex items-end space-x-2 p-4 border border-dashed rounded-lg">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="w-full rounded-t-lg bg-muted animate-pulse"
                style={
                  {
                    height: `${Math.floor(Math.random() * 70) + 20}%`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </CardContent>
        <footer className="py-5 sm:px-6 px-2 bg-gradient-to-t from-[#181818] to-[#222]">
          <div className="relative z-30 flex flex-1 flex-col items-center justify-center gap-1">
            <div className="h-4 w-1/4 rounded bg-muted animate-pulse"></div>
            <div className="h-8 w-1/3 rounded bg-muted animate-pulse mt-1"></div>
          </div>
        </footer>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-2 px-6 py-4 sm:py-5">
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
        <div className="flex items-center sm:justify-center pb-2 px-6">
          <Select
            defaultValue={year.toString()}
            onValueChange={(y) => setYear(+y)}
          >
            <SelectTrigger className="w-40 bg-gradient-to-b to-[#171717] from-[#242424]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[350px] w-full"
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
            <Bar
              dataKey="contributionCount"
              fill={chartConfig.contributionCount.color}
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <footer className="py-5 sm:px-6 px-2 bg-gradient-to-t from-[#181818] to-[#222]">
        <div className="relative z-30 flex flex-1 flex-col items-center justify-center gap-1">
          <span className="text-xs text-muted-foreground">Total in {year}</span>
          <span className="text-lg font-bold leading-none sm:text-3xl">
            {Intl.NumberFormat('en-us').format(total)}
          </span>
        </div>
      </footer>
    </Card>
  );
}
