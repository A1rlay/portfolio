import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Content — edit these to make the site yours                        */
/* ------------------------------------------------------------------ */

const EMAIL = "a1rlay@outlook.com";
const CV_PATH = "/abdel-perez-cv.pdf";

const LINKS = {
  github: "https://github.com/A1rlay",
  linkedin: "https://linkedin.com/in/abdelperez",
};

const NAV = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

const EXPERIENCE: {
  role: string;
  company: string;
  period: string;
  location: string;
  accent: "yellow" | "red" | "orange";
  current?: boolean;
  stats?: { value: string; label: string }[];
  points: string[];
}[] = [
    {
      role: "Software Engineer, Test & CI Infrastructure",
      company: "FundMiner",
      period: "Aug 2025 — Present",
      location: "Remote",
      accent: "yellow",
      current: true,
      stats: [
        { value: "623", label: "commits" },
        { value: "109", label: "PRs · 86% merged" },
        { value: "~70–74%", label: "of test/CI-breakage fixes" },
      ],
      points: [
        "Designed and shipped an internal testing & observability dashboard from scratch — now a daily driver across the whole engineering org — with an S3-backed run architecture, zoomable trend charts, per-layer coverage tracking, Playwright failure-video playback, and a flaky/failing-test triage panel.",
        "Built the GitHub→Teams CI notification pipeline end-to-end (signature-verified AWS Lambda, PR-lifecycle and on-call triggers) and migrated a second production Lambda into Terraform-managed infrastructure.",
        "Diagnosed and fixed data-correctness bugs in a Sentry performance dashboard — closed an 8h/24h window-boundary bug and restored hourly ingestion via a new Lambda — then extended it with PR-correlation and before/after comparison views.",
        "Migrated the entire test stack to Docker and built a pre-push hook with smart, changed-file-based test selection (unit vs. full E2E), cutting wasted local and CI time — since adopted team-wide.",
        "Overhauled the GitHub Actions CI: standardized workflows, added a coverage-baseline job, automated PR labeling and stale-PR flagging, and integrated GitHub, Linear, and Teams into the dashboard for triage.",
        "Fixed a long tail of parallel-worker race conditions in a production job-queue (Postgres row-locking, slot-limit invariants) and wired Sentry into isolated worker threads so failures stop being silently dropped.",
        "Ran a full XSS audit and closed multiple URL-validation bypasses (moved substring checks to hostname-based validation); migrated the test framework from Jest to Vitest + Playwright with video-recorded failure capture, stabilizing dozens of flaky specs.",
      ],
    },
    {
      role: "AI Engineer",
      company: "Inode Technology",
      period: "Jul 2025 — Sep 2025",
      location: "Ciudad Juárez, MX",
      accent: "red",
      points: [
        "Built ML-based automation tools in Python for structured content and code generation.",
        "Automated internal dev workflows with n8n and built a client-facing mobile app with React Native and Node.js.",
      ],
    },
    {
      role: "Software Programmer",
      company: "Presidencia Municipal",
      period: "Mar 2025 — Jul 2025",
      location: "Ciudad Juárez, MX",
      accent: "orange",
      points: [
        "Built automation scripts for customized PDF generation, cutting manual effort by 90%, and integrated REST APIs to automate database operations.",
        "Built a real-time usage dashboard (React) tracking active users per government dependency.",
      ],
    },
  ];

const SKILLS: { title: string; accent: string; items: string[] }[] = [
  {
    title: "CI/CD & Automation",
    accent: "text-yellow",
    items: [
      "GitHub Actions",
      "Docker",
      "CI pipeline design",
      "Smart test selection",
      "Pre-push hooks",
      "n8n",
    ],
  },
  {
    title: "Testing & QA",
    accent: "text-red",
    items: [
      "Playwright",
      "Vitest / Jest",
      "E2E automation",
      "Video failure capture",
      "Flaky-test stabilization",
      "Coverage dashboards",
    ],
  },
  {
    title: "Reliability & Security",
    accent: "text-orange",
    items: [
      "Sentry",
      "Concurrency debugging",
      "PostgreSQL row-locking",
      "XSS auditing",
      "URL hardening",
    ],
  },
  {
    title: "Cloud & Infra",
    accent: "text-cyan",
    items: ["AWS S3", "AWS Lambda", "Terraform", "Multi-tenant SaaS", "Linux"],
  },
  {
    title: "Application Stack",
    accent: "text-green",
    items: ["Next.js", "React", "Node.js", "tRPC", "Prisma", "PostgreSQL"],
  },
  {
    title: "Dev Workflow",
    accent: "text-purple",
    items: ["Git", "Neovim", "Docker"],
  },
];

const LANGUAGES = ["TypeScript", "JavaScript", "Python", "SQL", "C / C++"];

const PROJECTS = [
  {
    name: "RentMint",
    blurb:
      "A rental management platform where renters and property managers sign in to handle their rental activity — accounts, listings, and payments — from one dashboard.",
    stack: ["Next.js", "TypeScript", "React", "Vercel"],
    url: "https://rentmint.vercel.app/",
    repo: "https://github.com/A1rlay/rentmint",
    accent: "yellow",
  },
  {
    name: "LearnWithMe",
    blurb:
      "An English listening-practice platform: students pick a grammar topic and audio lesson, listen up to a checkpoint, then answer database-driven comprehension questions.",
    stack: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "Tailwind v4"],
    url: "https://learn-with-me-sable.vercel.app/",
    repo: "https://github.com/A1rlay/LearnWithMe",
    accent: "red",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function SectionHeading({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-red">{index}</span>
      <h2 className="font-mono text-2xl font-bold text-fg sm:text-3xl">
        <span className="text-comment">{"// "}</span>
        {children}
      </h2>
      <span className="h-px flex-1 bg-line" aria-hidden />
    </div>
  );
}

function Dot({ className }: { className: string }) {
  return <span className={`h-3 w-3 rounded-full ${className}`} aria-hidden />;
}

const ACCENT_TEXT = {
  yellow: "text-yellow",
  red: "text-red",
  orange: "text-orange",
} as const;

const ACCENT_DOT = {
  yellow: "bg-yellow",
  red: "bg-red",
  orange: "bg-orange",
} as const;

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-5 sm:px-8">
      {/* ---------------- Nav ---------------- */}
      <header className="sticky top-0 z-50 -mx-5 mb-4 border-b border-line/70 bg-ink/80 px-5 backdrop-blur-md sm:-mx-8 sm:px-8">
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-tight text-fg"
          >
            <span className="text-red">~/</span>
            abdel
            <span className="text-yellow">.perez</span>
          </a>
          <ul className="hidden gap-6 font-mono text-sm text-muted md:flex">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="transition-colors hover:text-yellow"
                >
                  <span className="text-comment">#</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-md border border-red px-3 py-1.5 font-mono text-xs font-semibold text-red transition-colors hover:bg-red hover:text-ink"
          >
            get in touch
          </a>
        </nav>
      </header>

      <main id="top" className="flex flex-1 flex-col">
        {/* ---------------- Hero ---------------- */}
        <section className="flex flex-col justify-center gap-8 py-16 sm:py-24">
          <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-2xl shadow-black/40">
            {/* terminal chrome */}
            <div className="flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-3">
              <Dot className="bg-red" />
              <Dot className="bg-yellow" />
              <Dot className="bg-green" />
              <span className="ml-3 font-mono text-xs text-comment">
                abdel@portfolio: ~
              </span>
            </div>
            {/* terminal body */}
            <div className="space-y-2 p-5 font-mono text-sm sm:p-7 sm:text-base">
              <p className="text-muted">
                <span className="text-green">$</span> whoami
              </p>
              <p className="text-fg">
                Abdel Perez — <span className="text-yellow">Platform</span> &amp;{" "}
                <span className="text-red">Test Infrastructure</span> Engineer
              </p>
              <p className="text-muted">
                <span className="text-green">$</span> cat focus.txt
              </p>
              <p className="text-muted">
                CI/CD · observability · reliability. I build the systems that
                ship code and the tests that keep it honest.
              </p>
              <p className="text-muted">
                <span className="text-green">$</span>{" "}
                <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-yellow" />
              </p>
            </div>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-fg sm:text-6xl">
              Hi, I&apos;m Abdel.
              <br />I make software{" "}
              <span className="text-yellow">reliable</span> and{" "}
              <span className="text-red">well-tested</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              I own test &amp; CI infrastructure and observability end-to-end on
              production multi-tenant SaaS — building the platforms, pipelines,
              and tests that let a whole engineering org ship with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
              <a
                href="#projects"
                className="rounded-md bg-yellow px-5 py-2.5 font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                view projects →
              </a>
              <a
                href={CV_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-line px-5 py-2.5 font-semibold text-fg transition-colors hover:border-red hover:text-red"
              >
                download résumé
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- About ---------------- */}
        <section id="about" className="py-16">
          <SectionHeading index="01">about</SectionHeading>
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-lg leading-8 text-muted">
              <p>
                I&apos;m most at home where{" "}
                <span className="text-fg">development</span> meets{" "}
                <span className="text-fg">operations</span> — owning the test/CI
                infrastructure and observability of a production multi-tenant
                SaaS from root cause to shipped fix.
              </p>
              <p>
                At <span className="text-yellow">FundMiner </span>I built an
                internal testing platform from scratch that&apos;s now a daily
                driver for the whole engineering org, own the CI/CD and DevOps
                infrastructure (<span className="text-fg">AWS Lambda</span>,{" "}
                <span className="text-fg">Terraform</span>,{" "}
                <span className="text-fg">Docker</span>), and hunt down
                production reliability issues — job-queue race conditions,
                silently dropped worker failures, and XSS/security gaps. This
                review cycle I was credited with{" "}
                <span className="text-red">~70–74%</span> of all company-wide
                test/CI-breakage fixes by commit volume.
              </p>
              <p>
                If something can be automated, tested, or monitored, I&apos;d
                rather do that than fix it at 2&nbsp;a.m.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-xl border border-line bg-panel p-5 font-mono text-sm">
                <p className="mb-3 text-comment">{"// current focus"}</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-red">▹</span>
                    <span className="text-muted">Reliable CI/CD pipelines</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow">▹</span>
                    <span className="text-muted">
                      Testing insights &amp; observability
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange">▹</span>
                    <span className="text-muted">
                      E2E automation &amp; flaky-test triage
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan">▹</span>
                    <span className="text-muted">
                      Production reliability &amp; security
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-line bg-panel p-5 font-mono text-sm">
                <p className="mb-3 text-comment">{"// education"}</p>
                <p className="text-fg">B.S. Computer Systems Engineering</p>
                <p className="mt-1 text-muted">
                  Universidad Autónoma de Ciudad Juárez ·{" "}
                  <span className="text-yellow">Expected 2027</span>
                </p>
                <p className="mt-2 text-comment">
                  DSA instructor · ICPC contestant
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Experience ---------------- */}
        <section id="experience" className="py-16">
          <SectionHeading index="02">experience</SectionHeading>
          <div className="flex flex-col gap-5">
            {EXPERIENCE.map((job) => (
              <article
                key={job.company}
                className="rounded-xl border border-line bg-panel p-6 sm:p-7"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-bold text-fg">
                    {job.role}{" "}
                    <span className={ACCENT_TEXT[job.accent]}>
                      @ {job.company}
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-comment">
                    {job.location}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2 font-mono text-sm text-muted">
                  {job.current && (
                    <span className="flex items-center gap-1.5 text-green">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-green" />
                    </span>
                  )}
                  {job.period}
                </div>
                {job.stats && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.stats.map((stat) => (
                      <span
                        key={stat.label}
                        className="rounded-md border border-line bg-panel-2 px-3 py-1.5 font-mono text-xs text-muted"
                      >
                        <span className={`font-bold ${ACCENT_TEXT[job.accent]}`}>
                          {stat.value}
                        </span>{" "}
                        {stat.label}
                      </span>
                    ))}
                  </div>
                )}
                <ul className="mt-4 space-y-3">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex gap-3 leading-7 text-muted">
                      <span
                        className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${ACCENT_DOT[job.accent]}`}
                        aria-hidden
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------- Skills ---------------- */}
        <section id="skills" className="py-16">
          <SectionHeading index="03">skills</SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2">
            {SKILLS.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-line bg-panel p-6 transition-colors hover:border-yellow/50"
              >
                <h3 className={`font-mono text-base font-bold ${group.accent}`}>
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-panel-2 px-3 py-1 font-mono text-sm text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-line bg-panel p-6">
            <p className="font-mono text-sm text-comment">{"// languages"}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <li
                  key={lang}
                  className="rounded-md border border-line bg-panel-2 px-3 py-1 font-mono text-sm text-fg"
                >
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- Projects ---------------- */}
        <section id="projects" className="py-16">
          <SectionHeading index="04">projects</SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <div
                key={project.name}
                className="flex flex-col rounded-xl border border-line bg-panel p-6 transition-all hover:-translate-y-1 hover:border-red/60 hover:shadow-xl hover:shadow-black/40"
              >
                <span
                  className={`mb-4 font-mono text-xs ${project.accent === "yellow" ? "text-yellow" : "text-red"
                    }`}
                >
                  {"</>"} project
                </span>
                <h3 className="text-2xl font-bold text-fg">{project.name}</h3>
                <p className="mt-3 flex-1 leading-7 text-muted">
                  {project.blurb}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-panel-2 px-2.5 py-1 font-mono text-xs text-comment"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3 font-mono text-sm">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 rounded-md border border-line px-4 py-2 text-center font-semibold text-fg transition-colors hover:border-yellow hover:text-yellow"
                  >
                    live demo{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 rounded-md border border-line px-4 py-2 text-center font-semibold text-fg transition-colors hover:border-red hover:text-red"
                  >
                    source{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Contact ---------------- */}
        <section id="contact" className="py-16">
          <SectionHeading index="05">contact</SectionHeading>
          <div className="rounded-xl border border-line bg-panel p-8 text-center sm:p-12">
            <p className="font-mono text-sm text-comment">
              {"// let's build something reliable"}
            </p>
            <h3 className="mt-4 text-3xl font-bold text-fg sm:text-4xl">
              Get in <span className="text-red">touch</span>
            </h3>
            <p className="mx-auto mt-4 max-w-xl leading-8 text-muted">
              Have a role, a project, or a flaky test suite that needs taming?
              My inbox is always open.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-8 inline-block rounded-md bg-yellow px-6 py-3 font-mono text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {EMAIL}
            </a>
          </div>
        </section>
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer className="border-t border-line py-8">
        <div className="flex flex-col items-center justify-between gap-4 font-mono text-xs text-comment sm:flex-row">
          <p>
            <span className="text-red">$</span> built by Abdel Perez{" "}
            <span title="I like shrimps" aria-label="shrimp">
              🦐
            </span>{" "}
            · {new Date().getFullYear()}
          </p>
          <div className="flex gap-5">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-yellow"
            >
              GitHub
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-yellow"
            >
              LinkedIn
            </a>
            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-yellow"
            >
              Résumé
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="transition-colors hover:text-yellow"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
