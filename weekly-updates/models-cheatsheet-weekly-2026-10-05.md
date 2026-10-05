# Model cheat sheet — weekly check, Oct 5 2026

Computer not attached this run (scheduled, cloud-only), so `data.js` was not read. Comparing against
the Sep 25 baseline plus last week's findings (Sep 28 doc), since it's unclear whether last week's
proposed edits were ever applied.

---

## 1. New this week — two real changes

**ElevenLabs v4 / v4 Turbo replace ElevenLabs v3 as the flagship voice row.** Released Sep 28.
Ranked #1 on Artificial Analysis's Text to Speech leaderboard. Voice cloning now needs only 10s of
sample audio (down from longer). Language support 70 → 90. FLORA has it live: Eleven v4 $0.048/10s,
Eleven v4 Turbo $0.024/5s — both cheaper and faster than ElevenLabs v3's $0.1206/15s, which is
currently on the sheet.

- [ElevenLabs' new v4 speech model supports more expression control and 90 languages](https://techcrunch.com/2026/09/28/elevenlabs-new-v4-speech-model-supports-more-expression-control-and-90-languages/) (TechCrunch, Sep 28)
- [ElevenLabs: Introducing Eleven v4 and Eleven v4 Turbo](https://x.com/ElevenLabs/status/2104572127617994917)

**GPT-6.1 Sol supersedes GPT-6 Sol — swap before applying last week's row.** Released Sep 29, one day
after last week's check already proposed adding GPT-6 Sol. Same FLORA price and time as plain Sol
($0.0126 / 20s), but stronger agentic coding and computer use, and "near-Astra" performance per
OpenAI. No reason to add the older Sol now that 6.1 exists at the same cost.

- [OpenAI launches GPT-6.1 Sol, says it nearly matches GPT-6 Astra and costs less](https://techcrunch.com/2026/09/29/openai-launches-gpt-6-1-sol-says-it-nearly-matches-gpt-6-astra-and-costs-less/) (TechCrunch, Sep 29)

---

## 2. Still pending from last week (unclear if applied to data.js)

Re-verified live against `flora_list_models` today, status unchanged from the Sep 28 report:

- **Reve 2.1 still listed and still stale.** FLORA still serves it at $0.315/30s even though the
  service shut down Sep 27. Still don't demo it.
- GPT-6 Luna (<$0.01/10s), Claude Opus 5.5 ($0.0135/25s), Meshy 7.1 ($1.44), Tripo P2 ($1.32),
  Lyria 3.5 ($0.105/40s) — all confirmed still live in FLORA, same prices as last week. See the
  [Sep 28 doc](claude/models-cheatsheet-weekly-2026-09-28.md) for full writeups.

---

## 3. Watching, not yet public — don't add to the sheet

**Gemini 4 Argon.** Announced Sep 30 as Google's new frontier model. Not publicly available — limited
to Google's "Fairwind Program" testers and cyber defenders right now. Not in FLORA's model list.
Introductory API pricing already stated ($2/M input, $10/M output) for when it does roll out.

- [Google announces Gemini 4 Argon as its new frontier model](https://9to5google.com/2026/09/30/gemini-4-argon-announcement/) (9to5google, Sep 30)

**Kling 4.0.** Only a Flash variant in closed beta since Sep 28, and only for Kling's Ultra Yearly
subscribers — 720p 8-bit, below the promised spec. The full 4K/10-bit broadcast version isn't shipped
yet ("coming in October" per the vendor). Not in FLORA. The sheet's existing Kling 3.0 Pro Motion
Control row is unaffected for now.

- [Kling 4.0 Promises 30-Second 4K Video: Broadcast Spec Is Coming in October, Not Today](https://www.techtimes.com/articles/328285/20260930/kling-40-promises-30-second-4k-video-broadcast-spec-coming-october-not-today.htm) (Tech Times, Sep 30)

---

## Proposed row edits

```js
// TEXT — add (replaces last week's proposed "GPT-6 Sol" row — don't add both)
{ name: "GPT-6.1 Sol",      price: "$0.01",  time: "20s", refs: "—" },

// AUDIO — add, and consider cutting/annotating ElevenLabs v3 as legacy
{ name: "Eleven v4",        price: "$0.05",  time: "10s", refs: "—" },
{ name: "Eleven v4 Turbo",  price: "$0.02",  time: "5s",  refs: "—" },
```

Also bump `updated:` to `2026-10-05`. All other edits proposed last week (Sep 28) still apply as
written there — not repeating them here.

---

## Verified as unchanged

Checked live against `flora_list_models` today, no price or availability drift: Claude Opus 5 $0.009 ·
GPT-6 Astra $0.063 · Gemini Flash 3.8 ~$0.043 (audio-to-text SKU; text-to-text SKU wasn't in this
run's sample) · Gemini 3.5 Flash-Lite $0.0036 · ElevenLabs Scribe v2 $0.0036 · GPT Image 2.5 Flare
$0.0554 · GPT Image 2.5 Sunburst $0.0554 · Nano Banana 2 $0.072 · Nano Banana Pro $0.18 · Nano Banana
2 Lite $0.0428 · Recraft V4.1 Vector $0.096 · Seedance 2.0 $1.058 · Seedance 2.5 $2.483 · Wan 3.0
$0.60 · Gemini Omni 1.1 Flash $0.96 · MiniMax H3 Max $0.48 · Gemini Omni Flash $0.13 · ElevenLabs
Music v1 $0.36 · ElevenLabs Sound Effects $0.144 · Sync 3 $1.152 · Kling Avatar v2 Pro $0.69 · Tripo
H3.1 $0.24 (single/text) / $0.36 (image, 2-4 views) · Rodin v2.5 $0.48 · Hi3D v3.0 $2.52 · Hunyuan3D
v3.1 Rapid $0.27 · Gemini 3.1 Flash TTS $0.0126.

No deprecations affecting any of these.

---

## Anecdotal, treat as soft

- A widely-aggregated "GPT Image 2 (high) debuts at #1" claim from Artificial Analysis is circulating,
  but the source tweet has no confirmed date and GPT Image 2 (not 2.5) was already live in FLORA
  before this week — not treating this as a this-week change.
- A third-party leaderboard aggregator (benchlm.ai) surfaced in search results claiming a "GPT-5.6
  Sol" leads an intelligence index. This conflicts with OpenAI's own confirmed GPT-6 Astra/Sol/Luna/
  6.1 Sol naming (TechCrunch, OpenAI's own X account) and reads like auto-generated SEO content.
  Disregarded.

## Could not verify

- Kling 3.0 Pro Motion Control's exact per-generation price wasn't independently re-queryable this
  run (FLORA's search didn't surface a distinct "motion control" SKU — it's likely a param on the
  base Kling 3.0 Pro node rather than its own listing). Same gap as last week; sheet figure (~$2.02)
  presumed still good.
- Reference-input caps weren't re-verified this run either, same as last week's note — no vendor
  announced a limit change, so presumed unchanged but unconfirmed.
- Whether Kling 4.0 Flash (closed beta) is reachable via API at all, vs. web-app only — unclear from
  public reporting, so it's not actionable either way yet.
