'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function ProjectModal({ projectId, children }: React.PropsWithChildren<{ projectId: string }>) {
  const router = useRouter();
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const isActive = pathname === `/${projectId}`;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isActive && !dialog.open) dialog.showModal();
    if (!isActive && dialog.open) dialog.close();
  }, [isActive]);

  const onClose = () => {
    if (window.location.pathname === `/${projectId}`) router.back();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label="Project details"
      className="project-dialog"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}>
      <div className="relative p-6 sm:p-10">
        <button
          type="button"
          autoFocus
          onClick={() => dialogRef.current?.close()}
          className="sticky top-2 float-right -mt-2 -mr-2 sm:-mt-5 sm:-mr-5 z-10 font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-theme border border-line hover:border-theme/40 transition-colors px-2.5 py-1 bg-card/80 backdrop-blur-sm"
          aria-label="Close project details">
          esc
        </button>
        {children}
      </div>
    </dialog>
  );
}
