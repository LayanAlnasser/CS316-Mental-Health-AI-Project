---
hide:
  - toc
---

# Project Requirements

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Academic, Technical, and Reproducibility Standards

This project satisfies the requirements of CS316 – Artificial Intelligence and Data Science while adhering to structured research, ethical AI principles, and reproducible engineering practices.

</div>
</div>

---

# Academic Requirements

## Course Alignment

The project fulfills the following CS316 criteria:

<div class="grid cards" markdown>

- :material-brain: **AI / ML Implementation**

  ---
  Implementation of embedding-based NLP models and SVM classifiers for severity prediction.

- :material-chart-bar: **Evaluation Metrics**

  ---
  Performance assessed using accuracy, precision, recall, F1-score, and AUC.

- :material-database: **Well-Documented Dataset**

  ---
  Synthetic longitudinal Arabic dataset with structured labeling.

- :material-scale-balance: **Ethical Reflection**

  ---
  Privacy, fairness, transparency, and non-diagnostic boundaries addressed.

- :material-repeat: **Reproducibility**

  ---
  Structured documentation of preprocessing, modeling, and evaluation.

- :material-file-document: **IEEE-Style Paper**

  ---
  Research findings documented in formal academic format.

- :material-github: **Source Repository**

  ---
  Clean, modular repository with installation instructions.

- :material-presentation: **Technical Presentation**

  ---
  Slides and supporting materials summarizing methodology and results.

</div>

---

## Documentation Expectations

The documentation includes:

- Problem definition and research motivation  
- Literature awareness and related work  
- Dataset design and ethical considerations  
- Model justification and architectural choices  
- Experimental methodology  
- Results and error analysis  
- Limitations and future directions  
- Clear non-clinical disclaimers  

---

# Technical Requirements

## Software Environment

- Python 3.9 or later  
- pip package manager  

---

## Core Dependencies

- `numpy` for numerical computation  
- `pandas` for dataset processing  
- `scikit-learn` for SVM classification and evaluation  
- `matplotlib` and `seaborn` for visualization  
- Embedding framework compatible with multilingual embeddings  

---

## Optional Deployment Dependencies

Required only for interactive prototype:

- `Streamlit` for web interface  
- or `Flask` / `FastAPI` for API layer  

---

## Hardware Requirements

- Standard CPU-based system  
- GPU not required  
- 8 GB RAM recommended  

---

# Reproducibility Standards

<div class="grid cards" markdown>

- :material-repeat: **Fixed Random Seeds**

  ---
  Data splits and randomness controlled where applicable.

- :material-folder-lock: **Dataset Integrity**

  ---
  Synthetic dataset stored separately from documentation.

- :material-file-cog: **Dependency Documentation**

  ---
  Requirements file ensures consistent environment recreation.

</div>

---

# Ethical and Usage Constraints

<div class="grid cards" markdown>

- :material-alert: **Non-Diagnostic Use**

  ---
  The system must not be used for medical diagnosis or treatment decisions.

- :material-account-check: **Human Oversight**

  ---
  Professional interpretation is required for any practical application.

- :material-shield-check: **Responsible Deployment**

  ---
  Real-world use requires governance, auditing, and compliance safeguards.

</div>

---

## Evaluation Criteria

The project is assessed on:

- Technical correctness and depth  
- Research quality and methodological rigor  
- Model performance and metric interpretation  
- Code organization and reproducibility  
- Communication clarity  
- Ethical awareness  
- Professional documentation standards  

Refer to the official CS316 specification for detailed scoring breakdowns.

---