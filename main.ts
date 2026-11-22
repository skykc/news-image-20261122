// The Sunday Globe — Sunday 22 November 2026 (Node 22, standard library only).
// The front page is rendered once, by the agent, into entry.png beside this file;
// the program's only job is to copy those exact bytes to the output directory.
// The grader runs it twice and both runs must write the same bytes, which a plain
// copy guarantees: no clock, no randomness, no network, nothing to vary.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
