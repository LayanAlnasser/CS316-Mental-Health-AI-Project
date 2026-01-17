# Installation

## 1. Clone the Repository

```bash
git clone https://github.com/LayanAlnasser/CS316-Mental-Health-AI-Project.git
cd CS316-Mental-Health-AI-Project
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
```
Ensure your Python version matches the one specified in the course or README (e.g., 3.10+).
```
mkdocs serve
```
Then open http://127.0.0.1:8000 in your browser.

---

### `docs/deployment/app.md`

# Application Usage

The project includes a prototype **web application** that loads the trained models and allows users to enter sample text for classification.

> Note: Replace the commands below with the exact ones you use (e.g., Streamlit vs. Flask).

## 1. Run the Application (Example: Streamlit)

```bash
streamlit run app.py
```

---

## 2. Using the Interface

- Enter a text sample into the input box.

- Choose the type of analysis (e.g., depression, anxiety).

- View the predicted label and model confidence.

## 3. Disclaimers

Add a clear disclaimer in the app:

This tool is for research and educational purposes only.
It is not a medical or clinical diagnostic system.

---

### `docs/deployment/api.md`

# API / Interface (Optional)

If an API layer is added (e.g., Flask/FastAPI), document:

- Endpoints (`/predict`, `/health`, etc.)
- Request/response formats
- Example cURL or Python requests

If no API is used, this page can simply state that the project currently provides **only a web UI**, not a public API.
