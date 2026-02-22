---
hide:
  - toc
---

# Future Work

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Advancing Longitudinal AI-Based Mental Health Monitoring

While the current framework demonstrates strong classification performance and structured alert generation, several research directions can further improve robustness, realism, and responsible deployment.

</div>
</div>

---

## 1. Clinical Validation and Real-World Data

<div class="grid cards" markdown>

- :material-database-plus: **Expanded Datasets**

  ---
  Incorporate larger and more diverse Arabic corpora, including multiple dialects and varied writing styles.

- :material-stethoscope: **Clinical Annotation**

  ---
  Validate predictions against clinically assessed data or structured psychological interviews.

- :material-chart-scatter-plot: **External Benchmarking**

  ---
  Evaluate generalization performance on independently collected datasets.

</div>

The current system is trained and evaluated on synthetic longitudinal data. Real-world validation is essential for assessing clinical reliability and fairness.

---

## 2. Sequential and Temporal Modeling

<div class="grid cards" markdown>

- :material-timeline: **Sequence-Aware Architectures**

  ---
  Replace independent entry classification with LSTM, GRU, or Transformer-based sequence models.

- :material-vector-polyline: **Explicit Temporal Dependency Modeling**

  ---
  Model progression between consecutive entries rather than applying rule-based alert logic post prediction.

- :material-account-clock: **User-Level Context Integration**

  ---
  Incorporate participant history embeddings to enhance trend detection and alert sensitivity.

</div>

This would shift the framework from post-hoc alerting toward integrated temporal learning.

---

## 3. Domain-Specific Representation Learning

<div class="grid cards" markdown>

- :material-brain: **Mental Health–Specific Embeddings**

  ---
  Fine-tune embedding models on curated Arabic mental health corpora.

- :material-lightbulb-on-outline: **Metaphor and Indirect Expression Modeling**

  ---
  Improve sensitivity to implicit distress signals and culturally specific expressions.

- :material-magnify: **Explainability Integration**

  ---
  Incorporate attention visualization or feature attribution techniques for interpretability.

</div>

Enhanced representation learning would improve semantic sensitivity beyond general multilingual embeddings.

---

## 4. Joint and Multi-Task Modeling

<div class="grid cards" markdown>

- :material-connection: **Multi-Task Learning**

  ---
  Train unified models to jointly predict depression and anxiety severity.

- :material-chart-bell-curve: **Comorbidity Analysis**

  ---
  Investigate interactions and correlations between mental health indicators.

- :material-shape-outline: **Shared Latent Space Modeling**

  ---
  Learn shared representations that capture overlapping symptom structures.

</div>

This direction could better reflect real-world comorbidity patterns.

---

## 5. Responsible Deployment and Governance

<div class="grid cards" markdown>

- :material-account-group: **User Studies**

  ---
  Evaluate usability, clarity, and perceived trust among potential users.

- :material-human-handsup: **Human-in-the-Loop Systems**

  ---
  Design workflows where AI predictions assist qualified professionals.

- :material-shield-alert: **Risk Assessment and Safeguards**

  ---
  Develop monitoring, consent mechanisms, and bias auditing procedures prior to real-world deployment.

</div>

Responsible deployment requires structured oversight beyond technical performance.

---

## Strategic Vision

Future iterations aim to transition from a synthetic research prototype toward a clinically validated, ethically governed, and culturally adaptive longitudinal monitoring framework.

The long-term objective is to contribute to inclusive and responsible AI research in Arabic mental health analysis while maintaining strict non-diagnostic boundaries.

---