# Models & Training

## 1. Baseline Models

To establish a baseline, we consider simple models such as:

- Logistic Regression
- Naive Bayes
- Linear SVM

These models are trained on the vectorized text representations (e.g., TF-IDF features).

---

## 2. Main Models

The current implementation includes:

- **SVM classifiers** for:
  - Anxiety vs. non-anxiety
  - Depression vs. non-depression

Model artifacts are stored as serialized files (e.g., `anxiety_svm_model.pkl`, `depression_svm_model.pkl`) for reuse in the web application.

---

## 3. Training Procedure

Typical training workflow:

1. Load and preprocess the dataset(s).
2. Split into train/validation/test sets.
3. Train baseline models and record performance.
4. Tune hyperparameters (e.g., C, kernel for SVM).
5. Select the best-performing model(s) based on validation metrics.
6. Retrain on combined train+validation data if appropriate.
7. Save final models for deployment.

You can later insert actual hyperparameters, training curves, or tables as results become available.
