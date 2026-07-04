import { cn } from '@/lib/utils';
import { FadeInCharsProps } from '@/types';

export default function FadeInChars({ title, isLong, ltr, className }: FadeInCharsProps) {
  return title.split('').map((char, index, self) => (
    <span
      key={index}
      data-nth={index + 1}
      style={
        {
          '--nth': Math.abs(index + 1 - (ltr ? self.length : 0)),
          '--is-long': String(!!isLong),
        } as React.CSSProperties
      }
      className={cn('fade-in-char inline-block', className, { ltr })}>
      {char === ' ' ? <span>&nbsp;</span> : char}
    </span>
  ));
}
