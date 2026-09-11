import { useState } from "react";
import { profile } from "../data";
import { useReveal } from "../hooks/useReveal";
import ResumeLink from "./ResumeLink";

export default function Contact() {
  const ref = useReveal();
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Hello from the portfolio")}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="section__head">
        <p className="eyebrow">06 — Contact</p>
        <h2>
          Let’s build something <em>worth shipping.</em>
        </h2>
      </div>

      <div className="contact-grid">
        <div className="contact__aside">
          <p className="about-copy">
            Open to full-time roles in Hyderabad — full-stack, frontend, or applied AI product
            work. Immediately available.
          </p>
          <ul className="contact__links">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
          <ResumeLink className="btn btn--fill contact__resume" />
        </div>

        <form className="form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" required placeholder="Your name" autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required placeholder="you@email.com" autoComplete="email" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required placeholder="What should we make?" />
          </label>
          <button className="btn btn--fill" type="submit">
            {sent ? "Opening mail…" : "Send a note"}
          </button>
        </form>
      </div>
    </section>
  );
}
