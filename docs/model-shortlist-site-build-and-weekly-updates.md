# Model Shortlist: one-page site and weekly update routine

A small, trivial-to-build project; the interesting part is the weekly routine. Times are America/New_York (EDT).

## Outcome and context

A one-page cheat sheet of the top FLORA models per modality (Text, Image, Video, Audio, 3D) with price per run, generation time, reference-input counts and a "best for" line, plus five headline picks. Static HTML, no build step; all content lives in `data.js` (`window.SHEET`), so a model change is a one-file edit that Vercel redeploys on push.

- Live: https://models-leaderboard.vercel.app (HTTP 200 on Oct 14; the served `data.js` shows "Oct 12, 2026", matching HEAD).
- Repo: `DJ-Kim-FLORA/models-leaderboard` on GitHub, branch `main`, 4 commits, clean working tree.
- `robots.txt` (Disallow all) and a noindex tag keep it out of search; only people with the link find it.
- Contributors: DJ Kim with Claude Code (Opus 5.5 on Sep 29, Sonnet 5.5 on Oct 5 and 12). A scheduled, cloud-only Claude routine writes the weekly briefs. The agent that built the first version is not recorded.

## Stage 1: First version (Sep 21 to 25)

`README.md` and `robots.txt` have Sep 21 file times; `index.html` and `data.js` Sep 25 16:53; the first commit "Model sheet" was Sep 25, 17:58 (author DJ, no agent co-author). The README says to ask Claude for a new `data.js`, which suggests a Claude chat built it, but no session record for this stage exists in the Claude Code or Codex logs. It was branded for a course; that branding was removed in Stage 2. Prices come from FLORA's model list at default settings ("what one generation costs in FLORA"), and times are FLORA's in-app estimate.

## Stage 2: De-branding (Sep 29, 15:58 to 16:07; Claude Code, Opus 5.5)

DJ asked to remove all traces that the page related to the original course and make it a general model shortlist, then push it. Claude Code searched the whole repo (only CSS class names matched), moved the page title into a `title` field in `data.js`, generalised `index.html` and the README, and offered to rewrite history to scrub the first commit. DJ chose a normal commit ("history is fine as long as the current version has no traces"), pushed as `949d190`.

## Stage 3: Weekly updates (Oct 5 and Oct 12; Claude Code, Sonnet 5.5)

A Claude routine runs weekly without the computer attached, so it cannot read `data.js`. It re-queries FLORA's live model list, scans vendor news, and writes `claude/models-cheatsheet-weekly-<date>.md` with proposed row edits, a "still pending" list and a "could not verify" list. DJ then asks Claude Code to apply the brief.

- Oct 5 (12:10 to 12:13): the brief was first missing from the repo; it then appeared in `weekly-updates/`, where DJ said he would store each week's update. Claude Code applied the Oct 5 edits and left the Sep 28 ones because that brief was absent: added GPT-6.1 Sol (and skipped GPT-6 Sol, which 6.1 supersedes), Eleven v4 and v4 Turbo, tagged ElevenLabs v3 "Older", moved the audio pick to Eleven v4. Commit `425fb58`.
- Oct 12 (12:48 to 12:49): added Nano Banana 2.1 as the new start-here image tier and tagged Nano Banana 2 "Older". Commit `8335f6e`.

Open items Claude Code raised on Oct 12 and nothing in the records resolves: the Sep 28 brief is still not in `weekly-updates/`, so GPT-6 Luna, Claude Opus 5.5, Meshy 7.1, Tripo P2 and Lyria 3.5 are not on the sheet (the Oct 12 brief confirms them live in FLORA), and Reve 2.1 is still listed although the brief says that service shut down Sep 27. Claude Code asked whether to add and pull them; no answer is recorded in these sessions.

## Use in practice

On Oct 9, DJ's workshop-prep notes in a separate session named this URL as the "reference for model comparison", and that agent fetched it for Seedance, MiniMax H3, Omni and Kling comparisons. That is the only evidenced downstream use.

## Final delivery and verification

- Canonical files: `index.html`, `data.js`, `README.md`, `robots.txt`, `weekly-updates/*.md`.
- Checked on Oct 14: live site returns 200 and serves the Oct 12 `data.js`; git status is clean apart from an untracked `.DS_Store`. Claude Code did not open the page in a browser in either session.
- A "data.js failed to load" box appears if an edit has a syntax error (README explains).
- No `.gitignore` (an untracked `.DS_Store` exists).

## Time and cost

- Claude Code elapsed times from timestamps: Sep 29 about 9 min (15:58 to 16:07), Oct 5 about 3 min, Oct 12 about 25 s. These are first-message to last-message intervals, not active human time.
- The scheduled routine's run time, token use and cost are not recorded; the briefs state "scheduled, cloud-only".
- Hosting (GitHub, Vercel) cost not recorded; assume an existing personal or team plan, not allocated.

## Maintenance and handoff

- Weekly: put the new brief in `weekly-updates/`, apply row edits to `data.js`, bump `updated:`, commit to `main`.
- Decide on the pending Sep 28 edits and whether to drop Reve 2.1.
- Optional: add a `.gitignore` for `.DS_Store`; keep prices honest by re-checking FLORA's live model list, since the sheet quotes defaults.
- Naming: the repo and project say "models-leaderboard" while the page says "Model Shortlist".
