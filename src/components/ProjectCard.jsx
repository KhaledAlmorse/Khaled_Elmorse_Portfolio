import React from "react";

const projectHighlights = {
  restomind: [
    "AI-Driven Demand Prediction",
    "Node.js, NestJS & MongoDB Backend",
    "JWT Auth & Role-Based Access Control",
    "External AI Service Integration",
  ],
  asd: [
    "JWT Authentication",
    "Appointment Scheduling",
    "Behavioral Assessment Modules",
    "Responsive UI",
  ],
  clinc: [
    "Appointment Scheduling",
    "Patient Records",
    "Doctor Management",
    "Role-Based Authentication",
  ],
  social: [
    "500+ Simulated Users",
    "Posts, Comments, Likes, Follows",
    "JWT Authentication",
    "Role-Based Authorization",
  ],
  hotel: [
    "Booking Workflows",
    "15+ RESTful APIs",
    "3 Responsive Dashboards",
    "30% Less Manual Booking",
  ],
  noteapp: [
    "JWT Authentication",
    "Reusable React Hooks",
    "Optimized MongoDB Queries",
    "Multi-User Notes",
  ],
  cafeteria: [
    "CRUD-Driven Modules",
    "User Authentication",
    "Relational Database Design",
    "20% Less Manual Processing",
  ],
  viora: [
    "React & Vite Portfolio UI",
    "Clean Component Structure",
    "Smooth Page Navigation",
    "Tailwind CSS Styling",
  ],
  ecommerce: [
    "RESTful Backend Architecture",
    "Layered MVC Design",
    "Product Catalog & Uploads",
    "Order & Checkout Workflows",
  ],
  bookstore: [
    "RESTful Bookstore API",
    "Middleware Request Handling",
    "File Upload Support",
    "Catalog & Operation Management",
  ],
  hotelapi: [
    "Room Booking & Reservations",
    "Layered Services & Models",
    "Middleware Request Handling",
    "Maintainable Modular Codebase",
  ],
  pcstore: [
    "Vue.js & Vite Storefront",
    "Component-Based UI",
    "PC Parts Catalog Browsing",
    "Tailwind CSS Responsive Layout",
  ],
};

export default function ProjectCard({ project, onMouseMove, onMouseLeave }) {
  const highlights = projectHighlights[project.id] || [];

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="tilt-card bg-surface-container-lowest dark:bg-slate-950/70 p-8 rounded-2xl shadow-sm border border-outline-variant/10 dark:border-slate-700 flex flex-col h-full min-h-[560px] sm:min-h-[580px] hover:shadow-md hover:border-secondary/20 dark:hover:border-blue-400/20 transition-colors duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 rounded-2xl bg-secondary-fixed dark:bg-blue-500/20 flex items-center justify-center">
          <span aria-hidden="true" className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl">
            {project.icon}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {project.live && (
            <a
              className="p-1.5 rounded-lg text-on-surface-variant dark:text-slate-400 hover:text-secondary dark:hover:text-blue-400 hover:bg-surface-container dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
              aria-label={`View Live Demo for ${project.title}`}
            >
              <span aria-hidden="true" className="material-symbols-outlined text-xl">language</span>
            </a>
          )}
          {project.github && (
            <a
              className="p-1.5 rounded-lg text-on-surface-variant dark:text-slate-400 hover:text-secondary dark:hover:text-blue-400 hover:bg-surface-container dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              title={project.frontend ? "Backend Repository" : "GitHub Repository"}
              aria-label={`View ${project.title} Repository on GitHub`}
            >
              <span aria-hidden="true" className="material-symbols-outlined text-xl">
                {project.live || project.frontend || project.apiDocs ? "code" : "open_in_new"}
              </span>
            </a>
          )}
          {project.frontend && (
            <a
              className="p-1.5 rounded-lg text-on-surface-variant dark:text-slate-400 hover:text-secondary dark:hover:text-blue-400 hover:bg-surface-container dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400"
              href={project.frontend}
              target="_blank"
              rel="noopener noreferrer"
              title="Frontend Repository"
              aria-label={`View ${project.title} Frontend Repository on GitHub`}
            >
              <span aria-hidden="true" className="material-symbols-outlined text-xl">computer</span>
            </a>
          )}
          {project.apiDocs && (
            <a
              className="p-1.5 rounded-lg text-on-surface-variant dark:text-slate-400 hover:text-secondary dark:hover:text-blue-400 hover:bg-surface-container dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400"
              href={project.apiDocs}
              target="_blank"
              rel="noopener noreferrer"
              title="API Documentation"
              aria-label={`View ${project.title} API Documentation`}
            >
              <span aria-hidden="true" className="material-symbols-outlined text-xl">description</span>
            </a>
          )}
          {!project.github && !project.live && (
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-on-surface-variant dark:text-slate-400">
              TODO: confirm repo link
            </span>
          )}
        </div>
      </div>

      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant dark:text-slate-400">
        {project.category}
      </p>

      <h3 className="text-2xl font-bold text-on-primary-fixed dark:text-white mb-4">
        {project.title}
      </h3>

      <div className="space-y-4 flex-grow">
        <p className="text-sm text-on-surface dark:text-slate-200 leading-snug">
          {project.desc1}
        </p>

        <div className="pt-4 border-t border-outline-variant/10 dark:border-slate-700">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant dark:text-slate-400 mb-4">
            Project Highlights
          </p>
          <ul className="space-y-2 text-sm text-on-surface-variant dark:text-slate-300">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-sm mt-0.5">
                  check_circle
                </span>
                <span className="leading-snug">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-outline-variant/10 dark:border-slate-700">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-bold uppercase bg-surface dark:bg-slate-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
