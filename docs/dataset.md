---
hide:
  - toc
---

# Project Dataset

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Synthetic Longitudinal Arabic Mental Health Dataset

This project utilizes a custom-designed synthetic dataset built specifically to support longitudinal modeling of depression and anxiety severity from Arabic text.

The dataset enables trajectory analysis rather than static classification.

</div>
</div>

---

## Dataset Overview

<div class="grid cards" markdown>

-   :material-account-group: **Participants**

    ---
    100 virtual participants  
    25 time-stamped text entries per participant  

-   :material-database: **Total Entries**

    ---
    2,500 Arabic text samples representing varying mental health states over time.

-   :material-scale-balance: **Severity Labels**

    ---
    Two independent labels per entry:
    - Depression Score (0 to 3)  
    - Anxiety Score (0 to 3)

-   :material-timeline: **Longitudinal Structure**

    ---
    Each entry includes a participant ID and date field to simulate mental health progression.

</div>

---

## Labeling Framework

Severity levels follow a four-level structure:

- 0 → None  
- 1 → Mild  
- 2 → Moderate  
- 3 → Severe  

The dataset design was inspired by standardized instruments such as PHQ-9 and GAD-7, while remaining fully synthetic to preserve privacy.

---

## Dataset Fields

| Column Name        | Description |
|--------------------|------------|
| Participant_ID     | Unique identifier for each virtual participant |
| Date               | Timestamp representing longitudinal progression |
| Arabic_Text        | Arabic narrative entry |
| Depression_Score   | Severity label from 0 to 3 |
| Anxiety_Score      | Severity label from 0 to 3 |

---

## Ethical Considerations

<div class="grid cards" markdown>

-   :material-shield-check: **Synthetic Data**

    ---
    All entries are AI-generated and manually curated for academic research purposes.

-   :material-lock: **Privacy Preservation**

    ---
    No personal data, real patient records, or identifiable information is included.

-   :material-eye-outline: **Research Use Only**

    ---
    The dataset is intended for experimentation, evaluation, and methodological research.

</div>

---

## Access

The dataset is available for academic review and experimentation within the scope of this project.

[Download Dataset](datasets/mental_health_arabic_dataset.xlsx)

---