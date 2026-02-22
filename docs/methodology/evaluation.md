---
hide:
  - toc
---

# Evaluation Methodology

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Quantitative and Class-Level Assessment Framework

This section describes the evaluation protocol used to assess the predictive performance and robustness of the dual-model framework for depression and anxiety severity classification.

The evaluation emphasizes both aggregate performance metrics and detailed class-level behavior.

</div>
</div>

---

## Evaluation Objectives

The evaluation is designed to:

- Quantify classification performance across all severity levels  
- Assess robustness for higher-severity cases  
- Examine ordinal boundary confusion  
- Compare performance between depression and anxiety models  
- Ensure reproducibility and transparent reporting  

---

## Train–Test Partitioning

The dataset was divided using **stratified random sampling** to preserve severity-level proportions:

- Training set: 1,750 entries (70 percent)  
- Testing set: 750 entries (30 percent)  

Stratification ensures that none, mild, moderate, and severe categories are proportionally represented in both subsets, reducing class imbalance bias.

All reported metrics are computed exclusively on the held-out test set.

---

## Evaluation Metrics

Performance was assessed using standard multi-class classification metrics:

- **Accuracy**: Overall proportion of correct predictions  
- **Precision (per class)**: True positives divided by predicted positives  
- **Recall (per class)**: True positives divided by actual positives  
- **F1-score (per class)**: Harmonic mean of precision and recall  

To provide balanced evaluation:

- **Macro-average metrics** treat all classes equally  
- **Weighted-average metrics** account for class support  

Both reporting styles are included to ensure fair interpretation across severity levels.

---

## Class-Level Performance Analysis

Given the ordinal nature of severity levels, analysis focused on:

- Confusion between adjacent categories such as moderate and severe  
- Stability in identifying higher-risk classes  
- Rare extreme misclassifications such as severe predicted as none  

Because mental health severity exists on a continuum, minor overlap between neighboring classes is expected and does not necessarily indicate instability.

---

## Confusion Matrix Examination

Confusion matrices were analyzed to visualize prediction distributions.

Key interpretation criteria:

- Strong diagonal dominance indicates reliable class separation  
- Off-diagonal concentration near adjacent classes reflects ordinal boundary overlap  
- Minimal severe-to-none misclassification supports high-risk detection reliability  

---

## ROC and AUC Evaluation

Receiver Operating Characteristic curves were computed using a **one-vs-rest strategy** for each severity class.

The **Area Under the Curve (AUC)** measures discriminative ability independent of a fixed decision threshold.

AUC analysis provides:

- Class-wise separability insight  
- Comparative difficulty between depression and anxiety models  
- Stability across varying classification thresholds  

---

## Dual-Model Comparison

Separate SVM classifiers were trained for:

- Depression severity  
- Anxiety severity  

Comparative analysis evaluates:

- Relative performance across equivalent severity classes  
- Sensitivity to higher-severity cases  
- Differences in boundary ambiguity  

Observed performance differences are discussed in the Results section.

---

## Reproducibility Considerations

- Stratified sampling ensures consistent severity distribution  
- Hyperparameters are tuned to optimize generalization  
- Models are serialized for consistent reuse  
- Evaluation is performed on a fixed held-out test set  

These measures support replicability and transparent review.

---

## Evaluation Limitations

The evaluation protocol is subject to constraints:

- Labels are simulated rather than clinically verified  
- Predictions are generated at the entry level without sequence modeling  
- Synthetic data may produce clearer separability than real-world narratives  

As a result, reported performance reflects controlled experimental conditions rather than clinical validation.

Further discussion appears in the **Limitations** and **Future Work** sections.

---