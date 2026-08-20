import React from "react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80";

export default function ProjectCard({ project, onMouseMove, onMouseLeave }) {
  const links = project.links || project;

  return (
    <article
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group tilt-card bg-surface-container-lowest dark:bg-slate-950/80 rounded-2xl shadow-sm border border-outline-variant/15 dark:border-slate-800 flex flex-col h-full overflow-hidden hover:shadow-xl hover:border-secondary/30 dark:hover:border-blue-400/30 transition-all duration-300"
    >
      {/* 1. Project Image (Fixed 16:9 Aspect Ratio) */}
      <div className="relative aspect-video w-full overflow-hidden bg-surface-container-high dark:bg-slate-900 border-b border-outline-variant/10 dark:border-slate-800 shrink-0">
        <img
          src={project.image || FALLBACK_IMAGE}
          alt={project.title}
          loading="lazy"
          width="640"
          height="360"
          onError={(e) => {
            if (e.currentTarget.src !== FALLBACK_IMAGE) {
              e.currentTarget.src = FALLBACK_IMAGE;
            }
          }}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* 2. Project Type / Category */}
        <div className="mb-2 min-h-[1.25rem] flex items-center">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-secondary dark:text-blue-400">
            {project.category}
          </span>
        </div>

        {/* 3. Project Title (Fixed 2-line height for visual consistency across cards) */}
        <h3 className="text-xl sm:text-2xl font-bold text-on-primary-fixed dark:text-white mb-3 tracking-tight line-clamp-2 min-h-[3.5rem] sm:min-h-[4rem] flex items-start">
          {project.title}
        </h3>

        {/* 4. Project Description (Fixed 3-line height for visual consistency) */}
        <p className="text-sm text-on-surface-variant dark:text-slate-300 leading-relaxed mb-5 line-clamp-3 min-h-[4.5rem]">
          {project.desc1 || project.description}
        </p>

        {/* 5. Project Links (Consistent button height and min-height container) */}
        <div className="flex flex-wrap items-center gap-2 mb-6 min-h-[2rem]">
          {links.live && (
            <a
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-secondary/10 dark:bg-blue-500/10 text-secondary dark:text-blue-400 border border-secondary/20 dark:border-blue-500/20 hover:bg-secondary hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400"
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
              aria-label={`View Live Demo for ${project.title}`}
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-base"
              >
                language
              </span>
              <span>Live Demo</span>
            </a>
          )}
          {links.github && (
            <a
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-surface-container-low dark:bg-slate-900/80 text-on-surface-variant dark:text-slate-300 border border-outline-variant/15 dark:border-slate-800 hover:text-secondary dark:hover:text-blue-400 hover:border-secondary/30 dark:hover:border-blue-400/30 hover:bg-surface-container dark:hover:bg-slate-800 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              title={
                links.frontend ? "Backend Repository" : "GitHub Repository"
              }
              aria-label={`View ${project.title} Repository on GitHub`}
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-base"
              >
                {links.frontend ? "terminal" : "code"}
              </span>
              <span>{links.frontend ? "Backend Repo" : "GitHub"}</span>
            </a>
          )}
          {links.frontend && (
            <a
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-surface-container-low dark:bg-slate-900/80 text-on-surface-variant dark:text-slate-300 border border-outline-variant/15 dark:border-slate-800 hover:text-secondary dark:hover:text-blue-400 hover:border-secondary/30 dark:hover:border-blue-400/30 hover:bg-surface-container dark:hover:bg-slate-800 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400"
              href={links.frontend}
              target="_blank"
              rel="noopener noreferrer"
              title="Frontend Repository"
              aria-label={`View ${project.title} Frontend Repository on GitHub`}
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-base"
              >
                computer
              </span>
              <span>Frontend Repo</span>
            </a>
          )}
          {links.backend && (
            <a
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-surface-container-low dark:bg-slate-900/80 text-on-surface-variant dark:text-slate-300 border border-outline-variant/15 dark:border-slate-800 hover:text-secondary dark:hover:text-blue-400 hover:border-secondary/30 dark:hover:border-blue-400/30 hover:bg-surface-container dark:hover:bg-slate-800 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400"
              href={links.backend}
              target="_blank"
              rel="noopener noreferrer"
              title="Backend Deployment"
              aria-label={`View ${project.title} Backend Deployment`}
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-base"
              >
                dns
              </span>
              <span>Backend</span>
            </a>
          )}
          {(links.postman || links.apiDocs) && (
            <a
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-surface-container-low dark:bg-slate-900/80 text-on-surface-variant dark:text-slate-300 border border-outline-variant/15 dark:border-slate-800 hover:text-secondary dark:hover:text-blue-400 hover:border-secondary/30 dark:hover:border-blue-400/30 hover:bg-surface-container dark:hover:bg-slate-800 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400"
              href={links.postman || links.apiDocs}
              target="_blank"
              rel="noopener noreferrer"
              title="API Documentation"
              aria-label={`View ${project.title} API Documentation`}
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-base"
              >
                description
              </span>
              <span>{links.postman ? "Postman" : "API Docs"}</span>
            </a>
          )}
        </div>

        {/* 6. Technology Stack (Tags / Badges - pinned to bottom) */}
        <div className="mt-auto pt-5 border-t border-outline-variant/10 dark:border-slate-800/80 flex flex-wrap gap-2 items-center min-h-[3rem]">
          {(project.tags || project.technologies || []).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-surface-container dark:bg-slate-900/90 text-on-surface-variant dark:text-slate-300 border border-outline-variant/10 dark:border-slate-800 rounded-lg transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
