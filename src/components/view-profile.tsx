'use client';

import React from 'react';

export default function ViewProfile() {
  const [timezone] = React.useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  return (
    <a
      href={`/api/me?timezone=${timezone}`}
      target="_blank"
      className="hover:text-blue-400 transition-colors"
    >
      View My Picture
    </a>
  );
}
