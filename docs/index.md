<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# CS316 · Mental Health AI Project

**Embedding-Based Longitudinal Monitoring for Depression and Anxiety Severity (Arabic NLP)**

This project applies Natural Language Processing and Machine Learning to analyze Arabic textual narratives related to mental health.

The system evaluates depression and anxiety severity using embedding-based representations and classical classifiers. It extends beyond static prediction by integrating a trajectory-based alert framework for early risk detection.

Developed for CS316, Artificial Intelligence and Data Science (Semester 252) at Prince Sultan University. The project follows a research-oriented and responsible AI methodology.

[View Project Overview](introduction.md){ .md-button .md-button--primary }
[Read IEEE Paper Draft](paper/paper.md){ .md-button }

</div>
</div>

---

## What This Project Does

<div class="grid cards" markdown>

-   :material-brain: **Severity Classification**

    ---
    Dual-model architecture predicts depression and anxiety severity independently on a 0 to 3 scale using embedding-based feature representations and SVM classifiers.

-   :material-chart-line: **Longitudinal Monitoring**

    ---
    Instead of one-time screening, the system tracks mental health trajectories across multiple time points to detect meaningful changes.

-   :material-alert: **Predictive Alert Mechanism**

    ---
    Three alert categories identify:

    - Sustained high severity  
    - Gradual worsening trends  
    - Sudden severity spikes  

    This supports early awareness and intervention research.

-   :material-shield-check: **Responsible AI Framework**

    ---
    Designed as a decision-support research tool, not a diagnostic system.
    Emphasizes privacy, synthetic data usage, transparency, and fairness.

</div>

---

## Technical Foundation

<div class="grid cards" markdown>

-   :material-translate: **Arabic NLP**

    ---
    Uses multilingual embedding models to represent Arabic text in high-dimensional semantic space.

    [Methodology](methodology/data.md)

-   :material-cog: **Machine Learning**

    ---
    Support Vector Machines with RBF kernel trained using stratified sampling for robust multi-class classification.

    [Model Details](methodology/models.md)

-   :material-chart-bar: **Experimental Results**

    ---
    High classification accuracy with strong macro-averaged performance and high AUC scores.

    [Results and Analysis](results/findings.md)

-   :material-rocket-launch: **Deployment**

    ---
    Demonstrates how the system can be used for research experiments and controlled evaluation.

    [Deployment Guide](deployment/app.md)

</div>

---

## Project Summary

This project investigates how embedding-based NLP models combined with classical machine learning can support structured and longitudinal assessment of mental health indicators in Arabic text.

Rather than replacing clinical evaluation, the system functions as a research-driven early warning monitoring tool. It integrates semantic embeddings, multi-class severity prediction, and temporal alert logic within a responsible AI framework.

The emphasis is on:

- Technical rigor  
- Ethical AI design  
- Reproducibility  
- Transparent evaluation  

---
