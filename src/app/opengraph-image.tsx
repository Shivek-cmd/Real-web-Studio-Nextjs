import { ImageResponse } from "next/og";

export const alt = "RealWebStudio - Custom websites for Canadian small businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#101820",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              color: "#ff6b35",
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: 0,
            }}
          >
            RealWebStudio
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              letterSpacing: 0,
              lineHeight: 1.05,
              maxWidth: 920,
            }}
          >
            Custom websites for Canadian small businesses
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: 820,
            }}
          >
            Web design, local SEO, automation, and AI growth systems.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
