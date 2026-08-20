import React, { useEffect, useRef, useState } from "react";
import profilePic from "../assets/images/myimage.webp";
import CvModal from "./CvModal";

export default function Hero() {
  const canvasRef = useRef(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  // Canvas particle animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDark = () => document.documentElement.classList.contains("dark");
    let width;
    let height;
    let particles = [];
    const count = 28;
    let animationFrameId;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const rand = (min, max) => min + Math.random() * (max - min);

    const createParticle = () => ({
      x: rand(0, width || 800),
      y: rand(height || 600, (height || 600) + 200),
      size: rand(1, 2.5),
      speed: rand(0.3, 0.9),
      drift: rand(-0.2, 0.2),
      opacity: rand(0.1, 0.5),
      life: 0,
      maxLife: rand(200, 400),
    });

    const initParticles = () => {
      resize();
      particles = Array.from({ length: count }, createParticle);
      particles.forEach((particle) => {
        particle.y = rand(0, height);
        particle.life = rand(0, particle.maxLife);
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);
      const color = isDark() ? "96, 165, 250" : "0, 88, 190";

      particles.forEach((particle) => {
        const lifePct = particle.life / particle.maxLife;
        const alpha = particle.opacity * Math.sin(lifePct * Math.PI);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha.toFixed(3)})`;
        ctx.fill();

        particle.y -= particle.speed;
        particle.x += particle.drift;
        particle.life += 1;

        if (particle.life >= particle.maxLife || particle.y < -10) {
          Object.assign(particle, createParticle());
          particle.y = height + 10;
          particle.life = 0;
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    initParticles();
    drawParticles();

    const handleResize = () => {
      resize();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-surface dark:bg-slate-950"
      id="hero"
    >
      {/* Particle canvas */}
      <canvas id="hero-canvas" ref={canvasRef} aria-hidden="true"></canvas>

      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-slate-300/20 dark:bg-slate-700/20 rounded-full blur-[120px]"></div>

        <div className="absolute -right-16 top-1/4 opacity-[0.02] dark:opacity-[0.04] rotate-6">
          <span className="material-symbols-outlined text-[45rem] text-slate-900 dark:text-white">
            terminal
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full grid lg:grid-cols-2 gap-12 md:gap-16 xl:gap-24 items-center">
        <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-5">
            <h1 className="hero-title text-on-primary-fixed dark:text-white text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight">
              Khaled{" "}
              <span className="text-secondary dark:text-blue-400">Almorse</span>
            </h1>

            <p className="hero-desc text-on-surface-variant dark:text-slate-300 text-lg md:text-xl max-w-xl font-normal leading-relaxed mx-auto lg:mx-0 opacity-90">
              Passionate{" "}
              <span className="font-bold text-secondary dark:text-blue-400 text-xl md:text-2xl">
                Full-Stack Developer
              </span>
              <br />
              building scalable, production-grade applications with{" "}
              <span className="text-on-surface dark:text-white font-bold">
                React
              </span>
              ,{" "}
              <span className="text-on-surface dark:text-white font-bold">
                Next.js
              </span>
              ,{" "}
              <span className="text-on-surface dark:text-white font-bold">
                Node.js
              </span>
              ,{" "}
              <span className="text-on-surface dark:text-white font-bold">
                NestJS
              </span>
              , and databases like{" "}
              <span className="text-on-surface dark:text-white font-bold">
                MongoDB
              </span>
              ,{" "}
              <span className="text-on-surface dark:text-white font-bold">
                PostgreSQL
              </span>
              , &{" "}
              <span className="text-on-surface dark:text-white font-bold">
                MySQL
              </span>
              .
            </p>
            <p className="hero-sub text-on-surface-variant dark:text-slate-400 text-base md:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0 opacity-80">
              Focused on clean architecture, secure RESTful APIs, performance
              optimization, and AI-assisted workflows.
            </p>
          </div>

          <div className="hero-btns flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="btn-ripple group h-12 w-full sm:w-auto px-8 bg-primary-container dark:bg-blue-600 text-on-primary rounded-xl font-bold tracking-wide transition-all shadow-lg hover:shadow-secondary/20 hover:ring-2 hover:ring-secondary/50 dark:hover:ring-blue-400/40 active:scale-95 flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2"
            >
              VIEW PROJECTS
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform"
              >
                arrow_forward
              </span>
            </a>

            <button
              type="button"
              onClick={() => setIsCvModalOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={isCvModalOpen}
              aria-label="Open CV selection modal to download CV"
              className="btn-ripple h-12 w-full sm:w-auto px-8 border border-outline-variant dark:border-slate-700 text-on-surface dark:text-slate-100 rounded-xl font-bold tracking-wide hover:bg-surface-container-high dark:hover:bg-slate-800 transition-all active:scale-95 inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2"
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-xl"
              >
                download
              </span>
              DOWNLOAD CV
            </button>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end hero-image">
          <div className="relative hero-image-inner">
            <div className="absolute -inset-6 bg-gradient-to-tr from-secondary/20 to-primary/10 dark:from-blue-500/20 dark:to-slate-700/20 rounded-[3rem] blur-2xl opacity-40"></div>

            <div className="relative p-6 bg-surface-container-high/80 dark:bg-slate-900/80 border border-white/10 dark:border-slate-700 rounded-[3rem] shadow-2xl backdrop-blur-sm">
              <img
                src={profilePic}
                alt="Khaled Almorse - Full-Stack Developer"
                width="400"
                height="500"
                fetchPriority="high"
                decoding="async"
                className="w-64 h-72 sm:w-72 sm:h-80 md:w-[400px] md:h-[500px] object-cover rounded-[2.5rem] border-2 border-surface-variant/50 dark:border-slate-700"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-cue absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-on-surface-variant/40 dark:text-slate-500">
        <span className="text-[9px] font-black tracking-[0.4em] uppercase">
          Scroll to explore
        </span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-secondary dark:from-blue-400 to-transparent"></div>
      </div>

      {/* CV Selector Modal */}
      <CvModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </section>
  );
}
