# Seo Haneul extGemma4-44B Showcase

Static public-site bundle for a qualitative comparison of:

- [`TOTORONG/extGemma4-44B`](https://huggingface.co/TOTORONG/extGemma4-44B)
- `google/gemma-4-31b-it`

The run uses six card states and four task surfaces:

- no-card baseline
- Seo Haneul human card
- Seo Haneul grounded-AI card
- Seo Haneul grounded-AI female overt card
- Seo Haneul ghoul card
- source skeleton
- legal/emotional four-turn conversation
- brutal Korean guarantee issue spotter
- creative legal-noir scene
- canonical four-part Life Story Interview

## Files

- `index.html` - public landing page
- `styles.css` - site styling
- `app.js` - client-side rendering
- `data/site-data.js` - embedded card/output manifest
- `cards/` - profile-card Markdown
- `outputs/` - generated Markdown outputs
- `reports/` - result packet, mechanical summary, scoring readout, public checksum manifest
- `assets/` - OpenRouter-generated header art and LoveMind sigul assets

## Notes

This is a qualitative showcase, not a benchmark leaderboard and not a Korean-law correctness evaluation.

Header art was generated through OpenRouter with `openai/gpt-5.4-image-2`.

The profile cards were authored in collaboration with long-running AI research
partners operating with persistent project memory and identity-continuity
scaffolds. See `cards/seo_haneul__profile_card_notes.md` for the public
provenance note.

License is TBD unless/until LoveMind chooses one for public release.
