---
hide:
  - toc
---

# API Reference

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Research Prototype API

This API documents the prototype interface for the CS316 Mental Health AI Project. It provides severity prediction for depression and anxiety from Arabic text and supports longitudinal alert generation based on score trends.

This is a research and experimentation interface. It is not a medical diagnostic service.

</div>
</div>

---

## Quick Start

<div class="grid cards" markdown>

- :material-link: **Base URL**
  
  ---
  `http://localhost:8000`

- :material-code-tags: **Content Type**
  
  ---
  JSON requests and responses  
  `Content-Type: application/json`

- :material-shield-check: **Authentication**
  
  ---
  None in the course prototype  
  Add an API key if you deploy publicly

- :material-alert: **Important**
  
  ---
  Do not send personal data  
  Use synthetic or consented data only

</div>

---

## Request and Response Format

### Common Request Body Fields

| Field | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | yes | Arabic text input to analyze |
| `participant_id` | string | no | Identifier used for longitudinal tracking |
| `date` | string | no | ISO date like `2026-02-22` |
| `history` | array | no | Prior entries for trend and alerts |

### Common Response Fields

| Field | Type | Description |
|------|------|-------------|
| `depression_score` | integer | Severity level from 0 to 3 |
| `anxiety_score` | integer | Severity level from 0 to 3 |
| `alerts` | array | Alert objects triggered by longitudinal logic |
| `meta` | object | Model and processing metadata |

---

## Severity Scale

| Score | Meaning |
|------:|---------|
| 0 | None |
| 1 | Mild |
| 2 | Moderate |
| 3 | Severe |

---

## Endpoints

## GET `/health`

Returns service status. Useful for deployment checks.

**Response**

```json
{
  "status": "ok",
  "service": "cs316-mental-health-ai",
  "version": "1.0"
}
```

---

## POST `/predict`

Predicts depression and anxiety severity for a single text input.

**Request**

```json
{
  "text": "احس اني تعبانة ومتوترة طول اليوم",
  "participant_id": "P014",
  "date": "2026-02-22"
}
```

**Response**

```json
{
  "depression_score": 2,
  "anxiety_score": 2,
  "alerts": [],
  "meta": {
    "embedding_model": "EmbeddingGemma-300M",
    "classifier": "SVM-RBF",
    "language": "ar"
  }
}
```

**cURL**

```bash
curl -X POST "http://localhost:8000/predict" \
  -H "Content-Type: application/json" \
  -d '{"text":"احس اني تعبانة ومتوترة طول اليوم","participant_id":"P014","date":"2026-02-22"}'
```

---

## POST `/alerts`

Generates longitudinal alerts using recent score history.
Use this when you already have multiple time points and want alert logic applied.

### Alert Types Implemented

<div class="grid cards" markdown>

* :material-alert-circle: **High Score Alert**

  ---

  Trigger: average score is at least 2 over the most recent 3 entries

* :material-trending-up: **Worsening Trend Alert**

  ---

  Trigger: average increase is greater than 0.5 over 3 consecutive entries

* :material-flash-alert: **Sudden Spike Alert**

  ---

  Trigger: increase of at least 2 points between consecutive entries

</div>

**Request**

```json
{
  "participant_id": "P014",
  "history": [
    { "date": "2026-02-10", "depression_score": 1, "anxiety_score": 1 },
    { "date": "2026-02-16", "depression_score": 2, "anxiety_score": 2 },
    { "date": "2026-02-22", "depression_score": 3, "anxiety_score": 2 }
  ]
}
```

**Response**

```json
{
  "participant_id": "P014",
  "alerts": [
    {
      "type": "HighScore",
      "target": "depression",
      "window": 3,
      "triggered": true,
      "reason": "Average depression score over the last 3 entries is 2.0 or higher"
    },
    {
      "type": "WorseningTrend",
      "target": "depression",
      "window": 3,
      "triggered": true,
      "reason": "Average increase over 3 consecutive entries exceeds 0.5"
    }
  ]
}
```

---

## POST `/predict-with-alerts`

Runs prediction and alerting in one call.
Use this when you want the new text to be scored and then compared to recent history.

**Request**

```json
{
  "text": "احس اني ضايعة وما اقدر اتحمل",
  "participant_id": "P014",
  "date": "2026-02-24",
  "history": [
    { "date": "2026-02-10", "depression_score": 1, "anxiety_score": 1 },
    { "date": "2026-02-16", "depression_score": 2, "anxiety_score": 2 },
    { "date": "2026-02-22", "depression_score": 3, "anxiety_score": 2 }
  ]
}
```

**Response**

```json
{
  "depression_score": 3,
  "anxiety_score": 3,
  "alerts": [
    {
      "type": "HighScore",
      "target": "depression",
      "window": 3,
      "triggered": true,
      "reason": "Average depression score over the last 3 entries is 2.0 or higher"
    },
    {
      "type": "SuddenSpike",
      "target": "anxiety",
      "triggered": true,
      "reason": "Anxiety increased by 2 points compared to the previous entry"
    }
  ],
  "meta": {
    "embedding_model": "EmbeddingGemma-300M",
    "classifier": "SVM-RBF",
    "language": "ar"
  }
}
```

---

## Error Handling

The API returns standard HTTP status codes.

| Code | Meaning                           |
| ---: | --------------------------------- |
|  200 | Success                           |
|  400 | Invalid request or missing fields |
|  415 | Unsupported content type          |
|  500 | Server error                      |

**Example Error**

```json
{
  "error": "ValidationError",
  "message": "Field `text` is required"
}
```

---

## Responsible Use

!!! warning
This system is a research prototype for early awareness and longitudinal monitoring experiments.
It is not intended for diagnosis, treatment decisions, or emergency use.

Recommended safeguards for public deployment:

* API key authentication
* Rate limiting
* Logging with sensitive-data filtering
* Clear consent and disclosure
* Human-in-the-loop review for any high-risk alert workflows

---

## Python Example

```python
import requests

BASE = "http://localhost:8000"

payload = {
    "text": "اليوم احس بتوتر وخوف قوي",
    "participant_id": "P022",
    "date": "2026-02-22"
}

r = requests.post(f"{BASE}/predict", json=payload, timeout=30)
r.raise_for_status()
print(r.json())
```