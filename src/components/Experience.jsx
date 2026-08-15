import React from "react";

export default function Experience() {
  return (
    <section className="py-32 bg-surface dark:bg-slate-950" id="experience">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 reveal-left space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-on-primary-fixed dark:text-white">
                Experience
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-on-surface-variant dark:text-slate-300 max-w-md">
              Hands-on full stack experience built through intensive training
              and real-world style projects, with a balance of responsive UI,
              secure APIs, scalable architecture, and performance-first
              implementation.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-surface-container-low dark:bg-slate-900/70 border border-outline-variant/20 dark:border-slate-700 rounded-2xl p-5">
                <p className="text-3xl font-black text-on-primary-fixed dark:text-white">
                  10+
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.25em] text-on-surface-variant dark:text-slate-400">
                  Projects
                </p>
              </div>
              <div className="bg-surface-container-low dark:bg-slate-900/70 border border-outline-variant/20 dark:border-slate-700 rounded-2xl p-5">
                <p className="text-3xl font-black text-on-primary-fixed dark:text-white">
                  50+
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.25em] text-on-surface-variant dark:text-slate-400">
                  API Endpoints
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 stagger-children space-y-6">
            <article className="bg-surface-container-lowest dark:bg-slate-900/70 p-8 md:p-10 rounded-2xl border border-outline-variant/20 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-secondary-fixed dark:bg-blue-500/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary dark:text-blue-300 text-2xl">
                      work_history
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-on-primary-fixed dark:text-white">
                        Full Stack Development
                      </h3>
                      <p className="mt-2 text-lg text-secondary dark:text-blue-400 font-medium">
                        Practical project-based experience
                      </p>
                    </div>

                    <p className="text-on-surface-variant dark:text-slate-300 leading-relaxed max-w-2xl">
                      Built training and portfolio projects that mirror
                      production workflows, with emphasis on frontend
                      interfaces, API design, authentication, authorization,
                      middleware handling, database modeling, and backend
                      optimization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="rounded-2xl bg-surface dark:bg-slate-950/60 border border-outline-variant/15 dark:border-slate-800 p-6">
                  <p className="text-[11px] font-black uppercase tracking-[0.3em] text-on-surface-variant dark:text-slate-400 mb-4">
                    Key Contributions
                  </p>
                  <ul className="space-y-3 text-on-surface-variant dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-outline-variant dark:text-slate-400 text-sm mt-1">
                        check_circle
                      </span>
                      <span>
                        Designed RESTful APIs and reusable frontend views for
                        scalable full stack applications.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-outline-variant dark:text-slate-400 text-sm mt-1">
                        check_circle
                      </span>
                      <span>
                        Implemented JWT authentication, authorization, and
                        middleware-driven request handling across client and
                        server.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-outline-variant dark:text-slate-400 text-sm mt-1">
                        check_circle
                      </span>
                      <span>
                        Optimized database queries and improved application
                        responsiveness across different project types.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-surface dark:bg-slate-950/60 border border-outline-variant/15 dark:border-slate-800 p-6">
                  <p className="text-[11px] font-black uppercase tracking-[0.3em] text-on-surface-variant dark:text-slate-400 mb-4">
                    Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                      Node.js
                    </span>
                    <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                      Express.js
                    </span>
                    <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                      NestJS
                    </span>
                    <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                      React
                    </span>
                    <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                      NextJS
                    </span>
                    {/* <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                      Angular
                    </span> */}
                    {/* <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                      Laravel
                    </span> */}
                    <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                      MongoDB
                    </span>
                    <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                      MySQL
                    </span>
                    <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                      PostgreSQL
                    </span>
                    <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                      JWT Auth
                    </span>
                    <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                      REST APIs
                    </span>
                    <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                      Query Optimization
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
