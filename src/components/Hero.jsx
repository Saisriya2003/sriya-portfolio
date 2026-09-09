import { profile } from "../data";
import ResumeLink from "./ResumeLink";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="orb orb--a" />
      <div className="orb orb--b" />
      <div className="orb orb--c" />

      <div className="hero__copy">
        <div className="hero__meta reveal">
          <span className="pill">{profile.role}</span>
          <span className="dot" />
          <span>{profile.company}</span>
          <span className="dot" />
          <span>{profile.location}</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__line reveal d1">Pettem</span>
          <span className="hero__line hero__line--italic reveal d2">Sai Sriya</span>
        </h1>

        <p className="hero__lead reveal d3">{profile.tagline}</p>

        <div className="hero__actions reveal d4">
          <a className="btn btn--fill" href="#projects">
            View selected work
          </a>
          <ResumeLink className="btn btn--ghost" />
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
            <span className="btn__full">{profile.email}</span>
            <span className="btn__short">Email me</span>
          </a>
        </div>

        <div className="hero__footer reveal d5">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        </div>
      </div>

      <div className="hero__portrait reveal d1">
        <div className="portrait">
          <span className="portrait__glow" />
          <span className="portrait__ring" aria-hidden="true" />
          <img src="/sriya.jpg" alt="Pettem Sai Sriya" />
        </div>
        <p className="portrait__caption">Hyderabad · GenAI Lakes</p>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <span>Scroll</span>
        <i />
      </a>
    </section>
  );
}
