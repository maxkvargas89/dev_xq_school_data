Overview

This dbt project transforms raw school partnership data into clean, documented, and analytics-ready models in BigQuery. It supports internal reporting, impact analysis, and executive insights across partner organizations.

Use cases:
	•	Track school partnership milestones
	•	Analyze student outcomes across partner schools
	•	Monitor progress against initiative KPIs
	•	Provide self-serve analytics to stakeholders

Project Structure
.
├── definitions/
│   ├── sources/         # Raw data
│   ├── intermediate/    # Core transformations and joins
│   ├── outputs/         # Final models for analysis and reporting
├── workflow_settings.yml
└── README.md

Prerequisites
	•	Access to dataform
	•	Access to BigQuery
	•	Looker for downstream dashboards

Data Modeling Approach
This project follows a modular design:
	•	Source models standardize column names and formats
	•	Intermediate models apply business logic and joins
	•	Output models are used for dashboards, impact reports, and self-serve analytics

 Data Governance
	•	All models align with our internal Data Governance Strategy
	•	Key metrics and definitions documented in the data dictionary

Author
Max Vargas
