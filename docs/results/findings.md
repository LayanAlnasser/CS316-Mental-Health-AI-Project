---
hide:
  - toc
---

# Findings and Visualizations

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Summary of Experimental Results

This page summarizes the key quantitative findings and qualitative observations from the dual-model framework for depression and anxiety severity prediction.

The evaluation is performed using a stratified 70 percent training split and 30 percent test split to preserve severity-level proportions.

</div>
</div>

---

## Model Performance

<div class="grid cards" markdown>

- :material-brain: **Depression Severity Model**

  ---
  Test accuracy: 99.87 percent  
  Near-perfect precision, recall, and F1-score across severity levels.

- :material-brain: **Anxiety Severity Model**

  ---
  Test accuracy: 98.93 percent  
  Strong performance overall with small reductions in higher severity categories.

- :material-chart-line: **Discriminative Power**

  ---
  AUC results confirm strong separation across classes.  
  Depression remains near-perfect. Anxiety shows a minor reduction in higher classes.

</div>

---

## Classification Report

### Depression Prediction

| Class | Precision | Recall | F1-score | Support |
|------:|----------:|-------:|---------:|--------:|
| 0 | 1.00 | 1.00 | 1.00 | 256 |
| 1 | 1.00 | 1.00 | 1.00 | 203 |
| 2 | 1.00 | 1.00 | 1.00 | 166 |
| 3 | 0.99 | 1.00 | 1.00 | 125 |
| Macro Avg | 1.00 | 1.00 | 1.00 | 750 |
| Weighted Avg | 1.00 | 1.00 | 1.00 | 750 |

### Anxiety Prediction

| Class | Precision | Recall | F1-score | Support |
|------:|----------:|-------:|---------:|--------:|
| 0 | 1.00 | 1.00 | 1.00 | 260 |
| 1 | 1.00 | 1.00 | 1.00 | 204 |
| 2 | 0.97 | 0.98 | 0.98 | 170 |
| 3 | 0.97 | 0.96 | 0.97 | 116 |
| Macro Avg | 1.00 | 1.00 | 1.00 | 750 |
| Weighted Avg | 1.00 | 1.00 | 1.00 | 750 |

---

## AUC Comparison

| Class | AUC Depression | AUC Anxiety |
|------:|---------------:|------------:|
| 0 (None) | 1.00 | 1.00 |
| 1 (Mild) | 1.00 | 1.00 |
| 2 (Moderate) | 1.00 | 0.98 |
| 3 (Severe) | 0.99 | 0.97 |
| Macro Avg | 1.00 | 0.99 |
| Weighted Avg | 1.00 | 0.99 |

---

## Embedding Space Visualizations

<div class="grid cards" markdown>

- :material-chart-scatter-plot: **Binary Separation Views**

  ---
  Two-dimensional embedding projections show clustering patterns for severe versus none classes for both depression and anxiety.

- :material-vector-polyline: **UMAP Projections**

  ---
  UMAP projections display a graded continuum across all four severity levels, with partial overlap expected for continuous constructs.

</div>

Add your figures here:

- `Figure 1` Embedding space for depression, none vs severe  
- `Figure 2` Embedding space for anxiety, none vs severe  
- `Figure 3` UMAP projection for depression severity  
- `Figure 4` UMAP projection for anxiety severity  

---

## Linguistic Pattern Observations

Word-frequency analysis reveals severity-associated language shifts:

- Lower severity levels show more neutral, routine daily language.
- Moderate and severe levels show increased negative and self-focused vocabulary.
- Anxiety shows stronger patterns of fear, worry, and physiological stress language at higher severity.

Add your tables here:

- `Table 1` Depression word frequency by severity  
- `Table 2` Anxiety word frequency by severity  

---

## Key Observations

<div class="grid cards" markdown>

- :material-swap-horizontal: **Errors Are Usually Adjacent**

  ---
  Misclassifications occur primarily between neighboring severity categories such as moderate and severe.

- :material-alert-outline: **Higher Severity Anxiety Is Harder**

  ---
  Anxiety shows slightly reduced recall in severe class, consistent with overlap in language across high severity states.

- :material-check-circle-outline: **High-Risk Separation Is Strong**

  ---
  Severe cases are rarely misclassified as none, supporting reliability for high-risk identification.

</div>

---

## Example Outputs

The following structure can be used to present example predictions from the prototype:

<div class="grid cards" markdown>

- :material-text-box: **Input**
  
  ---
  Arabic text entry

- :material-tag: **Output**
  
  ---
  Depression score and anxiety score from 0 to 3

- :material-alert: **Alerts**
  
  ---
  High score, worsening trend, or sudden spike if history is provided

</div>

Include only synthetic or fully anonymized examples.

---

## Connection to Alert Framework

The predictive alert mechanism converts severity outputs into longitudinal risk signals by detecting:

- sustained high severity
- gradual worsening trends
- sudden spikes

For details, refer to the alert framework section in the paper and the deployment documentation.

---