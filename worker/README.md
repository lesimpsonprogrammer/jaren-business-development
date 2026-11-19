# Jaren Business Development Worker v1.2

Cloudflare Worker providing a public `GET /health` endpoint and authenticated `POST /v1/outreach/draft` endpoint.

**No messages are sent. No prospect records are stored.** Drafts require manual review.

Deploy from `worker/` using `npx wrangler deploy` after reviewing permissions. Configure a strong secret with `npx wrangler secret put BD_API_TOKEN` to enable drafting. Never commit it.

Request example:

```http
POST /v1/outreach/draft
Authorization: Bearer <token>
Content-Type: application/json

{"company":"Example Contractor","focus":"inquiries","sender":"Larry Simpson"}
```

Supported focus values: `inquiries`, `workflow`, `data`, `hr`. Unauthorized calls fail. There is no CORS access for browser frontends yet. Full CRM storage, workflow scheduling and communication integrations require a separate implementation and security review.
