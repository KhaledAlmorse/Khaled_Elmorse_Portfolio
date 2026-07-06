import React, { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "./ProjectCard";

const getSlidesPerPage = () =>
  window.matchMedia("(min-width: 640px)").matches ? 2 : 1;

const chunkProjects = (items, size) => {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
};

export default function ProjectsCarousel({ projects }) {
  const [slidesPerPage, setSlidesPerPage] = useState(1);
  const pages = useMemo(
    () => chunkProjects(projects, slidesPerPage),
    [projects, slidesPerPage],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const updateSlidesPerPage = () => setSlidesPerPage(getSlidesPerPage());

    updateSlidesPerPage();
    mediaQuery.addEventListener("change", updateSlidesPerPage);

    return () => {
      mediaQuery.removeEventListener("change", updateSlidesPerPage);
    };
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(0, true);
  }, [emblaApi, slidesPerPage]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (index) => emblaApi && emblaApi.scrollTo(index);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    }
  };

  return (
    <div className="relative">
      <div
        className="overflow-hidden"
        ref={emblaRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-roledescription="carousel"
        aria-label="Projects carousel"
      >
        <div className="flex touch-pan-y gap-8">
          {pages.map((page) => (
            <div
              key={page.map((project) => project.id).join("-")}
              className="min-w-0 flex-[0_0_96%] sm:flex-[0_0_94%] lg:flex-[0_0_92%]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {page.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 sm:order-1">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous projects"
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-outline-variant/20 dark:border-slate-700 bg-surface-container-lowest dark:bg-slate-900/70 text-on-surface dark:text-slate-200 transition-all duration-300 hover:border-secondary/30 dark:hover:border-blue-400/30 hover:text-secondary dark:hover:text-blue-400 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-outline-variant/20 disabled:hover:text-on-surface dark:disabled:hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:focus-visible:ring-offset-slate-900"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>

          <div className="flex flex-1 items-center justify-center gap-2">
            {pages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={selectedIndex === index ? "true" : undefined}
                className={`h-2 w-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:focus-visible:ring-offset-slate-900 ${
                  selectedIndex === index
                    ? "bg-secondary dark:bg-blue-400 scale-110"
                    : "bg-outline-variant/35 dark:bg-slate-600 hover:bg-outline-variant dark:hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next projects"
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-outline-variant/20 dark:border-slate-700 bg-surface-container-lowest dark:bg-slate-900/70 text-on-surface dark:text-slate-200 transition-all duration-300 hover:border-secondary/30 dark:hover:border-blue-400/30 hover:text-secondary dark:hover:text-blue-400 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-outline-variant/20 disabled:hover:text-on-surface dark:disabled:hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface dark:focus-visible:ring-offset-slate-900"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="text-[11px] font-black uppercase tracking-[0.3em] text-on-surface-variant dark:text-slate-500 whitespace-nowrap text-center sm:text-right sm:order-2">
          {String(selectedIndex + 1).padStart(2, "0")} of{" "}
          {String(pages.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
