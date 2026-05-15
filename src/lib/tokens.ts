/**
 * Design tokens — single source of truth for all brand values.
 *
 * SYNC RULE: Any change here must be mirrored in globals.css @theme block.
 * Tailwind reads @theme in CSS. This file is for TypeScript usage only
 * (dynamic styles, schema, non-Tailwind contexts).
 */

export const colors = {
  orange:      "#FF6B35",
  orangeDark:  "#e85a22",
  orangeLight: "#fff4ef",
  orangeMid:   "#ffdcca",
  dark:        "#0f0f0f",
  dark2:       "#1a1a1a",
  text:        "#1C1C1E",
  gray:        "#6B7280",
  grayLight:   "#F5F5F7",
  border:      "#E5E7EB",
  white:       "#ffffff",
  green:       "#10B981",
  purple:      "#6C63FF",
} as const;

export const shadows = {
  orange: "0 8px 32px rgba(255,107,53,.28)",
  card:   "0 4px 24px rgba(0,0,0,.08)",
  large:  "0 20px 60px rgba(0,0,0,.12)",
} as const;

export const radius = {
  base: "14px",
  sm:   "10px",
} as const;

export const layout = {
  maxWidth: "1080px",
  sideGap:  "5%",
} as const;

// Reference only — Tailwind v4 uses these breakpoints by default
export const breakpoints = {
  lg: "1024px",
  md: "768px",
  sm: "500px",
} as const;

export const font = {
  family:  "Noto Sans",
  weights: [300, 400, 500, 600, 700, 800] as const,
} as const;
