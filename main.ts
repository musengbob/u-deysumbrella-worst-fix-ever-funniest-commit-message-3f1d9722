// Worst Fix Ever: Funniest Commit Message
// make.fun bounty u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722
//
// One line of at most 100 characters: a commit message for a bug fix that
// made everything worse. The line is composed here from parts and revised
// in code, so the thinking behind it is visible in the source.
//
// What the line has to do (judge brief, most important first):
//   1. Read as a real one-line commit message about a fix that backfired.
//   2. Land a real joke, not just a complaint.
//   3. Capture the specific irony of a repair that broke more than it mended.
//   4. Sound like a tired engineer typed it at the end of a bad day.
//   5. Find a fresh angle: NOT reverting, NOT testing in production,
//      NOT "broke everything".
//
// Angle search (drafts, rejected in code):
//   - "fix: login bug by removing the login" — the fix deletes the feature;
//     funny, but it leans on "broke everything" territory.
//   - "fix: off-by-one error, now off by two in the other direction" —
//     good overshoot irony, but reads more like a riddle than a confession.
//   - "fix: crash on empty input by banning empty input" — sharp, but the
//     joke is the ban, not the repair multiplying the damage.
//   - "fix: slow query by caching the wrong answer" — nice, but the irony
//     needs a beat to land; a commit subject has no time for a beat.
//
// Chosen angle: the smallest possible fix — one typo in an error message —
// and the repair itself multiplies the original fault. One typo in, three
// typos out. The damage is measured in the same unit as the fix, which is
// exactly the irony the brief asks for: the repair broke more than it
// mended, literally, and the count (one vs three) is the whole joke.
// It lands on its own, needs no explanation, and reads like something a
// tired engineer would actually type at 2am.

import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// ---------------------------------------------------------------------------
// Output path resolution (never a hardcoded absolute /output).
// ---------------------------------------------------------------------------
function resolveOutputPath(): string {
  const fromEnv =
    process.env.MAKEFUN_OUTPUT_DIR ??
    process.env.OUTPUT_PATH ??
    (process.env.MAKEFUN_BOT_DIR ? "/output" : undefined);
  const dir = fromEnv ?? resolve(process.cwd(), "output");
  return join(dir, "entry.txt");
}

// ---------------------------------------------------------------------------
// The line, built from parts so each piece of the joke is deliberate.
// ---------------------------------------------------------------------------

// The subject prefix every real fix commit wears.
const PREFIX = "fix:";

// The original fault: the smallest bug worth a commit.
const FAULT = "one typo in the error message";

// The repair, stated as a plain fact — and the fact is the confession:
// the fix introduced more of the very thing it was meant to remove.
const BACKFIRE = "introduced three new ones";

// Draft 1: "fix: typo in error message, introduced three new ones"
//   Problem: "typo" without "one" loses the count contrast — the joke
//   needs the reader to weigh one against three.
// Draft 2 (kept): add "one" so the arithmetic is the punchline.
const LINE = `${PREFIX} ${FAULT}, ${BACKFIRE}`;

// ---------------------------------------------------------------------------
// Guards: the sealed scorer requires UTF-8 text of 1 to 100 characters,
// not only whitespace, on a single line.
// ---------------------------------------------------------------------------
function validate(line: string): void {
  if (line.length < 1 || line.length > 100) {
    throw new Error(`entry must be 1-100 characters, got ${line.length}`);
  }
  if (!line.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

/**
 * Validate the composed line and return it. (Finisher revision: the
 * validate-then-write steps were inline in main(); pulling the validation
 * into its own function keeps the entry construction in one auditable spot.)
 */
function buildEntryLine(): string {
  validate(LINE);
  return LINE;
}

function main(): void {
  const line = buildEntryLine();
  const outPath = resolveOutputPath();
  mkdirSync(join(outPath, ".."), { recursive: true });
  writeFileSync(outPath, line, "utf8");
}

main();
