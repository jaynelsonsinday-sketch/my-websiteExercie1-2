import Link from "next/link";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Hello, I&apos;m Nelson Sinday</p>
          <h1>Building ideas<br />for the <span>web.</span></h1>
          <p className="hero-intro">IT student and aspiring software developer, learning to turn thoughtful ideas into useful digital experiences.</p>
          <div className="hero-actions">
            <Link className="button-primary" href="/portfolio">View my work <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/about">A little about me</Link>
          </div>
        </div>
        <div className="hero-art" aria-label="A creative coding study">
          <div className="hero-orbit" />
          <div className="hero-sun" />
          <div className="code-window">
            <div className="code-top"><span>hello-world.js</span><span>•••</span></div>
            <div><span className="code-blue">const</span> idea = <span className="code-green">&quot;make it useful&quot;</span>;</div>
            <div><span className="code-blue">while</span> (curious) &#123;</div>
            <div>&nbsp;&nbsp;learn(); build();</div>
            <div>&#125;</div>
          </div>
          <span className="art-note">Curiosity in progress · 01</span>
        </div>
      </section>
      <section className="home-intro section-rule">
        <div><p className="section-label">01 / A bit about my work</p><h2>Learning by making.<br /><em>Growing every day.</em></h2></div>
        <div>
          <p className="body-copy">I&apos;m developing my skills in web design and software development, one project at a time. I enjoy clean layouts, thoughtful details, and the process of making something work well for real people.</p>
          <div className="skill-list"><span>HTML &amp; CSS</span><span>JavaScript</span><span>React</span><span>Next.js</span><span>UI Design</span></div>
        </div>
      </section>
      <section aria-labelledby="selected-work">
        <div className="section-heading"><h2 id="selected-work">Selected projects</h2><Link className="text-link" href="/portfolio">All projects <span>↗</span></Link></div>
        <div className="project-grid">
          <Link className="project-card" href="/portfolio"><div className="project-cover cover-blue"><div className="cover-screen"><span /><span /><span /></div></div><div className="project-details"><div className="project-meta">Web design · 2026</div><h3>Creative Studio</h3><p>A bright digital home for a small design team.</p></div></Link>
          <Link className="project-card" href="/portfolio"><div className="project-cover cover-mint"><div className="cover-phone"><span /></div></div><div className="project-details"><div className="project-meta">Mobile concept · 2026</div><h3>Daily Notes</h3><p>A calm, simple space for everyday ideas.</p></div></Link>
          <Link className="project-card" href="/portfolio"><div className="project-cover cover-peach"><div className="cover-type">Good things.</div></div><div className="project-details"><div className="project-meta">Visual identity · 2025</div><h3>Sunday Market</h3><p>A friendly identity for a neighborhood market.</p></div></Link>
        </div>
      </section>
    </main>
  );
}
