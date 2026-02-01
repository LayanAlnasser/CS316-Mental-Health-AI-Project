# CS316 Mental Health AI Project

A research-focused AI system that applies **Natural Language Processing (NLP)** and **Machine Learning** techniques to analyze mental health–related text.  
The project focuses on identifying **depression** and **anxiety severity levels** from Arabic textual narratives while emphasizing **responsible, ethical, and non-diagnostic AI use**.

**Project Website:**  
[https://layanalnasser.github.io/CS316-Mental-Health-AI-Project/](https://layanalnasser.github.io/CS316-Mental-Health-AI-Project/)

---

## 1. Project Overview

This project investigates the feasibility of **AI-assisted mental health screening** through text analysis. Unlike traditional static assessments, the system is designed to support **longitudinal monitoring** by analyzing changes in mental health expressions over time.

The project was developed as part of the  
**CS316 – Artificial Intelligence and Data Science** course and follows a **research-oriented and ethically grounded approach**.

The system includes:

- Synthetic longitudinal Arabic text data generation  
- Embedding-based text representation  
- Machine learning classifiers for severity prediction  
- Quantitative evaluation using standard classification metrics  
- A lightweight prototype application for demonstration  

---

## 2. Objectives

The main objectives of this project are to:

- Apply AI and NLP techniques to mental health–related text analysis  
- Analyze **Arabic-language narratives**, addressing low-resource NLP challenges  
- Predict **depression and anxiety severity levels** using machine learning  
- Evaluate model performance and reliability  
- Integrate ethical, privacy-aware, and responsible AI principles  
- Deliver reproducible research artifacts aligned with CS316 requirements  

---

## 3. Key Features

- NLP-based text classification using **Support Vector Machines (SVM)**  
- **Embedding-based vectorization** for semantic representation  
- Prediction of **four-level severity scores** (none, mild, moderate, severe)  
- Independent modeling of depression and anxiety  
- Longitudinal trend analysis with alert mechanisms  
- Exportable trained model artifacts (`.pkl`)  
- Fully documented pipeline and methodology  
- Interactive prototype application for academic demonstration  

---

## 4. Architecture & Methodology

**Techniques and tools used:**

- **Text Representation:** Pre-trained multilingual embeddings  
- **Machine Learning Models:** Support Vector Machines with RBF kernel  
- **Evaluation Metrics:** Accuracy, precision, recall, F1-score, ROC/AUC, confusion matrices  
- **Environment:** Python, scikit-learn, pandas, NumPy  
- **Interface:** Lightweight prototype application (educational use only)  

A complete methodological description is provided in the **IEEE-style research paper** included in the documentation.

---

## 5. Dataset

The project uses a **synthetic longitudinal Arabic text dataset** designed to simulate realistic mental health narratives over time.

Dataset characteristics:

- 2,500 text entries  
- 100 synthetic individuals  
- 25 time-ordered entries per individual  
- Severity labels for **depression** and **anxiety** (0–3 scale)  
- Labeling scheme adapted from PHQ-9 and GAD-7  

**Important:**  
All data are **synthetic**. No real individuals, personal data, or online sources were used.

---

## 6. Responsible & Ethical Considerations

Given the sensitive nature of mental health applications, the project emphasizes:

- Privacy preservation through synthetic data  
- Fairness and bias awareness  
- Transparency and interpretability  
- Clear non-diagnostic intent  
- Human oversight and responsible usage  
- Societal and sustainability considerations  

The system is intended for **research, education, and awareness only** and must not be used for clinical diagnosis or treatment.

---

## 7. Installation & Usage

### Prerequisites
- Python 3.9 or later
- pip package manager

---

## © Copyright

© 2026 **Layan Alanasser**. All rights reserved.

This repository and its contents, including source code, documentation, and related materials, are the intellectual property of the author unless otherwise stated.

You may view, clone, and fork this repository for **personal and educational purposes** only.  
Redistribution, modification, or commercial use of this material is not permitted without prior written permission.

Proper attribution must be given if any part of this work is referenced or adapted.

---

### Setup

```bash
git clone https://github.com/LayanAlnasser/CS316-Mental-Health-AI-Project.git
cd CS316-Mental-Health-AI-Project
pip install -r requirements.txt

