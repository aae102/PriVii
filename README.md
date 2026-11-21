# PriVii — Private Practice Healthcare Encounter Intelligence Network

Interactive browser-only prototype for independent healthcare practices. **All data are fictional.** It is not a production medical application, HIPAA-certified system, clinical decision support product, or real healthcare integration.

## Run locally
Open `index.html` in a browser. No server, API keys or paid services are needed. Choose an FNP demonstration role.

## FNP demonstration workflow
1. Enter as FNP and view the Overview dashboard.
2. Select Jordan Ellis, 52, hypertension follow-up and fatigue.
3. Open Health Buddy and submit fictional symptoms, medications, questions, and home BP readings such as 132/84.
4. Return to the provider dashboard and open Jordan's Patient Story.
5. Generate a **simulated** editable brief in Digital Care Team. Edit and confirm it as the FNP.
6. Review Practice Signals. The CMS 2027 item is an **unverified placeholder**, not a published rate change.
7. Assign and complete administrative tasks in Action & Resolution.
8. View the updated readiness on Overview. An encounter becomes Ready for visit only after clinician confirmation and resolution of all its demo tasks.

The secondary fictional dermatology scenario is Maya Lin. Her commercial PPO details must not be conflated with Medicare policy watch items.

## Repository files
- `index.html`: browser entry point
- `css/styles.css`: responsive UI design system
- `js/data.js`: synthetic patients, tasks, alerts, practice roles
- `js/app.js`: connected user workflow, state, navigation and interactions
- `docs/ARCHITECTURE.md`: target architecture and future integrations
- `docs/INTERN_BACKLOG.md`: workstream ownership
- `docs/FNP_WALKTHROUGH.md`: December demo sequence
- `docs/TEST_PLAN.md`: regression checklist

## Limitations
Browser localStorage is an **insecure demonstration store**, not a secure production patient database. Role switching is **not authentication or authorization**. No EHR, billing, payer, clearinghouse, messaging or AI service is connected. No real claims, orders, prescriptions or diagnoses occur. The current GitHub implementation uses demo attachment descriptions; it does not provide secure document uploads.

## Engineering rules
Use feature branches and reviewed pull requests. Maintain stable patient/encounter IDs and shared types. Do not merge changes that break intake → brief → clinician confirmation → task resolution → dashboard readiness. Do not enter actual PHI or production credentials. Prioritize FNP usability testing by **December 18, 2026**.