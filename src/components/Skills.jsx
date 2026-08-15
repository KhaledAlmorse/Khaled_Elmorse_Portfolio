import React from "react";

export default function Skills() {
  return (
    <section className="py-32 bg-surface dark:bg-slate-950" id="skills">
      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-16">
        {/* Section Header */}
        <div className="reveal">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-primary-fixed dark:text-white">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-on-surface-variant dark:text-slate-400 max-w-3xl">
            A comprehensive overview of my primary development stack alongside the languages, tools, and engineering practices I work with.
          </p>
        </div>

        {/* ============================================================
            1. CORE STACK (Primary Visual Hierarchy)
            ============================================================ */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-outline-variant/15 dark:border-slate-800/80">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary dark:bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary dark:bg-blue-400"></span>
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-on-primary-fixed dark:text-white uppercase">
                Core Tech Stack
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed/50 dark:bg-blue-500/10 text-on-secondary-fixed dark:text-blue-300 border border-secondary/20 dark:border-blue-400/20 text-xs font-bold tracking-wide">
              <span className="material-symbols-outlined text-sm text-secondary dark:text-blue-400">verified</span>
              Primary Production Focus
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Backend Core */}
            <div className="group relative p-7 sm:p-8 rounded-3xl bg-surface-container-low dark:bg-slate-900/90 border border-outline-variant/30 dark:border-slate-800 hover:border-secondary dark:hover:border-blue-400/60 shadow-sm hover:shadow-xl hover:shadow-secondary/5 dark:hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 dark:bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary-fixed dark:bg-blue-500/20 text-secondary dark:text-blue-300 flex items-center justify-center border border-secondary/20 dark:border-blue-400/20 group-hover:scale-105 transition-transform duration-300">
                    <span className="material-symbols-outlined text-3xl">dns</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary dark:text-blue-400 px-3 py-1 rounded-full bg-surface-container dark:bg-slate-800 border border-outline-variant/15 dark:border-slate-700">
                    Backend
                  </span>
                </div>

                <h4 className="text-xl font-black text-on-primary-fixed dark:text-white mb-2">
                  Server-Side Engineering
                </h4>
                <p className="text-xs text-on-surface-variant dark:text-slate-400 leading-relaxed mb-6">
                  Robust REST APIs, modular architectures, authentication, and secure request pipelines.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-outline-variant/10 dark:border-slate-800">
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-container dark:bg-slate-800/80 border border-outline-variant/15 dark:border-slate-700/60 group-hover:border-secondary/30 dark:group-hover:border-blue-400/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-sm font-bold text-on-surface dark:text-white">Node.js</span>
                  </div>
                  <span className="text-[11px] font-medium text-on-surface-variant dark:text-slate-400">Runtime & APIs</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-container dark:bg-slate-800/80 border border-outline-variant/15 dark:border-slate-700/60 group-hover:border-secondary/30 dark:group-hover:border-blue-400/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    <span className="text-sm font-bold text-on-surface dark:text-white">NestJS</span>
                  </div>
                  <span className="text-[11px] font-medium text-on-surface-variant dark:text-slate-400">Architecture & DI</span>
                </div>
              </div>
            </div>

            {/* Frontend Core */}
            <div className="group relative p-7 sm:p-8 rounded-3xl bg-surface-container-low dark:bg-slate-900/90 border border-outline-variant/30 dark:border-slate-800 hover:border-secondary dark:hover:border-blue-400/60 shadow-sm hover:shadow-xl hover:shadow-secondary/5 dark:hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 flex items-center justify-center border border-cyan-500/20 dark:border-cyan-400/20 group-hover:scale-105 transition-transform duration-300">
                    <span className="material-symbols-outlined text-3xl">web</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-400 px-3 py-1 rounded-full bg-surface-container dark:bg-slate-800 border border-outline-variant/15 dark:border-slate-700">
                    Frontend
                  </span>
                </div>

                <h4 className="text-xl font-black text-on-primary-fixed dark:text-white mb-2">
                  Client-Side Engineering
                </h4>
                <p className="text-xs text-on-surface-variant dark:text-slate-400 leading-relaxed mb-6">
                  Interactive UI components, state management, responsive layouts, and SSR/SSG rendering.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-outline-variant/10 dark:border-slate-800">
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-container dark:bg-slate-800/80 border border-outline-variant/15 dark:border-slate-700/60 group-hover:border-cyan-500/30 dark:group-hover:border-cyan-400/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                    <span className="text-sm font-bold text-on-surface dark:text-white">React.js</span>
                  </div>
                  <span className="text-[11px] font-medium text-on-surface-variant dark:text-slate-400">Hooks & State</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-container dark:bg-slate-800/80 border border-outline-variant/15 dark:border-slate-700/60 group-hover:border-cyan-500/30 dark:group-hover:border-cyan-400/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-white"></span>
                    <span className="text-sm font-bold text-on-surface dark:text-white">Next.js</span>
                  </div>
                  <span className="text-[11px] font-medium text-on-surface-variant dark:text-slate-400">Full-Stack SSR</span>
                </div>
              </div>
            </div>

            {/* Databases Core */}
            <div className="group relative p-7 sm:p-8 rounded-3xl bg-surface-container-low dark:bg-slate-900/90 border border-outline-variant/30 dark:border-slate-800 hover:border-secondary dark:hover:border-blue-400/60 shadow-sm hover:shadow-xl hover:shadow-secondary/5 dark:hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center justify-center border border-emerald-500/20 dark:border-emerald-400/20 group-hover:scale-105 transition-transform duration-300">
                    <span className="material-symbols-outlined text-3xl">database</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full bg-surface-container dark:bg-slate-800 border border-outline-variant/15 dark:border-slate-700">
                    Data Layer
                  </span>
                </div>

                <h4 className="text-xl font-black text-on-primary-fixed dark:text-white mb-2">
                  Database & Modeling
                </h4>
                <p className="text-xs text-on-surface-variant dark:text-slate-400 leading-relaxed mb-6">
                  Schema design, query optimization, indexing, relationships, and document storage.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-outline-variant/10 dark:border-slate-800">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-surface-container dark:bg-slate-800/80 border border-outline-variant/15 dark:border-slate-700/60 group-hover:border-emerald-500/30 dark:group-hover:border-emerald-400/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-sm font-bold text-on-surface dark:text-white">MongoDB</span>
                  </div>
                  <span className="text-[11px] font-medium text-on-surface-variant dark:text-slate-400">Document NoSQL</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-surface-container dark:bg-slate-800/80 border border-outline-variant/15 dark:border-slate-700/60 group-hover:border-emerald-500/30 dark:group-hover:border-emerald-400/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="text-sm font-bold text-on-surface dark:text-white">PostgreSQL</span>
                  </div>
                  <span className="text-[11px] font-medium text-on-surface-variant dark:text-slate-400">Relational SQL</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-surface-container dark:bg-slate-800/80 border border-outline-variant/15 dark:border-slate-700/60 group-hover:border-emerald-500/30 dark:group-hover:border-emerald-400/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span className="text-sm font-bold text-on-surface dark:text-white">MySQL</span>
                  </div>
                  <span className="text-[11px] font-medium text-on-surface-variant dark:text-slate-400">Relational DB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            2. ADDITIONAL TECHNOLOGIES & TOOLS
            ============================================================ */}
        <div className="space-y-8 pt-8 border-t border-outline-variant/15 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-outline-variant dark:bg-slate-600"></span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-on-primary-fixed dark:text-white uppercase">
                Additional Technologies & Tools
              </h3>
            </div>
            <p className="text-xs font-semibold text-on-surface-variant dark:text-slate-400">
              Languages, Frameworks, Systems & Engineering Practices
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {/* 1. Languages */}
            <div className="group p-6 sm:p-7 rounded-3xl bg-surface-container-lowest/80 dark:bg-slate-900/60 border border-outline-variant/20 dark:border-slate-800 hover:border-secondary/40 dark:hover:border-blue-400/40 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 dark:bg-blue-500/20 text-secondary dark:text-blue-400 flex items-center justify-center border border-secondary/15 dark:border-blue-400/20 group-hover:scale-105 transition-transform duration-300">
                    <span className="material-symbols-outlined text-2xl">code</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-on-primary-fixed dark:text-white">
                      Programming Languages
                    </h4>
                    <p className="text-[11px] text-on-surface-variant dark:text-slate-400">Core Syntax & Scripting</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    JavaScript (ES6+)
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    TypeScript
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Python
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    PHP
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Java
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Frameworks & APIs */}
            <div className="group p-6 sm:p-7 rounded-3xl bg-surface-container-lowest/80 dark:bg-slate-900/60 border border-outline-variant/20 dark:border-slate-800 hover:border-secondary/40 dark:hover:border-blue-400/40 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 dark:bg-blue-500/20 text-secondary dark:text-blue-400 flex items-center justify-center border border-secondary/15 dark:border-blue-400/20 group-hover:scale-105 transition-transform duration-300">
                    <span className="material-symbols-outlined text-2xl">dns</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-on-primary-fixed dark:text-white">
                      Frameworks & APIs
                    </h4>
                    <p className="text-[11px] text-on-surface-variant dark:text-slate-400">Server & Data Routing</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Express.js
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Django
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Laravel
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    RESTful APIs
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    GraphQL
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Frontend & Styling */}
            <div className="group p-6 sm:p-7 rounded-3xl bg-surface-container-lowest/80 dark:bg-slate-900/60 border border-outline-variant/20 dark:border-slate-800 hover:border-secondary/40 dark:hover:border-blue-400/40 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 dark:bg-blue-500/20 text-secondary dark:text-blue-400 flex items-center justify-center border border-secondary/15 dark:border-blue-400/20 group-hover:scale-105 transition-transform duration-300">
                    <span className="material-symbols-outlined text-2xl">web</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-on-primary-fixed dark:text-white">
                      Frontend & Styling
                    </h4>
                    <p className="text-[11px] text-on-surface-variant dark:text-slate-400">UI Systems & Layouts</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    HTML5
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    CSS3
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Tailwind CSS
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Bootstrap
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Angular
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Vue.js
                  </span>
                </div>
              </div>
            </div>

            {/* 4. Tools & Platforms */}
            <div className="group p-6 sm:p-7 rounded-3xl bg-surface-container-lowest/80 dark:bg-slate-900/60 border border-outline-variant/20 dark:border-slate-800 hover:border-secondary/40 dark:hover:border-blue-400/40 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 dark:bg-blue-500/20 text-secondary dark:text-blue-400 flex items-center justify-center border border-secondary/15 dark:border-blue-400/20 group-hover:scale-105 transition-transform duration-300">
                    <span className="material-symbols-outlined text-2xl">construction</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-on-primary-fixed dark:text-white">
                      Tools & Platforms
                    </h4>
                    <p className="text-[11px] text-on-surface-variant dark:text-slate-400">DevOps & Version Control</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Git
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    GitHub
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Docker
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Postman
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Apache
                  </span>
                </div>
              </div>
            </div>

            {/* 5. Software Engineering */}
            <div className="group p-6 sm:p-7 rounded-3xl bg-surface-container-lowest/80 dark:bg-slate-900/60 border border-outline-variant/20 dark:border-slate-800 hover:border-secondary/40 dark:hover:border-blue-400/40 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 dark:bg-blue-500/20 text-secondary dark:text-blue-400 flex items-center justify-center border border-secondary/15 dark:border-blue-400/20 group-hover:scale-105 transition-transform duration-300">
                    <span className="material-symbols-outlined text-2xl">psychology</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-on-primary-fixed dark:text-white">
                      Software Engineering
                    </h4>
                    <p className="text-[11px] text-on-surface-variant dark:text-slate-400">Architecture & Methodologies</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    OOP
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    SOLID Principles
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Clean Architecture
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Design Patterns
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    DSA
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Unit Testing
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Agile
                  </span>
                </div>
              </div>
            </div>

            {/* 6. AI-Assisted & Systems */}
            <div className="group p-6 sm:p-7 rounded-3xl bg-surface-container-lowest/80 dark:bg-slate-900/60 border border-outline-variant/20 dark:border-slate-800 hover:border-secondary/40 dark:hover:border-blue-400/40 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 dark:bg-blue-500/20 text-secondary dark:text-blue-400 flex items-center justify-center border border-secondary/15 dark:border-blue-400/20 group-hover:scale-105 transition-transform duration-300">
                    <span className="material-symbols-outlined text-2xl">smart_toy</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-on-primary-fixed dark:text-white">
                      AI-Assisted & Systems
                    </h4>
                    <p className="text-[11px] text-on-surface-variant dark:text-slate-400">Tooling & Environments</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Prompt Engineering
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Claude & ChatGPT
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    GitHub Copilot
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Linux & Bash
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Operating Systems
                  </span>
                  <span className="skill-tag px-3.5 py-1.5 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-200 border border-outline-variant/20 dark:border-slate-700/70 text-xs font-semibold rounded-full hover:border-secondary/40 dark:hover:border-blue-400/40 hover:text-secondary dark:hover:text-blue-300 transition-all">
                    Cloud Computing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

