---
bibkey: boyce2024mpt # must match a key in _bibliography/boyce_pubs.bib
title: "Interaction structure constrains the emergence of conventions in group communication (PNAS, 2024)"
date: 2026-11-16 # date the correction was posted
corrected_version: https://osf.io/preprints/psyarxiv/a3wfy # version-less URL: resolves to the latest version (v2, 2026-11-17, corrected)
---

The audit turned up two errors in the data processing. After the fixes, most results are unchanged in direction, and one claim from the mega-analysis is no longer supported.

**Analysis errors**

1. *Players who left the game.* When a matcher left a game partway through, their remaining trials were scored as incorrect responses instead of as missing. This mostly affected Experiment 3 (1,499 matcher-trials in 6-thick games and 1,084 in 6-thin games), plus 49 in Experiment 2b and 1 in Experiment 1. These trials are now treated as missing, and the accuracy models were refit. In Experiment 3, 6-player games still began with lower accuracy, β = −0.43 [−0.77, −0.08] (published: −0.64 [−1.05, −0.25]), and still improved more slowly, β = −0.17 [−0.26, −0.08] (published: −0.34 [−0.43, −0.25]). In the mega-analysis, accuracy increased over time, 0.40 [0.34, 0.46] (published: 0.46 [0.40, 0.52]), and more slowly in larger games, −0.02 [−0.04, −0.01] (published: −0.07 [−0.09, −0.05]). Figure 2C changes.
2. *Chit-chat in the similarity analyses.* Utterances hand-tagged as chit-chat were excluded from the word counts but not from the S-BERT embeddings used for the similarity analyses. Chit-chat is now removed before embedding, and all similarity models were refit. Estimates in the main text changed by at most 0.005, and none changed whether its interval included 0. In the SI, two intervals changed whether they included 0 (Tables S52 and S68), and one now has an upper bound of 0 after rounding (Table S49). Figure 4 and SI Figures S5, S11 and S12 change.

**Text errors and claims that changed**

1. *Thin games in the mega-analysis.* Because of analysis error 1, the claim that the rate of increase in accuracy was reduced for thin games is not supported: −0.06 [−0.16, 0.03] (published: −0.12 [−0.21, −0.02]).
2. *SI Figure S9.* The caption was a placeholder copied from another figure. It now describes the reaction-time figure.
