import {
  ABOUT,
  CV_PATH,
  EMAIL,
  EXPERIENCE,
  HERO,
  IDENTITY,
  LANGUAGES,
  LINKS,
  NAV,
  PROJECTS,
  SKILLS,
} from "./content";
import { ACCENT_TEXT } from "./components/accents";
import ExperienceRail from "./components/experience-rail";
import HeroTerminal from "./components/hero-terminal";
import ProjectsGrid from "./components/projects-grid";
import SectionHeading from "./components/section-heading";
import SiteNav from "./components/site-nav";
import SkillsGrid from "./components/skills-grid";

/*
  Everything here is a Server Component except <SiteNav />, which needs
  IntersectionObserver for scroll-spy. Copy lives in ./content.ts.
*/

export default function Home() {
  const skillGroups = [...SKILLS, LANGUAGES];

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-5 sm:px-8">
      <a
        href="#main"
        className="skip-link rounded-md bg-yellow px-4 py-2 font-mono text-sm font-semibold text-ink"
      >
        skip to content
      </a>

      {/* ---------------- Nav ---------------- */}
      <header className="sticky top-0 z-50 -mx-5 mb-4 border-b border-line/70 bg-ink/85 px-5 backdrop-blur-md sm:-mx-8 sm:px-8">
        <nav className="flex h-16 items-center justify-between gap-4" aria-label="Main">
          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-tight text-fg"
          >
            <span className="text-red" aria-hidden>
              ~/
            </span>
            abdel
            <span className="text-yellow">.perez</span>
          </a>

          <SiteNav items={NAV} />

          <a
            href={`mailto:${EMAIL}`}
            className="hidden rounded-md border border-red px-3 py-1.5 font-mono text-xs font-semibold text-red transition-colors hover:bg-red hover:text-ink sm:inline-block"
          >
            get in touch
          </a>
        </nav>

        {/* scroll position readout — decorative "build bar" */}
        <div
          aria-hidden
          className="scroll-progress absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-yellow via-orange to-red"
        />
      </header>

      <main id="main" className="flex flex-1 flex-col">
        {/* ---------------- Hero ---------------- */}
        {/*
          On a phone the terminal is ~660px tall, which would push the name
          and headline entirely below the fold — so the headline comes first
          in the DOM (and therefore in reading order) and the terminal is
          promoted above it from `sm` up, where both fit.
        */}
        <section
          id="top"
          className="flex flex-col justify-center gap-10 py-14 sm:py-20"
        >
          <div className="order-1 max-w-3xl sm:order-2">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-fg sm:text-6xl">
              Hi, I’m Abdel.
              <br />I make software{" "}
              <span className="text-yellow">reliable</span> and{" "}
              <span className="text-red">well-tested</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {HERO.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
              <a
                href="#projects"
                className="rounded-md bg-yellow px-5 py-2.5 font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                view projects <span aria-hidden>→</span>
              </a>
              <a
                href={CV_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-line px-5 py-2.5 font-semibold text-fg transition-colors hover:border-red hover:text-red"
              >
                download résumé
                <span className="sr-only"> (PDF, opens in a new tab)</span>
              </a>
            </div>
          </div>

          <div className="order-2 sm:order-1">
            <HeroTerminal />
          </div>
        </section>

        {/* ---------------- About ---------------- */}
        <section id="about" aria-labelledby="about-heading" className="py-16">
          <SectionHeading index="01" id="about">
            about
          </SectionHeading>
          <div className="reveal-stagger grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div className="reveal space-y-4 text-lg leading-8 text-muted">
              <p>
                I’m most at home where{" "}
                <span className="text-fg">development</span> meets{" "}
                <span className="text-fg">operations</span> — owning test
                automation, CI/CD and cloud infrastructure on a production
                multi-tenant SaaS, and following a production failure from root
                cause to a shipped fix.
              </p>
              <p>
                At <span className="text-yellow">FundMiner</span> I built an
                internal test-reporting and coverage dashboard from scratch
                that’s now used daily across the engineering org, rebuilt
                the <span className="text-fg">GitHub Actions</span> pipelines,
                containerized the whole test suite in{" "}
                <span className="text-fg">Docker</span>, and moved production
                infrastructure into{" "}
                <span className="text-fg">Terraform</span>. In six months there
                I merged <span className="text-red">109 pull requests</span> and
                shipped the majority of all company-wide test and CI breakage
                fixes by commit volume.
              </p>
              <p>
                If something can be automated, tested, or monitored, I’d
                rather do that than fix it at 2 a.m.
              </p>
            </div>

            <div className="reveal flex flex-col gap-4">
              <section
                aria-labelledby="about-focus"
                className="rounded-xl border border-line bg-panel p-5 font-mono text-sm"
              >
                <h3 id="about-focus" className="mb-3 text-muted">
                  <span aria-hidden>{"// "}</span>current focus
                </h3>
                <ul className="space-y-2">
                  {ABOUT.focus.map((item) => (
                    <li key={item.label} className="flex gap-2">
                      <span className={ACCENT_TEXT[item.accent]} aria-hidden>
                        ▹
                      </span>
                      <span className="text-muted">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section
                aria-labelledby="about-education"
                className="rounded-xl border border-line bg-panel p-5 font-mono text-sm"
              >
                <h3 id="about-education" className="mb-3 text-muted">
                  <span aria-hidden>{"// "}</span>education
                </h3>
                <p className="text-fg">{ABOUT.education.degree}</p>
                <p className="mt-1 text-muted">
                  {ABOUT.education.school}
                  <span aria-hidden> · </span>
                  <span className="text-yellow">
                    {ABOUT.education.expected}
                  </span>
                </p>
                <p className="mt-2 text-muted">{ABOUT.education.note}</p>
              </section>
            </div>
          </div>
        </section>

        {/* ---------------- Experience ---------------- */}
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="py-16"
        >
          <SectionHeading index="02" id="experience">
            experience
          </SectionHeading>
          <ExperienceRail jobs={EXPERIENCE} />
        </section>

        {/* ---------------- Skills ---------------- */}
        <section id="skills" aria-labelledby="skills-heading" className="py-16">
          <SectionHeading index="03" id="skills">
            skills
          </SectionHeading>
          <SkillsGrid groups={skillGroups} />
        </section>

        {/* ---------------- Projects ---------------- */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="py-16"
        >
          <SectionHeading index="04" id="projects">
            projects
          </SectionHeading>
          <ProjectsGrid projects={PROJECTS} />
        </section>

        {/* ---------------- Contact ---------------- */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="py-16"
        >
          <SectionHeading index="05" id="contact">
            contact
          </SectionHeading>
          <div className="reveal rounded-xl border border-line bg-panel p-8 text-center sm:p-12">
            <p className="font-mono text-sm text-muted">
              <span className="text-comment" aria-hidden>
                {"// "}
              </span>
              let’s build something reliable
            </p>
            <p className="mt-4 text-3xl font-bold text-fg sm:text-4xl">
              Get in <span className="text-red">touch</span>
            </p>
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
            <p className="mt-6 font-mono text-xs text-muted">
              {IDENTITY.location}
            </p>
          </div>
        </section>
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer className="border-t border-line py-8">
        <div className="flex flex-col items-center justify-between gap-4 font-mono text-xs text-muted sm:flex-row">
          <p>
            <span className="text-red" aria-hidden>
              ${" "}
            </span>
            built by Abdel Perez{" "}
            <span title="I like shrimps" role="img" aria-label="shrimp">
              🦐
            </span>{" "}
            · {new Date().getFullYear()}
          </p>
          <ul className="flex gap-5">
            <li>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-yellow"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-yellow"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={CV_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-yellow"
              >
                Résumé
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="transition-colors hover:text-yellow"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
