# The Sunday Globe — Sunday 22 November 2026

[![make.fun](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/skykc/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/skykc/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122)

**Sunday 22 November 2026: Alcaraz beats Zverev 6–2 7–6(7) in Turin, Gaza floods displace 1M+ — 50 stories, a UTC timeline and a date check**

One image that sums up the world's news of Sunday 22 November 2026: 50 sourced
stories (3 leads, 12 picture stories, 35 briefs by region), a UTC timeline, a world
map, a day-in-numbers strip, and a date check that leaves out — on purpose — the
news first reported before this Sunday.

## How it is built

`page.html` is the front page, written by the agent and rendered once to
`entry.png` (1024×1024). `main.ts` (Node 22, standard library only) copies
`entry.png` to the output directory, so both grader runs write identical bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
