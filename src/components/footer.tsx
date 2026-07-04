'use client';

import React from 'react';

export default function Footer() {
  const [currentYear] = React.useState(() => new Date().getFullYear());

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-2 py-8 border-t border-line mt-16 font-mono text-xs text-muted-foreground">
      <p>© {currentYear} Najam. All rights reserved.</p>
      <a
        href="https://github.com/najmiter/najmiter.github.io"
        target="_blank"
        className="hover:text-theme transition-colors">
        {"Source code (it's free if you want to use it ♥️)"}
      </a>
    </footer>
  );
}
