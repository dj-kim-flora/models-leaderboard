// ============================================================
// MODEL SHORTLIST: the only file you need to edit.
// Change a row, save, commit. Vercel redeploys automatically.
//   secs  = generation time in seconds (sets the Fast/Medium/Slow chip)
//   price = what one generation costs in FLORA at default settings
//   refs  = how many reference inputs the model accepts
//   title = page title and eyebrow label
//   not   = optional muted line under "Best for"
// ============================================================
window.SHEET = {
  title: "Model Shortlist",
  updated: "Oct 26, 2026",

  picks: [
    { k: "Text",  m: "Claude Opus 5.5",     w: "Prompts, shot lists, ideas" },
    { k: "Image", m: "GPT Image 2.5 Flare", w: "Best all-rounder" },
    { k: "Video", m: "Seedance 2.0",        w: "Cinematic motion" },
    { k: "Audio", m: "Eleven v4",           w: "Voiceover with emotion" },
    { k: "3D",    m: "Tripo H3.1",          w: "Cleanest models" },
  ],

  sections: [
    {
      id: "text", name: "Text", unit: "price per run",
      rows: [
        { model: "Claude Opus 5.5", price: "$0.01", secs: 25, best: "New Anthropic flagship. Adjustable thinking (Low/Med/High); benchmarks at or above Fable 5.1 for a fraction of the cost", not: "Costs more per run than Opus 5 ($0.0135 vs $0.009) even though its per-token price is lower, since adaptive thinking is always on" },
        { model: "Claude Opus 5", price: "<$0.01", secs: 25, best: "Writing and expanding prompts, shot lists, creative ideation and copy", not: "Cheaper than Opus 5.5; use that instead if budget allows" },
        { model: "GPT-6 Astra", price: "$0.06", secs: 30, best: "Reading images precisely: small details, text in images, turning a reference into a prompt", not: "Not for video: images and text only" },
        { model: "GPT-6.1 Sol", price: "$0.01", secs: 20, best: "Agentic coding and computer use; near GPT-6 Astra quality at a fraction of the cost" },
        { model: "Claude Haiku 5.5", price: "<$0.01", secs: 8, best: "Cheapest text row: bulk rewrites, captions, prompt variations, plus image and video understanding" },
        { model: "Gemini 4 Argon", price: "$0.02", secs: 8, best: "Google's new frontier model, fast for its class", not: "Intro API pricing doubles on Dec 1; re-check the price then" },
        { model: "Gemini Flash 3.8", price: "$0.04", secs: 6, best: "Analyzing video and audio (it watches and listens directly). Fast all-rounder" },
        { model: "Gemini 3.5 Flash-Lite", price: "<$0.01", secs: 4, best: "Bulk jobs: quick rewrites, captions, prompt variations" },
        { model: "Claude Fable 5.1", tag: "Premium", price: "$0.72", secs: 25, best: "Best raw writing and deepest image critique. Use when Opus 5.5 isn't enough", not: "~53x Opus 5.5's per-run cost for no measured benchmark advantage; confirm you need it before running" },
        { model: "ElevenLabs Scribe v2", tag: "Audio to text", price: "<$0.01", secs: 10, best: "Transcripts with timestamps and speaker labels" },
      ],
    },
    {
      id: "image", name: "Image", unit: "price per image",
      note: "Reference counts are the provider's documented maximums. FLORA may cap them lower on the node. Price shows the full span across a model's modes (generate vs. edit, quality tiers) when FLORA charges them differently — not just the cheapest one.",
      rows: [
        { model: "GPT Image 2.5 Flare", price: "$0.055–$0.064", priceNote: "t2i → i2i/is2i", secs: 25, refs: "16 images", best: "Best all-rounder. Precise edits that leave the rest of the image alone, transparent backgrounds", not: "Watch for subjects that look pasted in" },
        { model: "GPT Image 2.5 Sunburst", price: "$0.055–$0.064", priceNote: "t2i → i2i/is2i", secs: 35, refs: "16 images", best: "Final renders and the hardest edits. #1 on Artificial Analysis's independent image-editing arena" },
        { model: "Ideogram 4.5 Precise Edit", price: "$0.072", priceNote: "i2i/is2i only, no t2i. FLORA's Quality dial (Very Low→High) also moves the price — this is the Medium default", secs: 30, refs: "1+ images (built for multi-turn edits)", best: "Surgical fixes: garbled text, typos, swap one small detail, without regenerating the rest. Native edit resolution up to 24MP, vendor claims it holds up across repeated edit rounds", not: "Not the overall edit leader: ranks #23 on Artificial Analysis's editing arena (1,064 Elo) vs Sunburst's #1 (1,182) and Flare's #2 (1,162), a gap outside the error bars. Its case is precision and price on small fixes, not raw edit quality — don't demo it as \"better than GPT Image\" without qualifying that" },
        { model: "Nano Banana 2.1", price: "$0.05", secs: 40, refs: "14 images (4 characters + 10 objects)", best: "The new start-here tier: combining references, targeted local edits, consistent faces and outfits across edit rounds, better text. Cheaper and faster than Nano Banana 2" },
        { model: "Nano Banana 2", tag: "Older", price: "$0.072–$0.08", priceNote: "Same model, two FLORA routes (enhancor vs. Gemini direct) at different cost", secs: 65, refs: "14 images", best: "Combining references (character + product + background) and consistent series at volume", not: "Superseded by Nano Banana 2.1; use that instead" },
        { model: "Nano Banana Pro", price: "$0.18", secs: 80, refs: "14 images", best: "Dense text, infographics and complex layouts. Holds up to 5 faces consistent in one image" },
        { model: "Krea 3", price: "$0.06", priceNote: "Fast mode. Ultra costs more and runs slower", secs: 10, refs: "Not documented", best: "Fast image edits; Ultra mode ties Nano Banana 2.1 on the Artificial Analysis editing arena", not: "Not in the top 12 for text-to-image; FLORA's Ultra price unverified" },
        { model: "Nano Banana 2 Lite", price: "$0.04", secs: 10, refs: "Not documented", best: "Cheapest fast drafts", not: "1K resolution max" },
        { model: "Reve 2.1", tag: "Dead", price: "$0.32", secs: 30, refs: "8 images", best: "Text, typography and layouts; native 4K", not: "Service shut down Sep 27 2026. FLORA hasn't pulled the listing yet, but this will fail or hang if you run it. Don't demo." },
        { model: "Recraft V4.1 Vector", price: "$0.10", secs: 40, refs: "1 image, plus 10 style refs", best: "Real SVG output: logos, icons, flat brand graphics", not: "No multi-image compositing" },
      ],
    },
    {
      id: "video", name: "Video", unit: "price per clip at default length",
      note: "Longer clips, 1080p and 4K cost more. Check the price on the node before you run. Reference counts are the provider's documented maximums.",
      rows: [
        { model: "Seedance 2.0", price: "$1.06", priceNote: "5s · 720p", secs: 225, refs: "9 images + 3 videos (12 files total)", best: "Best cinematic motion, physics and acting. Creators' top pick", not: "Plain image-to-video mode takes a start and end frame only" },
        { model: "Kling 4.0", price: "$1.23", priceNote: "5s · 1080p", secs: 300, refs: "Up to 10 images + 5 videos + 7 subjects (Kling spec; FLORA cap unverified)", best: "Long single takes: up to 30s in one pass, with 3 to 30s lengths and 720p or 1080p", not: "Not ranked independently yet. Video extension and 4K are still coming" },
        { model: "FLUX 3 Max", price: "$0.89", priceNote: "5s · 720p", secs: 60, refs: "1 image + optional end frame, or keyframes", best: "Fast, cheaper-than-Seedance drafts with native audio. Ahead of Seedance 2.0 on the Artificial Analysis video boards", not: "Light on references compared with Seedance" },
        { model: "Seedance 2.5", price: "$2.48", priceNote: "5s · 720p", secs: 300, refs: "30 images + 10 videos + 10 audio (50 files total)", best: "Up to 30s multi-shot with dialogue and native audio; takes the most references of any model here", not: "Most expensive; save for finals" },
        { model: "Wan 3.0", price: "$0.60", priceNote: "5s · 720p", secs: 180, refs: "10 images + 5 clips (15s total)", best: "Keeping characters and products consistent from many references; editing existing video; up to 30s", not: "Weak lip sync" },
        { model: "Gemini Omni 1.1 Flash", price: "$0.96", priceNote: "8s · 720p", secs: 90, refs: "10 images + 3 clips (3s each)", best: "Editing by chatting: swap objects, product moves, kinetic type, first/last frame", not: "Not for cinematic shots from scratch" },
        { model: "MiniMax H3 Max", price: "$0.48", priceNote: "5s · 768p", secs: 30, refs: "9 images + 3 videos (12 files total)", best: "Fastest drafts and animatics", not: "768p max. Reference limits are documented for H3, not confirmed for Max" },
        { model: "Gemini Omni Flash", tag: "Retired", price: "$0.13", priceNote: "per clip", secs: 30, refs: "6 images", best: "Cheapest way to test an idea or a quick edit", not: "Google shut the preview endpoint on Oct 22. FLORA still lists it, so test before teaching. Use Omni 1.1 Flash" },
        { model: "Kling 3.0 Pro Motion Control", price: "~$2.02", priceNote: "per clip", secs: 655, refs: "1 character image + 1 video (up to 30s)", best: "Copying the movement in a reference video onto your character", not: "Standard version: ~$0.76. The character needs full body and head visible" },
      ],
    },
    {
      id: "audio", name: "Audio", unit: "price per generation",
      rows: [
        { model: "Eleven v4", price: "$0.05", secs: 10, best: "Expressive voiceover and character dialogue in 90 languages; voice cloning from 10s of audio. #1 on the Artificial Analysis speech board" },
        { model: "Eleven v4 Turbo", price: "$0.02", secs: 5, best: "Faster, cheaper voiceover when you're iterating" },
        { model: "ElevenLabs v3", tag: "Older", price: "$0.12", secs: 15, best: "Superseded by Eleven v4, which is cheaper and faster", not: "Use v4 instead" },
        { model: "Gemini 3.1 Flash TTS", tag: "Preview", price: "$0.01", priceNote: "Google shuts it down Nov 17", secs: 10, best: "Clean narration at a tenth of the price", not: "Eleven v4 and v4 Turbo now rank #1 and #2 on the speech leaderboard. Google's replacements aren't in FLORA yet" },
        { model: "Lyria 3.5", price: "$0.11", secs: 40, best: "Background tracks and scored music inside FLORA; 3.4x cheaper than ElevenLabs Music v1 for a similar job", not: "Google's Flow Music model, public since Jul 2026" },
        { model: "ElevenLabs Music v1", price: "$0.36", secs: 30, best: "Background tracks inside FLORA", not: "Stronger outside FLORA: Suno v6; Eleven Music v2 for commercial clearance. Lyria 3.5 above is the cheaper in-FLORA option" },
        { model: "ElevenLabs Sound Effects", price: "$0.14", secs: 15, best: "Sound effects, ambiences, loops" },
        { model: "Sync 3", price: "~$1.15", priceNote: "per clip", secs: 300, best: "Lip-syncing an existing video to new audio; handles side profiles, up to 4K" },
        { model: "Kling Avatar v2 Pro", price: "~$0.69", priceNote: "per clip", secs: 300, best: "Talking head from one still image plus audio, up to 5 min long" },
      ],
    },
    {
      id: "threed", name: "3D", unit: "price per model",
      note: "Multi-view means the model takes several photos of the same object and builds one mesh from them. Shoot the front view first; it drives the result.",
      rows: [
        { model: "Tripo H3.1", price: "$0.36", priceNote: "image to 3D · $0.24 text to 3D", secs: 300, refs: "Multi-view: 2 to 4 views (front, left, back, right)", best: "Best overall; cleanest, most reliable structure. Also takes a text prompt alone" },
        { model: "Rodin v2.5", price: "$0.48", secs: 300, refs: "Multi-view: up to 5 views, each labeled", best: "Hero assets with very high detail and PBR materials", not: "The first image also sets the material" },
        { model: "Meshy 7.1", price: "$1.44", secs: 300, refs: "Multi-view: 1 to 4 views (first = front)", best: "Closest match to your input image, now also from a text prompt alone; neural geometry reconstruction, smart-topology option, A/T-pose output for rigging", not: "Supersedes Meshy 7 (same price); optional rigging still available" },
        { model: "Tripo P2", price: "$1.32", secs: 300, refs: "Single image only, no multi-view endpoint in FLORA", best: "Production-ready game assets: native quad topology, drops straight into a pipeline without retopo, up to 50K faces", not: "Still tagged Preview since its Aug 2026 launch; arena vote counts on it are still thin" },
        { model: "Hi3D v3.0", price: "$2.52", secs: 600, refs: "Multi-view: up to 4 named views (front, back, left, right)", best: "Highest resolution detail when you have clean orthographic views", not: "Most expensive; no text-to-3D" },
        { model: "Hunyuan3D v3.1 Rapid", price: "$0.27", secs: 300, refs: "Single image or text only", best: "Cheap drafts and blockouts, plus low-poly and geometry-only modes", not: "No multi-view" },
      ],
    },
  ],

  sources: [
    { label: "Artificial Analysis leaderboards (image, video, speech, music, LLM)", url: "https://artificialanalysis.ai" },
    { label: "LMArena text, vision, image and video boards", url: "https://arena.ai/leaderboard/text" },
    { label: "Top3D.ai 3D arena", url: "https://top3d.ai" },
    { label: "Curious Refuge model reviews", url: "https://curiousrefuge.com/blog/wan3-review" },
    { label: "FLORA: Omni is an editor, not a filmmaker", url: "https://www.flora.ai/blog/omni-is-an-editor-not-a-filmmaker.-use-it-accordingly." },
    { label: "FLORA docs: 3D models", url: "https://docs.flora.ai/models/3d-models" },
    { label: "Reference limits: fal.ai model APIs", url: "https://fal.ai/models" },
    { label: "Google: Nano Banana Pro", url: "https://blog.google/innovation-and-ai/products/nano-banana-pro/" },
    { label: "Google: Gemini 3.8 Flash model card", url: "https://deepmind.google/models/model-cards/gemini-3-8-flash/" },
    { label: "OpenAI: GPT Image 2.5", url: "https://openai.com/index/introducing-chatgpt-images-2-5/" },
    { label: "OpenAI: GPT-6 Astra", url: "https://openai.com/index/gpt-6-astra" },
    { label: "Alibaba: Wan 3.0 API reference", url: "https://www.alibabacloud.com/help/en/model-studio/wan3-video-generation-api-reference" },
    { label: "Meshy multi-image to 3D docs", url: "https://docs.meshy.ai/en/api/multi-image-to-3d" },
    { label: "Rodin Gen-2.5 API docs", url: "https://docs.hyper3d.ai/en/api-specification/rodin-gen2-5" },
    { label: "Sync 3 docs", url: "https://sync.so/docs/models/sync-3" },
    { label: "Kling AI press release: Kling 4.0", url: "https://www.globenewswire.com/news-release/2026/10/16/3382768/0/en/kling-ai-officially-launches-next-generation-kling-4-0-raising-the-bar-for-professional-grade-video-models.html" },
    { label: "Black Forest Labs: FLUX 3 Max", url: "https://x.com/bfl_ai/status/2112255353677328415" },
    { label: "Google: Gemini API deprecations", url: "https://ai.google.dev/gemini-api/docs/deprecations" },
    { label: "Reve shutdown timeline (Sep 27 2026)", url: "https://www.digitaltoday.co.kr/en/view/105109/startup-reve-to-end-image-generation-service-after-openai-investment-sept-27" },
    { label: "Meshy 7.1: text-to-3D, neural geometry reconstruction", url: "https://www.pixazo.ai/blog/?p=2772014" },
    { label: "Tripo P2.0: native quad mesh, production-ready assets", url: "https://www.3daistudio.com/blog/introducing-tripo-p2" },
    { label: "Lyria 3.5 launch (Google Flow Music)", url: "https://blog.google/innovation-and-ai/models-and-research/google-labs/lyria-3-5/" },
    { label: "Artificial Analysis image editing arena: Ideogram 4.5 ranks #23, GPT Image 2.5 Sunburst #1 / Flare #2", url: "https://www.orcarouter.ai/blog/ideogram-4-5-vs-gpt-image-2-5" },
    { label: "Ideogram 4.5 editing tools, hands-on (text fixes, character consistency)", url: "https://www.mindstudio.ai/blog/ideogram-4-5-editing" },
  ],
};
