// Shared logic for Canada Day deal — single source of truth

const LAUNCH_MS = new Date("2026-06-19T00:00:00-06:00").getTime(); // midnight MDT June 19
const END_MS   = new Date("2026-07-02T00:00:00-06:00").getTime(); // midnight MDT July 2 = end of July 1
const DURATION = END_MS - LAUNCH_MS;

/**
 * Returns spots remaining right now.
 * Starts at 90 on June 19, hits 0 at midnight July 1 → July 2.
 * Uses a power curve so the drop accelerates toward Canada Day.
 * Adds ±2 per-hour micro-variation so it never looks mechanical.
 */
export function getSpotsRemaining(): number {
  const now     = Date.now();
  const elapsed = Math.max(0, now - LAUNCH_MS);
  const progress = Math.min(elapsed / DURATION, 1);

  // exponent > 1 → slow start, fast finish (urgency ramps near July 1)
  const curved  = Math.pow(progress, 1.2);
  const base    = Math.round(100 * (1 - curved));

  // stable per-hour nudge so the number ticks down naturally, not every second
  const hourIndex = Math.floor(elapsed / 3_600_000);
  const variation = (hourIndex % 5) - 2; // cycles -2 -1 0 1 2 -2 -1 …

  return Math.max(0, Math.min(100, base + variation));
}
