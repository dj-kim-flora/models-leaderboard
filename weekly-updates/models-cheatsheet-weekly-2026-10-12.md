# Model cheat sheet — weekly check, Oct 12 2026

Computer not attached this run (scheduled, cloud-only), so `data.js` was not read. Comparing
against the Sep 25 baseline plus the Sep 28 and Oct 5 findings, since it's still unclear whether
any proposed edits have been applied yet.

---

## 1. New this week — one real change

**Nano Banana 2.1 replaces Nano Banana 2 as the Flash-tier default.** Released Oct 6 2026 by
Google DeepMind, across the Gemini app, AI Studio, the Gemini API, and Google Cloud. Google has
deprecated Nano Banana 2 in favor of it but announced no shutdown date, so the old row isn't
urgent to pull.

Confirmed live in FLORA today at **$0.035 / ~40s**, cheaper and faster than Nano Banana 2's
$0.072 / 65s. Same 14-reference-image ceiling (4 characters + 10 objects, matching the sheet's
existing "14 imgs" note). What's actually better, per Google and independent write-ups: more
reliable multi-part prompts, localized/area-targeted edits instead of full-image edits, better
face/outfit consistency across edit rounds, improved text rendering, and a new Minimal/Medium/High
thinking-level control. Nano Banana Pro still wins on dense infographics and multilingual text;
treat 2.1 as the new "start here" tier, Pro for complex scenes.

- [Google Ships Nano Banana 2.1 and Deprecates Nano Banana 2](https://www.zeniteq.com/google-ships-nano-banana-2-1-and-deprecates-nano-banana-2-8w8cxv) (Oct 7)
- [Nano Banana 2.1: Google's new image model, specs, features](https://morphic.com/resources/models/nano-banana-2-1)
- [Nano Banana 2.1: What changed, and which Nano Banana to use](https://artlist.io/blog/nano-banana-2-1-what-changed/) (Artlist, Oct 8 — practitioner comparison, not official)

---

## 2. Still pending from Sep 28 / Oct 5 (unclear if applied to data.js)

Re-verified live against `flora_list_models` today, status unchanged:

- GPT-6.1 Sol ($0.0126/20s), Eleven v4 ($0.048/10s), Eleven v4 Turbo ($0.024/5s) — all confirmed
  still live at the prices proposed Oct 5.
- GPT-6 Luna (<$0.01/10s), GPT-6 Sol ($0.0126/20s), Claude Opus 5.5 ($0.0135/25s), Meshy 7.1
  ($1.44), Tripo P2 ($1.32), Lyria 3.5 ($0.105/40s) — all confirmed still live, same as Sep 28.
- **Reve 2.1 still listed and still stale.** FLORA still serves it at $0.315/30s even though the
  service shut down Sep 27. Still don't demo it.

See the [Sep 28](claude/models-cheatsheet-weekly-2026-09-28.md) and
[Oct 5](claude/models-cheatsheet-weekly-2026-10-05.md) docs for full writeups and sourcing.

---

## 3. Watching, not yet actionable

**Claude Haiku 5.5.** Anthropic released it this week (~Oct 7) with an effort-control slider and
roughly 75% lower pricing than Haiku 4.5. Not in FLORA's model list as of this run, so nothing to
add to the sheet yet — flagging so it's not a surprise if FLORA adds it.

- [Anthropic releases Claude Haiku 5.5, cutting prices by 75%](https://aiweekly.co/alerts/introducing-claude-haiku-55)
- [Anthropic cuts small-model pricing 90% with Claude Haiku 5.5](https://www.vktr.com/ai-platforms/anthropic-cuts-smallmodel-pricing-90-with-claude-haiku-55/) (headline number disagrees with the above — treat the exact discount figure as unconfirmed)

**Kling 4.0 full version still not shipped.** Still Flash-only (720p, 8-bit, Ultra annual
subscribers only), as of an Oct 11 price check cited in reporting. The full 30s/4K/10-bit version
Kling promised "in October" hasn't landed yet. No change from last week's note; not in FLORA.

- [Kling 4.0: October promise, Flash-only in practice](https://sloptv.co/news/kling-4-0-october-promise-flash-720p-only) (updated Oct 7, price check cited Oct 11)

**Gemini 4 Argon still limited.** Still restricted to Google's Fairwind Program (cyber defenders),
no public API date announced. No change from last week. Introductory pricing reported as either
$2/$10 per M tokens (CNBC) or $4/$20 per M tokens (Google's own blog, post-intro) — sources
disagree, flagging both.

- [Google Releases Gemini 4 Argon to Cyber Defenders](https://letsdatascience.com/news/google-releases-gemini-4-argon-to-cyber-defenders-1093bb0b) (Oct 7)

---

## Proposed row edit (new this week)

```js
// IMAGE — add, and mark Nano Banana 2 as superseded (Google deprecated it, no shutdown date yet)
{ name: "Nano Banana 2.1", price: "$0.04", time: "40s", refs: "14 imgs (4 char + 10 obj)" },
{ name: "Nano Banana 2",   price: "$0.07", time: "65s", refs: "14 imgs — legacy, use 2.1" },
```

Also bump `updated:` to `2026-10-12`. All edits proposed Sep 28 and Oct 5 still apply as written
in those docs — not repeating them here.

---

## Verified as unchanged

Checked live against `flora_list_models` today, no price or availability drift on anything else:
Claude Opus 5 $0.009 · GPT-6 Astra $0.063 · Gemini Flash 3.8 $0.043 · Gemini 3.5 Flash-Lite $0.0036
· ElevenLabs Scribe v2 $0.0036 · GPT Image 2.5 Flare/Sunburst $0.055 · Nano Banana Pro $0.18 ·
Nano Banana 2 Lite $0.043 · Recraft V4.1 Vector $0.096 · Seedance 2.0 $1.058 · Seedance 2.5 $2.483
· Wan 3.0 $0.60 · Gemini Omni 1.1 Flash $0.96 · MiniMax H3 Max $0.48 · Gemini Omni Flash $0.13 ·
Kling 3.0 Pro (base, not Motion Control) $0.706 · ElevenLabs v3 $0.1206 · Gemini 3.1 Flash TTS
$0.0126 · ElevenLabs Music v1 $0.36 · ElevenLabs Sound Effects $0.144 · Sync 3 (not independently
re-queried, no vendor news) · Kling Avatar v2 Pro (not independently re-queried, no vendor news) ·
Tripo H3.1 $0.24 (t2) / $0.36 (i2, 2-4 views) · Rodin v2.5 $0.48 · Hi3D v3.0 $2.52 · Hunyuan3D v3.1
Rapid $0.27.

No deprecations affecting any of these beyond the Nano Banana 2 note above.

---

## Anecdotal, treat as soft

- Artlist's Nano Banana 2.1 comparison (practitioner blog, not Google) is the only source with
  hands-on before/after guidance on which tier to use for what. Treated as practical color, not a
  spec source — specs above come from Google's own model card and morphic.com's spec page.

## Could not verify

- Kling 3.0 Pro Motion Control's distinct per-generation price still isn't independently
  re-queryable — FLORA's search surfaces plain "Kling 3.0 Pro" variants ($0.706) but not a
  separate "Motion Control" SKU, same gap as the last two weeks. Sheet figure (~$2.02) presumed
  still good but unconfirmed.
- Reference-input caps on rows not touched this week weren't re-verified; no vendor announced a
  limit change, so presumed unchanged.
- Exact discount percentage on Claude Haiku 5.5 pricing — two outlets report different numbers
  (75% vs 90% cheaper than Haiku 4.5); not actionable yet since it's not in FLORA regardless.
