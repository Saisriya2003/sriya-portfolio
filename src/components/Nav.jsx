import { useEffect, useState } from "react";
import ResumeLink from "./ResumeLink";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? y / max : 0);
    };
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav__progress" style={{ transform: `scaleX(${progress})` }} />
      <a href="#top" className="nav__logo">
        <span className="nav__mark">SS</span>
        <span className="nav__word">Sriya</span>
      </a>
      <nav className={`nav__links ${open ? "is-open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <ResumeLink className="nav__cta" onClick={() => setOpen(false)}>
          Resume
        </ResumeLink>
        <a className="nav__cta nav__cta--fill" href="#contact" onClick={() => setOpen(false)}>
          Let’s talk
        </a>
      </nav>
      <button
        className={`nav__burger ${open ? "is-open" : ""}`}
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
