---
hide:
  - toc
---

# Installation

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Environment Setup and Documentation Preview

This section explains how to clone the repository, set up the Python environment, install dependencies, and preview the documentation site locally.

</div>
</div>

---

## 1. Clone the Repository

```bash
git clone https://github.com/LayanAlnasser/CS316-Mental-Health-AI-Project.git
cd CS316-Mental-Health-AI-Project
```

---

## 2. Create and Activate Virtual Environment

```bash
python -m venv .venv
```

### macOS / Linux

```bash
source .venv/bin/activate
```

### Windows

```bash
.venv\Scripts\activate
```

---

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

Ensure Python 3.10 or higher is installed.

---

## 4. Run Documentation Site

To preview the MkDocs documentation locally:

```bash
mkdocs serve
```

Then open:

```
http://127.0.0.1:8000
```

This launches the project documentation interface.

---

# `docs/deployment/app.md`

This version removes placeholder tone and aligns with your longitudinal system.

# Application Usage

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Prototype Mental Health Monitoring Interface

The project includes a research prototype application that loads trained embedding and SVM models to classify depression and anxiety severity from Arabic text.

The interface demonstrates how longitudinal prediction and alert logic can operate in practice.

</div>
</div>

---

## Running the Application

If the application is implemented using Streamlit:

```bash
streamlit run app.py
````

If implemented using a Python server framework:

```bash
python app.py
```

Open the local URL shown in the terminal.

---

## Using the Interface

<div class="grid cards" markdown>

* :material-text-box: **Enter Arabic Text**

  ---

  Provide a mental health related narrative sample.

* :material-chart-line: **View Severity Prediction**

  ---

  The system predicts depression and anxiety severity levels on a scale from 0 to 3.

* :material-alert: **Review Alerts**

  ---

  If historical data is provided, longitudinal alerts may be triggered based on score trends.

</div>

---

## Output Interpretation

Severity levels:

| Score | Meaning  |
| ----: | -------- |
|     0 | None     |
|     1 | Mild     |
|     2 | Moderate |
|     3 | Severe   |

Alerts may include:

* Sustained high severity
* Worsening trend
* Sudden spike

---

## Important Notice

This application is a research demonstration.

It is not a diagnostic tool and does not replace professional mental health evaluation.

---

# `docs/deployment/api.md`

This version handles both possibilities cleanly.

# API Interface

<div class="home-hero" markdown>
<div class="home-hero__text" markdown>

## Programmatic Access Layer

The current project primarily provides a research web interface.

If an API layer is implemented, this section documents its endpoints and usage.

</div>
</div>

---

## Current Status

The project currently provides:

- A local research web application  
- No public production API  

If an API is added using Flask or FastAPI, the following endpoints are recommended.

---

## Example Endpoints

### GET `/health`

Returns system status.

### POST `/predict`

Request:

```json
{
  "text": "احس اني تعبانة ومتوترة",
  "participant_id": "P012",
  "date": "2026-02-22"
}
```

Response:

```json
{
  "depression_score": 2,
  "anxiety_score": 2,
  "alerts": []
}
```

---

## Deployment Considerations

If exposing an API publicly, implement:

* Authentication
* Rate limiting
* Secure logging
* Consent disclosure
* Human oversight for high-risk alerts

---

## Research Positioning

This interface is designed for experimentation and demonstration within an academic context.

It is not a medical service.