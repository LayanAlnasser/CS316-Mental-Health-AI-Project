---
hide:
  - toc
---

# AI-Based Longitudinal Tracking for Early Prediction of Mental Health Decline with Predictive Alerts

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Research Paper

**Layan Alnasser (Project Leader)**  
College of Computer and Information Sciences  
Prince Sultan University, Riyadh, Saudi Arabia  

**Norah Alhadyani, Mashael Alsedais, Leen Almunifi, Hessah Alsuubaiee**  
College of Computer and Information Sciences  
Prince Sultan University, Riyadh, Saudi Arabia  

</div>
</div>

---

## Abstract

Automated analysis of textual narratives provides a scalable approach to mental health monitoring, particularly in underrepresented linguistic contexts such as Arabic. This study presents a longitudinal AI framework for independent assessment of depression and anxiety severity from Arabic text.

A synthetic dataset comprising 2,500 time-stamped entries from 100 virtual participants was constructed to simulate symptom progression. Text entries were encoded using a multilingual embedding model producing 768-dimensional semantic representations. Two independent Support Vector Machine classifiers with Radial Basis Function kernels were trained to predict severity on a four-level ordinal scale.

Beyond static classification, the framework integrates structured predictive alerts to detect sustained high-risk states, worsening trends, and sudden symptom escalation. Experimental results demonstrate strong discriminative performance across severity levels. The findings support the feasibility of embedding-based longitudinal monitoring for Arabic mental health research within clearly defined ethical and non-diagnostic boundaries.

**Keywords:** Mental health, Depression, Anxiety, Arabic NLP, Support Vector Machines, Longitudinal monitoring, Responsible AI

---

## I. Introduction

Depression and anxiety are dynamic psychological conditions characterized by fluctuating intensity over time. Conventional screening approaches typically rely on cross-sectional assessments that capture isolated time points. Such methods limit the ability to detect gradual deterioration or emerging risk trajectories.

Advances in artificial intelligence and natural language processing enable structured analysis of written narratives that reflect emotional state, cognitive burden, and psychological distress. Individuals frequently express mental health indicators through journals, surveys, and digital reflections. However, Arabic-language mental health NLP research remains limited compared to English-language resources.

This study proposes a longitudinal AI framework for analyzing Arabic mental health narratives. The system independently predicts depression and anxiety severity and integrates rule-based alert logic to identify early warning signals across time. The framework is explicitly designed as a research-oriented decision-support tool and does not provide clinical diagnosis.

---

## II. Related Work

Artificial intelligence has demonstrated success in healthcare domains, yet adoption in mental health remains cautious due to ethical concerns and data sensitivity. Many systems rely on questionnaire-based tools or single-entry classification, limiting their ability to model progression.

Deep learning architectures such as CNNs and LSTMs have shown effectiveness in detecting depressive language patterns. Embedding-based approaches have improved semantic representation quality compared to traditional feature engineering. However, longitudinal modeling remains limited, particularly for Arabic text.

This work contributes by combining embedding-based representation learning with classical machine learning in a structured longitudinal monitoring framework tailored to Arabic narratives, while explicitly incorporating alert logic and responsible AI safeguards.

---

## III. Methodology

### A. Synthetic Longitudinal Dataset

A synthetic dataset was generated to simulate longitudinal mental health trajectories. The dataset includes:

- 2,500 Arabic text entries  
- 100 virtual participants  
- 25 time-ordered entries per participant  

Each entry contains two independent severity labels:

- Depression score from 0 to 3  
- Anxiety score from 0 to 3  

Severity levels are inspired by PHQ-9 and GAD-7 screening guidelines while remaining non-diagnostic. This design enables controlled modeling of progression while eliminating privacy risks associated with real clinical data.

---

### B. Text Representation

Each text entry is encoded using a multilingual embedding model that generates 768-dimensional dense vector representations. This embedding captures contextual and semantic information without manual feature engineering and provides compact high-dimensional inputs for classification.

---

### C. Dual-Model Classification Framework

Two independent multi-class Support Vector Machine classifiers are trained:

1. Depression Severity Model  
2. Anxiety Severity Model  

Each classifier uses a Radial Basis Function kernel to capture non-linear class boundaries in embedding space. Independent modeling enables condition-specific learning while reducing interference between overlapping linguistic patterns.

---

### D. Training and Evaluation Protocol

The dataset is partitioned using stratified sampling into:

- 70 percent training data  
- 30 percent testing data  

Hyperparameters are tuned to optimize generalization performance. Evaluation metrics include accuracy, precision, recall, F1-score, and Area Under the ROC Curve. Trained models are serialized to ensure reproducibility and facilitate deployment.

---

## IV. Results and Analysis

### A. Classification Performance

The depression severity model achieved test accuracy exceeding 99 percent with consistently high precision, recall, and F1-scores across severity classes.

The anxiety severity model demonstrated similarly strong performance, with modest reductions in higher severity categories. Misclassifications primarily occurred between adjacent severity levels, reflecting the ordinal nature of symptom progression.

---

### B. Error Characteristics

Confusion matrix analysis revealed strong diagonal dominance. Errors were concentrated between moderate and severe categories, while severe cases were rarely predicted as non-clinical. This supports reliable identification of higher-risk states.

---

### C. ROC and AUC Analysis

Receiver Operating Characteristic analysis confirms strong discriminative capability across severity levels. Depression severity prediction achieved near-perfect AUC values, while anxiety severity prediction exhibited slightly lower yet robust performance for higher severity classes.

---

## V. Longitudinal Alert Framework

To extend beyond static prediction, the system incorporates three structured alert mechanisms:

1. High Score Alert  
   Triggered when the average severity score across recent entries is at least 2.

2. Worsening Trend Alert  
   Triggered when consistent upward progression exceeds predefined thresholds.

3. Sudden Spike Alert  
   Triggered when severity increases sharply between consecutive entries.

These alerts transform individual predictions into longitudinal risk signals that support early awareness.

---

## VI. Limitations

The framework performs entry-level classification without sequence-aware architectures. Embeddings are not fine-tuned on mental health–specific Arabic corpora, and dialectal variation is not explicitly modeled. Evaluation is conducted on synthetic data, and external clinical validation is required for real-world application.

---

## VII. Ethical and Societal Considerations

Privacy-by-design principles are ensured through exclusive use of synthetic data. No personal or clinical records were collected. The system is explicitly non-diagnostic and intended for research and educational purposes. Human oversight is required for responsible interpretation of outputs.

---

## VIII. Conclusion

This study demonstrates that embedding-based NLP combined with classical machine learning can support structured longitudinal monitoring of depression and anxiety severity in Arabic text. The integration of predictive alerts enhances practical relevance by detecting sustained risk patterns and symptom escalation.

While further validation and sequence-aware modeling are necessary, the framework provides a reproducible and ethically grounded foundation for Arabic mental health AI research.

---

## Acknowledgment

This project was conducted as part of CS316 – Artificial Intelligence and Data Science at Prince Sultan University.

---

## References

References will be formatted according to IEEE citation standards in the final submission.