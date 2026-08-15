import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/style.css";

export default function App() {
  const progressBarRef = useRef(null);

  // Scroll Progress Bar
  useEffect(() => {
    const progressBar = progressBarRef.current;
    if (!progressBar) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : "0%";
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observers (Scroll Reveal & Active Navigation Links)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // --- Scroll Reveal ---
    const revealEls = document.querySelectorAll(
      ".reveal, .reveal-left, .stagger-children"
    );

    let revealObserver;
    if (prefersReducedMotion) {
      revealEls.forEach((el) => el.classList.add("visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: "150px 0px 150px 0px" }
      );
      revealEls.forEach((el) => revealObserver.observe(el));
    }

    // --- Active Link Highlight ---
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link, #mobile-menu a");
    let navObserver;

    if (sections.length && navLinks.length) {
      navObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${entry.target.id}`) {
                  link.classList.add("active");
                }
              });
            }
          });
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      sections.forEach((section) => navObserver.observe(section));
    }

    // Ripple effect logic for btn-ripple buttons
    const rippleButtons = document.querySelectorAll(".btn-ripple");
    const rippleHandlers = [];

    rippleButtons.forEach((button) => {
      const handler = (event) => {
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement("span");
        const size = Math.max(rect.width, rect.height);
        ripple.className = "ripple-effect";
        ripple.style.cssText =
          `width:${size}px;height:${size}px;` +
          `left:${event.clientX - rect.left - size / 2}px;` +
          `top:${event.clientY - rect.top - size / 2}px;`;
        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
      };
      button.addEventListener("click", handler);
      rippleHandlers.push({ button, handler });
    });

    return () => {
      if (revealObserver) revealObserver.disconnect();
      if (navObserver) navObserver.disconnect();
      rippleHandlers.forEach(({ button, handler }) => {
        button.removeEventListener("click", handler);
      });
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div id="scroll-progress" ref={progressBarRef} aria-hidden="true"></div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
