---
bibkey: boyce2023amaze # must match a key in _bibliography/boyce_pubs.bib
title: "A-maze of Natural Stories: Comprehension and surprisal in the Maze task (Glossa Psycholinguistics, 2023)"
date: 2026-11-16 # date the correction was posted
corrected_version: https://osf.io/preprints/psyarxiv/8xkrf # version-less URL: resolves to the latest version (v3, 2026-11-18, corrected)
---

The audit turned up errors in the analysis code and some claims in the text that the data do not support. The main Maze results are unchanged: comprehension of long passages is feasible, Maze RTs are linearly related to surprisal, and Maze effects are well localized with little spillover. Several comparisons between Maze and SPR are weaker than the published paper says. 

**Analysis errors**

1. *SPR GPT-2 model.* The SPR model labelled GPT-2 was fit to Transformer-XL surprisals, so the GPT-2 column of Table 4 and the GPT-2 SPR coefficients in Figure 7 duplicated Transformer-XL. 
2. *SPR by-word averages.* Before the SPR model comparisons (Table 2) and the SPR GAMs (Figure 5), RTs were averaged by word *and* by each reader's comprehension score, giving several averages per word instead of one. With one average per word, SPR R² is 0.015–0.024 (published: 0.007–0.011).
3. *SPR first-story comprehension.* The "first story" for each SPR participant was not correctly identified. With one first story per participant, 91% of SPR first reads had 5 or 6 comprehension questions correct (published: 83%), compared with 79% for accurate Maze participants. Figure 2B changes.
4. *Split-half reliability.* The within- and between-method correlations came from a single random split of the participants. We now report the median over 1,000 random splits, with the middle 95% of splits: within SPR 0.32 [−0.05, 0.58] (published: 0.23), within Maze 0.30 [0.09, 0.45] (published: 0.36), Maze–SPR 0.25 [0.14, 0.35] (published: 0.25).
5. *Figure 4 GAMs.* The GAMs behind Figure 4 left out the frequency × length interaction terms described in the methods. With the model run as described, the curves change by at most 2.7 ms over 0–15 bits.

**Text errors and claims that changed**

1. *Sensitivity.* Because of analysis error 4, the claim that Maze has higher split-half reliability than SPR, and so is more sensitive, is not supported. 
2. *Comprehension.* Because of analysis error 3, accurate Maze participants' comprehension is somewhat lower than SPR participants' (79% vs. 91%), not "broadly similar".
3. *Language-model comparison.* The log-likelihood order for SPR was misstated. It is GPT-2 > GRNN > 5-gram > Transformer-XL, both in the published table and after the correction. The text also said that for Maze the 5-gram model added no predictive value over the other models, but Table 1 shows that it adds some over Transformer-XL (p = .035). With analysis error 2 corrected, the neural models' advantage over the 5-gram model is smaller for SPR than for Maze, rather than absent for SPR.
4. *Spillover.* For SPR, previous-word surprisal effects are about half to nearly as large as current-word effects, depending on the language model. The paper described them as "roughly equal". The contrast with Maze, where previous-word effects are 5–14% of current-word effects, still holds.
5. *Frequency.* The SPR frequency coefficients are positive in all models (more frequent words read more slowly, holding surprisal and length constant), but the Discussion previously interpreted them as facilitation. This interpretation has been dropped.
