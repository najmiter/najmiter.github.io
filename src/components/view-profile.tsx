'use client';

export default function ViewProfile() {
  return (
    <a
      href={`/api/me?timezone=${Intl.DateTimeFormat().resolvedOptions().timeZone}`}
      target="_blank"
      className="hover:text-blue-400 transition-colors"
    >
      View My Picture
    </a>
  );
}
