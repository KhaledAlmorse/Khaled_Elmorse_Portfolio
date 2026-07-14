import React from "react";

export default function About() {
  return (
    <section
      className="py-32 bg-surface-container-low dark:bg-slate-900"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-14 reveal-left">
          <h2 className="mt-2 text-4xl sm:text-5xl font-black tracking-tighter text-on-primary-fixed dark:text-white border-l-8 border-secondary dark:border-blue-400 pl-6">
            ABOUT ME
          </h2>
        </div>

        <div className="space-y-10">
          <p className="reveal text-xl sm:text-2xl text-on-surface dark:text-slate-100 leading-snug font-light max-w-3xl">
            I am a full stack developer focused on building complete web
            experiences from UI to database. I have delivered 10+
            projects and 50+ RESTful API endpoints, and I combine{" "}
            <span className="font-bold text-secondary dark:text-blue-400">
              React
            </span>
            ,{" "}
            <span className="font-bold text-secondary dark:text-blue-400">
              Node.js
            </span>
            , and{" "}
            <span className="font-bold text-secondary dark:text-blue-400">
              Nest.js
            </span>
            ,{" "}
            <span className="font-bold text-secondary dark:text-blue-400">
              MongoDB
            </span>
            , and{" "}
            <span className="font-bold text-secondary dark:text-blue-400">
              PostgreSQL
            </span>
            , data design to deliver practical, scalable applications with
            authentication, authorization, and clean architecture.
          </p>

          <div className="stagger-children grid sm:grid-cols-2 gap-6 text-on-surface-variant dark:text-slate-300">
            <div className="about-item group flex items-start gap-4 p-5 rounded-xl bg-surface dark:bg-slate-800 hover:bg-surface-container dark:hover:bg-slate-700 transition-all duration-300 border border-transparent dark:border-slate-700 hover:border-secondary/40 dark:hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-lg">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl mt-1 transition-transform duration-300 group-hover:scale-110">
                dns
              </span>
              <div>
                <h4 className="font-bold text-on-primary-fixed dark:text-white text-lg">
                  End-to-End Delivery
                </h4>
                <p className="leading-relaxed">
                  Comfortable moving between frontend interfaces, APIs, and
                  database design to ship complete products.
                </p>
              </div>
            </div>

            <div className="about-item group flex items-start gap-4 p-5 rounded-xl bg-surface dark:bg-slate-800 hover:bg-surface-container dark:hover:bg-slate-700 transition-all duration-300 border border-transparent dark:border-slate-700 hover:border-secondary/40 dark:hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-lg">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl mt-1 transition-transform duration-300 group-hover:scale-110">
                api
              </span>
              <div>
                <h4 className="font-bold text-on-primary-fixed dark:text-white text-lg">
                  API Development & Security
                </h4>
                <p className="leading-relaxed">
                  Building secure REST and GraphQL services with authentication,
                  authorization, and clean architecture.
                </p>
              </div>
            </div>

            <div className="about-item group flex items-start gap-4 p-5 rounded-xl bg-surface dark:bg-slate-800 hover:bg-surface-container dark:hover:bg-slate-700 transition-all duration-300 border border-transparent dark:border-slate-700 hover:border-secondary/40 dark:hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-lg">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl mt-1 transition-transform duration-300 group-hover:scale-110">
                psychology
              </span>
              <div>
                <h4 className="font-bold text-on-primary-fixed dark:text-white text-lg">
                  Full Stack Problem Solving
                </h4>
                <p className="leading-relaxed">
                  Methodical approach to debugging, optimizing workflows, and
                  resolving real product issues across the stack.
                </p>
              </div>
            </div>

            <div className="about-item group flex items-start gap-4 p-5 rounded-xl bg-surface dark:bg-slate-800 hover:bg-surface-container dark:hover:bg-slate-700 transition-all duration-300 border border-transparent dark:border-slate-700 hover:border-secondary/40 dark:hover:border-blue-400/40 hover:-translate-y-1 hover:shadow-lg">
              <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl mt-1 transition-transform duration-300 group-hover:scale-110">
                school
              </span>
              <div>
                <h4 className="font-bold text-on-primary-fixed dark:text-white text-lg">
                  Continuous Learning
                </h4>
                <p className="leading-relaxed">
                  Built on an intensive ITI full-stack program and a Computer
                  Science degree with strong foundations in software
                  engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
