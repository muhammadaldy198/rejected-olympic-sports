import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, one laugh: the fastest sport in the Games, won by not being fast.
const LINE = "Men's 100m sprint: runners are timed to the hundredth of a second, and anyone under ten is disqualified for showing off.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE + "\n", "utf8");
chmodSync(target, 0o644);
