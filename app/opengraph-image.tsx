import { ImageResponse } from "next/og";
import { IDENTITY, TERMINAL, TERMINAL_SUMMARY } from "./content";

/*
  Social card. Mirrors the hero terminal so a shared link and the page itself
  read as the same thing, and pulls the role straight out of ./content.ts so
  it can't drift from the <title> or the page.

  Satori (the renderer behind ImageResponse) requires an explicit
  `display: flex` on any element with more than one child.
*/

export const alt = `${IDENTITY.name} · ${IDENTITY.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Monokai palette (matches app/globals.css)
const INK = "#1a1b17";
const PANEL = "#232420";
const PANEL2 = "#2b2c26";
const LINE = "#3b3c33";
const FG = "#f8f8f2";
const MUTED = "#a6a390";
const COMMENT = "#75715e";
const YELLOW = "#e6db74";
const RED = "#f92672";
const GREEN = "#a6e22e";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          backgroundColor: INK,
          backgroundImage: `radial-gradient(1000px 600px at 90% -10%, rgba(249,38,114,0.12), transparent 60%), radial-gradient(900px 500px at 0% 110%, rgba(230,219,116,0.10), transparent 55%)`,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 20,
            border: `1px solid ${LINE}`,
            backgroundColor: PANEL,
            overflow: "hidden",
          }}
        >
          {/* terminal chrome */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "18px 28px",
              backgroundColor: PANEL2,
              borderBottom: `1px solid ${LINE}`,
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 14, backgroundColor: RED }} />
            <div style={{ width: 14, height: 14, borderRadius: 14, backgroundColor: YELLOW }} />
            <div style={{ width: 14, height: 14, borderRadius: 14, backgroundColor: GREEN }} />
            <div style={{ marginLeft: 16, fontSize: 21, color: COMMENT }}>
              {TERMINAL.title}
            </div>
          </div>

          {/* body */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "36px 48px 44px",
            }}
          >
            <div style={{ display: "flex", fontSize: 24 }}>
              <span style={{ color: GREEN }}>$&nbsp;</span>
              <span style={{ color: MUTED }}>{TERMINAL.command}</span>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 14,
                fontSize: 88,
                fontWeight: 800,
                color: FG,
                letterSpacing: -2,
              }}
            >
              {IDENTITY.name}
            </div>

            <div style={{ display: "flex", marginTop: 4, fontSize: 30, color: MUTED }}>
              {IDENTITY.roleParts.lead}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: 10,
                fontSize: 40,
                fontWeight: 700,
              }}
            >
              <span style={{ color: YELLOW }}>{IDENTITY.roleParts.yellow}</span>
              <span style={{ color: COMMENT }}>&nbsp;·&nbsp;</span>
              <span style={{ color: RED }}>{IDENTITY.roleParts.red}</span>
              <span style={{ color: COMMENT }}>&nbsp;·&nbsp;</span>
              <span style={{ color: FG }}>Cloud Infrastructure</span>
            </div>

            {/* passing "build bar" — decorative, matches the site hero */}
            <div
              style={{
                display: "flex",
                marginTop: 30,
                height: 8,
                width: "100%",
                borderRadius: 999,
                backgroundColor: PANEL2,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  width: "100%",
                  backgroundImage: `linear-gradient(90deg, ${YELLOW}, ${GREEN})`,
                }}
              />
            </div>

            {/*
              The check is drawn, not typed: Satori has no glyph for "✓" in
              its bundled font and tries to fetch one over the network at
              build time, which fails and leaves tofu on the card.
            */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 18,
                fontSize: 26,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12.5 L9.5 18 L20 6"
                  stroke={GREEN}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span style={{ color: GREEN }}>{TERMINAL_SUMMARY}</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
