# Future Work

While this project demonstrates strong performance in classifying mental health–related text, several opportunities exist for future improvement and extension.

## Dataset Expansion and Validation
- Incorporate larger and more diverse datasets, including different Arabic dialects and writing styles.
- Validate model predictions against clinically annotated data or structured interviews conducted by mental health professionals.
- Explore semi-supervised or weakly supervised approaches to reduce labeling dependency.

## Longitudinal and Sequential Modeling
- Replace sentence-level independent classification with **sequence-aware models** such as LSTM or Transformer-based architectures.
- Explicitly model temporal dependencies between consecutive entries to better capture symptom progression over time.
- Integrate user-level context to improve trend detection and alert reliability.

## Domain-Specific Language Representation
- Fine-tune embedding models on mental health–specific Arabic corpora to better capture indirect expressions, metaphors, and emotional nuance.
- Explore explainable embedding techniques to improve interpretability of predictions.

## Multi-Task and Comorbidity Modeling
- Model depression and anxiety jointly using multi-task learning to capture shared symptom patterns.
- Investigate correlations between multiple mental health indicators rather than treating them independently.

## Responsible Deployment Considerations
- Conduct user studies to evaluate usability, interpretability, and perceived trust.
- Explore human-in-the-loop systems where AI outputs support—not replace—professional judgment.
- Assess deployment risks and safeguards before real-world use.
