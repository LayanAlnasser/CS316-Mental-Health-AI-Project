---
hide:
  - toc
---

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

# Introduction

## Longitudinal AI-Based Monitoring for Depression and Anxiety in Arabic Text

Mental health conditions such as depression and anxiety evolve over time. Traditional assessment tools capture only isolated snapshots, often missing gradual deterioration or emerging risk signals.

This project introduces a trajectory-based AI framework that analyzes Arabic textual narratives to model severity progression and generate structured predictive alerts.

</div>
</div>

---

## Why This Research Matters

<div class="grid cards" markdown>

-   :material-timer-sand: **Mental Health is Dynamic**

    ---
    Psychological conditions fluctuate over time. Static classification fails to capture gradual changes and worsening trends.

-   :material-translate: **Arabic Underrepresentation**

    ---
    Most NLP-based mental health research focuses on English datasets. Arabic remains significantly underrepresented.

-   :material-chart-line: **Need for Longitudinal Modeling**

    ---
    Early detection requires modeling progression, not just isolated severity scores.

</div>

---

## Research Objective

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

To develop a dual-model AI framework that independently classifies depression and anxiety severity from Arabic text and integrates a structured alert system for longitudinal risk monitoring.

</div>
</div>

---

## Core Contributions

<div class="grid cards" markdown>

-   :material-brain: **Dual Independent Classifiers**

    ---
    Separate SVM models predict depression and anxiety severity on a four-level scale.

-   :material-database: **Synthetic Longitudinal Dataset**

    ---
    100 virtual participants with time-stamped Arabic entries to simulate mental health trajectories.

-   :material-alert: **Three-Tier Alert System**

    ---
    - Sustained high severity  
    - Worsening trend detection  
    - Sudden spike alerts  

-   :material-shield-check: **Responsible AI Design**

    ---
    Built as a decision-support research tool with privacy preservation and non-diagnostic boundaries.

</div>

---

## Problem Statement

> Can an embedding-based NLP system classify depression and anxiety severity from Arabic text while modeling temporal progression and generating structured early-warning alerts within ethical constraints?

---

## Scope of the Project

<div class="grid cards" markdown>

-   :material-code-tags: Embedding-based feature generation  
-   :material-cog: SVM classification with RBF kernel  
-   :material-chart-bar: Multi-class evaluation metrics  
-   :material-timeline: Longitudinal trend analysis  
-   :material-application: Prototype research application  
-   :material-scale-balance: Ethical and methodological analysis  

</div>

---

## Positioning

This system is a research-oriented monitoring framework.  
It does not provide medical diagnosis and does not replace clinical evaluation.

It demonstrates how embedding-based NLP models can move from static classification toward structured trajectory modeling for mental health research.

---