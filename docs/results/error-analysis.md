---
hide:
  - toc
---

# Error Analysis

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Understanding Model Failure Modes

Although the classification performance is strong, analyzing error patterns provides insight into model behavior, generalization limits, and areas for improvement.

This section examines where misclassifications occur and what they reveal about the embedding-based framework.

</div>
</div>

---

## 1. Misclassification Characteristics

<div class="grid cards" markdown>

- :material-swap-horizontal: **Adjacent Severity Confusion**

  ---
  Most errors occur between neighboring severity levels such as moderate and severe.

- :material-alert-outline: **Anxiety Higher-Class Errors**

  ---
  The anxiety model shows slightly lower precision and recall for higher severity categories.

- :material-text-short: **Short or Ambiguous Entries**

  ---
  Brief statements with limited emotional cues reduce contextual richness in embeddings.

</div>

Misclassifications are rarely extreme. Severe cases are almost never predicted as non-clinical, indicating strong separation between distant classes.

---

## 2. Structural Error Patterns

### Ordinal Boundary Overlap

Severity labels represent a gradual psychological continuum rather than discrete categories. Overlap in language between moderate and severe states contributes to boundary ambiguity.

### Linguistic Subtlety

Indirect expressions of distress may not always align cleanly with severity labels. Statements that imply fatigue or stress without explicit emotional markers can produce borderline predictions.

### Anxiety vs Depression Separation

Although modeled independently, anxiety and depression share linguistic patterns such as fear, worry, and fatigue. This semantic overlap may slightly affect higher-class discrimination.

---

## 3. Dataset-Driven Constraints

<div class="grid cards" markdown>

- :material-database: **Synthetic Distribution**

  ---
  Controlled generation may produce clearer class separation than real-world data.

- :material-translate: **Dialectal Coverage**

  ---
  Dialect variation and informal language are not explicitly modeled.

- :material-timeline: **Non-Sequential Classification**

  ---
  Each entry is classified independently without temporal context during prediction.

</div>

These constraints may limit generalization to authentic real-world narratives.

---

## 4. Lessons Learned

<div class="grid cards" markdown>

- :material-vector-polyline: **Sequence Modeling Needed**

  ---
  Incorporating temporal models could reduce reliance on post-hoc alert logic.

- :material-brain: **Domain-Specific Embeddings**

  ---
  Fine-tuning embeddings on mental health corpora may improve subtle severity distinctions.

- :material-chart-scatter-plot: **Real-World Validation Required**

  ---
  Clinical annotation and diverse dialect datasets are necessary for external validity.

</div>

---

## Interpretation

The observed error distribution suggests that the embedding space effectively separates distant severity levels while showing natural ambiguity at ordinal boundaries.

Rather than indicating model instability, these patterns reflect the continuous nature of psychological symptom progression.

Insights from this analysis directly inform the [Limitations](limitations.md) and [Future Work](../documentation/future-work.md) sections.

---