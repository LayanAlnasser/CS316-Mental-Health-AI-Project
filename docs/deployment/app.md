---
hide:
  - toc
---

# Application and Usage

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Mental Health Monitoring Prototype

This application demonstrates how embedding-based NLP models and SVM classifiers can be integrated into a functional longitudinal monitoring system.

The prototype accepts Arabic text input, predicts depression and anxiety severity levels, and generates structured alerts based on temporal trends.

This is a research prototype intended for experimentation and demonstration purposes only.

</div>
</div>

---

## System Workflow

<div class="grid cards" markdown>

- :material-text-box: **1. Text Input**

  ---
  The user provides an Arabic narrative entry along with an optional participant ID and timestamp.

- :material-vector-polyline: **2. Embedding Generation**

  ---
  The text is converted into a 768-dimensional vector representation using a multilingual embedding model.

- :material-cog: **3. Severity Prediction**

  ---
  Two independent SVM classifiers predict:
  - Depression severity (0 to 3)
  - Anxiety severity (0 to 3)

- :material-timeline-alert: **4. Alert Evaluation**

  ---
  Recent historical scores are analyzed to detect:
  - Sustained high severity
  - Worsening trends
  - Sudden spikes

- :material-file-chart: **5. Output Response**

  ---
  The system returns severity scores and any triggered alert categories.

</div>

---

## Running the Application

### Local Execution

1. Clone the repository.
2. Install dependencies:

```bash
pip install -r requirements.txt
````

3. Start the application server:

```bash
python app.py
```

4. Open your browser at:

```
http://localhost:8000
```

---

## Example Usage

### Input

```json
{
  "text": "احس اني متعبة وما عندي طاقة",
  "participant_id": "P023",
  "date": "2026-02-22"
}
```

### Output

```json
{
  "depression_score": 2,
  "anxiety_score": 1,
  "alerts": []
}
```

---

## Alert Logic Overview

<div class="grid cards" markdown>

* :material-alert-circle: **High Score Alert**

  ---

  Triggered when the average score over the last three entries is 2 or higher.

* :material-trending-up: **Worsening Trend Alert**

  ---

  Triggered when the average increase exceeds 0.5 across three consecutive entries.

* :material-flash: **Sudden Spike Alert**

  ---

  Triggered when the score increases by 2 points between consecutive entries.

</div>

---

## Intended Use

The application is designed as a structured research demonstration of longitudinal mental health modeling.

It is not:

* A diagnostic tool
* A medical recommendation system
* A replacement for clinical evaluation

It is intended for:

* Academic experimentation
* AI methodology demonstration
* Longitudinal modeling research

---

## Deployment Considerations

If deployed beyond local testing, the following safeguards are recommended:

* Authentication and access control
* Secure logging with sensitive data filtering
* Rate limiting
* Human-in-the-loop review for high-risk alerts
* Clear user disclaimers and consent mechanisms

---

## Technical Stack

| Component       | Technology                                     |
| --------------- | ---------------------------------------------- |
| Embedding Model | Multilingual embedding model (768-dim vectors) |
| Classifier      | Support Vector Machine with RBF kernel         |
| Backend         | Python-based API service                       |
| Data            | Synthetic longitudinal Arabic dataset          |

---

## Limitations

* Performance is evaluated on synthetic data.
* Real-world deployment requires clinical validation.
* Alert thresholds are rule-based and may require calibration.