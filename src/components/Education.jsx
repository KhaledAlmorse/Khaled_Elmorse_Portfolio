import React, { useEffect, useRef } from "react";

export default function Education() {
  const gradeRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const gradeEl = gradeRef.current;
    if (!gradeEl || prefersReducedMotion) return;

    let counted = false;
    const counterObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          const target = 87;
          const duration = 1400;
          const start = performance.now();

          const update = (now) => {
            const pct = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - pct, 3);
            gradeEl.textContent = `${Math.round(eased * target)}%`;
            if (pct < 1) {
              requestAnimationFrame(update);
            }
          };

          requestAnimationFrame(update);
          counterObserver.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    counterObserver.observe(gradeEl);

    return () => {
      counterObserver.disconnect();
    };
  }, []);

  return (
    <section
      className="py-32 bg-surface-container-low dark:bg-slate-900 overflow-hidden relative"
      id="education"
    >
      <div className="absolute inset-0 opacity-40 dark:opacity-10 pointer-events-none">
        <div className="grid grid-cols-6 h-full w-full">
          <div className="border-r border-outline-variant/20 dark:border-slate-700/40"></div>
          <div className="border-r border-outline-variant/20 dark:border-slate-700/40"></div>
          <div className="border-r border-outline-variant/20 dark:border-slate-700/40"></div>
          <div className="border-r border-outline-variant/20 dark:border-slate-700/40"></div>
          <div className="border-r border-outline-variant/20 dark:border-slate-700/40"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-16">
          {/* Left Content */}
          <div className="reveal-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase text-secondary dark:text-blue-400 mb-6">
              Education
            </h2>

            <h3 className="text-4xl md:text-5xl font-black mb-4 text-on-primary-fixed dark:text-white">
              Suez Canal University
            </h3>

            <p className="text-lg text-on-surface-variant dark:text-slate-300 font-medium mb-4">
              Bachelor of Computer Science — 2024
            </p>

            <p className="text-lg text-on-surface-variant dark:text-slate-300 leading-relaxed mb-6">
              Graduated with{" "}
              <span className="text-on-surface dark:text-white font-bold">
                Excellent (
                <span id="grade-counter" ref={gradeRef}>
                  87%
                </span>
                )
              </span>
              , with a strong foundation in software engineering, data structures,
              and backend development.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="skill-tag px-3 py-1 text-xs font-bold uppercase bg-white dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 rounded-full">
                Data Structures
              </span>
              <span className="skill-tag px-3 py-1 text-xs font-bold uppercase bg-white dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 rounded-full">
                Databases
              </span>
              <span className="skill-tag px-3 py-1 text-xs font-bold uppercase bg-white dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 rounded-full">
                Software Engineering
              </span>
              <span className="skill-tag px-3 py-1 text-xs font-bold uppercase bg-white dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 rounded-full">
                Web Development
              </span>
            </div>
          </div>

          {/* Right Card */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <article className="bg-white dark:bg-slate-800/60 p-8 sm:p-10 md:p-12 rounded-2xl border border-outline-variant/20 dark:border-slate-700 text-center shadow-sm dark:shadow-none h-full">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold tracking-wider uppercase">
                2025 – Present • 9 Months
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-on-primary-fixed dark:text-white leading-tight">
                Open Source Applications Development Program
              </h3>

              <p className="mt-4 text-lg font-medium text-secondary dark:text-blue-400">
                Information Technology Institute (ITI)
              </p>

              <div className="mt-8 flex justify-center" aria-hidden="true">
                <span className="material-symbols-outlined text-6xl opacity-40 text-on-primary-fixed dark:text-slate-300">
                  school
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-on-surface-variant dark:text-slate-300 text-left">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-outline-variant dark:text-slate-400 text-sm mt-1">
                    check_circle
                  </span>
                  <span>Built RESTful APIs with multiple endpoints.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-outline-variant dark:text-slate-400 text-sm mt-1">
                    check_circle
                  </span>
                  <span>Implemented JWT authentication and authorization.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-outline-variant dark:text-slate-400 text-sm mt-1">
                    check_circle
                  </span>
                  <span>Improved performance and optimized queries.</span>
                </li>
              </ul>

              <p className="mt-6 text-xs font-bold tracking-[0.3em] uppercase text-on-surface-variant dark:text-slate-400 opacity-80">
                Training Program
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
