# Data Sources & Preprocessing

## 1. Datasets

The project uses one or more mental-health related text datasets, including:

- A labeled dataset for **depression** and **anxiety** expressions.
- An **Arabic mental-health dataset** (e.g., `mental_health_arabic_dataset_new.xlsx`).
- Additional JSON/CSV sources for text entries.

Each entry typically includes:

- A text field (user expression, post, or sentence).
- One or more labels (e.g., depression / anxiety / control).

(Here you can later add exact dataset names, sources, and links.)

---

## 2. Preprocessing Pipeline

Typical steps:

1. **Cleaning**
   - Lowercasing, removal of URLs, emojis (if not used as features), and extra whitespace.

2. **Tokenization**
   - Word-level or subword tokenization depending on the chosen vectorization.

3. **Normalization (Arabic)**
   - Handling common forms (e.g., Alef variations, diacritics removal).
   - Optional stemming or lemmatization.

4. **Vectorization / Embeddings**
   - Classical approaches, e.g., TF-IDF, or
   - Pre-trained embeddings (e.g., word2vec, fastText, or transformer embeddings).

5. **Train/Validation/Test Split**
   - Separate data to evaluate generalization.

You can expand each step with code snippets or references once your notebooks are finalized.
