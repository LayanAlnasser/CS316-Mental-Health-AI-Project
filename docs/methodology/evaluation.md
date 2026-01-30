# Evaluation Methodology

This section describes the evaluation strategy used to assess the performance and reliability of the proposed mental health classification models. The evaluation focuses on both **quantitative performance metrics** and **robustness across severity levels**.

---

## Evaluation Objectives

The primary goals of the evaluation are to:

- Measure the accuracy and reliability of depression and anxiety severity predictions
- Ensure balanced performance across all severity classes
- Identify error patterns and model limitations
- Support fair and transparent comparison between models

---

## Train–Test Split

The dataset was divided using **stratified random sampling** to preserve the distribution of severity levels across subsets:

- **Training set:** 70% (1,750 text entries)
- **Testing set:** 30% (750 text entries)

Stratification ensures that all severity categories (none, mild, moderate, severe) are proportionally represented in both sets, reducing evaluation bias.

---

## Evaluation Metrics

Model performance was assessed using standard multi-class classification metrics:

- **Accuracy** – Overall correctness of predictions
- **Precision** – Proportion of correctly predicted positive instances per class
- **Recall** – Ability of the model to correctly identify instances of each class
- **F1-score** – Harmonic mean of precision and recall

Both **macro-averaged** and **weighted** metrics were reported to account for class balance and overall performance.

---

## Class-Level Analysis

In addition to aggregate metrics, performance was analyzed at the **class level** to assess:

- Model consistency across severity levels
- Confusion between adjacent severity classes (e.g., mild vs. moderate)
- Sensitivity to higher-severity cases

This analysis is critical in mental health applications, where borderline cases are common and severity distinctions are gradual rather than discrete.

---

## Confusion Matrix Analysis

Confusion matrices were used to visualize prediction behavior and identify misclassification patterns.  
Particular attention was given to:

- Misclassifications between neighboring severity categories
- False positives and false negatives in higher severity classes
- Overall diagonal dominance indicating correct predictions

---

## ROC and AUC Analysis

Receiver Operating Characteristic (ROC) curves and **Area Under the Curve (AUC)** scores were computed for each severity class using a one-vs-rest approach.

This analysis provides insight into:

- The model’s ability to distinguish between severity levels
- Discriminative power across classes
- Stability of predictions under varying decision thresholds

---

## Model Comparison

Separate models were trained and evaluated for:

- **Depression severity prediction**
- **Anxiety severity prediction**

Performance metrics were compared to assess relative difficulty and variability in classifying each condition. Observed differences are discussed in the Results section.

---

## Limitations of the Evaluation

While the evaluation provides strong quantitative evidence, it is subject to limitations:

- Labels are based on simulated self-reports rather than clinical ground truth
- Evaluation is performed at the sentence level without temporal dependency modeling
- Results may not generalize directly to real-world clinical settings

These limitations are further discussed in the **Limitations** and **Future Work** sections.
