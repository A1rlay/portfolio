/* ==================================================================== */
/*  CONTENT — everything Abdel edits lives in this file.                */
/*  Components in app/components/* are dumb renderers over these consts */
/*  and app/layout.tsx + app/opengraph-image.tsx import IDENTITY so the */
/*  page, the <title>, and the social card can never drift apart.       */
/* ==================================================================== */

/* ------------------------------------------------------------------ */
/*  Identity — the one place the job title is written down             */
/* ------------------------------------------------------------------ */

export const IDENTITY = {
  name: "Abdel Perez",
  /** Full title, exactly as it reads on the CV. */
  role: "Software Engineer — Test Automation, CI/CD & Cloud Infrastructure",
  /** The same title split so the hero + OG card can colour it. */
  roleParts: {
    lead: "Software Engineer",
    yellow: "Test Automation",
    red: "CI/CD",
    tail: "& Cloud Infrastructure",
  },
  tagline: "Test automation · CI/CD · Cloud infrastructure",
  location: "Remote — Mexico (GMT-6 / US Central)",
  siteUrl: "https://abdel-perez.vercel.app",
  /** Deliberately NO phone number: it is on the CV, not on the public page. */
  email: "a1rlay@outlook.com",
  cvPath: "/abdel-perez-cv.pdf",
} as const;

export const EMAIL = IDENTITY.email;
export const CV_PATH = IDENTITY.cvPath;

export const LINKS = {
  github: "https://github.com/A1rlay",
  linkedin: "https://linkedin.com/in/abdelperez",
} as const;

export const NAV = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
] as const;

export type NavItem = (typeof NAV)[number];

/* ------------------------------------------------------------------ */
/*  Hero terminal — the "CI run" that plays on load                    */
/*  Every check below is a fact taken straight from the CV.            */
/* ------------------------------------------------------------------ */

export type Accent = "yellow" | "red" | "orange" | "green" | "cyan" | "purple";

/*
  Accents that clear 4.5:1 as SMALL text on --color-panel.

  red (#f92672) measures 4.12:1 there, so it is reserved for large text
  (>=18.66px bold, where the 3:1 threshold applies), for borders and glyphs
  (non-text, 3:1), and for anything sitting on --color-ink (4.57:1). Using
  this alias for small-text slots makes the failing combination a type error
  rather than something to re-discover in an audit.
*/
export type SmallTextAccent = Exclude<Accent, "red">;

export const TERMINAL = {
  title: "abdel@portfolio: ~",
  command: "ci run --pipeline abdel-perez",
  checks: [
    {
      label: "identity",
      value:
        "Software Engineer — Test Automation, CI/CD & Cloud Infrastructure",
      accent: "yellow",
    },
    {
      label: "current",
      value: "FundMiner · Test & CI Infrastructure · Aug 2025 → present",
      accent: "orange",
    },
    {
      label: "testing",
      value: "Playwright · Vitest · flaky-test stabilization",
      accent: "green",
    },
    {
      label: "pipelines",
      value: "GitHub Actions · Docker · coverage-baseline gating",
      accent: "cyan",
    },
    {
      label: "cloud",
      value: "AWS Lambda · S3 · Terraform · infrastructure as code",
      accent: "purple",
    },
    {
      label: "location",
      value: IDENTITY.location,
      accent: "yellow",
    },
  ] satisfies { label: string; value: string; accent: SmallTextAccent }[],
} as const;

/** Self-referential and therefore honest: it counts the rows above it. */
export const TERMINAL_SUMMARY = `${TERMINAL.checks.length} checks passed · 0 failed · 0 flaky`;

/* ------------------------------------------------------------------ */
/*  Hero + about prose                                                 */
/* ------------------------------------------------------------------ */

export const HERO = {
  /** Paraphrases the CV summary in Abdel's own voice. */
  intro:
    "I work across test automation, CI/CD and AWS cloud infrastructure on a production multi-tenant SaaS. I’m strongest where the build system meets reliability: making Playwright and Vitest suites fast and trustworthy, keeping GitHub Actions pipelines green, and tracing production failures from root cause to a shipped fix.",
} as const;

export const ABOUT = {
  focus: [
    { label: "CI/CD pipelines that stay green", accent: "red" },
    { label: "Test tooling & coverage insight", accent: "yellow" },
    { label: "E2E automation & flaky-test triage", accent: "orange" },
    { label: "Cloud infrastructure & IaC", accent: "cyan" },
  ] satisfies { label: string; accent: Accent }[],
  education: {
    degree: "B.S. Computer Systems Engineering",
    school: "Universidad Autónoma de Ciudad Juárez",
    expected: "Expected 2027",
    note: "Algorithms & data structures instructor · competitive programming club · ICPC contestant",
  },
} as const;

/* ------------------------------------------------------------------ */
/*  Experience                                                         */
/* ------------------------------------------------------------------ */

export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  accent: Extract<Accent, "yellow" | "red" | "orange">;
  /** Exactly one job should be `current` — it renders as the running stage. */
  current?: boolean;
  stats?: { value: string; label: string }[];
  points: string[];
};

export const EXPERIENCE: Job[] = [
  {
    role: "Software Engineer, Test & CI Infrastructure",
    company: "FundMiner",
    period: "Aug 2025 — Present",
    location: "Remote",
    accent: "yellow",
    current: true,
    stats: [
      { value: "109", label: "pull requests merged in six months" },
      {
        value: "majority",
        label: "of company-wide test & CI breakage fixes, by commit volume",
      },
    ],
    points: [
      "Designed and shipped an internal test-reporting and coverage dashboard from scratch — now used daily across the whole engineering org — with S3-backed run storage, per-layer coverage tracking, regression trend charts, Playwright failure-video playback, and a flaky/failing-test triage panel.",
      "Rebuilt the organization’s GitHub Actions CI: standardized reusable workflows, coverage-baseline enforcement, automated PR labeling and stale-PR detection, and a single triage surface stitching together GitHub, Linear and Microsoft Teams.",
      "Migrated the test framework from Jest to Vitest and Playwright, added video-recorded end-to-end failure capture, and stabilized dozens of previously flaky specs.",
      "Containerized the full test suite in Docker — Vitest unit tests and Playwright E2E — so an identical run works on any developer machine and in CI, and shipped a pre-push hook with changed-file test selection. Adopted team-wide.",
      "Built the GitHub→Teams CI notification pipeline end to end (signature-verified AWS Lambda, PR-lifecycle and on-call triggers) and moved a second production Lambda into Terraform-managed infrastructure.",
      "Resolved parallel-worker race conditions in a production job-queue system (PostgreSQL row-locking contention, slot-limit invariants) and instrumented isolated worker threads with Sentry so job failures stopped being silently dropped.",
      "Diagnosed and fixed data-correctness bugs in a Sentry performance dashboard — an 8h/24h window-boundary bug and broken hourly ingestion, restored via a new Lambda — and ran a full XSS audit that closed multiple URL-validation bypasses.",
    ],
  },
  {
    role: "AI Engineer",
    company: "Inode Technology",
    period: "Jul 2025 — Aug 2025",
    location: "Ciudad Juárez, MX",
    accent: "red",
    points: [
      "Built machine-learning-based automation tools in Python for structured content and code generation.",
      "Automated internal development workflows with n8n, and developed a client-facing mobile application in React Native with a Node.js backend.",
    ],
  },
  {
    role: "Software Developer",
    company: "Presidencia Municipal",
    period: "Mar 2025 — Jul 2025",
    location: "Ciudad Juárez, MX",
    accent: "orange",
    points: [
      "Built Python automation for customized PDF generation, cutting manual effort by 90%, and integrated REST APIs to automate database operations.",
      "Built a real-time usage dashboard in React tracking active users per government department.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Skills                                                             */
/* ------------------------------------------------------------------ */

export type SkillGroup = { title: string; accent: Accent; items: string[] };

export const SKILLS: SkillGroup[] = [
  {
    title: "CI/CD & Automation",
    accent: "yellow",
    items: [
      "GitHub Actions",
      "CI/CD pipeline design",
      "Build automation",
      "Docker",
      "Containerization",
      "Pre-push hooks",
      "Smart test selection",
      "Coverage-baseline gating",
      "n8n workflow automation",
      "Git",
    ],
  },
  {
    title: "Testing & QA",
    accent: "red",
    items: [
      "Playwright",
      "Vitest",
      "Jest",
      "End-to-end testing",
      "Unit testing",
      "Integration testing",
      "Regression testing",
      "Cross-browser testing",
      "Flaky-test stabilization",
      "Coverage reporting",
      "Video failure capture",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    accent: "cyan",
    items: [
      "AWS Lambda",
      "AWS S3",
      "Terraform",
      "Infrastructure as code",
      "Serverless",
      "Linux",
      "Bash",
      "Multi-tenant SaaS",
    ],
  },
  {
    title: "Reliability & Security",
    accent: "orange",
    items: [
      "Sentry",
      "Concurrency debugging",
      "PostgreSQL row-locking",
      "XSS auditing",
      "URL hardening",
    ],
  },
  {
    title: "Application Stack",
    accent: "green",
    items: [
      "Next.js",
      "React",
      "React Native",
      "Node.js",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "REST APIs",
    ],
  },
];

export const LANGUAGES = {
  title: "Languages",
  accent: "purple",
  items: ["TypeScript", "JavaScript", "Python", "SQL", "C / C++"],
} satisfies SkillGroup;

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/*                                                                     */
/*  A project either has links, or it has a `status` badge — never     */
/*  neither, and never a link button pointing nowhere. The union below */
/*  makes the broken combination fail to compile.                      */
/* ------------------------------------------------------------------ */

export type ProjectLink = {
  label: string;
  href: string;
  accent: Extract<SmallTextAccent, "yellow" | "orange">;
};

export type Project = {
  name: string;
  blurb: string;
  stack: readonly string[];
  accent: Extract<SmallTextAccent, "yellow" | "orange" | "cyan">;
  /** Renders wide, at the top of the grid. */
  featured?: boolean;
  /** Short line under the title, e.g. what it is / where it runs. */
  kind: string;
} & (
  | { status: string; links?: never }
  | { status?: never; links: readonly [ProjectLink, ...ProjectLink[]] }
);

export const PROJECTS: readonly Project[] = [
  {
    name: "KaliQA",
    kind: "Undergraduate thesis",
    featured: true,
    status: "in progress · no public release yet",
    blurb:
      "A static-analysis CLI for test suites. It reads Playwright and Vitest specs without running them, detects test smells against published detection rules, and reports test-quality metrics — so a suite can be reviewed the way production code is.",
    stack: ["TypeScript", "ts-morph", "Static analysis", "CLI"],
    accent: "yellow",
  },
  {
    name: "RentMint",
    kind: "Side project",
    blurb:
      "A rental management platform where renters and property managers sign in to handle their rental activity — accounts, listings, and payments — from one dashboard.",
    stack: ["Next.js", "TypeScript", "React", "Vercel"],
    accent: "cyan",
    links: [
      { label: "live demo", href: "https://rentmint.vercel.app/", accent: "yellow" },
      { label: "source", href: "https://github.com/A1rlay/rentmint", accent: "orange" },
    ],
  },
  {
    name: "LearnWithMe",
    kind: "Side project",
    blurb:
      "An English listening-practice platform: students pick a grammar topic and audio lesson, listen up to a checkpoint, then answer database-driven comprehension questions.",
    stack: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "Tailwind v4"],
    accent: "orange",
    links: [
      {
        label: "live demo",
        href: "https://learn-with-me-sable.vercel.app/",
        accent: "yellow",
      },
      {
        label: "source",
        href: "https://github.com/A1rlay/LearnWithMe",
        accent: "orange",
      },
    ],
  },
];
