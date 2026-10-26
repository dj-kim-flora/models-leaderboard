# Model cheat sheet: weekly check, Oct 26 2026

Computer not attached (scheduled, cloud-only). GitHub access to the repo is disabled for this session, so data.js was read through a web summarizer on the raw file (lossy, row values only). Treat sheet-side values below as read-through-a-summarizer, not byte-exact. FLORA values come from `flora_list_models` today. No generations run, no FLORA projects touched.

Entries in FLORA's list that I could not confirm are public were left out.

---

## 1. Changes (7)

**1. Kling 4.0 shipped Oct 15. The Oct 19 doc said it had not.** Kling AI's own press release (dated Oct 16) says it "officially launched on October 15": up to 30s in one pass, up to 15 references (10 images, 5 videos, 7 subjects), 10-bit HDR and 21:9 listed. Video extension (2 min) and API access are "soon". The Oct 19 doc relied on an Oct 16 writeup that was stale. FLORA now lists it as **Kling v4**: $1.234 (5s, 1080p default), ~300s, 3 to 30s, 720p or 1080p, plus Reference ($1.234 image refs, $5.18 with video refs) and Edit ($8.88) variants. Not ranked on Artificial Analysis yet, so it does not "beat" anything on a leaderboard. Add for teaching value (30s single pass).
- [Kling AI press release, Oct 16](https://www.globenewswire.com/news-release/2026/10/16/3382768/0/en/kling-ai-officially-launches-next-generation-kling-4-0-raising-the-bar-for-professional-grade-video-models.html) (verified, vendor)
- [AA text-to-video board, Kling 4.0 absent](https://artificialanalysis.ai/video/leaderboard/text-to-video)
- Anecdotal: [launch-night hands-on](https://dev.to/dong_chenguang_2cbe5a1770/kling-40-review-long-takes-faster-motion-and-a-better-way-to-use-references-2h1f) (author sells a Kling front end). Good continuity, high-variance action, a Reddit report of cuts inside "continuous" 30s takes.
- Anecdotal: [an API aggregator](https://unifically.com/models/kling-4.0) says API went live Oct 16 at $0.1134/s 720p, $0.1701/s 1080p. Contradicts the press release's "soon". Unverified.

**2. FLUX 3 Max (Black Forest Labs, on fal since ~Oct 19) beats Seedance 2.0 on Artificial Analysis.** AA text-to-video: FLUX 3 Max 1155 vs Seedance 2.0 1136, Omni 1.1 Flash 1130. AA image-to-video: 1138 vs Wan 3.0 1127, MiniMax H3 Max 1125, Seedance 2.0 1121 (statistical tie with Seedance 2.5 at 1138). FLORA: **$0.8925 (5s, 720p default), ~60s**, 5 to 20s, 720p or 1080p, native audio on by default, image-to-video with optional end frame, keyframes variant. Cheaper than Seedance 2.0 ($1.06) and about 4x faster than its 225s. FLORA bills at roughly fal's list rate ($0.17/s 720p), so fal's 75% promo (Oct 15 to Nov 7) is not reflected.
- [BFL announcement on X](https://x.com/bfl_ai/status/2112255353677328415) (vendor claim: 10s clip in 12s, tied #1 image-to-video)
- [fal launch coverage](https://www.unite.ai/fal-debuts-flux-3-max-video-model-post-trained-with-black-forest-labs/), [fal endpoint](https://fal.ai/models/blackforestlabs/flux-3-max/text-to-video)
- [AA image-to-video board](https://artificialanalysis.ai/video/leaderboard/image-to-video), [AA text-to-video board](https://artificialanalysis.ai/video/leaderboard/text-to-video)
- Reference caps not documented by fal or BFL. FLORA's image-to-video takes one image.

**3. Krea 3 (released Oct 15, Ultra mode opened Oct 20) beats Nano Banana Pro and Nano Banana 2 on image editing.** AA image editing: Krea 3 (Ultra) 1151, tied with Nano Banana 2.1 (1151); Fast 1126; Nano Banana 2 1123; Seedream 5 Pro 1131. Not in the AA text-to-image top 12. FLORA: **Krea 3 $0.063, ~10s** (default Fast), with Thinking = Fast, High, Ultra. FLORA's quote shows the flat default, so the Ultra price on FLORA is unverified. On Krea's own API Ultra adds $0.20 per generation and runs minutes (third-party report). Reference cap not documented.
- [AA image editing board](https://artificialanalysis.ai/image/leaderboard/editing)
- [Krea 3 Ultra leaderboard debut](https://www.orcarouter.ai/nl/blog/krea-3-ultra-leaderboard-debut) (third-party, numbers read on Oct 20)
- [Arena changelog, Krea 3 Ultra added Oct 20](https://arena.ai/company/leaderboard-changelog)

**4. Gemini Omni Flash (preview) is shut down. Sheet row at risk.** Google's deprecations table: `gemini-omni-flash-preview` shutdown **Oct 22 2026**, replacement `gemini-omni-1.1-flash` (already on the sheet). The same page shuts the Veo 3.1 previews Oct 22. Two third parties put the removal at Sep 30 (NightCafe) or Oct 22 (buildmvpfast), so Sep 30 is likely the deprecation and Oct 22 the shutdown. FLORA still lists two "Gemini-Omni-Flash" SKUs at $0.1296 / 30s (vertex "Draft Multi", fal). I cannot tell whether they route to the dead preview endpoint or to a 1.1 draft mode, and I did not run one. Test one before teaching it, or retire the row.
- [Google deprecations table](https://ai.google.dev/gemini-api/docs/deprecations) (verified, vendor)
- [buildmvpfast October deprecation guide](https://www.buildmvpfast.com/blog/gemini-api-deprecation-october-2026-flash-routing), [NightCafe notice](https://help.nightcafe.studio/portal/en/kb/articles/deprecation-of-gemini-omni-flash)

**5. Gemini 3.1 Flash TTS shuts down Nov 17 (earliest date).** Replacement per Google: `gemini-3.8-flash-tts` or `-flash-lite-tts` (AA TTS #5 at 1283 and #8 at 1256). FLORA has not added either. The sheet row is already tagged Preview. Eleven v4 Turbo (1338) and Eleven v4 (1334) are #1 and #2 on AA, both already on the sheet.
- [Google deprecations table](https://ai.google.dev/gemini-api/docs/deprecations), [AA TTS board](https://artificialanalysis.ai/text-to-speech/leaderboard)

**6. Nano Banana 2 price drift.** FLORA now $0.0803 (65s). Sheet shows $0.07; Oct 5 check had $0.072. Row is already tagged Older. Nano Banana 2.1 still $0.0522 / 40s, matches the sheet.

**7. Time estimates drifted (lower confidence).** FLORA's estimates today vs what the summarizer read from data.js: Gemini Omni 1.1 Flash 90s vs 180s, Gemini Omni Flash 30s vs 70s, Hi3D v3.0 600s (900s multi-view) vs 300s. Matters only if you quote times in class.

---

## 2. Paste block for data.js

Schema from the Oct 19 doc: `{ model, price, secs, refs, best, not, tag, priceNote }`. Match field shapes to your file before pasting.

```js
// bump:  updated: "Oct 26, 2026"

// VIDEO: add
{ model: "Kling 4.0", price: "$1.23", secs: 300, refs: "Up to 10 images + 7 subjects (Kling spec, FLORA cap unverified)", best: "Long single takes, up to 30s in one pass", not: "No independent ranking yet. 4K, HDR and extension not live", priceNote: "5s · 1080p" },
{ model: "FLUX 3 Max", price: "$0.89", secs: 60, refs: "1 image + optional end frame, or keyframes", best: "Fast, cheap drafts with native audio", not: "Light on references vs Seedance", priceNote: "5s · 720p" },

// IMAGE: add
{ model: "Krea 3", price: "$0.06", secs: 10, refs: "Not documented", best: "Fast image edits with reference images", not: "Ultra mode is slower and costs more", priceNote: "Fast mode" },

// edits to existing rows (fields only, keep your existing best text)
// IMAGE  Nano Banana 2       price: "$0.08"
// IMAGE  Reve 2.1            tag: "Shut down", not: "Service ended Sep 27. Do not demo."   (open since Sep 28)
// VIDEO  Gemini Omni Flash   tag: "Retired", not: "Google shut the preview endpoint Oct 22. Use Omni 1.1 Flash."   (or delete the row)
// VIDEO  Gemini Omni 1.1 Flash   secs: 90
// AUDIO  Gemini 3.1 Flash TTS    priceNote: "Google shuts it down Nov 17"
// 3D     Hi3D v3.0           secs: 600

// sources: add (match your existing shape)
// Kling AI press release  https://www.globenewswire.com/news-release/2026/10/16/3382768/0/en/kling-ai-officially-launches-next-generation-kling-4-0-raising-the-bar-for-professional-grade-video-models.html
// Black Forest Labs: FLUX 3 Max  https://x.com/bfl_ai/status/2112255353677328415
// Google: Gemini API deprecations  https://ai.google.dev/gemini-api/docs/deprecations
```

---

## 3. Backlog still open (unchanged, read from data.js today)

Reve 2.1 has no deprecation flag (note reads only "Weaker on faces and hands"). Meshy 7 not 7.1. Tripo P2 and Lyria 3.5 absent. The ready-to-paste file from the Oct 19 doc addendum covers these; none of it is in the repo yet. FLORA still serves Reve 2.1 at $0.315 / 30s.

## 4. Gaps, not new this week

- **HeyGen Video 1** (launched Sep 30, built on MiniMax H3): AA text-to-video #3 at 1160, ahead of Seedance 2.0 and MiniMax H3 Max. FLORA $0.1685 (5s, 768p), ~240s, 5 to 15s. A third-party writeup says HeyGen's list price doubles in November and cites 9 images + 3 videos + 3 audio refs; unverified on FLORA. [Creative AI News](https://www.creativeainews.com/articles/heygen-video-1-pricing-vs-h3-max-2026/)
- **Suno v6**: AA Music Arena v1.1 #1 (vocal 1142, instrumental 1140) per an Oct 7 article. In FLORA at $0.12 / 30s vs ElevenLabs Music v1 $0.36. Article does not rank ElevenLabs Music v1. [AlphaSignal](https://alphasignal.ai/news/artificial-analysis-music-arena-v1-1-crowns-suno-v6-across-1-000-harder-prompts)

## 5. Checked, no change

Arena changelog Oct 12 to Oct 24: no #1 changes in text, image, video or edit arenas; Haiku 5.5 added to Text Arena Oct 22 ([changelog](https://arena.ai/company/leaderboard-changelog)). Top3D texture board: Tripo v3.1 1116, Hi3D v3.0 1112, Meshy 7 1092, no new entries seen ([top3d.ai](https://top3d.ai)). No new 3D model releases found for Tripo, Meshy, Rodin, Hunyuan3D. FLORA updates #085 (Oct 16) and #086 (Oct 22) list no model changes ([flora.ai/updates](https://flora.ai/updates), summaries only). FLORA prices unchanged vs sheet: all text rows, GPT Image 2.5 Flare/Sunburst, Nano Banana Pro, Nano Banana 2 Lite, Nano Banana 2.1, Recraft V4.1 Vector, Seedance 2.0 and 2.5, Wan 3.0, MiniMax H3 Max, Kling 3.0 Pro Motion Control ($2.016 / 655s), Eleven v4, v4 Turbo, v3, Music v1, Sound Effects, Sync 3, Kling Avatar v2 Pro, Tripo H3.1, Rodin v2.5, Meshy 7, Hunyuan3D v3.1 Rapid.

## 6. Could not verify

- data.js was not read byte-exact (see top). Row values for the sheet come from a summarizer.
- Whether FLORA's two "Gemini-Omni-Flash" SKUs still work.
- FLORA's Ultra price for Krea 3, and reference caps for Kling 4.0, FLUX 3 Max and Krea 3 inside FLORA.
- Whether Kling 4.0's API is public yet. The press release says "soon"; FLORA already serves it.
- AA leaderboard figures were read through a summarizer; no dates shown on those pages.
