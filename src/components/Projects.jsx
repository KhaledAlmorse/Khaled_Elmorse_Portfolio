import React from "react";

const projects = [
  {
    id: "asd",
    icon: "dataset",
    title: "ASD Final Project",
    category: "Enterprise Backend System",
    github: "https://github.com/KhaledAlmorse/ASD_Final_Project",
    desc1: "A structured backend system designed to handle complex business workflows where multiple user roles interact with different parts of the system in a controlled and secure way.",
    desc2: "Built using modular architecture and RESTful APIs with role-based access control (RBAC), enabling scalable development, secure operations, and clear separation between system components.",
    tags: ["Node.js", "Express", "RBAC", "REST API"],
  },
  {
    id: "ecommerce",
    icon: "shopping_cart",
    title: "E-commerce API V2",
    category: "E-commerce Backend",
    github: "https://github.com/KhaledAlmorse/Ecommerce_api_V2",
    desc1: "A backend system for an online store that handles product management, user accounts, orders, and the complete shopping workflow from browsing to checkout.",
    desc2: "Built using RESTful APIs with authentication, filtering, pagination, and optimized query handling to ensure secure operations and efficient data processing as the system scales.",
    tags: ["Node.js", "Express", "MongoDB", "REST API"],
  },
  {
    id: "social",
    icon: "groups",
    title: "Social App",
    category: "Social Platform API",
    github: "https://github.com/KhaledAlmorse/Social-APP",
    desc1: "A backend API for a social networking platform that allows users to register, manage profiles, create posts, and interact with content through a secure application flow.",
    desc2: "Built with authentication, protected routes, and scalable architecture supporting user relationships, post management, and real-time interaction workflows similar to modern social platforms.",
    tags: ["Node.js", "Express", "REST API", "Auth"],
  },
  {
    id: "hotel",
    icon: "apartment",
    title: "Hotel Booking System API",
    category: "Hotel Reservation Backend",
    github: "https://github.com/KhaledAlmorse/Hotel-Booking-System-Api",
    desc1: "A backend system for managing hotel reservations, room availability, booking requests, and user access across a complete hotel management flow.",
    desc2: "Built with RESTful APIs, authentication, role-based access control, and structured booking logic to support secure reservations and reliable room management operations.",
    tags: ["Node.js", "Express", "Booking API", "RBAC"],
  },
  {
    id: "bookstore",
    icon: "menu_book",
    title: "Book Store API V2",
    category: "Bookstore Backend",
    github: "https://github.com/KhaledAlmorse/Book_store_Api_V2",
    desc1: "A backend system for managing an online bookstore, handling books, categories, users, and core operations like browsing, searching, and organizing catalog data.",
    desc2: "Built with RESTful APIs, validation, and structured data handling to support scalable catalog management and efficient inventory-style workflows.",
    tags: ["Node.js", "Express", "MongoDB", "REST API"],
  },
];

export default function Projects() {
  const handleMouseMove = (e) => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(700px) rotateY(${
      x * 9
    }deg) rotateX(${-y * 9}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <section
      className="py-32 bg-surface-container-low dark:bg-slate-900"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16 reveal">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-on-primary-fixed dark:text-white">
                Projects
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-sm w-full lg:w-auto">
              <div className="bg-surface-container-lowest dark:bg-slate-950/70 border border-outline-variant/10 dark:border-slate-700 rounded-2xl px-5 py-4">
                <p className="text-2xl font-black text-on-primary-fixed dark:text-white">
                  5
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-on-surface-variant dark:text-slate-400">
                  Projects
                </p>
              </div>
              <div className="bg-surface-container-lowest dark:bg-slate-950/70 border border-outline-variant/10 dark:border-slate-700 rounded-2xl px-5 py-4">
                <p className="text-2xl font-black text-on-primary-fixed dark:text-white">
                  API
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-on-surface-variant dark:text-slate-400">
                  Focused
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="stagger-children grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="tilt-card bg-surface-container-lowest dark:bg-slate-950/70 p-8 rounded-2xl shadow-sm border border-outline-variant/10 dark:border-slate-700 flex flex-col h-full hover:shadow-xl hover:border-secondary/20 dark:hover:border-blue-400/20 transition-all duration-300 transform"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary-fixed dark:bg-blue-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary dark:text-blue-400 text-3xl">
                    {project.icon}
                  </span>
                </div>
                <a
                  className="text-on-surface-variant dark:text-slate-400 hover:text-secondary dark:hover:text-blue-400"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
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

                <p className="text-sm text-on-surface-variant dark:text-slate-300 leading-relaxed">
                  {project.desc2}
                </p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
