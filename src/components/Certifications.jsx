import React from "react";

const certifications = [
  {
    title: "Node.js, NestJS, PostgreSQL, GraphQL, and Security",
    provider: "Udemy",
    date: "Jun 2026",
    description:
      "39-hour program focused on scalable server-side development, authentication, API design, and application security.",
  },
  {
    title: "Master Git & GitHub",
    provider: "Udemy",
    date: "Dec 2024",
    description:
      "Covers Git workflows, branching, pull requests, merge conflicts, and collaboration practices.",
  },
  {
    title: "Backend Development using Node.js",
    provider: "ITI",
    date: "Jul 2023",
    description:
      "Built 10+ REST APIs with Node.js, Express.js, MongoDB, and JWT authentication.",
  },
];

export default function Certifications() {
  return (
    <section className="py-32 bg-surface dark:bg-slate-950" id="certifications">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-primary-fixed dark:text-white">
            Certifications
          </h2>
        </div>

        <div className="stagger-children grid md:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert) => (
            <article
              key={cert.title}
              className="bg-surface-container-lowest dark:bg-slate-900/70 p-8 rounded-2xl border border-outline-variant/10 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 h-full"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-fixed dark:bg-blue-500/20 text-on-secondary-fixed dark:text-blue-200 text-[10px] font-black tracking-[0.25em] uppercase">
                {cert.date}
              </div>

              <h3 className="mt-5 text-2xl font-bold text-on-primary-fixed dark:text-white leading-tight">
                {cert.title}
              </h3>

              <p className="mt-3 text-sm font-medium text-secondary dark:text-blue-400">
                {cert.provider}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-on-surface-variant dark:text-slate-300">
                {cert.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
