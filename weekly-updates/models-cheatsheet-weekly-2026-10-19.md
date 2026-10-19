# Model cheat sheet — weekly check, Oct 19 2026

Computer not attached this run (scheduled, cloud-only), so `data.js` was not read. Comparing
against the Oct 12 doc (most recent), with Sep 28 / Oct 5 for anything still unresolved, since
it's still unclear whether any proposed edits have been applied yet.

---

## 1. New this week — two real changes

**Gemini 4 Argon went GA Oct 13, and is now live in FLORA.** Last week's doc had it restricted to
Google's Fairwind Program with no public API date. That's changed: general availability landed
Oct 13, and FLORA now carries it as a featured text row at **$0.01875 / 8s**. Pricing is
introductory: $2/$10 per 1M tokens (input/output) until Nov 30, then $4/$20 from Dec 1. That also
resolves the Oct 12 note flagging "$2/$10 vs $4/$20" as disagreeing sources — it's one schedule,
not a conflict. Worth a price re-check on this row right after Nov 30.

- [Gemini 4 Argon now available: long decode, limits, pricing](https://braindetox.kr/en/posts/gemini_4_argon_general_availability_2026.html)
- [Gemini 4 Argon Goes Global at $2/$10, Doubling After Nov 30](https://fourweekmba.com/ai-gemini-4-argon-goes-global-price-doubles-after-nov-30/)

**Claude Haiku 5.5 is now live in FLORA.** Oct 12's doc flagged this as "watching, not in FLORA
yet." It's in now: **$0.00135 / 8s**, text/image/video-to-text. That undercuts GPT-6 Luna as the
cheapest row on the sheet.

---

## 2. Resolved from previous weeks

**Kling 3.0 Pro Motion Control's distinct SKU, unconfirmable for three straight weeks, is
confirmable now.** `flora_list_models` with query "motion control" returns it directly:
`iv2v-kling-v3-pro-motion`, **$2.016 / ~655s**. Matches the sheet's existing ~$2.02 figure almost
exactly. No change needed on that row, just closing the gap.

---

## 3. Still pending from Sep 28 / Oct 5 / Oct 12 (unclear if applied to data.js)

Re-verified live against `flora_list_models` today, status unchanged unless noted:

- **Reve 2.1 is still listed and still stale.** FLORA still serves `t2i-reve21-t2i-gateway` at
  $0.315/30s, three weeks after the service shut down (Sep 27). Still don't demo it.
- GPT-6.1 Sol ($0.0126/20s), GPT-6 Luna (<$0.01, $0.0009/10s), Claude Opus 5.5 ($0.0135/25s),
  Eleven v4 ($0.048/10s), Eleven v4 Turbo ($0.024/5s), Lyria 3.5 ($0.105/40s), Meshy 7.1 ($1.44),
  Tripo P2 ($1.32) — all confirmed still live, same prices as last week.
- **Nano Banana 2.1 price doesn't match last week's log.** Oct 12's doc recorded $0.035/40s;
  today's pull shows $0.0522/40s (same `t2i-elote-gateway` SKU, same 40s). Can't tell from here
  whether that's a real price bump or last week's number was off — flagging rather than guessing.
  Worth checking directly against `data.js` if it was already updated to $0.035.

See the [Sep 28](claude/models-cheatsheet-weekly-2026-09-28.md), [Oct 5](claude/models-cheatsheet-weekly-2026-10-05.md),
and [Oct 12](claude/models-cheatsheet-weekly-2026-10-12.md) docs for full writeups and sourcing on
all of the above.

---

## 4. Watching, not yet actionable

**Kling 4.0 full version still not shipped.** An Oct 16 spec writeup still describes it as
pre-launch: October launch promised but no specific day given, 10-bit HDR and 2-minute extension
both still "coming soon." Only Kling 4.0 Flash (lighter model, Ultra Yearly subscribers only,
since Sep 28) is out. Not in FLORA. No change from last week's note.

- [Kling 4.0 Arrives in October: Every Official Spec, and What Flash Can Do Today](https://www.atlascloud.ai/sv/blog/tips/kling-4-flash-vs-full) (Oct 16)

---

## 5. Newly surfaced, not new to the world (gaps, like Lyria 3.5 was)

Neither of these has appeared in any prior week's doc. Both launched well before the Sep 25
baseline, so they're gaps in what's been checked, not changes from this week:

**Wan 3.0 Prime** — live in FLORA, $0.84, ~45s generation (vs plain Wan 3.0's $0.60/~180s).
Alibaba's faster, higher-fidelity tier on top of the Wan 3.0 family: native audio, stronger
multi-modal reference, smoother prompt-to-clip flow. Launched alongside base Wan 3.0 in late
August.

- [Wan 3.0 Prime](https://www.atlascloud.ai/zh-TW/blog/tips/wan-3.0-prime)

**Seedream 5 Pro (ByteDance)** — live in FLORA as a featured image row, $0.17/130s. Doesn't rank
ahead of GPT Image 2.5 Flare/Sunburst or Nano Banana 2.1 on the Artificial Analysis image arena, so
not proposing it as a swap, just flagging that it exists and is reachable in FLORA. Release date is
fuzzy in available sourcing (~3 months old), not pinned down precisely.

---

## Proposed row edits (new this week)

```js
// TEXT — add two
{ name: "Gemini 4 Argon",   price: "$0.02",  time: "8s", refs: "GA Oct 13; intro $2/$10 per 1M tok, jumps to $4/$20 after Nov 30" },
{ name: "Claude Haiku 5.5", price: "<$0.01", time: "8s", refs: "cheapest text row now, undercuts GPT-6 Luna" },
```

Also bump `updated:` to `2026-10-19`. All edits proposed Sep 28 / Oct 5 / Oct 12 still apply as
written in those docs — not repeating them here.

---

## Verified as unchanged

Checked live against `flora_list_models` today, no price or availability drift on anything else:
Claude Opus 5 $0.009 · GPT-6 Astra $0.063 · Gemini Flash 3.8 $0.043 · Gemini 3.5 Flash-Lite $0.0036
· ElevenLabs Scribe v2 $0.0036 · Claude Fable 5.1 $0.72 (still the odd row out per Sep 28, still on
the sheet) · GPT Image 2.5 Flare/Sunburst $0.055 · Nano Banana Pro $0.18 · Nano Banana 2 Lite
$0.043 · Recraft V4.1 Vector $0.096 · Seedance 2.0 $1.058 · Seedance 2.5 $2.483 · Wan 3.0 $0.60 ·
Gemini Omni 1.1 Flash $0.96 · MiniMax H3 Max $0.48 · Gemini Omni Flash $0.13 · ElevenLabs v3
$0.1206 · Gemini 3.1 Flash TTS $0.0126 · ElevenLabs Music v1 $0.36 · ElevenLabs Sound Effects
$0.144 · Sync 3 $1.152 · Kling Avatar v2 Pro $0.69 · Tripo H3.1 $0.24 (t2) / $0.36 (i2, 2-4 views) ·
Rodin v2.5 $0.48 · Hi3D v3.0 $2.52 · Hunyuan3D v3.1 Rapid $0.27.

No deprecations affecting any of these beyond the still-live-but-dead Reve 2.1 row above.

---

## Anecdotal, treat as soft

- Nothing new this week beyond what's already logged in prior docs (Artlist's Nano Banana 2.1
  writeup, the thin Top3D arena sample sizes). Not re-litigating those here.

## Could not verify

- Whether the Nano Banana 2.1 price move ($0.035 → $0.0522) is real or a logging error from last
  week — no FLORA price-history endpoint to check against.
- Exact release date for Seedream 5 Pro (available sourcing only says "~3 months ago," relative to
  an unclear capture date).
- Whether `data.js` reflects any of the edits proposed Sep 28 through Oct 12 — still can't tell
  without the computer attached.
