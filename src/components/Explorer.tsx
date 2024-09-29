'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { Tabs, Tab, Card, CardBody, Switch } from '@nextui-org/react';

export default function Explorer({ children }: PropsWithChildren) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-stone-950/70 backdrop-blur-3xl overflow-hidden"
      style={{
        minWidth: 700,
        width: window.innerWidth / 2,
        height: window.innerHeight / 2 + 300,
      }}
    >
      <header className="h-10 w-full text-center bg-stone-800/70 p-2">
        Projects
      </header>
      <main className="grid grid-cols-[250px,1fr] h-full w-full">
        <nav className="p-2 flex flex-col gap-3">
          {/* <h4 className="text-default-500 text-tiny">Explore</h4> */}
          <Tabs
            size="lg"
            isVertical
            color="secondary"
            className="w-full"
            aria-label="explore the portfolio"
            classNames={{
              tabList: 'w-full bg-transparent',
              tab: 'h-12 justify-start',
            }}
          >
            <Tab key="projects" title="Projects"></Tab>
            <Tab key="skills" title="Skills"></Tab>
            <Tab key="education" title="Education"></Tab>
          </Tabs>
        </nav>
        <section className="bg-stone-800/70 h-full w-full"></section>
      </main>
      {children}
    </motion.div>
  );
}
