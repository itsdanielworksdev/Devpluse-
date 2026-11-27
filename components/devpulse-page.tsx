import { ArrowDown, ArrowRight, ArrowUpRight, GitBranch, GitCommitHorizontal, Sparkles, Terminal } from 'lucide-react'

const commits = [
  { hash: 'a31f9c2', title: 'feat: add team activity digest', branch: 'feature/activity-digest', tone: 'blue' },
  { hash: 'f08b7d1', title: 'fix: prevent duplicate webhook events', branch: 'fix/webhook-retries', tone: 'violet' },
  { hash: 'c6e42a8', title: 'refactor: simplify permission checks', branch: 'refactor/permissions', tone: 'slate' },
]

function BrandMark() {
  return (
    <a href="#top" className="brand" aria-label="DevPulse home">
      <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
      <span>devpulse</span>
    </a>
  )
}

function ProductPreview() {
  return (
    <div className="preview-shell" aria-label="Example of a DevPulse weekly update being generated">
      <div className="preview-topbar">
        <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
        <span className="preview-label">WEEKLY TEAM DIGEST</span>
        <span className="preview-week">OCT 14 — 18, 2024</span>
      </div>
      <div className="preview-body">
        <div className="commit-column">
          <div className="preview-heading"><span className="tiny-icon"><GitBranch /></span><span>From commits</span><span className="count-pill">12</span></div>
          <div className="commit-list">
            {commits.map((commit) => (
              <div className="commit-row" key={commit.hash}>
                <span className={`commit-dot ${commit.tone}`}><GitCommitHorizontal /></span>
                <div className="commit-copy"><strong>{commit.title}</strong><span>{commit.branch}</span></div>
              </div>
            ))}
            <div className="more-commits">+ 9 more commits</div>
          </div>
        </div>
        <div className="convert-arrow" aria-hidden="true"><ArrowRight /></div>
        <div className="digest-card">
          <div className="digest-head"><span className="sparkle-box"><Sparkles /></span><div><strong>Your update</strong><span>Ready to share</span></div><span className="ready-dot" /></div>
          <div className="digest-content">
            <h3>Platform reliability &amp; team visibility</h3>
            <p>Shipped a new activity digest that gives teams a clearer view of project momentum. Improved webhook reliability with deduplication and streamlined permission checks across the platform.</p>
          </div>
          <div className="digest-footer"><span>3 highlights</span><span>·</span><span>Generated in 8 sec</span></div>
        </div>
      </div>
      <div className="preview-foot"><span><span className="live-dot" /> 12 commits analyzed</span><span>Clean updates, on autopilot <Sparkles /></span></div>
    </div>
  )
}

export default function DevPulsePage() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="nav-wrap"><BrandMark /><nav aria-label="Main navigation"><a href="#how-it-works">How it works</a><a href="#why-devpulse">Why DevPulse</a></nav><a className="nav-cta" href="mailto:itsdanielworks.dev@gmail.com">Get in touch <ArrowUpRight /></a></div>
      </header>

      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> THE WEEKLY UPDATE, REIMAGINED</div>
          <h1>Ship the work.<br /><span>Skip the status</span> report.</h1>
          <p className="hero-intro">DevPulse turns your git commit history into clear, thoughtful weekly updates—so your team can spend less time recapping and more time building.</p>
          <div className="hero-actions"><a href="mailto:itsdanielworks.dev@gmail.com" className="primary-button">Let&apos;s talk <ArrowRight /></a><a href="#how-it-works" className="text-link">See how it works <ArrowDown /></a></div>
          <div className="hero-proof"><div className="avatar-stack" aria-hidden="true"><span>D</span><span>+</span><span>∞</span></div><span>Built for the people building things.</span></div>
        </div>
        <div className="hero-visual"><div className="visual-glow" /><div className="visual-caption"><span className="caption-icon"><Terminal /></span><span><strong>Raw commits in.</strong><br />Useful updates out.</span></div><ProductPreview /></div>
        <div className="hero-index" aria-hidden="true">01 <span /> 03</div>
      </section>

      <section className="ticker" aria-label="DevPulse workflow"><div className="ticker-inner"><span>GIT LOGS</span><span className="ticker-star">✳</span><span>TEAM CONTEXT</span><span className="ticker-star">✳</span><span>WEEKLY CLARITY</span><span className="ticker-star">✳</span><span>LESS STATUS WRITING</span><span className="ticker-star">✳</span><span>GIT LOGS</span></div></section>

      <section className="how-section section-wrap" id="how-it-works">
        <div className="section-intro"><span className="section-kicker">A LITTLE LESS BUSYWORK</span><h2>From git log to<br /><span>great update.</span></h2></div>
        <div className="steps-grid">
          <article className="step-card"><div className="step-top"><span className="step-number">01</span><span className="step-icon"><GitBranch /></span></div><h3>Connect the dots</h3><p>DevPulse reads the commits your team already ships—no extra status form or end-of-week scramble.</p><div className="step-code"><span>$</span> git log --since=&quot;1 week ago&quot;</div></article>
          <article className="step-card featured-step"><div className="step-top"><span className="step-number">02</span><span className="step-icon"><Sparkles /></span></div><h3>Make sense of the work</h3><p>Related changes become a coherent story, organized around outcomes instead of a wall of commit messages.</p><div className="step-code"><span className="code-check">✓</span> 12 commits → 3 highlights</div></article>
          <article className="step-card"><div className="step-top"><span className="step-number">03</span><span className="step-icon"><ArrowUpRight /></span></div><h3>Share the signal</h3><p>Give leads and teammates an update that is easy to scan, easy to trust, and ready to share.</p><div className="step-code"><span className="code-check">✓</span> Clear update. Friday done.</div></article>
        </div>
      </section>

      <section className="why-section" id="why-devpulse"><div className="why-inner section-wrap"><div className="why-copy"><span className="section-kicker">WHY DEVPULSE</span><h2>More building.<br /><span>Less explaining.</span></h2><p>Good work shouldn&apos;t disappear into a git log—or take an hour to explain. DevPulse helps software leads keep everyone in the loop without turning developers into report writers.</p><a href="mailto:itsdanielworks.dev@gmail.com" className="why-link">Make your week flow better <ArrowRight /></a></div><div className="impact-card"><div className="impact-top"><span className="impact-icon"><GitCommitHorizontal /></span><span className="impact-label">THE WEEKLY LOOP</span></div><div className="impact-stat">Hours<span>back to your team</span></div><div className="impact-rule" /><div className="impact-row"><span><span className="impact-dot blue-dot" />Manual status writing</span><span>Less of it</span></div><div className="impact-row"><span><span className="impact-dot green-dot" />Useful project context</span><span>More of it</span></div><div className="impact-foot">Let the work speak for itself.</div></div></div></section>

      <footer className="site-footer"><div className="footer-inner"><BrandMark /><p>Made for teams in motion.</p><div className="footer-credit"><span>Made by <strong>Daniel Peter</strong></span><a href="mailto:itsdanielworks.dev@gmail.com">itsdanielworks.dev@gmail.com <ArrowUpRight /></a></div><span className="footer-year">© 2026</span></div></footer>
    </main>
  )
}
