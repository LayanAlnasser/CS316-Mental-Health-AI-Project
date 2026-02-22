---
hide:
  - toc
---

# Limitations

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Technical and Methodological Constraints

While the framework demonstrates strong classification performance and structured longitudinal monitoring, several limitations must be acknowledged to ensure responsible interpretation.

</div>
</div>

---

## 1. Synthetic Dataset Constraints

<div class="grid cards" markdown>

- :material-database: **Simulated Data Distribution**

  ---
  The dataset consists entirely of AI-generated synthetic entries.  
  Real-world linguistic variability may be greater than simulated patterns.

- :material-chart-scatter-plot: **Potential Over-Separation**

  ---
  Controlled generation may produce clearer class boundaries than naturally occurring mental health narratives.

- :material-clipboard-text-outline: **Self-Report Simulation**

  ---
  Severity labels are inspired by PHQ-9 and GAD-7 guidelines but are not clinically validated diagnoses.

</div>

Although synthetic design ensures privacy preservation, it limits direct generalization to real-world populations.

---

## 2. Limited Dialect and Cultural Coverage

Arabic is linguistically diverse. The dataset does not explicitly model:

- Regional dialect variation  
- Code-switching behavior  
- Informal or highly colloquial expressions  

Future validation on diverse dialect corpora is required for broader applicability.

---

## 3. Entry-Level Independent Classification

The current system classifies each text entry independently.  

- Temporal dependencies are not modeled within the classifier itself.  
- Longitudinal alerts are applied post-prediction through rule-based logic.  

Sequence-aware architectures could better capture progression dynamics.

---

## 4. Embedding Generalization

The multilingual embedding model is not fine-tuned on mental health–specific Arabic corpora.

- Subtle emotional nuance may not be fully captured.  
- Indirect or metaphorical distress signals may require domain adaptation.

---

## 5. Model Scope and Complexity

Support Vector Machines with RBF kernels provide strong generalization and interpretability. However:

- Large transformer-based sequence models may capture deeper contextual interactions.
- Ordinal severity modeling could be enhanced with specialized ranking or regression frameworks.

---

## 6. Non-Clinical Positioning

The system:

- Is not clinically validated  
- Is not approved for diagnostic or treatment decisions  
- Should not replace professional mental health evaluation  

It is designed exclusively as a research-oriented decision-support prototype.

---

## Interpretation of High Performance

The near-perfect classification results reflect:

- Controlled synthetic data generation  
- Clear severity separation in embedding space  
- Stratified evaluation design  

Real-world performance may differ when applied to authentic clinical or user-generated text.

---

For further technical detail and experimental discussion, refer to the [IEEE Paper](../paper/paper.md).

---