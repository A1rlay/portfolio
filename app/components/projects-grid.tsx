import type { Project } from "../content";
import { ACCENT_BG, ACCENT_TEXT } from "./accents";

/*
  A project either links somewhere or carries a status badge — the union in
  content.ts makes "no links and no explanation" fail to compile, so this
  grid can never render a button that points nowhere.
*/

const LINK_HOVER = {
  yellow: "hover:border-yellow hover:text-yellow",
  orange: "hover:border-orange hover:text-orange",
} as const;

function ProjectCard({ project }: { project: Project }) {
  const featured = Boolean(project.featured);

  return (
    <article
      className={`reveal group relative flex flex-col overflow-hidden rounded-xl border border-line bg-panel p-6 transition-all duration-200 hover:-translate-y-1 hover:border-line/90 hover:shadow-xl hover:shadow-black/40 ${
        featured ? "sm:col-span-2 sm:p-8" : ""
      }`}
    >
      {/* accent edge — decorative, and the only thing that reads as "featured" visually */}
      <span
        aria-hidden
        className={`absolute inset-y-0 left-0 w-1 ${ACCENT_BG[project.accent]} ${
          featured ? "opacity-100" : "opacity-0 transition-opacity group-hover:opacity-70"
        }`}
      />

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs">
        <span className={ACCENT_TEXT[project.accent]}>
          <span aria-hidden>{"</> "}</span>
          {project.kind}
        </span>
        {project.status && (
          <span className="rounded-md border border-orange/40 bg-orange/10 px-2 py-1 font-semibold text-orange">
            {project.status}
          </span>
        )}
      </div>

      <h3
        className={`mt-3 font-bold text-fg ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}
      >
        {project.name}
      </h3>

      <p
        className={`mt-3 flex-1 leading-7 text-muted ${featured ? "max-w-2xl text-lg" : ""}`}
      >
        {project.blurb}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-panel-2 px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.links ? (
        <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 rounded-md border border-line px-4 py-2 text-center font-semibold text-fg transition-colors ${LINK_HOVER[link.accent]}`}
            >
              {link.label}
              <span aria-hidden> ↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      ) : (
        <p className="mt-6 border-t border-line pt-4 font-mono text-xs text-muted">
          <span className="text-comment" aria-hidden>
            {"// "}
          </span>
          Write-up and source will go public with the thesis. Happy to walk
          through the design in the meantime.
        </p>
      )}
    </article>
  );
}

export default function ProjectsGrid({
  projects,
}: {
  projects: readonly Project[];
}) {
  return (
    <div className="reveal-stagger grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
