'use client';

import { cn } from '@/lib/utils';
import React from 'react';

const whatsHot = {
  text: 'This portfolio has a rust (Leptos) version as well',
  action: {
    text: 'Check it out',
    href: 'https://najmiter.netlify.app/',
  },
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
    <div ref={ref} aria-hidden className="fixed fade-in right-4 bottom-4 z-50">
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((b) => !b)}
          className="p-2 w-12 h-12 text-xl active:scale-95 bg-yellow-800/40 rounded-full shadow-lg hover:bg-yellow-800/70 transition-all active:opacity-90"
        >
          🔥
        </button>
        <div
          className={cn(
            'bg-gradient-to-tr from-stone-800 to-stone-950 z-40 absolute bottom-14 right-2 min-w-96 max-w-full text-white p-4 rounded-lg shadow-md',
            { 'come-in': isOpen },
            { 'go-out pointer-events-none': !isOpen }
          )}
        >
          <p className="text-sm">{whatsHot.text}</p>
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
