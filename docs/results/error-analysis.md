# Error Analysis

This section focuses on understanding **where and why** the models fail.

## 1. Misclassified Examples

- Collect examples where the model prediction ≠ ground truth.
- Group them by type of error (e.g., sarcasm, very short text, ambiguous wording).

## 2. Patterns in Errors

- Are certain labels more difficult?
- Are Arabic or English entries misclassified more often?
- Does slang, dialect, or code-switching cause issues?

## 3. Lessons Learned

- Data augmentation or cleaning needs.
- Need for larger or more diverse datasets.
- Potential role of transformer-based models.

These insights will feed into the [Limitations](limitations.md) and [Future Work](../documentation/future-work.md) sections.
