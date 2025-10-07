export interface ProjectDescription {
  projectName: string;
  link: string;
  details: string;
  technologies?: string;
  contributions?: string[];
  features?: string[];
}

export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: ProjectDescription[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    linkedin: string;
  };
  professionalSummary: string;
  workExperience: WorkExperience[];
  skills: string[];
  education: Education[];
  links: Array<{
    href: string;
    label: string;
  }>;
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: 'Najam ul Hassan',
    email: 'realnajmiter@gmail.com',
    linkedin: 'https://www.linkedin.com/in/najmiter',
  },
  professionalSummary:
    'I work as a full stack developer professionally & love learning math and making games in my free time.',
  workExperience: [
    {
      company: 'IntelliQuarck',
      position: 'Full Stack Developer',
      period: 'Jul 2024 - Present',
      location: 'Remote',
      description: [
        {
          projectName: 'Strivio (web app)',
          link: 'https://strivio.ai/',
          details:
            'A recruiting platform with cutting-edge technology aimed to help companies find and recruit talent using AI and manage employees.',
          technologies: 'Nextjs with Typescript, OpenAi, ElevenLabs, NextUi (HeroUi), Tailwind, Shadcn',
          contributions: [
            'Led development as the lead developer for the entire web app',
            'Built unique features including resume parsing using AI, skill assessment using AI (verbal interview & coding questions with built-in code editor)',
            'Implemented AI-conducted interviews with automatic assessment upon candidate submission',
            'Integrated recording of camera, audio streams, and screen during assessment to monitor candidates',
            'Ensured cross-device compatibility (desktop, mobile, tablets) for integration with the mobile app',
          ],
        },
        {
          projectName: 'Strivio (mobile app)',
          link: 'https://play.google.com/store/apps/details?id=com.strivio.app',
          details: 'Interview Prepping module',
          contributions: ['Implemented UI and APIs for the interview preparation feature'],
        },
        {
          projectName: 'Company Website',
          link: 'https://intelliquarck.com/',
          details: 'Developed the entire redesigned company website with animations using framer motion in Nextjs',
        },
      ],
    },
    {
      company: 'Knoctal',
      position: 'Full Stack Developer (Founder)',
      period: 'Apr 2021 - Present',
      location: 'Hybrid',
      description: [
        {
          projectName: 'PdfRizz',
          details:
            'PdfRizz is a web app designed to simplify working with PDF files. Users can insert PDFs, convert them to PNG or JPEG images, merge multiple PDF files into a single document, split PDFs into separate pages or sections, and remove specific pages from PDF files.',
          link: 'https://pdfrizz.knoctal.com/',
          features: [
            'Merge PDFs: Combine multiple PDF files into a single document for easier management.',
            'Split PDFs: Divide a PDF into separate pages or sections as needed.',
            'Remove Pages: Delete specific pages from a PDF file quickly and easily.',
            'Insert Pages: Add new pages to an existing PDF document seamlessly.',
            'PDF to Image Conversion: Convert PDF files to high-quality PNG or JPEG images.',
          ],
        },
        {
          projectName: 'Quvik',
          link: 'https://play.google.com/store/apps/details?id=com.najmiter.quvik',
          details: 'A study app built for matric & intermediate students',
          features: [
            'Annual past papers',
            'Chapter wise past papers',
            'AI generated quizzes for practice',
            "Track student's progress with modern looking charts and graphs",
            'Engage students by keeping a streak count',
            'Daily reminder alerts for study',
          ],
        },
        {
          projectName: 'ClipMac',
          link: 'https://github.com/najmiter/clipmac',
          details: 'A small app for MacOS to keep track of the clipboard',
          features: [
            'Clipboard History: Stores a history of copied text items',
            'Quick Access: Open the clipboard history popup using a global shortcut (Control+Shift+Space)',
            'Copy to Clipboard: Easily copy any item from the history back to your clipboard',
            'Simple Interface: Clean and straightforward user interface',
            'Dockless Application: Runs in the background without a dock icon',
            'Auto-launch at startup: Automatically starts when you log in to your Mac (production build only)',
          ],
        },
        {
          projectName: 'Lootie',
          link: 'https://lottie.knoctal.com/',
          details: 'Free online lottie json editor',
          features: [
            'File Upload: Users can upload Lottie JSON files, which are validated and parsed for editing.',
            'Editor: A dedicated editor interface allows users to modify the JSON structure of the Lottie files.',
            'Visual Editor: Users can visually edit properties like colors, shapes, and animations in a user-friendly interface.',
            'Live Preview: Changes made in the editor are reflected in a live preview of the animation, enabling immediate feedback.',
          ],
        },
        {
          projectName: 'DoBurji Welfare Society (web app)',
          link: 'https://www.doburji.com/',
          details: 'A town welfare society web app using Nextjs',
          features: [
            'Built-in social platform (share posts with images, react to them, comment on them, share to other platforms)',
            'Role-based donation system (for admins, editors) with automatic image creation and posting',
            'Admin controls for managing users, posts, comments and more',
            'Fully animated landing page using framer motion',
          ],
        },
        {
          projectName: 'Beutron',
          link: 'https://beutron.vercel.app/',
          details: 'An inventory management system using Next.js',
          features: [
            'Role-based dashboard with subscription plans allowing multiple employees to manage inventory',
            'Online store launching feature for premium subscribers to take and track orders',
          ],
        },
        {
          projectName: 'FontIt',
          link: 'https://marketplace.visualstudio.com/items?itemName=najmiter.fontit',
          details: 'A VS Code extension that allows users to change the editor font family using the command palette',
        },
        {
          projectName: 'Turboin',
          link: 'https://chromewebstore.google.com/detail/turboin/gnonhllejnghekflninibgaohfbbmekc?authuser=0&hl=en',
          details:
            'A Chrome extension that allows users to switch tabs similar to IDEs using a command palette, with special commands like calendar viewing',
        },
        {
          projectName: 'Neutrabize',
          link: 'https://chromewebstore.google.com/detail/neutrabize/ppknddihdfnhmdfloaeamelpinalhppe',
          details:
            "A Chrome extension for a customized homepage with integrated weather API based on user's geolocation",
        },
        {
          projectName: 'Chitter',
          link: 'https://najmiter.github.io/Chitter/',
          details: 'An assembly language syntax highlighter written in Rust, compiled into WASM for web',
        },
        {
          projectName: 'UOG LMS Beauty Parlor',
          link: 'https://github.com/najmiter/darkcircles',
          details: "A Chrome extension for custom dark mode on UOG's LMS",
          features: [
            'Integrated Gemini API for suggesting potentially correct answers on quiz pages',
            'Added button functionality to copy quiz questions due to limited Google API usage',
          ],
        },
        {
          projectName: 'NutNut',
          link: 'https://github.com/najmiter/nutnut',
          details:
            'A subscription-based streaming service app built with ASP.NET and Razor Pages using MSSQL for database',
        },
      ],
    },
  ],
  skills: [
    'React.js',
    'React Native',
    'Next.js',
    'TypeScript',
    'Tailwind',
    'Git',
    'Framer Motion',
    'GSAP',
    'Three.js',
    'ASP.NET',
    'Blazor',
    'Razor',
    'Go',
    'Rust',
    'Node.js',
    'Express',
    'NestJS',
  ],
  education: [
    {
      degree: 'BSCS',
      institution: '',
      year: '',
    },
  ],
  links: [
    { href: 'https://github.com/najmiter', label: 'GitHub' },
    { href: 'https://blog.najmiter.dev/', label: 'Blog' },
    { href: 'https://www.youtube.com/najmiter', label: 'YouTube' },
  ],
};

export const CURRENT_YEAR = new Date().getFullYear();
