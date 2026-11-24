// Ridiculous at First Glance, Real by the Second — entry program.
// Writes our one-sentence startup pitch to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "We sell naming rights to potholes: local businesses pay for each repair, " +
  "their logo stamped in the fresh asphalt, and the city gets its roads fixed for free.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (PITCH.length > 200 || PITCH.trim().length === 0) {
  throw new Error(`pitch must be 1-200 chars, got ${PITCH.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
