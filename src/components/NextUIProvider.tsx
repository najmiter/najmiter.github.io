'use client';

import { PropsWithChildren } from 'react';
import { NextUIProvider as Provider } from '@nextui-org/react';

export default function NextUIProvider({ children }: PropsWithChildren) {
  return <Provider>{children}</Provider>;
}
