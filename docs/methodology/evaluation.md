# Evaluation Metrics & Experimental Setup

## 1. Metrics

We plan to report:

- **Accuracy**
- **Precision**
- **Recall**
- **F1-score**
- **Confusion matrix** for each classifier

These metrics are computed on the **held-out test set**.

---

## 2. Experimental Setup

- Train/validation/test split (e.g., 70/15/15 or similar).
- Stratified splitting to preserve class ratios where needed.
- Random seed fixed for reproducibility.

---

## 3. Planned Experiments

Examples:

1. **Baseline vs. SVM**  
   Compare simple models (Naive Bayes, Logistic Regression) with SVM.

2. **Effect of Preprocessing or Features**  
   - With vs. without normalization
   - TF-IDF vs. embeddings (if used)

3. **Language-Specific Performance**  
   - English vs. Arabic subsets (if labeled separately).

As results are produced, you can summarize them and link to visuals in [Findings & Visualizations](../results/findings.md).
