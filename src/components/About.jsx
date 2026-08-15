import React from "react";

export default function About() {
  return (
    <section
      className="py-32 bg-surface-container-low dark:bg-slate-900"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-14">
          <h2 className="mt-2 text-4xl sm:text-5xl font-black tracking-tighter text-on-primary-fixed dark:text-white border-l-8 border-secondary dark:border-blue-400 pl-6">
            ABOUT ME
          </h2>
        </div>

        <div className="space-y-12">
          {/* Main Summary */}
          <div className="space-y-6 max-w-4xl">
            <p className="text-xl sm:text-2xl text-on-surface dark:text-slate-100 leading-relaxed font-light">
              I am a{" "}
              <span className="font-bold text-secondary dark:text-blue-400">
                Full-Stack Developer
              </span>{" "}
              with practical experience building production-like web
              applications using{" "}
              <span className="font-semibold text-on-surface dark:text-white">
                Node.js
              </span>
              ,{" "}
              <span className="font-semibold text-on-surface dark:text-white">
                NestJS
              </span>
              ,{" "}
              <span className="font-semibold text-on-surface dark:text-white">
                React.js
              </span>
              , and{" "}
              <span className="font-semibold text-on-surface dark:text-white">
                Next.js
              </span>
              , with{" "}
              <span className="font-semibold text-secondary dark:text-blue-400">
                MongoDB
              </span>
              ,{" "}
              <span className="font-semibold text-secondary dark:text-blue-400">
                PostgreSQL
              </span>
              , and{" "}
              <span className="font-semibold text-secondary dark:text-blue-400">
                MySQL
              </span>{" "}
              as core databases.
            </p>
            <p className="text-base sm:text-lg text-on-surface-variant dark:text-slate-300 leading-relaxed">
              Skilled in designing RESTful APIs, building responsive dynamic
              user interfaces, database modeling, and implementing robust
              security with JWT authentication and Role-Based Access Control
              (RBAC). I focus heavily on performance, scalability, clean
              architecture, SOLID principles, and AI-assisted software
              development workflows.
            </p>
          </div>

          {/* Pillars of Expertise */}
          <div className="grid sm:grid-cols-2 gap-6 text-on-surface-variant dark:text-slate-300">
            <div className="about-item group flex items-start gap-4 p-6 rounded-xl bg-surface dark:bg-slate-800 hover:bg-surface-container dark:hover:bg-slate-700/80 transition-all duration-300 border border-outline-variant/30 dark:border-slate-700/60 hover:border-secondary/40 dark:hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-lg">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl mt-1 transition-transform duration-300 group-hover:scale-110">
                dns
              </span>
              <div>
                <h4 className="font-bold text-on-primary-fixed dark:text-white text-lg mb-1">
                  Full-Stack Web Development
                </h4>
                <p className="leading-relaxed text-sm sm:text-base">
                  Delivering end-to-end applications from dynamic React &
                  Next.js user interfaces to robust Node.js & NestJS backend
                  services.
                </p>
              </div>
            </div>

            <div className="about-item group flex items-start gap-4 p-6 rounded-xl bg-surface dark:bg-slate-800 hover:bg-surface-container dark:hover:bg-slate-700/80 transition-all duration-300 border border-outline-variant/30 dark:border-slate-700/60 hover:border-secondary/40 dark:hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-lg">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl mt-1 transition-transform duration-300 group-hover:scale-110">
                security
              </span>
              <div>
                <h4 className="font-bold text-on-primary-fixed dark:text-white text-lg mb-1">
                  API Security & Optimization
                </h4>
                <p className="leading-relaxed text-sm sm:text-base">
                  Implementing JWT, RBAC, input validation, and database query
                  optimization—reducing latency by up to 30% and payload size by
                  60%.
                </p>
              </div>
            </div>

            <div className="about-item group flex items-start gap-4 p-6 rounded-xl bg-surface dark:bg-slate-800 hover:bg-surface-container dark:hover:bg-slate-700/80 transition-all duration-300 border border-outline-variant/30 dark:border-slate-700/60 hover:border-secondary/40 dark:hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-lg">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl mt-1 transition-transform duration-300 group-hover:scale-110">
                smart_toy
              </span>
              <div>
                <h4 className="font-bold text-on-primary-fixed dark:text-white text-lg mb-1">
                  AI-Assisted Workflows
                </h4>
                <p className="leading-relaxed text-sm sm:text-base">
                  Experienced in integrating AI coding agents (Claude, Codex)
                  into daily development for code generation, refactoring,
                  debugging, and testing.
                </p>
              </div>
            </div>

            <div className="about-item group flex items-start gap-4 p-6 rounded-xl bg-surface dark:bg-slate-800 hover:bg-surface-container dark:hover:bg-slate-700/80 transition-all duration-300 border border-outline-variant/30 dark:border-slate-700/60 hover:border-secondary/40 dark:hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-lg">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl mt-1 transition-transform duration-300 group-hover:scale-110">
                school
              </span>
              <div>
                <h4 className="font-bold text-on-primary-fixed dark:text-white text-lg mb-1">
                  Clean Architecture & Training
                </h4>
                <p className="leading-relaxed text-sm sm:text-base">
                  Backed by ITI Open Source Development Track training and a
                  Computer Science degree (87% Grade) focusing on SOLID
                  principles & Clean Code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
