'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Icons } from './ui/icons';

const whatsHot = {
  text: 'This portfolio has a rust (Leptos) version as well',
  action: {
    text: 'Check it out',
    href: 'https://najmiter.netlify.app/',
  },
  date: new Date('2025-06-10'),
};

export default function WhatsHot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', keyHandler);
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
      document.removeEventListener('keydown', keyHandler);
    };
  }, []);

  return (
    <div ref={ref} className="fade-in">
      <div className="relative">
        <button
          type="button"
          aria-label="Toggle whats hot"
          onClick={() => setIsOpen((b) => !b)}
          className="text-xl active:scale-95 text-gray-400 hover:opacity-90 transition-all active:opacity-90"
        >
          <Icons.Bell size={14} />
        </button>
        <div
          className={cn(
            'bg-gradient-to-tr from-stone-800 to-stone-950 z-40 absolute bottom-8 right-2 min-w-[85vw] md:min-w-96 max-w-full text-white p-4 rounded-lg shadow-md',
            { 'come-in': isOpen },
            { 'go-out pointer-events-none': !isOpen }
          )}
        >
          <div className="grid gap-1">
            <p className="text-sm">{whatsHot.text}</p>
            <span className="text-xs text-muted-foreground">
              Updated: {whatsHot.date.toLocaleDateString()}
            </span>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={whatsHot.action.href}
            className="text-blue-400 hover:underline mt-2 inline-block"
          >
            {whatsHot.action.text}
          </a>
        </div>
      </div>
    </div>
  );
}
