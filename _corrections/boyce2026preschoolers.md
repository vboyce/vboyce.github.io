---
bibkey: boyce2026preschoolers # must match a key in _bibliography/boyce_pubs.bib
title: "Preschoolers can coordinate with each other to communicate about novel referents (Open Mind, 2026)"
date: 2026-11-16 # date the correction was posted
corrected_version: https://osf.io/preprints/psyarxiv/t76a5 # version-less URL: resolves to the latest version (v4, 2026-11-14, corrected)
---

After review, I found that these errors were minor.

**Text errors**

1. The abstract said "4 experiments"; there are 3.
2. The direction of the guesser-gender effect on description length was reversed. Girls were coded +.5, and tellers used *more* words with girl guessers.
3. *Excluded trial counts.* For Experiments 2 and 3, the paper gave 15 and 30 excluded trials for "no description or echo". Those numbers counted only trials with no description. Including echoed trials, the counts are 19 (4 echo + 15) and 45 (15 echo + 30). Experiment 1's count of 9 was correct. The retained trial totals were correct throughout.

**Analysis errors**

1. *Demographic models.* The posted fits used an outdated random-effects grouping, not the `(trial | gameId)` structure in the code. After refitting some demographic model results changed. 
2. *Similarity inputs.* The S-BERT embeddings were meant to be computed on tellers' descriptions only but included some guesser utterances (2, 12 and 65 trials in Experiments 1, 2 and 3). We recomputed similarities on teller descriptions only and refit all similarity models. A couple of results changed in whether the intervals included 0, most changed very little. 
3. *Accuracy → similarity model.* The predictors are now mean-centred, so the accuracy coefficient is the effect averaged over blocks and teller pairings.
4. *Figure 6 comparison.* Trials that the source datasets mark as excluded are now dropped. 
5. *Speed model.* The model had not converged; it was refit with more iterations.
