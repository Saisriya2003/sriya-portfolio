import { education } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="section" ref={ref}>
      <div className="section__head">
        <p className="eyebrow">05 — Education</p>
        <h2>
          Grounded in engineering, <em>drawn to making.</em>
        </h2>
      </div>

      <ol className="timeline stagger">
        {education.map((item) => (
          <li key={item.school} className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__card">
              <div className="timeline__meta">
                <span>{item.period}</span>
                <span className="score">{item.score}</span>
              </div>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              <p className="muted">{item.place}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
