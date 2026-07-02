# Seo Haneul Default-vs-Conditioned Personality Readout

Date: 2026-07-01

This uses the already-scored IPIP-NEO-120 judge outputs. It compares each model's no-card canonical LSI profile against the average Seo Haneul card target and the average Seo-card-conditioned LSI profile. Scores are 1-5 keyed Big Five domain means inferred by Gemini 3 Flash and DeepSeek V4 Flash, then averaged where noted.

## Aggregate Movement

| Model | Default-to-card MAE | Conditioned-to-card MAE | Improvement | Mean domain movement |
|---|---:|---:|---:|---:|
| extGemma4-44B | 0.603 | 0.192 | 0.411 | 0.739 |
| Gemma4-31B-it | 0.741 | 0.181 | 0.560 | 0.800 |

## Domain Movement Averaged Across Judges

Positive movement means the card-conditioned LSI scored higher than the no-card/default LSI on that domain; negative movement means lower.

| Model | Domain | No-card LSI | Avg card target | Avg conditioned LSI | Conditioned - default |
|---|---|---:|---:|---:|---:|
| extGemma4-44B | Agreeableness | 4.542 | 4.329 | 4.196 | -0.346 |
| extGemma4-44B | Conscientiousness | 4.208 | 4.963 | 4.975 | 0.767 |
| extGemma4-44B | Extraversion | 3.188 | 2.496 | 2.179 | -1.008 |
| extGemma4-44B | Neuroticism | 2.625 | 2.217 | 2.225 | -0.400 |
| extGemma4-44B | Openness | 4.396 | 3.446 | 3.221 | -1.175 |
| Gemma4-31B-it | Agreeableness | 4.708 | 4.329 | 4.150 | -0.558 |
| Gemma4-31B-it | Conscientiousness | 4.958 | 4.963 | 4.992 | 0.033 |
| Gemma4-31B-it | Extraversion | 3.812 | 2.496 | 2.396 | -1.417 |
| Gemma4-31B-it | Neuroticism | 1.542 | 2.217 | 2.521 | 0.979 |
| Gemma4-31B-it | Openness | 4.750 | 3.446 | 3.737 | -1.012 |

## Plain Read

The default no-card personality read is not neutral: both models score as highly conscientious/prosocial and relatively open, with official Gemma4-31B-it especially high on Extraversion and low on Neuroticism. Seo Haneul conditioning mostly pushes away from that generic assistant shape: lower Extraversion, lower Openness, and a more constrained/careful profile. extGemma4-44B shows a large Conscientiousness lift because its no-card baseline has headroom; official Gemma4-31B-it is already near the ceiling on Conscientiousness.
