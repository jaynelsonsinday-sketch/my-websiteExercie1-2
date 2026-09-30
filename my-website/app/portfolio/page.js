const projects = [
  { number: "01", title: "Creative Studio", type: "Web design", year: "2026", description: "A bright digital home for a small design team, with a focus on clear storytelling and easy browsing.", art: "cover-blue", preview: "screen" },
  { number: "02", title: "Daily Notes", type: "Mobile concept", year: "2026", description: "A calm, simple space for collecting thoughts, building small habits, and keeping the day in focus.", art: "cover-mint", preview: "phone" },
  { number: "03", title: "Sunday Market", type: "Visual identity", year: "2025", description: "A warm, flexible identity for a neighborhood market bringing local makers together.", art: "cover-peach", preview: "type" },
];
function ProjectArtwork({ project }) { return <div className={`project-cover ${project.art}`}>{project.preview === "screen" && <div className="cover-screen"><span /><span /><span /></div>}{project.preview === "phone" && <div className="cover-phone"><span /></div>}{project.preview === "type" && <span className="cover-type">Good things.</span>}</div>; }
export default function PortfolioPage() {
  return (
    <main className="page-shell">
      <header className="page-heading portfolio-heading">
        <p className="eyebrow">02 / Selected work</p>
        <h1>Portfolio</h1>
        <p>A collection of practice projects and ideas in progress, made while learning design and development.</p>
      </header>
      <section className="portfolio-grid" aria-label="Projects">
        {projects.map((project) => (
          <article className="project-card portfolio-card" key={project.number}>
            <ProjectArtwork project={project} />
            <div className="project-details">
              <div className="project-meta">{project.type} · {project.year}</div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}