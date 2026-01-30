# AI-Based Longitudinal Tracking for Early Prediction of Mental Health Decline with Predictive Alerts

**Layan Alnasser (Project Leader)**  
College of Computer and Information Sciences  
Prince Sultan University, Riyadh, Saudi Arabia  

**Norah Alhadyani, Mashael Alsedais, Leen Almunifi, Hessah Alsuubaiee**  
College of Computer and Information Sciences  
Prince Sultan University, Riyadh, Saudi Arabia  

---

## Abstract

Tracking mental health through automated text analysis provides a scalable and accessible screening approach, particularly for underrepresented languages such as Arabic. This study proposes an AI-based longitudinal monitoring system for assessing depression and anxiety severity from Arabic text. A synthetic longitudinal dataset was generated to simulate realistic mental health narratives over time. Text entries were encoded using a pre-trained multilingual embedding model, producing dense semantic representations. Two independent Support Vector Machine classifiers with Radial Basis Function kernels were trained to predict severity levels on a four-point ordinal scale. In addition to static classification, the system implements predictive alert mechanisms to identify sustained high-risk patterns, worsening trends, and sudden symptom escalation. Experimental results demonstrate high classification performance across severity levels, supporting the feasibility of ethical, non-diagnostic AI-assisted mental health monitoring.

**Keywords:** Mental health, Depression, Anxiety, Arabic NLP, Machine learning, Text classification, Longitudinal monitoring

---

## I. Introduction

Mental health conditions such as depression and anxiety are widespread and often under-detected until symptoms reach critical levels. Traditional screening approaches typically rely on static, cross-sectional assessments that fail to capture gradual changes or emerging risk patterns. Given that psychological conditions evolve over time, there is a growing need for systems capable of continuous and longitudinal monitoring.

Advances in artificial intelligence and natural language processing have enabled automated analysis of textual data, allowing emotional and cognitive patterns to be inferred from written language. Individuals frequently express mental states through text-based narratives such as journals, surveys, or online reflections. However, mental health NLP research remains limited for Arabic-language contexts, which are significantly underrepresented in existing datasets and models.

This project addresses these gaps by developing an AI-based system that analyzes Arabic mental health narratives over time. The system moves beyond static classification by integrating predictive alerts that identify early signs of deterioration. Importantly, the system is designed as a **supportive screening tool**, not a diagnostic instrument, and adheres to responsible AI principles.

---

## II. Related Work

Artificial intelligence has demonstrated strong potential in healthcare applications, particularly in physical health domains. Its adoption in mental health has progressed more cautiously due to ethical concerns, data sensitivity, and the complexity of psychological conditions. Existing approaches often rely on structured questionnaires or single-point evaluations, limiting their ability to model progression.

Recent studies have explored NLP techniques for mental health analysis using social media posts, self-reported narratives, and conversational data. Deep learning models such as CNNs and LSTMs have shown success in detecting depressive content, while embedding-based representations have improved semantic understanding. However, many prior systems emphasize prediction accuracy over interpretability and ethical deployment.

Longitudinal approaches remain relatively scarce, especially for Arabic text. This project contributes by combining embedding-based NLP with classical machine learning in a longitudinal framework, emphasizing transparency, ethical safeguards, and non-diagnostic use.

---

## III. Methodology

### A. Data Generation

A synthetic longitudinal Arabic text dataset was generated to simulate mental health expressions over time. The dataset consists of 2,500 text entries representing 100 synthetic individuals, with 25 entries per individual. Each entry is annotated with depression and anxiety severity scores on a four-point ordinal scale (0: none, 1: mild, 2: moderate, 3: severe), adapted from PHQ-9 and GAD-7 guidelines.

Using synthetic data ensures privacy preservation and avoids ethical risks associated with real mental health records.

### B. Text Representation

Text entries are converted into numerical vectors using a pre-trained multilingual embedding model with a 768-dimensional output space. This embedding approach captures semantic and contextual information from Arabic text without manual feature engineering.

### C. Classification Models

Two independent Support Vector Machine classifiers are trained:
- Depression Severity Prediction Model
- Anxiety Severity Prediction Model

The models use Radial Basis Function kernels to handle non-linear class boundaries arising from linguistic variability and overlapping severity levels.

### D. Training Procedure

Data is split into training (70%) and testing (30%) sets using stratified sampling. Hyperparameters are tuned to optimize generalization performance. Trained models are serialized for reproducibility and deployment.

---

## IV. Results and Analysis

### A. Quantitative Evaluation

The depression severity model achieved near-perfect performance across all severity levels, with accuracy exceeding 99%. Precision, recall, and F1-scores were consistently high across classes.

The anxiety severity model also demonstrated strong performance, with minor reductions in higher severity classes. Most misclassifications occurred between adjacent severity levels, reflecting the gradual nature of symptom progression.

### B. Confusion Matrix Analysis

Confusion matrix analysis showed strong diagonal dominance for both models. Errors were primarily limited to neighboring severity categories (e.g., moderate vs. severe), while severe cases were rarely misclassified as non-clinical.

### C. ROC and AUC Analysis

ROC curves and AUC scores confirmed strong discriminative ability across severity levels. Depression severity prediction achieved near-perfect AUC values, while anxiety severity prediction showed slightly lower but still robust performance in higher severity classes.

---

## V. Longitudinal Alert Mechanism

To extend beyond static classification, the system implements three predictive alert types:

1. **High Score Alerts:** Triggered when average severity ≥ 2 across recent entries  
2. **Worsening Trend Alerts:** Triggered by consistent upward severity trends  
3. **Sudden Spike Alerts:** Triggered by sharp increases between consecutive entries  

These alerts support early awareness and proactive monitoring.

---

## VI. Limitations

The system operates on sentence-level inputs without incorporating prior entries during classification. Embeddings are not fine-tuned on mental health–specific Arabic corpora, and dialectal variation is not explicitly modeled. Additionally, labels are based on simulated self-reports rather than clinical diagnoses.

---

## VII. Ethical and Societal Considerations

This project follows responsible AI principles by using synthetic data, avoiding real personal information, and emphasizing transparency. The system is explicitly non-diagnostic and intended for research and awareness purposes only. Ethical safeguards are integrated to reduce bias, prevent misuse, and ensure societal benefit.

---

## VIII. Conclusion

This study demonstrates that embedding-based NLP combined with classical machine learning can effectively support longitudinal mental health monitoring in Arabic text. The integration of predictive alerts enhances practical value by enabling early risk detection. While not a substitute for clinical assessment, the system provides a strong foundation for ethical, scalable mental health support tools. Future work will focus on sequential modeling, domain-specific embeddings, and clinical validation.

---

## Acknowledgment

This project was conducted as part of the CS316 – Artificial Intelligence and Data Science course at Prince Sultan University.

---

## References

References are omitted in this draft and will follow IEEE citation standards in the final submission.
