import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-surface-container-lowest dark:bg-slate-900 border-t border-outline-variant/10 dark:border-slate-700 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[10%] w-[280px] h-[280px] bg-blue-400/5 dark:bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-secondary dark:text-blue-400 mb-3">
                Backend Portfolio
              </p>
              <span className="font-black text-3xl tracking-tighter text-on-primary-fixed dark:text-white uppercase">
                Khaled Almorse
              </span>
            </div>

            <p className="text-on-surface-variant dark:text-slate-400 leading-relaxed max-w-md">
              Backend developer focused on building secure, scalable, and
              maintainable APIs with Node.js, Express.js, and database-driven
              application architecture.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 text-xs font-bold uppercase tracking-[0.2em] hover:text-secondary dark:hover:text-blue-400 transition-colors"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container dark:bg-slate-800 text-on-surface dark:text-slate-100 text-xs font-bold uppercase tracking-[0.2em] hover:text-secondary dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-on-surface-variant dark:text-slate-500 mb-5">
              Quick Links
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                className="group flex items-center gap-3 p-4 rounded-2xl bg-surface-container-low dark:bg-slate-800/70 border border-outline-variant/15 dark:border-slate-700 hover:border-secondary/30 dark:hover:border-blue-400/30 transition-all"
                href="https://github.com/KhaledAlmorse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-xl">
                  code
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant dark:text-slate-500">
                    GitHub
                  </p>
                  <p className="text-sm font-bold text-on-surface dark:text-slate-100 group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors">
                    Repositories
                  </p>
                </div>
              </a>

              <a
                className="group flex items-center gap-3 p-4 rounded-2xl bg-surface-container-low dark:bg-slate-800/70 border border-outline-variant/15 dark:border-slate-700 hover:border-secondary/30 dark:hover:border-blue-400/30 transition-all"
                href="https://www.linkedin.com/in/khaled-elmorse-manea-53863623b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-xl">
                  person
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant dark:text-slate-500">
                    LinkedIn
                  </p>
                  <p className="text-sm font-bold text-on-surface dark:text-slate-100 group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors">
                    Professional Profile
                  </p>
                </div>
              </a>

              <a
                className="group flex items-center gap-3 p-4 rounded-2xl bg-surface-container-low dark:bg-slate-800/70 border border-outline-variant/15 dark:border-slate-700 hover:border-secondary/30 dark:hover:border-blue-400/30 transition-all sm:col-span-2"
                href="mailto:khaledelmorsemanea@gmail.com"
              >
                <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-xl">
                  mail
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant dark:text-slate-500">
                    Email
                  </p>
                  <p className="text-sm font-bold text-on-surface dark:text-slate-100 group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors break-all">
                    khaledelmorsemanea@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col items-start lg:items-end gap-5">
            <div className="text-left lg:text-right">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-on-surface-variant dark:text-slate-500 mb-2">
                Navigation
              </p>
              <p className="text-on-surface-variant dark:text-slate-400 leading-relaxed max-w-xs">
                Scroll back to the top or continue exploring the portfolio
                sections anytime.
              </p>
            </div>

            <button
              id="back-to-top"
              onClick={scrollToTop}
              className="bg-surface-container dark:bg-slate-800 hover:bg-surface-container-highest dark:hover:bg-slate-700 text-on-surface-variant dark:text-slate-300 hover:text-secondary dark:hover:text-blue-400 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <span className="material-symbols-outlined">arrow_upward</span>
            </button>

            <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant dark:text-slate-500 opacity-60 text-left lg:text-right">
              © 2026 Khaled Almorse. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
