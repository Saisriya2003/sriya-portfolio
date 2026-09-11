import { experience } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="work" className="section" ref={ref}>
      <div className="section__head">
        <p className="eyebrow">02 — Experience</p>
        <h2>
          From shipping product at <em>GenAI Lakes</em> to evaluating coding agents.
        </h2>
      </div>

      <div className="job-stack stagger">
        {experience.map((job) => (
          <article key={`${job.company}-${job.role}`} className="job">
            <header className="job__head">
              <div>
                <p className="job__role">{job.role}</p>
                <p className="job__company">{job.company}</p>
              </div>
              <p className="job__period">{job.period}</p>
            </header>
            <ul className="job__list">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
