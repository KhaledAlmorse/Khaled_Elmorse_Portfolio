import React from "react";

export default function About() {
  return (
    <section className="py-32 bg-surface-container-low dark:bg-slate-900" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4 reveal-left">
            <h2 className="text-4xl font-black tracking-tighter text-on-primary-fixed dark:text-white uppercase border-l-8 border-secondary dark:border-blue-400 pl-6">
              About Me
            </h2>
          </div>

          <div className="md:col-span-8 space-y-8">
            <p className="reveal text-xl sm:text-2xl text-on-surface dark:text-slate-100 leading-snug font-light">
              I am a backend engineer driven by the philosophy of{" "}
              <span className="font-bold text-secondary dark:text-blue-400">
                Clean Architecture
              </span>
              . My work exists in the logic layer, where data integrity and
              system scalability define success. I specialize in building
              robust and scalable systems over solid foundations.
            </p>

            <div className="stagger-children space-y-6 text-on-surface-variant dark:text-slate-300 mt-8">
              <div className="about-item flex items-start gap-4 p-4 rounded-lg bg-surface dark:bg-slate-800 hover:bg-surface-container dark:hover:bg-slate-700 transition-colors border border-transparent dark:border-slate-700">
                <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl mt-1">
                  dns
                </span>
                <div>
                  <h4 className="font-bold text-on-primary-fixed dark:text-white text-lg">
                    Backend Focus
                  </h4>
                  <p className="leading-relaxed">
                    Deep expertise in Node.js, Express, and MongoDB to architect
                    powerful backend services.
                  </p>
                </div>
              </div>

              <div className="about-item flex items-start gap-4 p-4 rounded-lg bg-surface dark:bg-slate-800 hover:bg-surface-container dark:hover:bg-slate-700 transition-colors border border-transparent dark:border-slate-700">
                <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl mt-1">
                  api
                </span>
                <div>
                  <h4 className="font-bold text-on-primary-fixed dark:text-white text-lg">
                    API Development & Clean Architecture
                  </h4>
                  <p className="leading-relaxed">
                    Constructing scalable and decoupled RESTful endpoints using
                    proper design patterns.
                  </p>
                </div>
              </div>

              <div className="about-item flex items-start gap-4 p-4 rounded-lg bg-surface dark:bg-slate-800 hover:bg-surface-container dark:hover:bg-slate-700 transition-colors border border-transparent dark:border-slate-700">
                <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl mt-1">
                  psychology
                </span>
                <div>
                  <h4 className="font-bold text-on-primary-fixed dark:text-white text-lg">
                    Problem-Solving Mindset
                  </h4>
                  <p className="leading-relaxed">
                    Methodical approach to debugging, optimizing algorithms, and
                    resolving critical bottlenecks.
                  </p>
                </div>
              </div>

              <div className="about-item flex items-start gap-4 p-4 rounded-lg bg-surface dark:bg-slate-800 hover:bg-surface-container dark:hover:bg-slate-700 transition-colors border border-transparent dark:border-slate-700">
                <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl mt-1">
                  school
                </span>
                <div>
                  <h4 className="font-bold text-on-primary-fixed dark:text-white text-lg">
                    Continuous Learning
                  </h4>
                  <p className="leading-relaxed">
                    Graduated from an intensive 1100+ hour ITI training program
                    specialized in Open Source.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
