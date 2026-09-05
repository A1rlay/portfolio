import type { ReactNode } from "react";

export default function SectionHeading({
  index,
  id,
  children,
}: {
  index: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <div className="reveal mb-10 flex items-center gap-4">
      <span className="font-mono text-sm font-bold text-red" aria-hidden>
        {index}
      </span>
      <h2
        id={`${id}-heading`}
        className="font-mono text-2xl font-bold text-fg sm:text-3xl"
      >
        <span className="text-comment" aria-hidden>
          {"// "}
        </span>
        {children}
      </h2>
      <span className="h-px flex-1 bg-line" aria-hidden />
    </div>
  );
}
