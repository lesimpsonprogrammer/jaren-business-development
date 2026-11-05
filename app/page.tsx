const modules = [
  { name: 'Property & Asset Registry', description: 'Oversee business-development ownership, status, and commercial goals for each approved property, application, and asset.' },
  { name: 'Landing Page Performance', description: 'Review traffic, conversion events, lead sources, and calls to action once analytics are connected.' },
  { name: 'Prospect Registry', description: 'Manage companies, contacts, owners, sources, and qualification.' },
  { name: 'Lead Qualification', description: 'Score fit and document verified supporting evidence.' },
  { name: 'Partnership Pipeline', description: 'Track potential partners, next steps, and collaboration opportunities.' },
  { name: 'Outreach Approvals', description: 'Review outbound drafts before any message is sent.' },
  { name: 'Integrations', description: 'Connect MDS, MMS, and CRM services when configured.' },
  { name: 'Portfolio Opportunities', description: 'Connect products and landing pages to campaign opportunities, pipeline value, and follow-up owners.' },
  { name: 'Activity & Reporting', description: 'Track verified outreach, responses, meetings, and pipeline outcomes.' },
];
const metrics = [
  { label: 'Prospects imported', value: '—' },
  { label: 'Qualified leads', value: '—' },
  { label: 'Awaiting approval', value: '—' },
  { label: 'Meetings scheduled', value: '—' },
];
export default function Home() {
  return <main className="shell">
    <aside className="sidebar"><p className="eyebrow">MOMENTUM DATA SOLUTIONS</p><h1>Jaren <span>BD</span></h1><p>Business Development</p><nav aria-label="Primary"><a href="#overview">Overview</a><a href="#modules">Workspaces</a><a href="#readiness">Readiness</a></nav><div className="sideFoot">Phase 1 · Foundation</div></aside>
    <div className="content"><header className="top"><span>Executive Command Center</span><span className="pill">Not connected to live data</span></header>
    <section id="overview" className="hero"><p className="eyebrow">BUSINESS DEVELOPMENT OPERATIONS</p><h2>Turn opportunities into measurable growth.</h2><p>Centralize prospect qualification, partnership research, and approval-led outreach. Live performance metrics will appear after the database and integrations are configured.</p></section>
    <section aria-label="Pipeline metrics" className="metrics">{metrics.map(m=><article className="metric" key={m.label}><div>{m.label}</div><strong>{m.value}</strong><small>Awaiting data connection</small></article>)}</section>
    <section id="modules"><h2>Operational workspaces</h2><p className="muted">Planned modules — not yet active</p><div className="grid">{modules.map(m=><article className="module" key={m.name}><span className="dot" aria-hidden="true" /><h3>{m.name}</h3><p>{m.description}</p><span className="coming">Foundation planned</span></article>)}</div></section>
    <section className="readiness" id="readiness"><h2>Launch readiness</h2><p>The dashboard shell is available for local review. Database provisioning, authentication, tenant isolation, prospect intake, scoring, approval workflow, and integration tests remain outstanding.</p><p className="notice"><strong>Security:</strong> No emails are sent from this build. All future outbound actions must require explicit human approval and an auditable record.</p></section>
    <footer>Jaren BD · An application of Momentum Data Solutions</footer></div>
  </main>;
}
