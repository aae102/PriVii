# PriVii system architecture
Four coordinated workspaces: Patient Story/Health Buddy, Provider Digital Care Team, Practice Signals, and Action & Resolution. The No-Surprise Intelligence Layer needs explicit provenance labels: Patient-reported, Documented, AI-suggested, Clinician-confirmed, Payer-verified, Simulated.

## Demo implementation
Static HTML, CSS and JavaScript. A common fictional state object is seeded by js/data.js and held in browser localStorage. The UI is entirely simulated and must never receive PHI. Role switching is a user-interface demo, not server authorization.

## Planned production models
Practice(id, specialty, region, payer_mix); User(id, practice_id, role); Patient(id, practice_id, ehr_id); Encounter(id, patient_id, visit_at); Intake(id, encounter_id, fields, source); Attachment(id, encounter_id, object_key, media_type); Brief(id, encounter_id, revision, text, reviewed_by, reviewed_at); PayerPolicy(id, source_url, publication_date, effective_date, verification_status); Action(id, encounter_id, owner, state); AuditEvent(id, actor, entity, action, at).

## Suggested API contracts
POST /v1/encounters/:id/intake
GET /v1/encounters/:id/story
POST /v1/encounters/:id/briefs/draft
PATCH /v1/briefs/:id
POST /v1/briefs/:id/confirm
GET /v1/practices/:id/payer-signals
POST /v1/encounters/:id/actions
PATCH /v1/actions/:id
GET /v1/encounters/:id/readiness

All endpoints require real server-side authorization, object access checks, validation and auditing.

## Future integrations
EHR patient/encounter/medication retrieval with appropriately supported SMART-on-FHIR/FHIR integrations, scheduling through a practice management adapter, billing/claims via clearinghouse adapters, verified payer policy and eligibility sources, consented patient messaging, encrypted file storage, and secure identity. Do not promise specific EHR vendor compatibility until verified.

## Security and compliance
Formal HIPAA applicability assessment, counsel-led privacy review, BAAs where applicable, least-privilege tenant RBAC, authentication, encryption in transit and at rest, audit logs, verified provenance, clinical oversight, attachment scanning, secure storage, backups, retention policy, incident response, accessibility, threat modeling and tested release gates. Browser localStorage is never a clinical data store. A clicked Reviewed indicator must never become Payer-verified. The CMS 2027 watch placeholder is unverified and does not apply to Maya's fictional commercial PPO automatically.