import { TERMINAL, TERMINAL_SUMMARY } from "../content";
import { ACCENT_TEXT, type CSSVars } from "./accents";

/*
  The hero "CI run".

  This is a Server Component and ships zero JavaScript: the run is driven
  entirely by CSS animation-delay (see the `.ci-*` rules in globals.css).
  What the server renders IS the finished output, so the no-JS, no-animation
  and prefers-reduced-motion paths all land on the same readable end state,
  and nothing in the panel changes size while it plays — the progress bar and
  the summary share a single grid cell, so the hand-off costs no layout shift.

  Every check below is a fact lifted from the CV (see content.ts). The
  "6 checks passed" summary is self-referential: it counts the rows above it.
*/

function Dot({ className }: { className: string }) {
  return <span className={`h-3 w-3 rounded-full ${className}`} aria-hidden />;
}

export default function HeroTerminal() {
  return (
    <div className="ci overflow-hidden rounded-xl border border-line bg-panel shadow-2xl shadow-black/40">
      {/* window chrome — decoration */}
      <div
        className="flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-3"
        aria-hidden
      >
        <Dot className="bg-red" />
        <Dot className="bg-yellow" />
        <Dot className="bg-green" />
        <span className="ml-3 font-mono text-xs text-muted">
          {TERMINAL.title}
        </span>
      </div>

      <div className="p-5 font-mono text-[0.8125rem] leading-6 sm:p-7 sm:text-sm">
        {/* The typed command is chrome too — the information lives in the list. */}
        <p aria-hidden>
          <span className="text-green">$</span>{" "}
          <span
            className="ci-cmd text-fg"
            style={{ "--len": TERMINAL.command.length } as CSSVars}
          >
            {TERMINAL.command}
          </span>
        </p>

        <dl className="mt-4 space-y-2">
          {TERMINAL.checks.map((check, i) => (
            <div
              key={check.label}
              className="ci-row flex flex-wrap items-baseline gap-x-3 gap-y-0.5"
              style={{ "--i": i } as CSSVars}
            >
              <dt className="flex shrink-0 basis-full items-baseline gap-2 sm:basis-24">
                <span className="ci-check" aria-hidden>
                  ✓
                </span>
                <span className={ACCENT_TEXT[check.accent]}>{check.label}</span>
              </dt>
              <dd className="min-w-0 flex-1 text-muted">{check.value}</dd>
            </div>
          ))}
        </dl>

        <div className="ci-status mt-5">
          <div className="ci-track" aria-hidden>
            <span className="ci-bar" />
          </div>
          <p className="ci-summary text-green">{TERMINAL_SUMMARY}</p>
        </div>

        <p className="mt-3" aria-hidden>
          <span className="text-green">$</span>{" "}
          <span className="ci-caret" />
        </p>
      </div>
    </div>
  );
}
