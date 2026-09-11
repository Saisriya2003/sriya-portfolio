import { useRef } from "react";
import { projects } from "../data";
import { useReveal } from "../hooks/useReveal";

function Card({ project, index }) {
  const card = useRef(null);

  const onMove = (e) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = card.current;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--rx", `${(py - 0.5) * -8}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 10}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const onLeave = () => {
    const el = card.current;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      ref={card}
      className="tilt project"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ "--i": index }}
    >
      <div className="project__shine" />
      <div className="project__top">
        <span className="project__index">0{index + 1}</span>
        <span className="project__period">{project.period}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project__sub">{project.subtitle}</p>
      <p className="project__desc">{project.description}</p>
      <ul className="project__hits">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <div className="project__tags">
        {project.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      {project.link ? (
        <a className="project__link" href={project.link} target="_blank" rel="noreferrer">
          View on GitHub →
        </a>
      ) : null}
    </article>
  );
}

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="section__head">
        <p className="eyebrow">03 — Selected work</p>
        <h2>
          Projects where <em>AI meets product.</em>
        </h2>
      </div>
      <div className="project-grid stagger">
        {projects.map((project, i) => (
          <Card key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
