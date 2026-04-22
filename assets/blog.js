/* ── Single combined article ─────────────────────────────── */
var ARTICLE = {
  kicker: 'Financial Crime',
  title:  'A Complete Guide to Financial Crime Implementation',
  byline: 'Systems & Insights &nbsp;·&nbsp; AML &nbsp;·&nbsp; Compliance &nbsp;·&nbsp; Architecture &nbsp;·&nbsp; AI',
  body: [

    /* ── INTRO ── */
    '<p>Financial crime compliance is evolving from policy-driven interpretation to execution-driven design. While regulations define what needs to be achieved, organisations often struggle with how to translate those requirements into real systems, workflows, and controls. A financial crime framework must go beyond documentation and define a structured flow across onboarding, identity verification, due diligence, screening, monitoring, and escalation — all connected as part of a single operating model.</p>',

    '<p>From an implementation perspective, the key challenge lies in integrating multiple layers: data sources, decision engines, and operational workflows. Each step requires clear ownership across Compliance, Risk, Fraud Operations, Data Engineering, and Technology, along with defined validation rules and audit trails. A well-designed framework ensures that data flows seamlessly across systems, controls are consistently applied, and regulatory expectations are met through scalable and traceable execution.</p>',

    /* ── SECTION 1: FRAMEWORK ── */
    '<h2>Framework Implementation: From Regulation to Execution</h2>',

    '<p>In practice, many institutions fail not because they lack policies, but because execution is fragmented. KYC may live in one system, sanctions in another, and transaction monitoring in a completely separate platform, with little integration between them. This creates blind spots where risk signals are not connected, ownership is unclear, and controls are inconsistently applied.</p>',

    '<p>For example, a customer may pass onboarding checks but later trigger suspicious behaviour in transactions. If systems are not integrated, the monitoring platform may not have full visibility into the original risk profile, leading to delayed or missed detection. These gaps often surface during audits or regulatory reviews, exposing weaknesses in implementation rather than intent.</p>',

    '<div class="diagram"><div class="diagram-title">Framework flow</div><div class="flow"><span class="node">Intake</span><span class="arr">&#8594;</span><span class="node">KYC / CIP</span><span class="arr">&#8594;</span><span class="node">CDD</span><span class="arr">&#8594;</span><span class="node">Sanctions / PEP</span><span class="arr">&#8594;</span><span class="node">Monitoring</span><span class="arr">&#8594;</span><span class="node">Case Mgmt</span><span class="arr">&#8594;</span><span class="node">SAR</span></div></div>',

    '<p>A strong implementation starts with designing the framework as an end-to-end system rather than isolated controls. Each step must clearly define what data is required, which system provides that data, what validation or decision is performed, and who owns the process. This approach ensures that every control is traceable, auditable, and connected to upstream and downstream processes.</p>',

    '<p>Architecturally, it requires a mix of real-time APIs for decisioning and batch systems for historical analysis, supported by event-driven pipelines that allow data to flow across systems without delay. The result is a connected framework rather than a collection of disconnected controls.</p>',

    '<div class="two-col"><div class="callout"><div class="callout-head">End goal</div><p>Effective risk management — detecting suspicious activity early, reducing false positives, ensuring consistent decision-making, and maintaining full auditability across the customer lifecycle.</p></div><div class="callout"><div class="callout-head">Key principle</div><p>Financial crime frameworks must be designed as dynamic systems that integrate data, processes, architecture, and ownership — not static documents.</p></div></div>',

    /* ── SECTION 2: ARCHITECTURE ── */
    '<h2>AML Architecture: Real-Time vs Batch</h2>',

    '<p>Modern AML systems require a hybrid architecture that balances real-time responsiveness with large-scale data processing. Real-time components are critical for onboarding decisions, sanctions screening, and high-risk transaction blocking, where immediate action is required. At the same time, batch processing plays a key role in historical analysis, feature generation, model training, and large-scale transaction monitoring, where performance and data volume are primary concerns.</p>',

    '<p>The challenge is not choosing between real-time and batch, but designing a system where both coexist effectively. This involves defining clear boundaries for APIs, event-driven pipelines such as Kafka, and data platforms like data lakes or warehouses. Real-time systems handle decision points, while batch systems provide context and depth, ensuring both speed and accuracy in risk detection.</p>',

    '<p>Many organisations either over-invest in real-time systems or rely too heavily on batch processing. Real-time-only systems often lack historical context, leading to poor decision quality, while batch-heavy systems introduce delays in detecting high-risk activity. This imbalance creates operational inefficiencies and increases exposure to financial crime risks. A suspicious transaction may occur in real time, but if the system depends on overnight batch scoring, the alert is delayed — and conversely, real-time decisions without historical patterns may incorrectly approve high-risk behaviour.</p>',

    '<div class="diagram"><div class="diagram-title">Architecture pattern</div><div class="flow"><span class="node">Customer / Merchant</span><span class="arr">&#8594;</span><span class="node">API Layer</span><span class="arr">&#8594;</span><span class="node">Real-Time Engine</span><span class="arr">&#8594;</span><span class="node">Alert / Block</span></div><div class="flow" style="margin-top:10px"><span class="node">Kafka / Events</span><span class="arr">&#8594;</span><span class="node">Data Lake</span><span class="arr">&#8594;</span><span class="node">Batch Scoring</span><span class="arr">&#8594;</span><span class="node">Monitoring Alerts</span></div></div>',

    '<p>Organisations should define which decisions require real-time execution and which require historical analysis. APIs should be used for immediate decision points, while event-driven pipelines ensure data is continuously captured and processed for deeper insights. A unified architecture connects real-time and batch layers through shared data models and consistent validation logic — allowing organisations to act quickly while maintaining analytical depth and regulatory compliance.</p>',

    /* ── SECTION 3: OWNERSHIP ── */
    '<h2>Who Owns What in Financial Crime Programs?</h2>',

    '<p>One of the most common failure points in financial crime programs is not technology, but unclear ownership. While multiple teams are involved — Compliance, Risk, Fraud Operations, Data Engineering, and Technology — responsibilities are often loosely defined, leading to gaps in execution. Without a clear ownership model, even well-designed frameworks can fail: each team may assume another is responsible, resulting in delayed decisions, inconsistent controls, and increased regulatory risk.</p>',

    '<p>In many organisations, Compliance defines policies but lacks visibility into system implementation. Technology builds platforms but may not fully understand regulatory intent. Fraud Operations handles alerts but may not have control over data quality or thresholds. This disconnect creates a fragmented system where controls exist but are not effectively executed. During audits, these gaps become visible as inconsistent decision-making, unclear accountability, and lack of traceability.</p>',

    '<div class="diagram"><div class="diagram-title">Ownership model</div><div class="flow" style="margin-bottom:8px"><span class="node">Compliance</span><span class="arr">&#8594;</span><span class="node">Policy &amp; Governance</span></div><div class="flow" style="margin-bottom:8px"><span class="node">Risk</span><span class="arr">&#8594;</span><span class="node">Methodology &amp; Thresholds</span></div><div class="flow" style="margin-bottom:8px"><span class="node">Fraud Ops</span><span class="arr">&#8594;</span><span class="node">Alert Review &amp; Investigation</span></div><div class="flow" style="margin-bottom:8px"><span class="node">Data Engineering</span><span class="arr">&#8594;</span><span class="node">Pipelines &amp; Data Quality</span></div><div class="flow"><span class="node">Technology</span><span class="arr">&#8594;</span><span class="node">Systems &amp; Integration</span></div></div>',

    '<p>A strong model defines ownership at each step of the workflow. Every control must have a clear owner, along with defined responsibilities for data, decisions, and system execution. This requires cross-functional alignment and governance structures that ensure accountability across teams. Clear ownership reduces ambiguity, improves operational efficiency, and strengthens the consistency of control execution across the entire financial crime program.</p>',

    /* ── SECTION 4: AI ── */
    '<h2>Where AI Fits in Regulated Workflows</h2>',

    '<p>AI is increasingly being introduced into financial crime and compliance workflows, but its role must be carefully defined within a regulated environment. Rather than replacing decision-making, AI is most effective when used to enhance data processing, pattern detection, and operational efficiency. Applications such as document extraction, anomaly detection, and case summarisation can significantly improve productivity — but these capabilities must be integrated in a way that maintains transparency, auditability, and regulatory compliance.</p>',

    '<p>Many organisations attempt to use AI as a replacement for human decision-making, which creates regulatory and operational risks. Black-box models without explainability can lead to compliance failures, governance concerns, and audit challenges. Poorly integrated AI systems can also introduce inconsistencies in workflows, making it difficult to maintain control over decisions and outcomes. In regulated settings, AI must support the workflow without undermining accountability.</p>',

    '<div class="diagram"><div class="diagram-title">AI integration architecture</div><div class="flow"><span class="node">Input Data</span><span class="arr">&#8594;</span><span class="node">AI Model</span><span class="arr">&#8594;</span><span class="node">Risk Insights</span><span class="arr">&#8594;</span><span class="node">Human Review</span><span class="arr">&#8594;</span><span class="node">Final Decision</span></div></div>',

    '<p>AI should be implemented as an augmentation layer within existing workflows — assisting in data analysis, highlighting anomalies, and supporting decision-making, while final authority remains with human operators. Systems must ensure explainability, auditability, and governance, allowing organisations to meet regulatory expectations while leveraging AI capabilities. Human-in-the-loop design is not optional; it is a core requirement of responsible implementation.</p>',

    '<div class="note"><strong>Implementation note</strong><p>In regulated workflows, AI works best as an accelerator, reviewer aid, and evidence-preparation layer — not as a fully autonomous final decision-maker. Design for human-in-the-loop from day one.</p></div>',

    /* ── CONCLUSION ── */
    '<h2>Conclusion</h2>',

    '<p>Financial crime programs succeed when they are designed as connected systems — not as collections of independent controls. Each element covered in this guide, from framework design to architecture, ownership, and AI integration, depends on the others. A well-built framework with no clear ownership will break under execution pressure. A sophisticated architecture with no AI governance will introduce risk rather than reduce it.</p>',

    '<p>The organisations that execute most effectively in financial crime are those that close the loop between policy intent and system-level execution — defining not just what the controls are, but how data flows through them, who owns each step, and how technology is governed at every layer.</p>',

    '<div class="note"><strong>Live demo</strong><p>See these concepts in action at the <a href="https://ibrandbro.github.io/financial-crime-framework-demo/" target="_blank" style="color:var(--acc-l)">Interactive Financial Crime Framework demo</a> — a practical implementation blueprint for the US market.</p></div>'

  ].join('\n')
};

/* ── Static views ──────────────────────────────────────── */
var VIEWS = {
  home: function() {
    return '<div class="fade-in">' +
      '<div class="article-kicker">' + ARTICLE.kicker + '</div>' +
      '<div class="article-title">' + ARTICLE.title + '</div>' +
      '<div class="article-byline">' + ARTICLE.byline + '</div>' +
      '<div class="article-body">' + ARTICLE.body + '</div>' +
    '</div>';
  },
  posts: function() {
    return '<div class="fade-in">' +
      '<div class="home-card" id="single-card">' +
        '<div class="home-card-kicker">Financial Crime</div>' +
        '<div class="home-card-title">A Complete Guide to Financial Crime Implementation</div>' +
        '<div class="home-card-excerpt">Framework design, AML architecture, ownership models, and the role of AI in regulated workflows — combined into one authoritative reference for practitioners and system designers.</div>' +
        '<span class="read-more">Read article</span>' +
      '</div>' +
    '</div>';
  },
  about: function() {
    return '<div class="fade-in">' +
      '<div class="article-kicker">About this site</div>' +
      '<div class="static-title">Systems &amp;<br>Insights</div>' +
      '<div class="static-body">' +
        '<p>This is a personal publishing platform centred on implementation, systems thinking, architecture, and real-world execution across industries.</p>' +
        '<p>The focus is not on a single topic. Each article explores how organisations design and implement systems, frameworks, and operating models — wherever complex ideas need to be translated into practice.</p>' +
        '<p>Content spans financial crime and AML today, with new topics added over time as the research evolves.</p>' +
      '</div></div>';
  }
};

/* ── Render ─────────────────────────────────────────────── */
var pane    = document.getElementById('content-pane');
var navBtns = document.querySelectorAll('.nav-btn');
var blogBtn = document.querySelector('.blog-btn');
var bar     = document.getElementById('progress');

function setProgress(pct) { if (bar) bar.style.width = (pct || 0) + '%'; }

function bindScroll() {
  window.removeEventListener('scroll', window.__prog);
  window.__prog = function() {
    var h = document.body.scrollHeight - window.innerHeight;
    setProgress(h > 0 ? Math.min((window.scrollY / h) * 100, 100) : 0);
  };
  window.addEventListener('scroll', window.__prog, { passive: true });
}

function renderArticle() {
  pane.innerHTML =
    '<div class="fade-in">' +
      '<div class="article-kicker">' + ARTICLE.kicker + '</div>' +
      '<div class="article-title">' + ARTICLE.title + '</div>' +
      '<div class="article-byline">' + ARTICLE.byline + '</div>' +
      '<div class="article-body">' + ARTICLE.body + '</div>' +
    '</div>';
  window.scrollTo(0, 0);
  setProgress(0);
  navBtns.forEach(function(b) { b.classList.remove('active'); });
  if (blogBtn) blogBtn.classList.add('active');
  bindScroll();
}

function renderView(key) {
  pane.innerHTML = VIEWS[key]();
  window.scrollTo(0, 0);
  setProgress(0);
  navBtns.forEach(function(b) { b.classList.toggle('active', b.dataset.view === key); });
  if (blogBtn) blogBtn.classList.remove('active');
  // if posts view, wire the card
  var card = document.getElementById('single-card');
  if (card) card.addEventListener('click', renderArticle);
  bindScroll();
}

/* ── Wire up nav ────────────────────────────────────────── */
navBtns.forEach(function(b) {
  b.addEventListener('click', function() { renderView(b.dataset.view); });
});
if (blogBtn) blogBtn.addEventListener('click', renderArticle);

/* ── Theme toggle ───────────────────────────────────────── */
(function() {
  var root   = document.documentElement;
  var saved  = localStorage.getItem('theme') || 'light';
  root.setAttribute('data-theme', saved);

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    var icon  = document.getElementById('toggle-icon');
    var label = document.getElementById('toggle-label');
    if (icon)  icon.textContent  = theme === 'dark' ? '☀' : '☾';
    if (label) label.textContent = theme === 'dark' ? 'Light' : 'Dark';
  }

  applyTheme(saved);

  var toggle = document.getElementById('theme-toggle');
  if (toggle) toggle.addEventListener('click', function() {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
})();

/* ── Progress bar ───────────────────────────────────────── */
function bindProgress() {
  bindScroll();
}

/* ── Init: load article directly ───────────────────────── */
renderArticle();
