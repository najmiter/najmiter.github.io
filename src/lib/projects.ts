import { resumeData, type ProjectDescription } from '@/lib/data';

export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface ProjectMeta {
  /** short marketing one-liner shown under the project name */
  tagline: string;
  /** longer prose for the overview section, sourced from the live product pages */
  about?: string;
  category: string;
  platform: string;
  status: 'live' | 'archived';
  audience?: string;
  stack?: string[];
  /** small metric chips: installs, stars, ratings, version… */
  highlights?: ProjectHighlight[];
  repo?: string;
  /** product features scraped from the live page — used when the resume entry has none */
  features?: string[];
}

export interface Project extends ProjectDescription {
  meta: ProjectMeta;
  company: string;
  position: string;
  period: string;
}

const PROJECT_META: Record<string, ProjectMeta> = {
  kayya: {
    tagline: 'The power of financing customers — in your hands.',
    about:
      'Kayya is an embedded financing platform for service businesses, letting them offer clients pay-over-time plans directly. An AI-powered engine automates approvals, risk scoring, and payment collection, while the Vault Dashboard and a smart CRM help businesses track revenue, cash flow, and client retention. Under the hood it integrates Stripe, Plaid, Didit, CRS, and other financial services.',
    category: 'Fintech',
    platform: 'Web',
    status: 'live',
    audience:
      'Service businesses with offerings priced $1,000+ — medspas, home renovation, auto services, dentistry, legal, consulting',
    stack: ['Next.js', 'Tailwind', 'NestJS', 'Node.js', 'Stripe', 'Plaid', 'Didit', 'CRS'],
    features: [
      '60-second client financing: Frictionless application flow that approves clients in about a minute.',
      'AI risk engine: Real-time risk scoring and repayment optimization on every application.',
      'Vault Dashboard: Revenue, cash flow, and client-retention tracking in one place.',
      'Smart CRM: Automated client communication and payment reminders that cut delinquency.',
      'Integrations: Stripe and Plaid wired into the payment and verification flow.',
    ],
  },
  fltrlnk: {
    tagline: 'Interview preparation, in your pocket.',
    about:
      'FltrLnk is the mobile companion to the Strivio recruiting platform. I built its interview-prepping module end to end — the UI and the APIs that power practice sessions for candidates preparing for real interviews.',
    category: 'AI Recruiting',
    platform: 'Android · iOS',
    status: 'live',
    audience: 'Job candidates preparing for interviews',
    stack: ['React Native', 'TypeScript'],
  },
  strivio: {
    tagline: 'The AI hiring platform that completes the journey.',
    about:
      'Strivio is an AI-powered recruiting platform covering the full hiring lifecycle — job posting, candidate sourcing, assessment, interviewing, offers, and onboarding — in one interface. It parses resumes with AI, runs skill assessments (verbal interviews and coding questions in a built-in code editor), and conducts fully AI-led interviews with automatic assessment on submission, recording camera, audio, and screen to keep evaluations honest across desktop, mobile, and tablet.',
    category: 'AI Recruiting',
    platform: 'Web',
    status: 'live',
    audience: 'HR leaders, recruiters, and fast-scaling teams; job seekers on the candidate side',
    stack: ['Next.js', 'TypeScript', 'OpenAI', 'ElevenLabs', 'HeroUI', 'Tailwind', 'shadcn/ui'],
    features: [
      'AI candidate matching: Curated candidate lists matched to job requirements.',
      'One platform: Job posts, sourcing, interview scheduling, offers, and onboarding end to end.',
      'AI assessments: Built-in skill assessments and certification tools with instant feedback.',
      'Interview intelligence: AI question recommendations and structured rubrics to reduce bias.',
      'Analytics: Hiring velocity, offer acceptance ratio, and skill match rates at a glance.',
    ],
  },
  'strivio-mobile': {
    tagline: 'Standout profiles, AI job matches, application tracking — on the go.',
    about:
      'The job-seeker companion app to the Strivio platform, published on the Play Store. Candidates build profiles highlighting their skills, receive AI-tailored job recommendations, take AI-powered assessments with instant feedback, and track all their applications in one place. I implemented the interview-preparation feature — its screens and the APIs behind them.',
    category: 'AI Recruiting',
    platform: 'Android · iOS',
    status: 'live',
    audience: 'Job seekers applying through the Strivio ecosystem',
    stack: ['React Native', 'TypeScript'],
    features: [
      'Standout profiles: Candidate profiles that highlight skills and achievements.',
      'AI job recommendations: Personalized, AI-tailored job matches.',
      'AI assessments: Skill assessments with instant, actionable feedback.',
      'Application tracking: Every application tracked in one intuitive place.',
    ],
  },
  intelliquarck: {
    tagline: 'Empowering your digital journey: innovate, transform, excel.',
    about:
      'The redesigned website of IntelliQuarck, a software development and digital consulting company offering custom software, mobile app development, AI development, and emerging-technology consulting. I built the entire site from scratch in Next.js with Framer Motion animations throughout.',
    category: 'Marketing Site',
    platform: 'Web',
    status: 'live',
    audience: 'Businesses seeking digital transformation, custom software, or AI capabilities',
    stack: ['Next.js', 'Framer Motion'],
  },
  sivi: {
    tagline: 'A premium, free (frfr) resume builder.',
    about:
      'Sivi is a privacy-first resume builder that runs entirely in the browser — no signup, no paywall, no data tracking; it calls itself "the betrayal-free resume builder". Users pick from professionally designed templates across single-, two-, and three-column layouts (Professional, Executive, Creative, Minimal, Bold, Modern, ATS-optimized, Dark), customize colors and sections, and export to PDF — all processed locally on their machine.',
    category: 'Productivity',
    platform: 'Web',
    status: 'live',
    audience: 'Job seekers at all levels, including those needing ATS-compatible resumes',
    stack: ['React', 'TypeScript'],
    highlights: [{ label: 'Templates', value: '15+' }],
  },
  'spider-solitaire': {
    tagline: 'Windows XP Spider Solitaire, in your browser.',
    about:
      'A faithful clone of the classic Windows XP Spider Solitaire, rendered on an HTML5 canvas with the complete original rules and the nostalgic XP-era look — playable directly online, no installation.',
    category: 'Game',
    platform: 'Web',
    status: 'live',
    audience: 'Casual gamers and Windows XP nostalgia fans',
    stack: ['JavaScript', 'HTML5 Canvas'],
    repo: 'https://github.com/najmiter/spider-solitaire-clone',
  },
  pdfrizz: {
    tagline: 'Merge, split, insert, and edit PDFs — free, online.',
    about:
      'PdfRizz is a free suite of PDF tools that runs entirely in the browser: merge multiple PDFs into one, split a document into pages or sections, insert and remove pages, and convert PDFs to high-quality PNG or JPEG images — no software to install.',
    category: 'Productivity',
    platform: 'Web',
    status: 'live',
    audience: 'Anyone needing quick, free PDF tasks without desktop software',
    stack: ['Vite', 'TypeScript'],
    highlights: [{ label: 'Source', value: 'Open Source' }],
    repo: 'https://github.com/najmiter/pdf',
  },
  quvik: {
    tagline: 'The exam preparation companion for students in Pakistan.',
    about:
      'Quvik is a study app for students and exam aspirants in Pakistan — from matric and intermediate up to competitive exams like CSS, PMS, PPSC, and entrance tests like ECAT and MDCAT. It bundles annual and chapter-wise past papers with a 100,000+ MCQ bank, AI-generated practice quizzes, timed mock tests, progress charts, streak counts, and daily study reminders.',
    category: 'Education',
    platform: 'Android',
    status: 'live',
    audience: 'Matric, intermediate, and competitive-exam students in Pakistan',
    stack: ['React Native', 'TypeScript'],
    highlights: [
      { label: 'Question bank', value: '100,000+ MCQs' },
      { label: 'Exams covered', value: 'CSS · PMS · PPSC · ECAT · MDCAT' },
    ],
  },
  clipmac: {
    tagline: 'A tiny clipboard historian for your Mac.',
    about:
      'ClipMac is a lightweight clipboard manager for macOS built with Electron. It records clipboard history into a local SQLite database and recalls past entries through a searchable popup on a global hotkey (⌃⇧Space) — running dockless in the background and starting automatically at login.',
    category: 'Utility',
    platform: 'macOS',
    status: 'live',
    audience: 'macOS users who want a lightweight, local clipboard history',
    stack: ['Electron', 'JavaScript', 'SQLite'],
    highlights: [
      { label: 'GitHub', value: '11 stars' },
      { label: 'License', value: 'MIT' },
    ],
    repo: 'https://github.com/najmiter/clipmac',
  },
  lootie: {
    tagline: 'Free online Lottie file editor.',
    about:
      'Lootie is a free, browser-based editor for Lottie animation files. Upload a Lottie JSON, edit its structure directly or tweak colors, shapes, and animation properties visually, and watch every change in a live preview — no desktop software required.',
    category: 'Dev Tool',
    platform: 'Web',
    status: 'live',
    audience: 'Animation designers and developers working with Lottie',
    stack: ['React', 'TypeScript'],
    highlights: [{ label: 'Source', value: 'Open Source' }],
    repo: 'https://github.com/najmiter/looto',
  },
  doburji: {
    tagline: 'A digital home for the Doburji Welfare Society.',
    about:
      'The web app of the Doburji Welfare Society, a community welfare organization in Mandi Bahauddin District, Punjab. It pairs village information with a built-in social platform — posts with images, reactions, comments, cross-platform sharing — plus a role-based donation system with automatic image creation and posting, and full admin controls.',
    category: 'Community',
    platform: 'Web',
    status: 'live',
    audience: 'Residents, diaspora, and stakeholders of Doburji village',
    stack: ['Next.js', 'Framer Motion'],
  },
  beutron: {
    tagline: 'Inventory management for businesses of all sizes.',
    about:
      'Beutron is an inventory management system that lets businesses manage products, orders, and customers with ease. A role-based dashboard with subscription plans lets multiple employees manage inventory, and premium subscribers can launch an online store to take and track orders.',
    category: 'SaaS',
    platform: 'Web',
    status: 'live',
    audience: 'Businesses of all sizes needing inventory management',
    stack: ['Next.js', 'TypeScript'],
  },
  fontit: {
    tagline: 'Change your editor font from the command palette.',
    about:
      'FontIt is a VS Code extension that switches the editor font family from a curated list of programming fonts — Fira Code, JetBrains Mono, Cascadia Code, Hack, and more — straight from the command palette. It detects fonts already installed on your system and offers one-click download for the ones that are not.',
    category: 'Dev Tool',
    platform: 'VS Code',
    status: 'live',
    audience: 'VS Code users who like trying coding fonts',
    stack: ['TypeScript', 'VS Code API'],
    highlights: [
      { label: 'Installs', value: '1,793' },
      { label: 'Rating', value: '5.0 ★' },
    ],
  },
  turboin: {
    tagline: 'Tabs, history, and bookmarks — one command palette away.',
    about:
      'Turboin brings IDE-style navigation to Chrome: a quick-access command palette that searches and jumps between open tabs, browsing history, and bookmarks, with special commands like calendar viewing built in.',
    category: 'Browser Extension',
    platform: 'Chrome',
    status: 'live',
    audience: 'Power users with too many tabs',
    stack: ['JavaScript', 'Chrome APIs'],
    highlights: [{ label: 'Rating', value: '5.0 ★' }],
    repo: 'https://github.com/najmiter/turboin',
  },
  neutrabize: {
    tagline: 'Your new tab, your rules.',
    about:
      'Neutrabize replaces Chrome’s default new tab with a customizable dashboard: image or video backgrounds, live location-based weather via the open-meteo API (refreshed hourly), and toggleable shortcuts and recent-downloads sections — with settings that persist across reloads.',
    category: 'Browser Extension',
    platform: 'Chrome',
    status: 'live',
    audience: 'Chrome users who want a personalized new tab',
    stack: ['JavaScript', 'Chrome APIs', 'open-meteo API'],
    highlights: [{ label: 'Rating', value: '5.0 ★' }],
    repo: 'https://github.com/najmiter/neutrabize',
  },
  chitter: {
    tagline: 'Rich, copyable syntax highlighting for assembly code.',
    about:
      'Chitter highlights assembly code in real time — registers in destination and operand contexts, hex/decimal/binary literals, strings, and comments — and produces rich text you can copy into docs, slides, or teaching material. The highlighter is written in Rust and compiled to WebAssembly for the web.',
    category: 'Dev Tool',
    platform: 'Web',
    status: 'archived',
    audience: 'Assembly programmers who need formatted code for docs and teaching',
    stack: ['Rust', 'WebAssembly'],
    repo: 'https://github.com/najmiter/Chitter',
  },
  'uog-lms-beauty-parlor': {
    tagline: 'Dark mode (and a little help) for the UOG LMS.',
    about:
      'A Chrome extension that applies a custom dark theme to the University of Gujrat’s LMS to save students’ eyes, restyling pages like attendance and instructor info. It also integrates the Gemini API to suggest potentially correct answers on quiz pages, with a copy-question button for when API quota runs dry.',
    category: 'Browser Extension',
    platform: 'Chrome',
    status: 'live',
    audience: 'University of Gujrat students',
    stack: ['JavaScript', 'Gemini API'],
    highlights: [{ label: 'GitHub', value: '11 stars' }],
    repo: 'https://github.com/najmiter/darkcircles',
  },
  nutnut: {
    tagline: 'A streaming-service architecture demo, built in three days.',
    about:
      'NutNut is a movie-streaming-style web app built with ASP.NET Core and Razor Pages on MSSQL — a semester final project finished in three days. It implements login and account creation, a premium subscription tier with monthly validation, and premium-only content gating that redirects free users to upgrade.',
    category: 'Web App',
    platform: 'Web',
    status: 'archived',
    audience: 'A university project; an example of auth + subscription gating in ASP.NET',
    stack: ['ASP.NET Core', 'C#', 'Razor Pages', 'MSSQL', 'Bootstrap'],
    highlights: [
      { label: 'GitHub', value: '10 stars' },
      { label: 'Built in', value: '3 days' },
    ],
    repo: 'https://github.com/najmiter/nutnut',
  },
  'world-map': {
    tagline: 'An educational interactive world map.',
    about:
      'An interactive world map designed for educational purposes, allowing users to explore different countries, their capitals, and cultural information.',
    category: 'Web App',
    platform: 'Web',
    status: 'live',
    audience: 'Students and educators looking for an interactive learning tool',
    stack: ['React', 'Typescript', 'D3.js'],
    repo: 'https://github.com/najmiter/world-map',
  },
};

const FALLBACK_META: ProjectMeta = {
  tagline: '',
  category: 'Project',
  platform: 'Web',
  status: 'live',
};

function buildProjects(): Project[] {
  const seen = new Set<string>();
  const all: Project[] = [];

  for (const work of resumeData.workExperience) {
    for (const description of work.description) {
      if (seen.has(description.id)) continue;
      seen.add(description.id);
      const meta = PROJECT_META[description.id] ?? FALLBACK_META;
      all.push({
        ...description,
        features: description.features?.length ? description.features : meta.features,
        meta,
        company: work.company,
        position: work.position,
        period: work.period,
      });
    }
  }

  return all;
}

export const projects = buildProjects();

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
