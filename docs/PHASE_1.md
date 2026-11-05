# Jaren BD — Phase 1 Delivery Plan

## Mission
Jaren BD is the business-development oversight hub for **Momentum Data Solutions** and its portfolio of properties, digital assets, product applications, and landing pages. It owns business-development visibility and growth operations, not production infrastructure or security administration.

## Scope
1. **Property & asset registry:** inventory each approved property, product, service, asset, campaign, and landing page. Track canonical URL, owning team, lifecycle stage, audience, value proposition, CTA, opportunity owner, priorities, review date, and commercial status.
2. **Landing-page oversight:** connect page-level lead capture, referral/source attribution, conversion goals, campaign identifiers, and responsible owner. No fabricated analytics; show an unconnected state until verified telemetry exists.
3. **Portfolio opportunities:** tie prospects and partner opportunities to specific MDS assets and offerings, including per-property pipeline and approved next steps.
4. **Prospect & partnership management:** research, deduplicate and qualify leads; record evidence, sources, relevance, disposition, owner and follow-up.
5. **Outreach approvals:** draft, review, approve, reject, and audit outbound messages. Never send without specific human authorization and configured provider.
6. **Executive reporting:** verified pipeline metrics by asset, property, landing page, campaign and owner; no invented activity.

## Operating boundaries
- **Jaren BD:** growth strategy, prospecting, partnerships, conversion opportunities, approved outreach.
- **MMS:** marketing execution, SEO, GA/analytics collection and campaigns; share authorized performance summaries with Jaren BD.
- **GLASS:** security, governance, incident alerts and access controls; Jaren BD receives permitted health/status signals, not administrative powers.
- **Product teams:** application functionality, product release readiness, pricing and operational ownership.
- **Momentum Intelligence:** portfolio-wide reporting source where approved and connected; avoid duplicate authoritative metrics.

## Initial registry candidates (verification required before activation)
- Momentum Data Solutions website and its HR, payroll, data-management, solutions, projects and support landing pages.
- Data Preview and its acquisition/landing experiences.
- Alba Reset and approved product landing pages.
- Cloud Performance Service Manager and Cloud Performance Deploy + Host.
- HR Business Pro Suite and HR Investigator Pro (landing URLs pending verification).
- Momentum Marketing Services, Momentum Intelligence, GLASS and other authorized portfolio assets.

These names are **proposed seed entries**, not claims of discovered live pages, working integrations, or current performance.

## Implementation milestones
1. Next.js/TypeScript dashboard shell with responsive workspaces and honest disconnected states.
2. Database schema for tenants, properties, assets, landing pages, campaigns, traffic metrics, prospects, contacts, opportunities, partner records, outreach drafts and audit events.
3. Identity and Access controls, least privilege and tenant isolation enforced in API and database.
4. Verified canonical URL and ownership registry; avoid collecting secrets or customer PII in Git.
5. Authorized analytics connectors and attribution, with distinct data provenance and measurement periods.
6. ICP scoring and prospect workflows linked to particular assets and landing pages.
7. Human-approved outreach and consent/suppression controls.
8. Read-only MMS/GLASS/MI integration contracts with permission-scoped endpoints.
9. Automated tests, permission checks, security scan, deployment review and production rollout.

## Acceptance criteria
- Every active property has a verified owner and canonical URL.
- Metrics include source, measurement period and freshness.
- No outreach sent without human approval.
- No fake pipeline, contacts or revenue displayed.
- No external property changes are made by Jaren BD without proper owner authorization.
- Secrets and personal/contact information are excluded from the public code repository.
