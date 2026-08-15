import React from "react";

export default function Contact() {
  return (
    <section
      className="py-32 bg-surface dark:bg-slate-950 relative overflow-hidden"
      id="contact"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 dark:bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 dark:bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-on-primary-fixed dark:text-white mb-6 uppercase italic">
            Contact
            <span className="animate-pulse text-secondary dark:text-blue-400">
              _
            </span>
          </h2>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.25em]">
            <span className="px-4 py-2 rounded-full bg-surface-container-low dark:bg-slate-900/70 text-secondary dark:text-blue-400 border border-outline-variant/15 dark:border-slate-700">
              Full Stack Developer
            </span>
            <span className="px-4 py-2 rounded-full bg-surface-container-low dark:bg-slate-900/70 text-on-surface-variant dark:text-slate-300 border border-outline-variant/15 dark:border-slate-700">
              Mansoura, Egypt
            </span>
            <span className="px-4 py-2 rounded-full bg-surface-container-low dark:bg-slate-900/70 text-on-surface-variant dark:text-slate-300 border border-outline-variant/15 dark:border-slate-700">
              Open to Collaboration
            </span>
          </div>

          <p className="mt-6 text-sm text-on-surface-variant dark:text-slate-400 max-w-xl mx-auto">
            Prefer email for project details, LinkedIn for professional
            networking, and GitHub for code samples and repositories.
          </p>
        </div>

        {/* Improved Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto">
          {/* Email Card */}
          <a
            href="mailto:khaledelmorsemanea@gmail.com"
            aria-label="Send email to khaledelmorsemanea@gmail.com"
            className="contact-card group relative p-8 bg-surface-container/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-outline-variant/20 dark:border-slate-800 hover:border-secondary dark:hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          >
            <div className="flex flex-col items-center text-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary dark:bg-blue-400 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-surface-container-highest dark:bg-slate-800 flex items-center justify-center group-hover:rotate-[10deg] transition-all duration-500">
                  <span aria-hidden="true" className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl">
                    mail
                  </span>
                </div>
              </div>
              <div className="w-full">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-on-surface-variant dark:text-slate-400 mb-2">
                  Email
                </p>
                <p className="font-bold text-sm text-on-surface dark:text-slate-200 group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors break-all">
                  khaledelmorsemanea@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href="tel:01098101014"
            aria-label="Call phone number +201098101014"
            className="contact-card group relative p-8 bg-surface-container/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-outline-variant/20 dark:border-slate-800 hover:border-secondary dark:hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          >
            <div className="flex flex-col items-center text-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary dark:bg-blue-400 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-surface-container-highest dark:bg-slate-800 flex items-center justify-center group-hover:rotate-[10deg] transition-all duration-500">
                  <span aria-hidden="true" className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl">
                    call
                  </span>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-on-surface-variant dark:text-slate-400 mb-2">
                  Phone
                </p>
                <p className="font-bold text-lg text-on-surface dark:text-slate-200 group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors">
                  +201098101014
                </p>
              </div>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/KhaledAlmorse"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Khaled Almorse GitHub profile"
            className="contact-card group relative p-8 bg-surface-container/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-outline-variant/20 dark:border-slate-800 hover:border-secondary dark:hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          >
            <div className="flex flex-col items-center text-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary dark:bg-blue-400 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-surface-container-highest dark:bg-slate-800 flex items-center justify-center group-hover:rotate-[10deg] transition-all duration-500">
                  <span aria-hidden="true" className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl">
                    code
                  </span>
                </div>
              </div>
              <div className="w-full">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-on-surface-variant dark:text-slate-400 mb-2">
                  GitHub
                </p>
                <p className="font-bold text-sm text-on-surface dark:text-slate-200 group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors break-all">
                  github.com/KhaledAlmorse
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/khaled-elmorse-manea-53863623b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Khaled Elmorse Manea LinkedIn profile"
            className="contact-card group relative p-8 bg-surface-container/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-outline-variant/20 dark:border-slate-800 hover:border-secondary dark:hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          >
            <div className="flex flex-col items-center text-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary dark:bg-blue-400 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-surface-container-highest dark:bg-slate-800 flex items-center justify-center group-hover:rotate-[10deg] transition-all duration-500">
                  <span aria-hidden="true" className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl">
                    person
                  </span>
                </div>
              </div>
              <div className="w-full">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-on-surface-variant dark:text-slate-400 mb-2">
                  LinkedIn
                </p>
                <p className="font-bold text-sm text-on-surface dark:text-slate-200 group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors break-all">
                  linkedin.com/in/khaled-elmorse-manea-53863623b
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
