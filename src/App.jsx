import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Marquee from "./components/Marquee";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  const [loading, setLoading] = useState(() => !window.location.hash && !window.location.search.includes("all"));
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const jumpToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
    };

    if (!loading) {
      jumpToHash();
      return;
    }

    const fade = setTimeout(() => setFading(true), 1400);
    const done = setTimeout(() => {
      setLoading(false);
      jumpToHash();
    }, 1900);
    return () => {
      clearTimeout(fade);
      clearTimeout(done);
    };
  }, [loading]);

  return (
    <>
      {loading && <Loader fading={fading} />}
      <Cursor />
      <div className="grain" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
