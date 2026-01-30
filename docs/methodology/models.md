# Models and Training

This project employs a **dual-model machine learning architecture** to independently assess **depression** and **anxiety severity** from Arabic text. The design prioritizes interpretability, robustness, and ethical deployment over purely black-box performance.

---

## Model Architecture

Two independent classification models are trained:

- **Depression Severity Prediction Model**
- **Anxiety Severity Prediction Model**

Each model predicts severity on a **four-point ordinal scale**:

| Score | Severity |
|-----|----------|
| 0 | None |
| 1 | Mild |
| 2 | Moderate |
| 3 | Severe |

The conditions are modeled separately to allow each classifier to learn condition-specific linguistic and semantic patterns.

---

## Text Representation

All textual inputs are transformed into numerical representations using **embedding-based vectorization**.

- **Embedding Model:** EmbeddingGemma-300M (Google)
- **Embedding Dimension:** 768
- **Language Support:** Multilingual, including Arabic

The embedding model captures semantic and contextual information from Arabic text without manual feature engineering, making it well-suited for mental health narrative analysis.

---

## Classification Model

### Support Vector Machine (SVM)

Support Vector Machines are used as the primary classification algorithm due to their strong performance on high-dimensional feature spaces and their suitability for limited dataset sizes.

Key characteristics:
- Effective handling of dense embedding vectors
- Strong generalization performance
- Interpretable decision boundaries compared to deep neural networks

### Kernel Selection

The **Radial Basis Function (RBF)** kernel is used to enable non-linear decision boundaries. This choice is motivated by:

- The semantic complexity of mental health language
- Morphological richness and variability in Arabic text
- The need to separate overlapping severity classes

---

## Training Procedure

The training workflow follows a structured and reproducible process:

1. Load the labeled synthetic Arabic text dataset.
2. Convert text entries into embedding vectors using the embedding model.
3. Split data into training and testing sets using stratified sampling.
4. Train separate SVM models for depression and anxiety severity.
5. Optimize hyperparameters (e.g., regularization parameter and kernel settings).
6. Evaluate performance using held-out test data.
7. Serialize trained models for reuse and deployment.

Trained models are stored as serialized artifacts (e.g., `.pkl` files) to support reproducibility and application integration.

---

## Design Considerations

- **Non-diagnostic intent:** Models are designed to support screening and monitoring, not clinical diagnosis.
- **Interpretability:** Classical machine learning models are preferred over deep neural networks to reduce opacity.
- **Ethical alignment:** Independent modeling avoids conflating anxiety and depression while acknowledging comorbidity in analysis.

---

## Limitations

- Sentence-level classification does not explicitly incorporate prior user context during prediction.
- Embeddings are not fine-tuned on mental health–specific Arabic corpora.
- Temporal patterns are modeled post-prediction rather than during classification.

These limitations are addressed further in the **Limitations** and **Future Work** sections.