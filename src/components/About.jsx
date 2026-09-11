import { useReveal } from "../hooks/useReveal";

const stats = [
  { value: "2025", label: "B.Tech, ECE" },
  { value: "4", label: "Featured projects" },
  { value: "AI + Web", label: "Primary craft" },
  { value: "Handball", label: "Sports, art, and making things" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section" ref={ref}>
      <div className="section__head">
        <p className="eyebrow">01 — About</p>
        <h2>
          Building products at the
          <em> intersection of web and intelligence.</em>
        </h2>
      </div>

      <div className="about-grid">
        <p className="about-copy">
          I’m a full stack developer — previously at GenAI Lakes (Jul 2025 – Sep 2026) and now an
          AI Evaluation Specialist at Handshake AI. I like turning messy ideas — voice, retrieval,
          avatars, monitoring, agent benchmarks — into clear product and evaluation surfaces.
        </p>
        <p className="about-copy muted">
          My background is in Electronics & Communication Engineering, but my work lives in
          React, APIs, and applied AI. Off the keyboard I play handball, make things with my
          hands, and keep exploring whatever’s next.
        </p>
      </div>

      <div className="stat-row stagger">
        {stats.map((stat) => (
          <article key={stat.label} className="stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
