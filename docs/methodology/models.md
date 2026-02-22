---
hide:
  - toc
---

# Models and Training

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Dual-Model Severity Classification Framework

The system employs a dual-model architecture to independently predict depression and anxiety severity from Arabic text.  

The design prioritizes robustness, interpretability, and reproducibility while maintaining clear non-clinical boundaries.

</div>
</div>

---

## 1. Model Architecture

Two independent multi-class classifiers are trained:

- Depression Severity Prediction Model  
- Anxiety Severity Prediction Model  

Each model predicts severity on a four-level ordinal scale:

| Score | Severity |
|------:|----------|
| 0 | None |
| 1 | Mild |
| 2 | Moderate |
| 3 | Severe |

Independent modeling enables each classifier to learn condition-specific semantic patterns without conflating overlapping symptom expressions.

---

## 2. Text Representation

All Arabic text inputs are transformed into dense numerical vectors using embedding-based representation learning.

### Embedding Model

- Model: EmbeddingGemma-300M  
- Output dimension: 768  
- Language coverage: Multilingual with Arabic support  

Each text entry is mapped to a 768-dimensional vector in semantic space, preserving contextual and syntactic relationships without manual feature engineering.

This representation reduces sparsity compared to traditional bag-of-words or TF-IDF methods and supports non-linear decision boundaries.

---

## 3. Classification Algorithm

### Support Vector Machine

Support Vector Machines are used as the primary classification algorithm due to their effectiveness in high-dimensional embedding spaces and strong generalization properties.

For a training set \((x_i, y_i)\), SVM seeks a decision boundary that maximizes the margin between classes while minimizing classification error.

The optimization objective balances:

- Margin maximization  
- Regularization strength  

This balance improves generalization performance on unseen data.

---

### Kernel Selection: Radial Basis Function (RBF)

The RBF kernel enables non-linear separation in embedding space.

Motivation for using RBF:

- Semantic overlap between adjacent severity levels  
- Non-linear linguistic boundaries  
- Morphological richness of Arabic  

The kernel maps input vectors into a higher-dimensional feature space where linear separation becomes feasible.

---

## 4. Training Procedure

The training workflow follows a structured pipeline:

1. Load synthetic labeled dataset  
2. Generate 768-dimensional embeddings for each entry  
3. Perform stratified 70/30 train–test split  
4. Train separate SVM models for depression and anxiety  
5. Tune hyperparameters such as regularization parameter \(C\) and kernel coefficient \(\gamma\)  
6. Evaluate on held-out test data  
7. Serialize trained models for reuse  

Hyperparameter selection is performed to optimize generalization performance rather than training accuracy.

---

## 5. Reproducibility and Deployment

- Stratified sampling preserves severity balance  
- Trained models are stored as serialized `.pkl` artifacts  
- The embedding pipeline is deterministic for identical inputs  
- Evaluation is performed on a fixed held-out test set  

This ensures consistent and reproducible results.

---

## 6. Design Rationale

The architecture reflects deliberate trade-offs:

- Classical ML is preferred over deep sequence models to improve interpretability and reduce opacity.  
- Independent classifiers avoid conflating depression and anxiety patterns.  
- Embedding-based features reduce reliance on handcrafted linguistic rules.  
- The framework remains computationally lightweight and deployable without GPU acceleration.

---

## 7. Known Constraints

- Predictions are generated at the sentence level without sequence-aware modeling.  
- Temporal relationships are handled through post-prediction alert logic rather than integrated sequential learning.  
- Embeddings are not fine-tuned on domain-specific mental health corpora.  

These constraints inform future extensions toward sequence modeling and domain adaptation.

---