/* src: https://github.com/knoctal/navigation-loader */
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import ReactDOM from 'react-dom';

export default function NavigationLoader() {
  const [isNavigating, setIsNavigating] = React.useState(false);
  const [ungaBungaProgress, setUngaBungaProgress] = React.useState(0);

  const pathname = usePathname();
  const params = useSearchParams().toString();

  const ungaBungaTimer = React.useRef<NodeJS.Timeout>(null);

  React.useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a');
      if (!anchor) return;

      if (!anchor.href.startsWith(window.location.origin)) return;

      if (anchor.href === window.location.href) return;

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || anchor.target === '_blank') {
        // in case they open in new tab, don't mess with the current page
        return;
      }

      setIsNavigating(true);
      document.body.style.overflow = 'hidden';
      document.body.inert = true;
      setUngaBungaProgress(0);
      if (ungaBungaTimer.current) {
        clearInterval(ungaBungaTimer.current);
      }
      ungaBungaTimer.current = setInterval(() => {
        setUngaBungaProgress((p) => {
          if (p === 0) return 50;
          // unga bunga wait at 97 until real load finishes
          if (p >= 97 && ungaBungaTimer.current) {
            clearInterval(ungaBungaTimer.current);
            return p;
          }
          const prog = p + 3;
          return prog;
        });
      }, 100);
    };

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
      document.body.style.overflow = 'auto';
      document.body.inert = false;
    };
  }, []);

  React.useEffect(() => {
    const clearIntervalIfAny = () => {
      if (ungaBungaTimer.current) {
        clearInterval(ungaBungaTimer.current);
        ungaBungaTimer.current = null;
      }
    };

    clearIntervalIfAny();
    setUngaBungaProgress(100);

    const timeout = setTimeout(() => {
      setIsNavigating(false);
      document.body.style.overflow = 'auto';
      document.body.inert = false;
      setUngaBungaProgress(0);
    }, 100);

    return () => {
      clearTimeout(timeout);
      clearIntervalIfAny();
    };
  }, [pathname, params]);

  if (!isNavigating) return null;

  return ReactDOM.createPortal(<Loader progress={ungaBungaProgress} />, document.body);
}

function Loader({ progress }: { progress: number }) {
  return (
    <div
      className="bg-secondary-300/10 fixed inset-0 z-[1000] cursor-default backdrop-blur"
      role="status"
      aria-live="polite"
      aria-label="Page loading">
      <div
        className="bg-theme animate-gradient fixed top-0 h-1 transition-all"
        role="progressbar"
        data-name="unga bunga progress bar" // bcz funny
        style={{ width: `${progress % 101}%` }}
        aria-label="Loading progress"
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}
