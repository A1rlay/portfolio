import type { SkillGroup } from "../content";
import { ACCENT_HOVER_BORDER, ACCENT_TEXT } from "./accents";

export default function SkillsGrid({ groups }: { groups: readonly SkillGroup[] }) {
  return (
    <div className="reveal-stagger grid gap-5 sm:grid-cols-2">
      {groups.map((group) => (
        <section
          key={group.title}
          aria-labelledby={`skills-${group.title.replace(/\W+/g, "-").toLowerCase()}`}
          className={`reveal rounded-xl border border-line bg-panel p-6 transition-colors ${ACCENT_HOVER_BORDER[group.accent]}`}
        >
          <h3
            id={`skills-${group.title.replace(/\W+/g, "-").toLowerCase()}`}
            className={`font-mono text-xl font-bold ${ACCENT_TEXT[group.accent]}`}
          >
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
        </section>
      ))}
    </div>
  );
}
