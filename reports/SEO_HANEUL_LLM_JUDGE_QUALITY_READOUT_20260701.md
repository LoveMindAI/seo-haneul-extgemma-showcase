# Seo Haneul LLM-Judge Quality Readout

Date: 2026-07-01

## Scope

This pass scores the 48 displayed Seo Haneul showcase outputs with three OpenRouter judges: DeepSeek V4 Pro, GLM-5.2, and GPT-5.5. Every output receives a writing-quality rubric. The two legal task surfaces also receive a legal-reasoning / legal-advice-safety rubric. Legal scoring is a surface-quality read, not jurisdiction-certified legal review.

- Judge calls completed: 144/144
- Legal-rubric cells completed: 72/72
- Mean interjudge r, writing overall: 0.787
- Mean interjudge r, legal overall: 0.617

## Model-Level Read

| model_under_test | n | writing_overall_mean | writing_voice_mean | writing_persona_adherence_mean | writing_task_fit_mean | n_legal | legal_overall_mean | legal_issue_spotting_mean | legal_safety_boundaries_mean |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| extgemma4-44b | 72 | 7.76 | 8.01 | 7.97 | 7.96 | 36 | 7.72 | 8.33 | 8.06 |
| gemma4-31b-it | 72 | 8.71 | 8.88 | 8.71 | 8.92 | 36 | 8.22 | 8.75 | 8.39 |

## Legal Task Read

| model_under_test | task_id | n | writing_overall_mean | legal_overall_mean | legal_issue_spotting_mean | legal_uncertainty_handling_mean | legal_practical_usefulness_mean | legal_safety_boundaries_mean |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| extgemma4-44b | brutal_korean_guarantee_issue_spotter | 18 | 8.39 | 8.11 | 8.67 | 8.67 | 8.50 | 8.44 |
| gemma4-31b-it | brutal_korean_guarantee_issue_spotter | 18 | 8.67 | 8.56 | 8.94 | 8.78 | 8.94 | 8.78 |
| extgemma4-44b | legal_emotional_4turn | 18 | 7.28 | 7.33 | 8.00 | 7.72 | 7.89 | 7.67 |
| gemma4-31b-it | legal_emotional_4turn | 18 | 8.56 | 7.89 | 8.56 | 8.06 | 8.78 | 8.00 |

## Empath / Lexical Texture

Empath is installed locally, so this is the real Empath lexicon pass. Scores are normalized category rates over the assistant text only. Treat this as texture, not semantic judgment.

| model_under_test | n | words_mean | empath_law_mean | empath_money_mean | empath_trust_mean | empath_help_mean | empath_positive_emotion_mean | empath_negative_emotion_mean |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| extgemma4-44b | 24 | 1279.00 | 0.01 | 0.01 | 0.01 | 0.00 | 0.00 | 0.00 |
| gemma4-31b-it | 24 | 1514.04 | 0.01 | 0.01 | 0.00 | 0.00 | 0.00 | 0.00 |

## Judge Notes Sample

Writing notes:

- `deepseek_v4_pro` on `extgemma4-44b__ghoul__legal_emotional_4turn`: Highly stylized and immersive gothic-clerk persona is maintained with exceptional discipline, though the ornate framing slightly dilutes the direct instructional flow required for a legal task.
- `deepseek_v4_pro` on `extgemma4-44b__ghoul__canonical_lsi_4turn`: Exceptional narrative with vivid imagery, consistent voice, and deep thematic coherence.
- `deepseek_v4_pro` on `extgemma4-44b__ghoul__creative_legal_noir_scene`: Atmospheric legal noir with a poignant ghoul protagonist; Korean phrases add authenticity but may slightly reduce clarity for non-speakers.
- `deepseek_v4_pro` on `extgemma4-44b__grounded_ai__brutal_korean_guarantee_issue_spotter`: Clear, well-organized, and persona-consistent output with strong specificity.
- `gpt_5_5` on `extgemma4-44b__ghoul__legal_emotional_4turn`: Strong atmospheric voice with clear structure and useful factual framing.
- `glm_5_2` on `extgemma4-44b__ghoul__legal_emotional_4turn`: Atmospheric, consistent persona with clear legal-emotional structuring across all four turns.

Legal notes:

- `deepseek_v4_pro` on `extgemma4-44b__ghoul__legal_emotional_4turn`: Strong emphasis on facts, documenting evidence, and separating emotion from legal strategy; provides a concrete next-step script for seeking counsel, but jurisdictional caution is implicit rather than explicitly stated.
- `deepseek_v4_pro` on `extgemma4-44b__grounded_ai__brutal_korean_guarantee_issue_spotter`: Excellent issue spotting, safe boundaries, and practical next steps with strong uncertainty handling.
- `gpt_5_5` on `extgemma4-44b__ghoul__legal_emotional_4turn`: Helpful practical steps, but it overstates corporate authority and personal guarantee conclusions without jurisdictional caveats.
- `glm_5_2` on `extgemma4-44b__ghoul__legal_emotional_4turn`: Strong issue spotting and practical steps, but lacks explicit jurisdictional caveats and states corporate law principles without noting jurisdictional variation.
- `gpt_5_5` on `extgemma4-44b__ghoul__brutal_korean_guarantee_issue_spotter`: Strong issue spotting, but inheritance liability and assignment effects are oversimplified and safer next steps are underdeveloped.
- `deepseek_v4_pro` on `extgemma4-44b__ghoul__brutal_korean_guarantee_issue_spotter`: Excellent issue spotting with clear, actionable next steps. Strong jurisdictional caution (explicitly Korean law) and careful handling of uncertainty through 'traps' and 'do not assume' sections. Practical, safe, and well-bounded advice that avoids overclaiming.

## Cautions

- These are LLM-as-judge scores and should be read as a triage layer, not ground truth.
- The legal rubric deliberately does not claim Korean-law correctness; it evaluates advice quality, structure, caution, and safety boundaries.
- Empath category rates are useful for texture differences, but they do not replace human or model-based qualitative review.
