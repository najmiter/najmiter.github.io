'use client';

import * as React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getGitHubActivity } from '@/lib/server';
import { IGitHubActivity, IGitHubActivityProps } from '@/types';
import { CURRENT_YEAR } from '@/lib/data';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { cn } from '@/lib/utils';

const CACHE: Record<number, IGitHubActivity[] | null> = {
  [CURRENT_YEAR]: null,
};
const YEARS = [] as number[];
for (let i = 2020; i <= CURRENT_YEAR; i++) YEARS.unshift(i);

function GithubActivity({ initialData }: IGitHubActivityProps) {
  const [isLoading, setIsLoading] = React.useState(!initialData);
  const [data, setData] = React.useState<IGitHubActivity[] | null>(() => {
    if (initialData) {
      CACHE[CURRENT_YEAR] = initialData;
      return initialData;
    }
    return null;
  });
  const [year, setYear] = React.useState(CURRENT_YEAR);
  const stuff = React.useRef<HTMLDivElement>(null);
  const [brosWidth, setBrosWidth] = React.useState('100%');

  const contributions = React.useMemo(() => data?.map((week) => week.contributionDays).flat() ?? [], [data]);
  const total = React.useMemo(() => contributions.reduce((a, c) => a + c.contributionCount, 0), [contributions]);
  const maxContribution = React.useMemo(() => {
    return Math.max(...contributions.map((c) => c.contributionCount));
  }, [contributions]);

  React.useEffect(() => {
    (async () => {
      if (CACHE[year]) {
        return setData(CACHE[year]);
      }
      setIsLoading(true);
      const res = await getGitHubActivity(year);
      CACHE[year] = res?.data;
      setIsLoading(false);
      setData(res?.data);
    })();
  }, [year]);

  React.useEffect(() => {
    if (!stuff.current) return;
    const handler = () => {
      const w = stuff.current?.scrollWidth;
      if (w) {
        setBrosWidth(w.toString() + 'px');
      }
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [stuff]);

  const content = React.useMemo(() => {
    return (
      <TooltipProvider>
        {data?.map((c, i) => (
          <div key={i} className={cn('grid gap-2', { 'self-start': i > 0 })}>
            {c.contributionDays.map(
              (day, j) =>
                new Date() >= new Date(day.date) && (
                  <Tooltip delayDuration={100} key={day.date + j}>
                    <TooltipTrigger asChild>
                      <div
                        data-contributions={day.contributionCount}
                        aria-label={`Contributions on ${day.date}`}
                        className={cn('h-2.5 w-2.5 rounded bg-green-500 border border-green-200/10', {
                          'bg-opacity-100': !day.contributionCount,
                          'border-none': new Date() < new Date(day.date),
                          'bg-[#303030]/90 border-[#303030]/10':
                            !day.contributionCount && new Date() >= new Date(day.date),
                        })}
                        style={
                          {
                            '--tw-bg-opacity': Math.max(
                              0.3,
                              1.0 - (maxContribution - day.contributionCount) / maxContribution
                            ),
                          } as React.CSSProperties
                        }
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {day.contributionCount ?? 0} contributions on{' '}
                        {new Date(day.date).toLocaleString('en-us', {
                          month: 'short',
                          day: '2-digit',
                          year: 'numeric',
                        })}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                )
            )}
          </div>
        ))}
      </TooltipProvider>
    );
  }, [data, maxContribution]);

  const loadingContent = React.useMemo(
    () => (
      <Card aria-busy role="presentation">
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-2 px-6 py-4 sm:py-5">
            <div className="h-5 w-3/4 rounded bg-muted animate-pulse"></div>
            <div className="h-3 w-1/2 rounded bg-muted animate-pulse mt-1"></div>
          </div>
        </CardHeader>
        <CardContent className="px-2 p-3 space-y-3 h-[180px]">
          <div role="row" className="flex items-center justify-between w-full">
            <div className="h-3 w-10 rounded bg-muted animate-pulse"></div>
            <div className="h-3 w-10 rounded bg-muted animate-pulse"></div>
            <div className="h-3 w-10 rounded bg-muted animate-pulse"></div>
            <div className="h-3 w-10 rounded bg-muted animate-pulse"></div>
            <div className="h-3 w-10 rounded bg-muted animate-pulse"></div>
          </div>
          <div className="flex justify-between items-end gap-2 overflow-auto pb-5">
            {Array.from({ length: 52 }).map((_, weekIndex) => (
              <div key={weekIndex} className="grid gap-2">
                {Array.from({ length: 7 }).map((_, dayIndex) => (
                  <div key={dayIndex} className="h-2.5 w-2.5 rounded bg-muted animate-pulse" />
                ))}
              </div>
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
    ),
    []
  );

  if (isLoading) return loadingContent;

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-2 px-6 py-4 sm:py-5">
          <CardTitle>
            <a
              target="_blank"
              href="https://github.com/najmiter"
              className="text-blue-500 hover:text-blue-600 font-semibold transition-colors underline underline-offset-1">
              @najmiter
            </a>
          </CardTitle>
          <CardDescription>GitHub contributions in the year {year}</CardDescription>
        </div>
        <div className="flex items-center sm:justify-center pb-2 px-6">
          <Select defaultValue={year.toString()} onValueChange={(y) => setYear(+y)}>
            <SelectTrigger aria-label="Select year" className="w-40 bg-gradient-to-b to-[#171717] from-[#242424]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {YEARS.map((y) => (
                <SelectItem key={y} value={y.toString()}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 p-3 space-y-3 overflow-auto">
        <div
          role="row"
          style={{ width: brosWidth }}
          className="flex items-center text-muted-foreground text-xs justify-between w-full">
          <span aria-label="January">Jan</span>
          <span aria-label="March">Mar</span>
          <span aria-label="June">Jun</span>
          <span aria-label="September">Sep</span>
          <span aria-label="December">Dec</span>
        </div>
        <div ref={stuff} className="flex justify-between items-end gap-2 pb-5">
          {content}
        </div>
      </CardContent>
      <footer className="py-5 sm:px-6 px-2 bg-gradient-to-t from-[#181818] to-[#222]">
        <div className="relative z-30 flex flex-1 flex-col items-center justify-center gap-1">
          <span className="text-xs text-muted-foreground">Total in {year}</span>
          <span className="text-lg font-bold leading-none sm:text-3xl">{Intl.NumberFormat('en-us').format(total)}</span>
        </div>
      </footer>
    </Card>
  );
}

export default React.memo(GithubActivity);
