import React, { useEffect } from "react";

const cvOptions = [
  {
    id: "backend",
    title: "Backend Developer",
    description:
      "Backend-focused CV highlighting server-side development, APIs, databases, and backend architecture.",
    url: "https://drive.google.com/file/d/1SYvI7pnIBjxoloPJF1TqDAZutP5b5RUj/view?usp=drive_link",
    icon: "dns",
  },
  {
    id: "fullstack",
    title: "Full-Stack Developer",
    description:
      "Full-stack CV covering both frontend and backend application development.",
    url: "https://drive.google.com/file/d/1HSQY4HpYItCkxmGmAbXJ0qjWfbzGP1Wj/view?usp=drive_link",
    icon: "layers",
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    description:
      "Software engineering-focused CV emphasizing engineering practices, architecture, problem solving, and scalable software development.",
    url: "https://drive.google.com/file/d/1GLeKnLFOE7ffH5z5PGGCFMCmBPZIBAYT/view?usp=drive_link",
    icon: "code",
  },
];

export default function CvModal({ isOpen, onClose }) {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      aria-describedby="cv-modal-desc"
    >
      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface dark:bg-slate-900 border border-outline-variant/30 dark:border-slate-700/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl space-y-8 animate-scaleIn text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-outline-variant/20 dark:border-slate-800 pb-6">
          <div className="space-y-1">
            <h3
              id="cv-modal-title"
              className="text-2xl sm:text-3xl font-black tracking-tight text-on-primary-fixed dark:text-white"
            >
              Choose Your CV
            </h3>
            <p
              id="cv-modal-desc"
              className="text-sm sm:text-base text-on-surface-variant/80 dark:text-slate-400"
            >
              Select the version that best matches your needs.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close CV selection modal"
            className="p-2 rounded-xl text-on-surface-variant dark:text-slate-400 hover:bg-surface-container dark:hover:bg-slate-800 hover:text-on-surface dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-2xl"
            >
              close
            </span>
          </button>
        </div>

        {/* 3 CV Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cvOptions.map((cv) => (
            <div
              key={cv.id}
              className="group relative p-6 rounded-2xl bg-surface-container dark:bg-slate-800/80 border border-outline-variant/30 dark:border-slate-700/70 hover:border-secondary/50 dark:hover:border-blue-400/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 dark:bg-blue-500/10 text-secondary dark:text-blue-400 flex items-center justify-center">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-2xl"
                  >
                    {cv.icon}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-on-primary-fixed dark:text-white group-hover:text-secondary dark:group-hover:text-blue-400 transition-colors">
                    {cv.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-on-surface-variant dark:text-slate-300 leading-relaxed">
                    {cv.description}
                  </p>
                </div>
              </div>

              <a
                href={cv.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Download ${cv.title} CV (opens Google Drive)`}
                className="btn-ripple h-11 w-full bg-primary-container dark:bg-blue-600 text-on-primary font-bold text-sm rounded-xl tracking-wide transition-all shadow-md hover:shadow-secondary/20 hover:ring-2 hover:ring-secondary/50 dark:hover:ring-blue-400/40 active:scale-95 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400"
              >
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-lg"
                >
                  download
                </span>
                Download CV
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
