/* ── Article content ──────────────────────────────────────── */
var ARTICLES = {

  framework: {
    kicker: 'Implementation Blueprint',
    title:  'Financial Crime Framework Implementation: From Regulation to Execution',
    byline: 'Systems & Insights &nbsp;·&nbsp; AML &nbsp;·&nbsp; Compliance',
    body: [
      '<p>Financial crime compliance is evolving from policy-driven interpretation to execution-driven design. While regulations define what needs to be achieved, organisations often struggle with how to translate those requirements into real systems, workflows, and controls. A financial crime framework must go beyond documentation and define a structured flow across onboarding, identity verification, due diligence, screening, monitoring, and escalation — all connected as part of a single operating model.</p>',
      '<p>From an implementation perspective, the key challenge lies in integrating multiple layers: data sources, decision engines, and operational workflows. Each step requires clear ownership across Compliance, Risk, Fraud Operations, Data Engineering, and Technology, along with defined validation rules and audit trails.</p>',
      '<h2>Where Things Break in Practice</h2>',
      '<p>In practice, many institutions fail not because they lack policies, but because execution is fragmented. KYC may live in one system, sanctions in another, and transaction monitoring in a completely separate platform. This creates blind spots where risk signals are not connected, ownership is unclear, and controls are inconsistently applied.</p>',
      '<p>For example, a customer may pass onboarding checks but later trigger suspicious behaviour in transactions. If systems are not integrated, the monitoring platform may not have full visibility into the original risk profile, leading to delayed or missed detection.</p>',
      '<div class="diagram"><div class="diagram-title">Framework flow</div><div class="flow"><span class="node">Intake</span><span class="arr">&#8594;</span><span class="node">KYC / CIP</span><span class="arr">&#8594;</span><span class="node">CDD</span><span class="arr">&#8594;</span><span class="node">Sanctions / PEP</span><span class="arr">&#8594;</span><span class="node">Monitoring</span><span class="arr">&#8594;</span><span class="node">Case Mgmt</span><span class="arr">&#8594;</span><span class="node">SAR</span></div></div>',
      '<h2>Implementation Approach</h2>',
      '<p>A strong implementation starts with designing the framework as an end-to-end system rather than isolated controls. Each step must clearly define what data is required, which system provides it, what validation is performed, and who owns the process. This ensures every control is traceable, auditable, and connected to upstream and downstream processes.</p>',
      '<p>Architecturally, it requires a mix of real-time APIs for decisioning and batch systems for historical analysis, supported by event-driven pipelines that allow data to flow across systems without delay.</p>',
      '<div class="two-col"><div class="callout"><div class="callout-head">End goal</div><p>Effective risk management — detecting suspicious activity early, reducing false positives, ensuring consistent decision-making, and maintaining full auditability across the customer lifecycle.</p></div><div class="callout"><div class="callout-head">Key principle</div><p>Financial crime frameworks must be designed as dynamic systems that integrate data, processes, architecture, and ownership — not static documents.</p></div></div>',
      '<div class="note"><strong>Live demo</strong><p>See these concepts in action at the <a href="https://ibrandbro.github.io/financial-crime-framework-demo/" target="_blank" style="color:var(--acc-l)">Interactive Financial Crime Framework demo</a>.</p></div>'
    ].join('\n')
  },

  architecture: {
    kicker: 'Architecture',
    title:  'AML Architecture: Real-Time vs Batch',
    byline: 'Systems & Insights &nbsp;·&nbsp; Architecture &nbsp;·&nbsp; Data Engineering',
    body: [
      '<p>Modern AML systems require a hybrid architecture that balances real-time responsiveness with large-scale data processing. Real-time components are critical for onboarding decisions, sanctions screening, and high-risk transaction blocking. At the same time, batch processing plays a key role in historical analysis, feature generation, model training, and large-scale transaction monitoring.</p>',
      '<p>The challenge is not choosing between real-time and batch, but designing a system where both coexist effectively. This involves defining clear boundaries for APIs, event-driven pipelines such as Kafka, and data platforms like data lakes or warehouses.</p>',
      '<h2>Where Things Break in Practice</h2>',
      '<p>Many organisations either over-invest in real-time systems or rely too heavily on batch processing. Real-time-only systems often lack historical context, leading to poor decision quality, while batch-heavy systems introduce delays in detecting high-risk activity.</p>',
      '<p>For example, a suspicious transaction may occur in real time, but if the system depends on overnight batch scoring, the alert is delayed. Conversely, real-time decisions without historical patterns may incorrectly approve high-risk behaviour.</p>',
      '<div class="diagram"><div class="diagram-title">Architecture pattern</div><div class="flow"><span class="node">Customer / Merchant</span><span class="arr">&#8594;</span><span class="node">API Layer</span><span class="arr">&#8594;</span><span class="node">Real-Time Engine</span><span class="arr">&#8594;</span><span class="node">Alert / Block</span></div><div class="flow" style="margin-top:10px"><span class="node">Kafka / Events</span><span class="arr">&#8594;</span><span class="node">Data Lake</span><span class="arr">&#8594;</span><span class="node">Batch Scoring</span><span class="arr">&#8594;</span><span class="node">Monitoring Alerts</span></div></div>',
      '<h2>Implementation Approach</h2>',
      '<p>Organisations should define which decisions require real-time execution and which require historical analysis. APIs should be used for immediate decision points, while event-driven pipelines ensure data is continuously captured and processed for deeper insights.</p>',
      '<p>A unified architecture connects real-time and batch layers through shared data models and consistent validation logic — allowing organisations to act quickly while maintaining analytical depth and regulatory compliance.</p>',
      '<div class="two-col"><div class="callout"><div class="callout-head">End goal</div><p>Build a system that detects and responds to risk in real time while continuously learning from historical data — ensuring both speed and accuracy in financial crime detection.</p></div><div class="callout"><div class="callout-head">Key principle</div><p>A successful AML architecture is not about choosing real-time or batch — it is about integrating both into a cohesive system where each layer reinforces the other.</p></div></div>'
    ].join('\n')
  },

  ownership: {
    kicker: 'Operating Model',
    title:  'Who Owns What in Financial Crime Programs?',
    byline: 'Systems & Insights &nbsp;·&nbsp; Operations &nbsp;·&nbsp; Risk',
    body: [
      '<p>One of the most common failure points in financial crime programs is not technology, but unclear ownership. While multiple teams are involved — Compliance, Risk, Fraud Operations, Data Engineering, and Technology — responsibilities are often loosely defined, leading to gaps in execution.</p>',
      '<p>Without a clear ownership model, even well-designed frameworks can fail. Each team may assume another team is responsible, resulting in delayed decisions, inconsistent controls, and increased regulatory risk. Clear ownership is what turns policy into reliable execution.</p>',
      '<h2>Where Things Break in Practice</h2>',
      '<p>In many organisations, Compliance defines policies but lacks visibility into system implementation. Technology builds platforms but may not fully understand regulatory intent. Fraud Operations handles alerts but may not have control over data quality or thresholds.</p>',
      '<p>This disconnect creates a fragmented system where controls exist but are not effectively executed. During audits, these gaps become visible as inconsistent decision-making, unclear accountability, and lack of traceability.</p>',
      '<div class="diagram"><div class="diagram-title">Ownership model</div><div class="flow" style="margin-bottom:8px"><span class="node">Compliance</span><span class="arr">&#8594;</span><span class="node">Policy &amp; Governance</span></div><div class="flow" style="margin-bottom:8px"><span class="node">Risk</span><span class="arr">&#8594;</span><span class="node">Methodology &amp; Thresholds</span></div><div class="flow" style="margin-bottom:8px"><span class="node">Fraud Ops</span><span class="arr">&#8594;</span><span class="node">Alert Review &amp; Investigation</span></div><div class="flow" style="margin-bottom:8px"><span class="node">Data Engineering</span><span class="arr">&#8594;</span><span class="node">Pipelines &amp; Data Quality</span></div><div class="flow"><span class="node">Technology</span><span class="arr">&#8594;</span><span class="node">Systems &amp; Integration</span></div></div>',
      '<h2>Implementation Approach</h2>',
      '<p>A strong model defines ownership at each step of the workflow. Every control must have a clear owner, along with defined responsibilities for data, decisions, and system execution. This requires cross-functional alignment and governance structures that ensure accountability across teams.</p>',
      '<div class="two-col"><div class="callout"><div class="callout-head">End goal</div><p>Create a system where responsibilities are clearly defined and consistently executed — improving accountability, reducing risk, and supporting stronger regulatory outcomes.</p></div><div class="callout"><div class="callout-head">Key principle</div><p>Ownership is the backbone of any financial crime program. Without it, even the best systems fail. With it, organisations build stronger, more resilient frameworks.</p></div></div>'
    ].join('\n')
  },

  ai: {
    kicker: 'AI in Regulated Workflows',
    title:  'Where AI Fits in Regulated Workflows',
    byline: 'Systems & Insights &nbsp;·&nbsp; AI &nbsp;·&nbsp; Compliance',
    body: [
      '<p>AI is increasingly being introduced into financial crime and compliance workflows, but its role must be carefully defined within a regulated environment. Rather than replacing decision-making, AI is most effective when used to enhance data processing, pattern detection, and operational efficiency.</p>',
      '<p>Applications such as document extraction, anomaly detection, and case summarisation can significantly improve productivity. However, these capabilities must be integrated in a way that maintains transparency, auditability, and regulatory compliance.</p>',
      '<h2>Where Things Break in Practice</h2>',
      '<p>Many organisations attempt to use AI as a replacement for human decision-making, which creates regulatory and operational risks. Black-box models without explainability can lead to compliance failures, governance concerns, and audit challenges.</p>',
      '<p>Poorly integrated AI systems can also introduce inconsistencies in workflows, making it difficult to maintain control over decisions and outcomes. In regulated settings, AI must support the workflow without undermining accountability.</p>',
      '<div class="diagram"><div class="diagram-title">AI integration architecture</div><div class="flow"><span class="node">Input Data</span><span class="arr">&#8594;</span><span class="node">AI Model</span><span class="arr">&#8594;</span><span class="node">Risk Insights</span><span class="arr">&#8594;</span><span class="node">Human Review</span><span class="arr">&#8594;</span><span class="node">Final Decision</span></div></div>',
      '<h2>Implementation Approach</h2>',
      '<p>AI should be implemented as an augmentation layer within existing workflows — assisting in data analysis, highlighting anomalies, and supporting decision-making, while final authority remains with human operators. Human-in-the-loop design is not optional; it is a core requirement of responsible implementation.</p>',
      '<div class="two-col"><div class="callout"><div class="callout-head">End goal</div><p>Improve efficiency and accuracy without compromising control. AI should enhance human decision-making — surfacing insights while leaving judgment to qualified reviewers.</p></div><div class="callout"><div class="callout-head">Key principle</div><p>AI\'s success in regulated workflows depends on careful integration, explainability, and governance at every step — not the sophistication of the model alone.</p></div></div>',
      '<div class="note"><strong>Implementation note</strong><p>In regulated workflows, AI works best as an accelerator, reviewer aid, and evidence-preparation layer — not as a fully autonomous final decision-maker. Design for human-in-the-loop from day one.</p></div>'
    ].join('\n')
  }
};

/* ── Static views ──────────────────────────────────────── */
var CARD_DEFS = [
  { key:'framework',   kicker:'Implementation Blueprint',   title:'Financial Crime Framework: From Regulation to Execution', excerpt:'A practical view of how organisations can design KYC/CIP, CDD, sanctions, monitoring, case management, and SAR escalation as a connected execution framework.' },
  { key:'architecture',kicker:'Architecture',               title:'AML Architecture: Real-Time vs Batch',                  excerpt:'Where APIs, Kafka, event streams, data lakes, and batch platforms fit into AML onboarding, screening, monitoring, and investigation workflows.' },
  { key:'ownership',   kicker:'Operating Model',            title:'Who Owns What in Financial Crime Programs?',            excerpt:'A practical ownership model across Compliance, Fraud Ops, Risk, Data Engineering, and Technology — and why weak ownership leads to weak control execution.' },
  { key:'ai',          kicker:'AI in Regulated Workflows',  title:'Where AI Fits in Regulated Workflows',                  excerpt:'Where AI can actually add value — document extraction, anomaly surfacing, case summarisation — without replacing critical human review.' }
];

function makeCards() {
  return CARD_DEFS.map(function(c) {
    return '<div class="home-card" data-article="' + c.key + '">' +
      '<div class="home-card-kicker">' + c.kicker + '</div>' +
      '<div class="home-card-title">' + c.title + '</div>' +
      '<div class="home-card-excerpt">' + c.excerpt + '</div>' +
      '<span class="read-more">Read more</span>' +
    '</div>';
  }).join('');
}

var VIEWS = {
  home:  '<div class="fade-in">' + makeCards() + '</div>',
  posts: '<div class="fade-in">' + makeCards() + '</div>',
  about: '<div class="fade-in">' +
    '<div class="article-kicker">About this site</div>' +
    '<div class="static-title">Systems &amp;<br>Insights</div>' +
    '<div class="static-body">' +
      '<p>This is a personal publishing platform centred on implementation, systems thinking, architecture, and real-world execution across industries.</p>' +
      '<p>The focus is not on a single topic. Each article explores how organisations design and implement systems, frameworks, and operating models — wherever complex ideas need to be translated into practice.</p>' +
      '<p>Content spans financial crime and AML today, with new topics added over time as the research evolves.</p>' +
    '</div></div>'
};

/* ── Render ─────────────────────────────────────────────── */
var pane     = document.getElementById('content-pane');
var navBtns  = document.querySelectorAll('.nav-btn');
var blogBtns = document.querySelectorAll('.blog-btn');
var bar      = document.getElementById('progress');

function setProgress(pct) { bar.style.width = (pct || 0) + '%'; }

function bindScroll() {
  window.removeEventListener('scroll', window.__prog);
  window.__prog = function() {
    var h = document.body.scrollHeight - window.innerHeight;
    setProgress(h > 0 ? Math.min((window.scrollY / h) * 100, 100) : 0);
  };
  window.addEventListener('scroll', window.__prog, { passive:true });
}

function renderView(key) {
  pane.innerHTML = VIEWS[key] || VIEWS.home;
  window.scrollTo(0, 0);
  setProgress(0);
  navBtns.forEach(function(b) { b.classList.toggle('active', b.dataset.view === key); });
  blogBtns.forEach(function(b) { b.classList.remove('active'); });
  // bind card clicks
  pane.querySelectorAll('.home-card[data-article]').forEach(function(c) {
    c.addEventListener('click', function() { renderArticle(c.dataset.article); });
  });
  bindScroll();
}

function renderArticle(key) {
  var art = ARTICLES[key];
  if (!art) return;
  pane.innerHTML =
    '<div class="fade-in">' +
      '<div class="article-kicker">' + art.kicker + '</div>' +
      '<div class="article-title">' + art.title + '</div>' +
      '<div class="article-byline">' + art.byline + '</div>' +
      '<div class="article-body">' + art.body + '</div>' +
    '</div>';
  window.scrollTo(0, 0);
  setProgress(0);
  navBtns.forEach(function(b) { b.classList.remove('active'); });
  blogBtns.forEach(function(b) { b.classList.toggle('active', b.dataset.article === key); });
  bindScroll();
}

/* ── Nav wiring ─────────────────────────────────────────── */
navBtns.forEach(function(b) {
  b.addEventListener('click', function() { renderView(b.dataset.view); });
});
blogBtns.forEach(function(b) {
  b.addEventListener('click', function() { renderArticle(b.dataset.article); });
});

/* ── Theme toggle ───────────────────────────────────────── */
(function() {
  var root  = document.documentElement;
  var saved = localStorage.getItem('theme') || 'light';
  root.setAttribute('data-theme', saved);
  document.getElementById('theme-toggle').addEventListener('click', function() {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

/* ── Init ───────────────────────────────────────────────── */
renderView('home');
bindScroll();
