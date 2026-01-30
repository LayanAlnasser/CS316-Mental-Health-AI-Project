# Project Requirements

This project follows the **CS316 – Artificial Intelligence and Data Science** course project requirements. Specifically, the project must:

- Implement one or more **AI/ML models** relevant to the chosen problem.
- Use appropriate **evaluation metrics** to measure performance.
- Use **real** or **well-documented** datasets.
- Address **ethical, societal, and sustainability** implications.
- Provide **reproducible experiments** and clear documentation.
- Follow an **IEEE-style** research paper format for the written report.
- Deliver a **source code repository** with a clean structure and instructions.
- Present results through a **presentation** and supporting visuals.

## Additional Academic Requirements

In compliance with CS316 project standards, the documentation must also include:

- **Motivation and problem significance**
- **Relevant literature and related work**
- **Dataset documentation** (source, labels, ethics, licensing)
- **Model justification and design choices**
- **Computational considerations and sustainability**
- **Reproducibility details** (versions, seeds, dependencies)
- **Clear disclaimers for non-clinical use**

---

## Deliverables

The final submission must include:

1. **Source Code Repository** (GitHub)
2. **Datasets** or dataset sources (with documentation)
3. **Trained Models** (if applicable)
4. **IEEE-style Research Paper**
5. **Presentation Slides**
6. Optional: **Prototype Application** (e.g., Streamlit, Flask)

---

## Documentation Expectations

The project documentation must cover:

- Problem definition and motivation
- Dataset description and preprocessing methods
- Model selection and reasoning
- Training and evaluation methodology
- Results and interpretation
- Error analysis
- Ethical and societal considerations
- Future work and limitations

---

## Evaluation Criteria (High-Level)

The course rubric evaluates:

- **Correctness** and technical depth
- **Research quality** and literature awareness
- **Model performance** and metrics
- **Code organization & reproducibility**
- **Communication clarity**
- **Ethical reflection**
- **Professional writing & formatting**

Refer to the official CS316 specification for detailed scoring categories and weights.
# Project Requirements

This section outlines the technical, software, and usage requirements for reproducing and interacting with the CS316 Mental Health AI Project.

---

## Software Requirements

- **Python:** Version 3.9 or later  
- **Package Manager:** pip

---

## Core Python Libraries

The following libraries are required to run the experiments and models:

- `numpy` – numerical computations  
- `pandas` – dataset handling and analysis  
- `scikit-learn` – machine learning models and evaluation  
- `matplotlib` – result visualization  
- `seaborn` – statistical visualization  
- `sentence-transformers` or a compatible embedding framework – text embeddings  

---

## Optional Deployment Dependencies

These dependencies are required only for running the interactive application or API:

- `Flask` or `FastAPI` – backend API development  
- `Streamlit` – interactive web-based demo interface  

---

## Hardware Requirements

- Standard CPU-based system
- No GPU is required due to the use of classical machine learning models (e.g., SVM)
- Minimum 8 GB RAM recommended for smooth experimentation

---

## Reproducibility Requirements

- All experiments are reproducible using the provided codebase and documentation
- Dataset files are stored separately from documentation to preserve integrity
- Random seeds and data splits are fixed where applicable to ensure consistent results

---

## Ethical and Usage Constraints

- The system **must not** be used for clinical diagnosis or treatment decisions
- Outputs are intended solely for **educational, research, and awareness purposes**
- Human oversight is required when interpreting results
- Any real-world deployment must comply with ethical AI and mental health governance standards
