---
hide:
  - toc
---

# Data Generation and Preparation

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Synthetic Longitudinal Arabic Mental Health Dataset

To enable trajectory-based experimentation while preserving ethical safeguards, this project employs a fully synthetic longitudinal dataset designed to simulate realistic mental health narratives over time.

The dataset supports severity prediction and structured alert modeling without involving real clinical records.

</div>
</div>

---

## Dataset Structure

The dataset contains **2,500 Arabic text entries** corresponding to **100 synthetic participants**, each with **25 time-ordered entries**. This structure enables modeling of symptom progression across multiple time points.

Each entry includes:

- `Participant_ID`
- `Date` (time index for longitudinal tracking)
- `Arabic_Text`
- `Depression_Score`
- `Anxiety_Score`

Severity labels follow a four-level ordinal scale:

| Score | Severity |
|------:|----------|
| 0 | None |
| 1 | Mild |
| 2 | Moderate |
| 3 | Severe |

The labeling scheme is inspired by established screening instruments such as PHQ-9 and GAD-7. The scores approximate clinically meaningful distinctions while remaining non-diagnostic.

---

## Data Generation Methodology

Text entries were generated using AI-assisted text synthesis to simulate self-reported mental health narratives in Arabic.

Generation was guided by the following design principles:

- Representation of gradual symptom progression  
- Inclusion of fluctuations and episodic worsening  
- Consistency within participant-level trajectories  
- Variation in linguistic tone and intensity across severity levels  

The synthetic approach ensures controlled class distribution while preserving ethical integrity.

No real individuals, social media content, or clinical records were used.

---

## Ethical Rationale for Synthetic Design

Using synthetic data provides:

- Privacy preservation by design  
- Elimination of identifiable health information  
- Avoidance of consent-related risks  
- Controlled experimentation without harm  

This dataset is intended exclusively for research and educational purposes.

---

## Data Splitting Strategy

To evaluate model generalization fairly, the dataset was partitioned using **stratified random sampling**:

- Training set: 1,750 entries (70 percent)  
- Testing set: 750 entries (30 percent)  

Stratification preserves proportional representation of all severity levels across subsets, ensuring balanced evaluation across classes.

---

## Text Preparation and Feature Representation

Minimal preprocessing was applied to preserve semantic richness:

- Removal of extraneous formatting artifacts  
- Retention of original sentence-level structure  

Rather than manual feature engineering, text entries were converted into dense numerical vectors using a multilingual embedding model with 768-dimensional output.

This embedding-based approach captures contextual semantics and reduces reliance on handcrafted linguistic features.

Further details of the embedding architecture and classification framework are provided in the **Models** section.

---

## Dataset Limitations

Despite supporting controlled longitudinal experimentation, the dataset has important constraints:

- Severity labels are simulated rather than clinically validated  
- Dialectal and colloquial diversity within Arabic is not explicitly modeled  
- Implicit, metaphorical, or culturally nuanced expressions may not be fully represented  
- Synthetic distributions may exhibit clearer class boundaries than real-world data  

These constraints limit direct generalization and motivate future real-world validation.

---