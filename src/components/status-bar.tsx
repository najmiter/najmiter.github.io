import React from 'react';
import { Icons } from './ui/icons';
import WhatsHot from './whats-hot';

const itemClasses = 'flex items-center gap-1 px-2 h-full text-xs text-gray-400 hover:opacity-90 transition-all';

const lastUpdatedAt = new Date().toLocaleDateString('en-us');

export default async function StatusBar() {
  return (
    <div
      aria-label="status bar"
      aria-roledescription="status bar at the bottom"
      className="fixed fade-in y z-50 px-10 hidden sm:flex justify-between bottom-0 h-6 w-full border-t border-line bg-[#1a1f2b]/95 backdrop-blur">
      <section>
        <a type="button" href="https://github.com/najmiter/najmiter.github.io" target="_blank" className={itemClasses}>
          <Icons.Git size={14} />
          <span className="text-xs">main</span>
        </a>
      </section>
      <section className="flex items-center gap-3">
        <a role="button" href="https://nextjs.org/" target="_blank" className={itemClasses}>
          <Icons.Code size={14} />
          <span className="text-xs">Next.js</span>
        </a>
        <div className={itemClasses} title="Last updated">
          <Icons.Sync size={14} />
          <span className="text-xs">
            <time dateTime={lastUpdatedAt}>{lastUpdatedAt}</time>
          </span>
        </div>
        <React.Suspense>
          <WhatsHot />
        </React.Suspense>
      </section>
    </div>
  );
}
