import Link from 'next/link';
import { MEME_ASCII } from '@/lib/meme-ascii';

export const metadata = {
  title: 'I have never met that URL in my life.',
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-5 py-16 bg-background text-foreground">
      <div className="flex flex-col items-center text-center max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-theme/80 mb-8">404 — Not Found</p>

        <figure className="relative mb-10 max-w-full overflow-x-auto">
          <pre
            role="img"
            aria-label="ASCII art of a man shrugging off any association with this URL"
            className="font-mono text-[5px] sm:text-[8px] leading-[1.2] tracking-tight text-muted-foreground/80 w-fit mx-auto select-none text-left">
            {MEME_ASCII}
          </pre>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"
          />
          <figcaption className="absolute select-none inset-x-0 bottom-4 px-4 text-center font-mono text-xs sm:text-sm text-foreground [text-shadow:0_1px_4px_hsl(var(--background)),0_0_12px_hsl(var(--background))]">
            I have <span className="text-theme">never</span> met that URL in my life.
          </figcaption>
        </figure>

        <Link
          href="/"
          className="group font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-theme border border-line hover:border-theme/40 transition-colors px-5 py-2.5">
          <span aria-hidden className="inline-block transition-transform group-hover:-translate-x-1">
            ←
          </span>{' '}
          Back to the unconscious
        </Link>
      </div>
    </main>
  );
}
