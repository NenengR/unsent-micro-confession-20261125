// Unsent: The Micro-Confession Sprint (u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
// Writes the two-part micro-confession to /output/entry.txt:
// a To: line naming who it was meant for, and the unsent message itself.
// Revision: verified output matches the chosen entry byte for byte; no text change.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "To: my first love\n" +
  "I never sent it, but I still check the draft every night like it might forgive me first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
