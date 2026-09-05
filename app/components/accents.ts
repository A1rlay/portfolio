import type { CSSProperties } from "react";
import type { Accent } from "../content";

/*
  Accent -> class lookups.

  These are written out as complete literal class names on purpose: Tailwind
  scans source text, so `text-${accent}` would compile to nothing.
*/

export const ACCENT_TEXT: Record<Accent, string> = {
  yellow: "text-yellow",
  red: "text-red",
  orange: "text-orange",
  green: "text-green",
  cyan: "text-cyan",
  purple: "text-purple",
};

export const ACCENT_BG: Record<Accent, string> = {
  yellow: "bg-yellow",
  red: "bg-red",
  orange: "bg-orange",
  green: "bg-green",
  cyan: "bg-cyan",
  purple: "bg-purple",
};

export const ACCENT_BORDER: Record<Accent, string> = {
  yellow: "border-yellow",
  red: "border-red",
  orange: "border-orange",
  green: "border-green",
  cyan: "border-cyan",
  purple: "border-purple",
};

export const ACCENT_HOVER_BORDER: Record<Accent, string> = {
  yellow: "hover:border-yellow/60",
  red: "hover:border-red/60",
  orange: "hover:border-orange/60",
  green: "hover:border-green/60",
  cyan: "hover:border-cyan/60",
  purple: "hover:border-purple/60",
};

/** Lets a style object carry CSS custom properties without an `any` cast. */
export type CSSVars = CSSProperties & Record<`--${string}`, string | number>;
