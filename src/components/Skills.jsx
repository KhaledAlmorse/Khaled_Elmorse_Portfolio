import React from "react";

export default function Skills() {
  return (
    <section className="py-32 bg-surface dark:bg-slate-950" id="skills">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-primary-fixed dark:text-white">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Backend & Database */}
          <div className="reveal" style={{ transitionDelay: "0s" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400">
                database
              </span>
              <h3 className="text-lg font-bold text-on-primary-fixed dark:text-white tracking-tight">
                Backend & Database
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                Node.js
              </span>
              <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                Express.js
              </span>
              <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                REST APIs
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                MongoDB
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                MySQL
              </span>
            </div>
          </div>

          {/* Core Concepts */}
          <div className="reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400">
                settings
              </span>
              <h3 className="text-lg font-bold text-on-primary-fixed dark:text-white tracking-tight">
                Core Concepts
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                API Security
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Authentication & Authorization
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Signup with Google OAuth
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Middleware Design
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Clean Code / MVC
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Performance Optimization
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Pagination & Filtering
              </span>
            </div>
          </div>

          {/* Tools & Soft Skills */}
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400">
                construction
              </span>
              <h3 className="text-lg font-bold text-on-primary-fixed dark:text-white tracking-tight">
                Tools & Soft Skills
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Git & GitHub
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Postman
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Linux
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Docker
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Problem Solving
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Teamwork
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Communication
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
