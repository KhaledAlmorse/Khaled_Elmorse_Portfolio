import React, { useEffect, useRef } from "react";
import ProjectsCarousel from "./ProjectsCarousel";

const projects = [
  {
    id: "restomind",
    icon: "recycling",
    title: "RestoMind — AI-Powered Restaurant Waste Management Platform",
    category: "Graduation Project",
    github: "https://github.com/KhaledAlmorse/RestoMindAPI",
    live: "https://restomind.vercel.app/",
    frontend: "https://github.com/AhmedMohO/restomind-app",
    apiDocs: "https://documenter.getpostman.com/view/28645479/2sBY4PPfia",
    desc1:
      "A full-stack platform that helps restaurants reduce food waste and recover revenue from surplus inventory, using AI-driven demand prediction and waste-risk insights.",
    desc2:
      "Built the backend using Node.js, NestJS, and MongoDB, including RESTful APIs, authentication/authorization, role-based access control (RBAC), and external AI service integration.",
    tags: ["Node.js", "NestJS", "MongoDB", "Next.js", "AI Integration"],
  },
  {
    id: "asd",
    icon: "dataset",
    title: "Autism Support Platform",
    category: "Graduation Project",
    github: "https://github.com/KhaledAlmorse/ASD_Final_Project",
    desc1:
      "Built with React.js, Node.js, Express.js, and MongoDB to support end-to-end care workflows for an autism support platform.",
    desc2:
      "Includes 10+ RESTful APIs, JWT authentication, appointment scheduling, behavioral assessment modules, and a responsive UI.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    id: "clinc",
    icon: "shopping_cart",
    title: "Clinic Appointment System",
    category: "Full Stack Application",
    github: "https://github.com/KhaledAlmorse/Clinic-Appointment-System",
    desc1:
      "Built with Python, Django, and MySQL for appointment scheduling, patient records, doctor management, and role-based authentication.",
    desc2:
      "Implements 10+ endpoints, 5+ relational models, and an MVC architecture for a clean and maintainable workflow.",
    tags: ["Python", "Django", "MySQL", "MVC", "RBAC"],
  },
  {
    id: "social",
    icon: "groups",
    title: "Social Media API",
    category: "API",
    github: "https://github.com/KhaledAlmorse/Social-APP",
    desc1:
      "A RESTful API built with Node.js, Express.js, and MongoDB for 500+ simulated users with secure access control.",
    desc2:
      "Provides 8+ endpoints for posts, comments, likes, and follows, plus JWT authentication and role-based authorization.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "RBAC"],
  },
  {
    id: "hotel",
    icon: "apartment",
    title: "Hotel Booking System",
    category: "Full Stack Application",
    github: "https://github.com/KhaledAlmorse/hotel-system",
    desc1:
      "A full stack booking platform built with Laravel, Vue.js, and MySQL for room reservations and customer workflows.",
    desc2:
      "Includes 15+ RESTful APIs, authentication, booking workflows, 3 responsive dashboards, and a 30% reduction in manual booking steps.",
    tags: ["Laravel", "Vue.js", "MySQL", "REST API", "Auth"],
  },
  {
    id: "noteapp",
    icon: "menu_book",
    title: "NoteWorkSpace App",
    category: "Full Stack Application",
    github: "https://github.com/KhaledAlmorse/NoteWorkSpaceApp",
    desc1:
      "A collaborative multi-user notes app built with React.js, Node.js, Express.js, and MongoDB.",
    desc2:
      "Uses JWT authentication, 10+ reusable React components/custom hooks, and optimized MongoDB queries for 25% better data retrieval performance.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    id: "cafeteria",
    icon: "restaurant",
    title: "Cafeteria Management System",
    category: "Full Stack Application",
    github: "https://github.com/KhaledAlmorse/cafeteria-project",
    desc1:
      "A PHP and MySQL system with 8+ CRUD-driven modules for handling cafeteria operations and user authentication.",
    desc2:
      "Built with relational database design to reduce manual order-processing time by 20%.",
    tags: ["PHP", "MySQL", "CRUD", "Auth"],
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const projectsCountRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const section = sectionRef.current;
    const projectsCountEl = projectsCountRef.current;

    if (
      !section ||
      !projectsCountEl ||
      prefersReducedMotion
    ) {
      if (projectsCountEl) projectsCountEl.textContent = projects.length.toString();
      return;
    }

    let hasAnimated = false;
    const animate = (el, target) => {
      const duration = 1200;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(eased * target);
        el.textContent = `${value}`;
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animate(projectsCountEl, projects.length);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-32 bg-surface-container-low dark:bg-slate-900"
      id="projects"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16 reveal">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-on-primary-fixed dark:text-white">
                Projects
              </h2>
            </div>

            <div>
              <div className="bg-surface-container-lowest dark:bg-slate-950/70 border border-outline-variant/10 dark:border-slate-700 rounded-2xl px-6 py-4 text-center">
                <p className="text-2xl sm:text-3xl font-black text-on-primary-fixed dark:text-white">
                  <span ref={projectsCountRef}>0</span>
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-on-surface-variant dark:text-slate-400">
                  Projects
                </p>
              </div>
            </div>
          </div>
        </div>

        <ProjectsCarousel projects={projects} />
      </div>
    </section>
  );
}
