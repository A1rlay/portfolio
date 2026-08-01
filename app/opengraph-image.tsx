import { ImageResponse } from "next/og";

export const alt = "Abdel Perez — Platform & Test Infrastructure Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Monokai palette (matches the site)
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
          padding: 72,
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
              padding: "20px 28px",
              backgroundColor: PANEL2,
              borderBottom: `1px solid ${LINE}`,
            }}
          >
            <div style={{ width: 16, height: 16, borderRadius: 16, backgroundColor: RED }} />
            <div style={{ width: 16, height: 16, borderRadius: 16, backgroundColor: YELLOW }} />
            <div style={{ width: 16, height: 16, borderRadius: 16, backgroundColor: GREEN }} />
            <div style={{ marginLeft: 16, fontSize: 22, color: COMMENT }}>
              abdel@portfolio: ~
            </div>
          </div>

          {/* body */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "44px 52px 52px",
            }}
          >
            <div style={{ display: "flex", fontSize: 26, color: COMMENT }}>
              ~/abdel.perez
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 10,
                fontSize: 92,
                fontWeight: 800,
                color: FG,
                letterSpacing: -2,
              }}
            >
              Abdel Perez
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: 8,
                fontSize: 44,
                fontWeight: 700,
              }}
            >
              <span style={{ color: YELLOW }}>Platform</span>
              <span style={{ color: FG }}>&nbsp;&amp;&nbsp;</span>
              <span style={{ color: RED }}>Test Infrastructure</span>
              <span style={{ color: FG }}>&nbsp;Engineer</span>
            </div>
            <div style={{ display: "flex", marginTop: 26, fontSize: 30, color: MUTED }}>
              CI/CD · Observability · Reliability
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
