# AIVD Model Shortlist

A one-page model cheat sheet for AI For Visual Design students.

- `index.html`: layout and styling. You shouldn't need to touch it.
- `data.js`: every model, price, time and note. **This is the only file you edit.**
- `robots.txt` + a `noindex` tag keep the page out of Google. Only people with the link find it.

## Deploy once (about 5 minutes)

Use your **personal** GitHub and Vercel accounts, not a company team.

1. On github.com, create a new **private** repo, e.g. `aivd-models`.
2. Click **Add file > Upload files**, drag in all four files, and click **Commit changes**.
3. On vercel.com, sign in with GitHub, click **Add New > Project**, pick `aivd-models`, leave the preset as **Other**, and click **Deploy**.
4. Share the `*.vercel.app` link with students. You can rename it under **Settings > Domains**.

## Update anytime

1. On GitHub, open `data.js` and click the pencil icon.
2. Change a row (or ask Claude for a new `data.js`) and bump `updated:` at the top.
3. Click **Commit changes**. Vercel redeploys in under a minute. The link stays the same.

If the page shows a red "data.js failed to load" box, the last edit has a typo (usually a missing comma or quote). Open the commit history on GitHub to see what changed.

## Preview locally

Double-click `index.html`. It works offline because the data loads as a script, not a fetch.
