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
          <div className="reveal" style={{ transitionDelay: "0s" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400">
                code
              </span>
              <h3 className="text-lg font-bold text-on-primary-fixed dark:text-white tracking-tight">
                Languages
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                JavaScript (ES6+)
              </span>
              <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                TypeScript
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                PHP
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Python
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Java
              </span>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.05s" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400">
                web
              </span>
              <h3 className="text-lg font-bold text-on-primary-fixed dark:text-white tracking-tight">
                Frontend
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                HTML5
              </span>
              <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                CSS3
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Bootstrap
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Tailwind CSS
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                React
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Angular
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Vue.js
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Next.js
              </span>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400">
                dns
              </span>
              <h3 className="text-lg font-bold text-on-primary-fixed dark:text-white tracking-tight">
                Server-side
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                Node.js
              </span>
              <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                Express.js
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                NestJS
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Laravel
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Django
              </span>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400">
                database
              </span>
              <h3 className="text-lg font-bold text-on-primary-fixed dark:text-white tracking-tight">
                Databases
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                MongoDB
              </span>
              <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                MySQL
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                PostgreSQL
              </span>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400">
                api
              </span>
              <h3 className="text-lg font-bold text-on-primary-fixed dark:text-white tracking-tight">
                API Development
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="skill-tag px-4 py-2 bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-xs font-bold rounded-full border border-transparent dark:border-blue-400/20">
                RESTful APIs
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                GraphQL
              </span>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.25s" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400">
                construction
              </span>
              <h3 className="text-lg font-bold text-on-primary-fixed dark:text-white tracking-tight">
                Tools & Platforms
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Git
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                GitHub
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Docker
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Postman
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Apache
              </span>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400">
                terminal
              </span>
              <h3 className="text-lg font-bold text-on-primary-fixed dark:text-white tracking-tight">
                Systems
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Linux
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Bash Scripting
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Computer Networks
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Operating Systems
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Cloud Computing
              </span>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.35s" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400">
                smart_toy
              </span>
              <h3 className="text-lg font-bold text-on-primary-fixed dark:text-white tracking-tight">
                AI-Assisted Development
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Prompt Engineering
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                ChatGPT
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Claude
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                GitHub Copilot
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Cursor AI
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                OpenAI Codex
              </span>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.4s" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400">
                psychology
              </span>
              <h3 className="text-lg font-bold text-on-primary-fixed dark:text-white tracking-tight">
                Software Engineering
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                OOP
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                SOLID Principles
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Design Patterns
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Clean Architecture
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Software Architecture
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Data Structures & Algorithms
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Agile
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                UML
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Unit Testing
              </span>
              <span className="skill-tag px-4 py-2 bg-surface-container-high dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/20 dark:border-slate-700 text-xs font-bold rounded-full">
                Application Security
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
