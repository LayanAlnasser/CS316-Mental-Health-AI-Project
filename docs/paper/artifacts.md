---
hide:
  - toc
---

# Project Artifacts

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Research Deliverables and Reproducible Outputs

This section summarizes the primary artifacts generated during the development of the CS316 Mental Health AI Project.  

All artifacts are structured to support transparency, reproducibility, and academic evaluation.

</div>
</div>

---

## Core Research Artifacts

<div class="grid cards" markdown>

- :material-file-document: **IEEE-Style Research Paper**

  ---
  Location: `paper/paper.md`  
  Complete academic documentation including methodology, longitudinal alert framework, experimental results, and ethical analysis.

- :material-database: **Synthetic Longitudinal Dataset**

  ---
  Location: `datasets/mental_health_arabic_dataset.xlsx`  
  2,500 Arabic text entries with depression and anxiety severity labels across simulated time progression.

- :material-code-tags: **Trained Model Files**

  ---
  Format: `.pkl` serialized models  
  Independent SVM classifiers for depression and anxiety severity prediction.

</div>

---

## Methodology and Experimental Documentation

<div class="grid cards" markdown>

- :material-flask: **Methodology**

  ---
  Location: `methodology/`  
  Covers data generation, embedding strategy, model architecture, and evaluation pipeline.

- :material-chart-bar: **Results and Analysis**

  ---
  Location: `results/`  
  Includes quantitative metrics, ROC analysis, embedding visualization, and error interpretation.

- :material-alert-circle: **Limitations**

  ---
  Located within the results documentation to outline methodological and practical constraints.

</div>

---

## Deployment and Interface Artifacts

<div class="grid cards" markdown>

- :material-application: **Prototype Application**

  ---
  Location: `deployment/app.md`  
  Demonstrates severity prediction and longitudinal alert logic through an interactive interface.

- :material-api: **API Interface Documentation**

  ---
  Location: `deployment/api.md`  
  Documents programmatic access layer if implemented.

- :material-download: **Installation Instructions**

  ---
  Location: `deployment/install.md`  
  Environment setup and documentation preview guidance.

</div>

---

## Presentation Materials

<div class="grid cards" markdown>

- :material-presentation: **Slides**

  ---
  Location: `paper/slides.md`  
  Academic presentation summarizing research objectives, methodology, and results.

- :material-folder-outline: **Supporting Artifacts**

  ---
  Location: `paper/artifacts.md`  
  Supplementary materials and visual outputs used in evaluation.

</div>

---

## Reproducibility Commitment

The repository structure, dataset documentation, serialized models, and evaluation reports are organized to enable:

- Replication of experiments  
- Verification of performance metrics  
- Inspection of modeling decisions  
- Transparent review of ethical safeguards  

This project is intended for educational and research purposes.  
It does not provide medical diagnosis or clinical decision-making functionality.

---