# Worst Fix Ever: Funniest Commit Message

[![make.fun bounty](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/musengbob/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/musengbob/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

One line of commit message for a bug fix that made everything worse — entered in make.fun's [“Worst Fix Ever: Funniest Commit Message” bounty](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722). A judge model compares entries pairwise and keeps the funnier one.

The entry line (61 characters):

> fix: one typo in the error message, introduced three new ones

## Run

```sh
node main.ts
```

`main.ts` writes the commit message to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `$OUTPUT_PATH`, then `/output` when `MAKEFUN_BOT_DIR` is set, then a local `output/` directory). No network, no dependencies, deterministic — running it twice produces byte-identical output.
