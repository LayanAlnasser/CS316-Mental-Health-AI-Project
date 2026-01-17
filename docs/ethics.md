# Ethical, Sustainability, and Societal Considerations

Because this project deals with **mental health**, responsible AI is central to the design.

---

## 1. Privacy and Data Protection

- Use only datasets that are **publicly available** or appropriately anonymized.
- Avoid storing personally identifiable information (PII).
- Clarify that the data is used solely for **academic and research** purposes.

---

## 2. Fairness and Bias

- Examine whether the dataset is **balanced** across classes and demographics (where information is available).
- Discuss potential biases:
  - Over- or under-representation of certain age groups, genders, or language varieties.
  - Cultural and linguistic bias, particularly for **Arabic** mental health expressions.
- Consider mitigation strategies (re-sampling, threshold tuning, transparent reporting).

---

## 3. Non-Diagnostic Use

This project is **not a clinical tool**.

- The system cannot and must not be used to diagnose any mental health condition.
- It is a **research experiment** to understand how models behave on such data.
- Documentation and the web interface will include disclaimers.

---

## 4. Societal Impact

Potential positive impacts:

- Supporting researchers in understanding mental health discourse.
- Assisting in early **risk flagging** in non-clinical settings (e.g., surveys).

Risks:

- Misinterpretation of predictions as professional diagnoses.
- Stigmatization if used without context or consent.

We address these by:

- Including clear warnings.
- Presenting outputs as **probabilities or scores**, not absolute truths.
- Highlighting limitations in the [Results](results/limitations.md) and [Paper](../paper/paper.md).

---

## 5. Sustainability

- Use efficient models (e.g., SVM on embeddings) rather than extremely large models when possible.
- Consider computational cost and energy usage during training.
