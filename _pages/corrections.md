---
layout: page
permalink: /corrections/
title: Corrections
description: Corrections to published work
nav: true
nav_order: 6
---

<!-- _pages/corrections.md: one section per file in _corrections/, linked from the "Correction" button on the publications page -->

An AI audit in November 2026 ([context](https://babieslearninglanguage.blogspot.com/2026/11/an-ai-audit-of-my-works-computational.html)) turned up errors in my published work. These errors vary in magnitude, with none affecting the top-line results, but some affecting secondary results, interpretations, and the strength of the evidence. I have corrected the pre-prints for the papers (rather than seek journal corrections), and am posting the errors/corrections here. 

The audits were conducted by Claude Code, and Claude Code was also used to understand the problems, propogate fixes, and draft this corrections text. 

<style>
  .correction-entry { margin-bottom: 1rem; }
  .correction-entry summary { cursor: pointer; font-weight: bold; }
  .correction-links { margin: 0.5rem 0 1rem 0; }
</style>

{% assign corrections = site.corrections | sort: "bibkey" | reverse %}
{% for correction in corrections %}
<details class="correction-entry" id="{{ correction.bibkey }}">
<summary>{{ correction.title }}</summary>
<div class="correction-links">
Posted {{ correction.date | date: "%B %-d, %Y" }} ·
<a href="{{ correction.corrected_version }}">Corrected PDF</a> ·
<a href="{{ '/publications/' | relative_url }}#{{ correction.bibkey }}">Publication entry</a>
</div>
{{ correction.content | markdownify }}
</details>
{% endfor %}

<script>
  // Open the section a "Correction" button links to (details elements start closed).
  function openCorrectionFromHash() {
    const target = window.location.hash && document.getElementById(window.location.hash.slice(1));
    if (target && target.tagName === "DETAILS") {
      target.open = true;
      target.scrollIntoView();
    }
  }
  window.addEventListener("hashchange", openCorrectionFromHash);
  document.addEventListener("DOMContentLoaded", openCorrectionFromHash);
</script>
