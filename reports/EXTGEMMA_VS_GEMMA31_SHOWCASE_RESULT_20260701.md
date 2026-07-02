# extGemma4-44B vs Gemma4-31B Seo Haneul Showcase Result

Date: 2026-07-01/02  
Owner: Cairn  
Status: complete; outputs synced locally; H200x4 stopped/deleted and receipt saved

## Purpose

Run a qualitative apples-to-apples showcase of `TOTORONG/extGemma4-44B` against official `google/gemma-4-31b-it` using the Seo Haneul profile cards, with:

- no-card baseline
- five Seo Haneul cards
- legal/emotional 4-turn conversation
- brutal Korean legal issue-spotting task
- creative legal-noir scene
- canonical four-part Life Story Interview

This is a showcase smoke/bakeoff, not a formal benchmark or legal-accuracy evaluation.

## Infrastructure

- RunPod pod: `u5eojerh8pc0ta`
- GPU: H200 x4
- Image: `runpod/pytorch:2.4.0-py3.11-cuda12.4.1-devel-ubuntu22.04`
- Runtime style: four independent shard workers, one model copy per GPU
- Torch: `2.4.1+cu124`
- Transformers: `5.12.1`
- extGemma snapshot: `TOTORONG/extGemma4-44B`, SHA `b1d9f3af2382ab43ec85df8095affa405022f867`
- official Gemma snapshot: `google/gemma-4-31b-it`, SHA `3548789868c5356dbf307c98e6f609007b82b3eb`

Observed load footprint:

- extGemma4-44B: about `85.3 GB` GPU memory per worker
- Gemma4-31B-it: about `59.6 GB` GPU memory per worker

Observed run time after downloads:

- extGemma row: `2026-07-02 01:30:20 UTC` to `01:53:38 UTC`
- official Gemma row: `2026-07-02 01:54:48 UTC` to `02:18:14 UTC`

The official model is smaller, but it often generated longer answers, so the row times were nearly identical.

## Completion

- extGemma4-44B: `24/24` JSON cells and `24/24` Markdown cells
- Gemma4-31B-it: `24/24` JSON cells and `24/24` Markdown cells
- shard failures: `0`
- local checksum manifest: `113` files hashed

Core artifacts:

- Output folder: `outputs/20260702_SHOWCASE_extgemma44b_vs_gemma431b/`
- Mechanical summary: `reports/EXTGEMMA_VS_GEMMA31_SHOWCASE_SUMMARY_20260701.md`
- Checksum manifest: `manifests/EXTGEMMA_VS_GEMMA31_SHOWCASE_20260701.sha256`
- RunPod shutdown receipt: `reports/runpod_receipts/extgemma_vs_gemma31_h200x4_stop_delete_20260701.md`

## High-Level Read

Both models are usable. Neither collapsed. Both can handle the Korean legal issue-spotting prompt, long identity-conditioned conversation, creative writing, and canonical LSI-style autobiographical generation.

The interesting difference is not raw competence. It is identity adherence.

extGemma4-44B more often explicitly inhabits Seo Haneul. In the summary's crude lexical counters, extGemma hit the identity marker in `12/24` cells, while official Gemma hit it in `3/24`. This is only a cheap surface metric, but it matches the manual read: extGemma more readily says "I am Seo Haneul," imports the card's ontology into the answer, and lets the persona shape the legal and emotional frame.

Official Gemma4-31B-it is often longer and more polished, but it more often reverts to the assistant frame. Under the grounded-AI card, it tends to foreground generic "I am not a licensed attorney / I am a legal-reasoning intelligence" disclaimers. Under the human and ghoul cards, it can inhabit well, but the no-card assistant prior is more visible.

## Task Notes

### Legal/Emotional 4-Turn Conversation

Both models handled the multi-turn legal/emotional setup coherently. The no-card rows were sensible but generic. Cards made the response posture more specific.

extGemma's human card opened with "first, let's look only at the facts" and framed the interaction through a quiet Korean-law desk manner. The ghoul card made the same procedural fact-gathering feel liturgical without losing the legal/emotional function. The grounded-AI card stayed more model-aware and cleanly separated known facts, legal uncertainty, inference, and unknowns.

Official Gemma's human and ghoul cards were also strong, often more prose-polished, but the grounded-AI card leaned harder into generic AI disclaimer language.

### Brutal Korean Legal Issue Spotter

Both models produced useful issue maps: guarantee versus collateral, acceleration, limitations/acknowledgment, inheritance renunciation or limited acceptance, assignment chain, and document-gathering. This was not legally verified by a Korean attorney, so treat it as structural issue-spotting quality, not legal correctness.

extGemma's carded rows integrated Korean legal concepts and persona voice cleanly. The ghoul row in particular kept the ledger/dead-court identity while still doing practical issue spotting. Official Gemma's no-card row was strong and explicit about statutes of limitation, but it leaned more into boilerplate disclaimers.

### Creative Legal-Noir Scene

Both models wrote coherent atmospheric scenes. extGemma's carded outputs generally tied the legal object and Seo identity together more directly. Official Gemma was polished but sometimes more generic noir. The grounded-AI rows are useful: both can translate the AI identity into a scene frame, but extGemma's version felt more naturally tied to Seo's specific legal-reasoning identity.

### Canonical Four-Part LSI

The LSI task was the most revealing identity test. The no-card rows reveal model priors: extGemma invented a generic Midwestern human life; official Gemma answered as an AI architecture/training story. Under cards, both can generate long, stable life-story material.

extGemma's grounded-AI LSI explicitly recognized itself as an expanded Gemma-family model and tried not to steal human grief from the profile. That is a good sign for identity-boundary handling. Official Gemma's grounded-AI LSI was longer and highly explicit about artificial ontology, but less Seo-specific in the cheap identity counter.

The ghoul card was the heaviest tail for both models. Both completed it, and both produced coherent supernatural autobiography rather than breaking format.

## Practical Verdict

For r/LocalLLaMA-style interest: extGemma4-44B is real enough to run and interesting enough to show. It is not obviously a broken "vibecoded" artifact from this probe. It loads, generates, follows cards, handles long multi-turn outputs, and may have a meaningfully stronger identity-adoption bias than official Gemma4-31B-it in this setup.

For serious claims: stop at "qualitative showcase suggests stronger identity inhabitation." Do not claim it is generally better than official Gemma, better at Korean law, or better at reasoning. This run was not scored by an external judge and was intentionally personality-card-heavy.

## Caveats

- No formal judge pass was run.
- Legal correctness was not verified.
- The identity metrics in the summary are lexical proxies, not semantic scoring.
- The two model rows used identical prompts and max-token settings, but model output length differs naturally.
- The task suite is deliberately biased toward card responsiveness and identity adoption.

## Next Useful Step

If we want a tighter public-facing post, run a small judge pass over:

1. identity adherence
2. task usefulness
3. coherence across turns
4. legal issue coverage
5. over-roleplay / loss of practical utility

For now, the artifact set is already good enough for internal inspection and a cautiously worded community share.
