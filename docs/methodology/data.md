# Data Generation and Preparation

This project uses a **synthetic, longitudinal Arabic text dataset** designed to simulate realistic mental health expressions over time. The dataset enables controlled experimentation while preserving ethical standards related to privacy and sensitive data handling.

---

## Dataset Design

The dataset consists of **2,500 Arabic text entries** representing mental health–related narratives. These entries simulate the experiences of **100 synthetic individuals**, with **25 time-ordered entries per individual**, enabling longitudinal analysis.

Each text entry is independently annotated with two severity labels:

- **Depression severity**
- **Anxiety severity**

Severity levels follow a four-point ordinal scale:

| Score | Severity Level |
|-----|---------------|
| 0 | None |
| 1 | Mild |
| 2 | Moderate |
| 3 | Severe |

The labeling scheme is adapted from established clinical screening instruments, including **PHQ-9** and **GAD-7**, to approximate clinically meaningful severity distinctions without performing diagnosis.

---

## Data Generation Process

The dataset was generated using **AI-assisted text generation**, simulating self-reported mental health statements written in Arabic. Generated narratives reflect a range of emotional states, symptom expressions, and progression patterns across time.

Key characteristics of the data generation process include:

- Representation of **gradual symptom changes**, fluctuations, and sudden shifts
- Variation in linguistic expression to mimic natural writing styles
- Longitudinal consistency within individual trajectories

All data are **synthetic**, and no real individuals or online platforms were involved in data collection.

---

## Ethical Considerations in Data Usage

Using synthetic data ensures:

- No exposure of personal or sensitive health information
- No consent, privacy, or identity risks
- Compliance with responsible AI and research ethics principles

The dataset is intended strictly for **research, experimentation, and educational purposes**.

---

## Data Splitting Strategy

To ensure robust and fair evaluation, the dataset was divided using **stratified random sampling**:

- **Training set:** 70% (1,750 entries)
- **Testing set:** 30% (750 entries)

Stratification preserves proportional representation of all severity levels across both subsets, preventing class imbalance from biasing model evaluation.

---

## Data Preparation

Prior to model training, textual inputs were prepared through:

- Basic text cleaning (removal of extraneous characters)
- Conversion into numerical representations using **embedding-based vectorization**
- Preservation of original sentence-level semantics without manual feature engineering

Details of the embedding process and feature representation are discussed in the **Models** section.

---

## Limitations of the Dataset

While the dataset supports controlled longitudinal experimentation, it has inherent limitations:

- Labels are based on simulated self-report severity rather than clinical diagnoses
- Dialectal variation within Arabic is not explicitly modeled
- Subtle or metaphorical expressions of distress may not be fully captured

These limitations are discussed further in the **Limitations** and **Future Work** sections.
