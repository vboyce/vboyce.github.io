---
bibkey: boyce2023replicability # must match a key in _bibliography/boyce_pubs.bib
title: "Eleven years of student replication projects provide evidence on the correlates of replicability in psychology (Royal Society Open Science, 2023)"
date: 2026-11-16 # date the correction was posted
corrected_version: https://github.com/vboyce/251-254-MA/blob/0fdf5187dac99b6ec5e044090c2400a27c23f283/paper/manuscript-w-supplement.pdf
---

The audit turned up errors in the code that computed the statistical replication measures (prediction interval and *p*-original), and some claims in the text that the corrected results do not support. The primary measure, the subjective replication score (49% average), and the model using all 176 pairs are unchanged. With the corrected code, many more replications are statistically consistent with their originals, and the predictors of the subjective score are less certain than the published paper says.

**Analysis errors**

1. *Variance used as a standard error.* The code that computed standardized effect sizes returned the sampling variance of *d* where a standard error was expected, and this value was then squared again before computing prediction intervals and *p*-original. This made the uncertainty around effect sizes far too small.
2. *Standard errors for mean-based comparisons.* For between-participants comparisons computed from reported means and SDs, the standard error of the difference was too small (by about a factor of 2 for two groups and 4 for a 2×2 interaction), and the SD was rebuilt with *n* − 1 where it should have used *n*.
3. *Within-participants effect sizes.* Within-participants effects (*d*<sub>z</sub>) used the variance formula for between-groups *d*.
4. *Smaller issues.* A parsing error dropped the last digit of some SDs (7 original studies; effect sizes changed by at most 0.011), and an original *p* of 0 was coded as log *p* = −300, although another study had a smaller log *p*; it is now set to the smallest observed value.

Together, these change the statistical replication measures. 74% (101/136) of replications fell within the prediction interval of the original (published: 45%, 61/136), and the median *p*-original was 0.26 (published: 0.03). Under the heterogeneity assumption (τ = 0.21), 78% (87/112) were consistent with the original (published: 63%, 71/112). The subjective score now correlates more weakly with the prediction interval (r = 0.14; published: 0.36) and *p*-original (r = 0.23; published: 0.27). The median original *p*-value changed from 0.0001 to 0.0015.

In the model predicting the subjective score from all predictors (N = 112), within-participants designs (OR = 2.21 [0.87, 8.68]; published: 2.89 [0.96, 11.24]) and original effect size (OR = 2.07 [0.87, 7.48]; published: 3.33 [1.11, 12.44]) are now weaker, and original *p*-value is now about as strong (OR = 0.43 [0.14, 1.04]; published: 0.77 [0.33, 1.36]), so it is now reported in the main text. In the models predicting prediction interval and *p*-original, no predictor's credible interval excludes the null.

**Text errors and claims that changed**

1. *Statistical replication rate.* The abstract and Results now give 74% within the prediction interval (published: 46% in the abstract, 45% in the Results), and the correlations between the subjective score and the statistical measures are now described as weak.
2. *Predictors in the joint models.* The published text said that within-participants designs and effect size were both robust to the sensitivity analysis, and that within-participants designs and effect size were the strongest predictors of the prediction interval. With the corrected measures, the effect-size interval in the sensitivity analysis includes 1 (OR = 4.52 [0.98, 29.81]; published: 7.22 [1.24, 47]), and no predictor stands out for the prediction interval. The text now describes the strength of the original evidence (effect size and *p*-value, which are strongly correlated with each other) together.
3. *Sensitivity analysis description.* The Results described the sensitivity subset as "studies with close replications and matching statistical tests". The subset was defined by matching statistical tests on central results and no major issues with the replication, not by the closeness rating (exact, very close, close, far; coded using the scheme of LeBel et al., 2018), which was coded later; 6 of its 82 pairs are rated far. The description now matches the Methods.
4. *Strongest correlates.* The Discussion's list of the strongest bivariate correlates left out single-vignette designs (the second-strongest) and number of trials. It now matches Table 1.
5. *Table 1 labels.* The subfield rows were labelled "versus cognitive psych", but each correlation compares that subfield with all other subfields (of the 176 pairs, 62 are cognitive, 70 social, 24 other psychology and 20 non-psychology). The labels now say so (also in the corresponding Supplement table). The values are unchanged. 
6. *Figure 2 and Supplement Figure 2.* The plots left out 3 pairs with original effect sizes above 5 without saying so, and included 2 pairs that are not part of the 112 with standardized effect sizes. The plots now show only the 112 pairs, and the captions note the 3 that are not shown.
7. *Far replications.* "8 were far replications" should have read 8%.
