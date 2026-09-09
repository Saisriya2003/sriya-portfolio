import { useReveal } from "../hooks/useReveal";

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
        <figure className="about-photo">
          <img src="/sriya.jpg" alt="Sai Sriya in a black blazer" />
        </figure>
        <div className="about-copy-col">
          <p className="about-copy">
            I’m a full stack developer at GenAI Lakes, focused on interfaces people actually enjoy
            using and backends that stay dependable under real load. I like turning messy ideas —
            voice, retrieval, avatars, monitoring — into clear product surfaces.
          </p>
          <p className="about-copy muted">
            My background is in Electronics & Communication Engineering, but my work lives in
            React, APIs, and applied AI. Off the keyboard I play handball, make things with my
            hands, and keep exploring whatever’s next.
          </p>
        </div>
      </div>

      <div className="stat-row">
        <article className="stat">
          <strong>2025</strong>
          <span>B.Tech, ECE</span>
        </article>
        <article className="stat">
          <strong>4</strong>
          <span>Featured projects</span>
        </article>
        <article className="stat">
          <strong>AI + Web</strong>
          <span>Primary craft</span>
        </article>
        <article className="stat">
          <strong>Handball</strong>
          <span>Sports, art, and making things</span>
        </article>
      </div>
    </section>
  );
}
