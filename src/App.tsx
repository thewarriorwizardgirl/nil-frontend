import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Associations from "./pages/Associations";
import Vision from "./pages/Vision";
import Strengths from "./pages/Strengths";
import Founder from "./pages/Founder";
import Contact from "./pages/Contact";

export type Theme = "blue" | "graphite" | "orange";

function App() {
  const [activeHref, setActiveHref] = useState(window.location.hash || "#home");
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = window.localStorage.getItem("new-india-logistics-theme");
    if (savedTheme === "deep-blue") return "blue";
    return savedTheme === "graphite" || savedTheme === "orange" ? savedTheme : "blue";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("new-india-logistics-theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateActiveTab = () => setActiveHref(window.location.hash || "#home");
    window.addEventListener("hashchange", updateActiveTab);

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("hashchange", updateActiveTab);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header
        activeHref={activeHref}
        theme={theme}
        onThemeChange={setTheme}
      />
      <main>
        <Home />
        <AboutUs />
        <Services />
        <Associations />
        <Vision />
        <Strengths />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
