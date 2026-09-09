import { extras, skills } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="section__head">
        <p className="eyebrow">04 — Capabilities</p>
        <h2>
          A toolkit built for <em>full-stack delivery.</em>
        </h2>
      </div>

      <div className="skill-groups">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="skill-group">
            <p className="skill-group__label">{group}</p>
            <div className="skill-group__chips">
              {items.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="cert-block">
        <div>
          <p className="eyebrow">Certifications</p>
          <ul>
            {extras.certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Beyond the screen</p>
          <p className="about-copy muted">{extras.interests.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
