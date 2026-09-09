import { experience } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();
  const job = experience[0];

  return (
    <section id="work" className="section" ref={ref}>
      <div className="section__head">
        <p className="eyebrow">02 — Experience</p>
        <h2>
          Currently shipping at <em>GenAI Lakes.</em>
        </h2>
      </div>

      <article className="job">
        <header className="job__head">
          <div>
            <p className="job__role">{job.role}</p>
            <p className="job__company">{job.company}</p>
          </div>
          <p className="job__period">{job.period}</p>
        </header>
        <ul className="job__list stagger">
          {job.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
