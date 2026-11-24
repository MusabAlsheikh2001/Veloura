# Implementation notes

## Working folder
- Primary Veloura working copy: `~/Projects/Veloura` (git clone of `MusabAlsheikh2001/Veloura`).
- Old plain copy archived at `~/Projects/_archive/Veloura-main-2026-11-24` (not a git repo; its files exist in git history).

## Colour system (merged)
- Semantic tokens live in `src/styles.scss`: primitives (`--navy-950`, `--cobalt-600`, `--cyan-400`, ...) mapped to roles (`--accent`, `--accent-2`, `--btn-bg`, `--on-dark`, ...).
- Light and dark themes are separate token sets.
- Legacy names kept as aliases (`--gold` -> `--accent-2`).
- `docs/color-migration/contrast.mjs` computes WCAG contrast for palette pairs.
- `docs/color-migration/tokens-block.scss` is the token block as written.

## Build notes
- `angular.json` component-style budget raised to 25 kB warning / 30 kB error, because the home page stylesheet was already over the old 13 kB error threshold.
- Bundle size warning (about 710 kB against a 500 kB budget) predates these changes.

## Open items
- Selected Work, Services, Industries, Blog, Contact and About are not yet redesigned.
- Arabic layout and reduced-motion behaviour are not verified.
- Nay Alrouh is listed as a case study on kenzi.ai as well as on Veloura's site. Confirm ownership with the client.
