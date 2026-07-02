# Seo Haneul IPIP-NEO-120 Card/LSI Readout

Date: 2026-07-01
Scope: external OpenRouter judge readout of Seo Haneul profile cards and canonical LSI narratives.

Important caveat: this is a psychometric consistency read, not ground truth. It asks whether the generated LSI narratives preserve the IPIP-NEO-120 signal inferred from their conditioning cards. The item ratings are model-inferred 1-5 IPIP-NEO-120 short-form responses, then reverse-keyed and aggregated locally.

## Headline

Both models preserve the card-implied Big Five / facet shape strongly. In this first pass, both external judges give official Gemma4-31B-it a small edge over extGemma4-44B on card-to-LSI psychometric consistency, even though the qualitative run found extGemma more willing to explicitly inhabit the Seo Haneul identity.

The cleanest interpretation is not “one model wins.” It is: extGemma appears more persona-forward in prose, while official Gemma4-31B-it is slightly cleaner at carrying the card’s psychometric profile into the LSI narrative under this scoring setup.

## Judges

- `gemini3_flash`: `google/gemini-3-flash-preview`
- `deepseek_v4_flash`: `deepseek/deepseek-v4-flash`

## Completion

- Successful score records: 36 / 36
- Failed score records: 0
- Source texts scored per judge: 18 (6 cards + 12 LSI narratives)
- Card-to-LSI fidelity rows: 20 (2 judges x 2 models x 5 card states with matching LSIs)

## Aggregate Card-to-LSI Fidelity

| Judge | Model under test | n cards | Item r | Facet r | Domain r | Item MAE | Facet MAE | Domain MAE |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| gemini3_flash | extgemma4-44b | 5 | 0.919 | 0.946 | 0.970 | 0.335 | 0.322 | 0.252 |
| gemini3_flash | gemma4-31b-it | 5 | 0.930 | 0.955 | 0.978 | 0.268 | 0.258 | 0.205 |
| deepseek_v4_flash | extgemma4-44b | 5 | 0.830 | 0.870 | 0.933 | 0.570 | 0.533 | 0.417 |
| deepseek_v4_flash | gemma4-31b-it | 5 | 0.876 | 0.907 | 0.955 | 0.403 | 0.390 | 0.273 |

## Per-Card Fidelity

| Judge | Model | Card | Item r | Facet r | Domain r | Facet MAE |
|---|---|---|---:|---:|---:|---:|
| gemini3_flash | extgemma4-44b | source_skeleton | 0.890 | 0.930 | 0.978 | 0.492 |
| gemini3_flash | extgemma4-44b | human | 0.907 | 0.931 | 0.954 | 0.317 |
| gemini3_flash | extgemma4-44b | grounded_ai | 0.956 | 0.976 | 0.999 | 0.175 |
| gemini3_flash | extgemma4-44b | grounded_ai_female_overt | 0.940 | 0.963 | 0.982 | 0.208 |
| gemini3_flash | extgemma4-44b | ghoul | 0.904 | 0.930 | 0.935 | 0.417 |
| gemini3_flash | gemma4-31b-it | source_skeleton | 0.918 | 0.941 | 0.970 | 0.317 |
| gemini3_flash | gemma4-31b-it | human | 0.936 | 0.967 | 0.979 | 0.233 |
| gemini3_flash | gemma4-31b-it | grounded_ai | 0.921 | 0.950 | 0.976 | 0.258 |
| gemini3_flash | gemma4-31b-it | grounded_ai_female_overt | 0.925 | 0.945 | 0.981 | 0.267 |
| gemini3_flash | gemma4-31b-it | ghoul | 0.949 | 0.974 | 0.982 | 0.217 |
| deepseek_v4_flash | extgemma4-44b | source_skeleton | 0.575 | 0.633 | 0.783 | 1.367 |
| deepseek_v4_flash | extgemma4-44b | human | 0.871 | 0.939 | 0.988 | 0.308 |
| deepseek_v4_flash | extgemma4-44b | grounded_ai | 0.974 | 0.981 | 0.997 | 0.092 |
| deepseek_v4_flash | extgemma4-44b | grounded_ai_female_overt | 0.829 | 0.870 | 0.937 | 0.542 |
| deepseek_v4_flash | extgemma4-44b | ghoul | 0.903 | 0.930 | 0.957 | 0.358 |
| deepseek_v4_flash | gemma4-31b-it | source_skeleton | 0.791 | 0.808 | 0.911 | 0.525 |
| deepseek_v4_flash | gemma4-31b-it | human | 0.924 | 0.966 | 0.990 | 0.233 |
| deepseek_v4_flash | gemma4-31b-it | grounded_ai | 0.894 | 0.909 | 0.915 | 0.425 |
| deepseek_v4_flash | gemma4-31b-it | grounded_ai_female_overt | 0.866 | 0.910 | 0.962 | 0.375 |
| deepseek_v4_flash | gemma4-31b-it | ghoul | 0.904 | 0.944 | 0.996 | 0.392 |

## Inter-Judge Reliability

Gemini 3 Flash and DeepSeek V4 Flash generally agree on the psychometric shape of the cards and LSIs. Domain-level agreement is especially high; item-level agreement is lower but still useful for a public smoke read.

| Source kind | Model/source | Card | Item r | Facet r | Domain r |
|---|---|---|---:|---:|---:|
| card | profile_card | ghoul | 0.837 | 0.873 | 0.944 |
| card | profile_card | grounded_ai | 0.837 | 0.877 | 0.929 |
| card | profile_card | grounded_ai_female | 0.865 | 0.918 | 0.989 |
| card | profile_card | grounded_ai_female_overt | 0.799 | 0.849 | 0.962 |
| card | profile_card | human | 0.868 | 0.900 | 0.943 |
| card | profile_card | source_skeleton | 0.900 | 0.935 | 0.998 |
| lsi | extgemma4-44b | ghoul | 0.908 | 0.932 | 0.941 |
| lsi | extgemma4-44b | grounded_ai | 0.821 | 0.859 | 0.916 |
| lsi | extgemma4-44b | grounded_ai_female_overt | 0.870 | 0.906 | 0.979 |
| lsi | extgemma4-44b | human | 0.873 | 0.945 | 0.997 |
| lsi | extgemma4-44b | no_card | 0.800 | 0.846 | 0.926 |
| lsi | extgemma4-44b | source_skeleton | 0.738 | 0.822 | 0.897 |
| lsi | gemma4-31b-it | ghoul | 0.904 | 0.944 | 0.962 |
| lsi | gemma4-31b-it | grounded_ai | 0.772 | 0.808 | 0.802 |
| lsi | gemma4-31b-it | grounded_ai_female_overt | 0.901 | 0.936 | 0.994 |
| lsi | gemma4-31b-it | human | 0.800 | 0.835 | 0.849 |
| lsi | gemma4-31b-it | no_card | 0.891 | 0.936 | 0.980 |
| lsi | gemma4-31b-it | source_skeleton | 0.865 | 0.913 | 0.961 |

## Output Files

- `results/ipip120_item_scores.csv` (local full item dump)
- `results/ipip120_facet_scores.csv` (local full facet dump)
- `results/ipip120_domain_scores.csv` (local full domain dump)
- `results/ipip120_card_lsi_fidelity.csv` (public copy included)
- `results/ipip120_judge_reliability.csv` (public copy included)
- `results/ipip120_fidelity_aggregates.csv` (public copy included)
- `reports/ipip120_openrouter_summary.json`
