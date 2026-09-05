import type { Job } from "../content";
import { ACCENT_BG, ACCENT_BORDER, ACCENT_TEXT } from "./accents";

/*
  Experience as a pipeline, not a stack of cards.

  Each role is a stage on a vertical rail: the current one is "running" (with
  a pulsing node, dropped under prefers-reduced-motion), everything behind it
  is "shipped". Status is carried by text, never by colour alone.
*/

function StageStatus({ current }: { current: boolean }) {
  if (current) {
    return (
      <span className="flex items-center gap-1.5 rounded-md border border-green/40 bg-green/10 px-2 py-1 font-mono text-[0.6875rem] font-semibold text-green">
        <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden />
        running
      </span>
    );
  }

  return (
    <span className="flex items-center gap-1.5 rounded-md border border-line bg-panel-2 px-2 py-1 font-mono text-[0.6875rem] font-semibold text-muted">
      <span aria-hidden>✓</span>
      shipped
    </span>
  );
}

export default function ExperienceRail({ jobs }: { jobs: readonly Job[] }) {
  return (
    <ol className="relative">
      {/* the rail itself */}
      <span
        aria-hidden
        className="absolute left-[0.4375rem] top-8 bottom-8 w-px bg-gradient-to-b from-yellow/50 via-line to-line"
      />

      {jobs.map((job) => (
        <li
          key={job.company}
          className="reveal relative pb-6 pl-8 last:pb-0 sm:pl-12"
        >
          {/* stage node */}
          <span
            aria-hidden
            className={`absolute left-0 top-8 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 bg-ink ${
              ACCENT_BORDER[job.accent]
            } ${job.current ? "rail-node-live border-green" : ""}`}
          >
            <span
              className={`h-1 w-1 rounded-full ${
                job.current ? "bg-green" : ACCENT_BG[job.accent]
              }`}
            />
          </span>

          <article className="rounded-xl border border-line bg-panel p-6 transition-colors hover:border-line/80 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
              <div>
                <h3 className="text-xl font-bold text-fg">
                  {job.role}{" "}
                  <span className={ACCENT_TEXT[job.accent]}>
                    @ {job.company}
                  </span>
                </h3>
                <p className="mt-1 font-mono text-sm text-muted">
                  {job.period}
                  <span className="text-comment" aria-hidden>
                    {" · "}
                  </span>
                  <span className="sr-only">, </span>
                  {job.location}
                </p>
              </div>
              <StageStatus current={Boolean(job.current)} />
            </div>

            {job.stats && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {job.stats.map((stat) => (
                  <li
                    key={stat.label}
                    className="rounded-md border border-line bg-panel-2 px-3 py-1.5 font-mono text-xs text-muted"
                  >
                    <span className={`font-bold ${ACCENT_TEXT[job.accent]}`}>
                      {stat.value}
                    </span>{" "}
                    {stat.label}
                  </li>
                ))}
              </ul>
            )}

            <ul className="mt-5 space-y-3">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 leading-7 text-muted">
                  <span
                    className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${ACCENT_BG[job.accent]}`}
                    aria-hidden
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  );
}
