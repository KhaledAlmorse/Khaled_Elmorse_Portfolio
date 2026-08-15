import React, { useState, useEffect, useRef } from "react";

const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme) => {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  if (document.body) {
    document.body.classList.toggle("dark", isDark);
  }
};

export default function Navbar() {
  const [theme, setTheme] = useState(getPreferredTheme());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const isTransitioningRef = useRef(false);

  // Sync theme
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (event) => {
    if (isTransitioningRef.current) return;

    const newTheme = theme === "dark" ? "light" : "dark";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const updateThemeState = () => {
      setTheme(newTheme);
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    };

    // Direct toggle if reduced motion is enabled or no event
    if (prefersReducedMotion || !event) {
      updateThemeState();
      return;
    }

    // Get exact center coordinates of clicked theme button element
    const button =
      (event.target && event.target.closest("button")) ||
      event.currentTarget ||
      event.target;
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calculate maximum distance to all 4 viewport corners
    const distanceToTopLeft = Math.hypot(x, y);
    const distanceToTopRight = Math.hypot(window.innerWidth - x, y);
    const distanceToBottomLeft = Math.hypot(x, window.innerHeight - y);
    const distanceToBottomRight = Math.hypot(window.innerWidth - x, window.innerHeight - y);

    const maxDistance = Math.max(
      distanceToTopLeft,
      distanceToTopRight,
      distanceToBottomLeft,
      distanceToBottomRight
    );

    // Add a 25% safety margin + 50px buffer so the reveal extends comfortably past viewport edges
    const endRadius = Math.ceil(maxDistance * 1.25 + 50);

    // Lock transitions during animation playback
    isTransitioningRef.current = true;
    document.documentElement.classList.add("is-animating-theme");

    // Use View Transitions API if supported
    if (document.startViewTransition) {
      const transition = document.startViewTransition(() => {
        updateThemeState();
      });

      transition.ready.then(() => {
        const anim = document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 750,
            easing: "cubic-bezier(0.35, 0, 0.15, 1)",
            fill: "forwards",
            pseudoElement: "::view-transition-new(root)",
          }
        );

        anim.finished.finally(() => {
          document.documentElement.classList.remove("is-animating-theme");
          isTransitioningRef.current = false;
        });
      });
    } else {
      // Fallback circular reveal overlay for browsers without View Transitions API
      const overlay = document.createElement("div");
      const isNewDark = newTheme === "dark";

      overlay.style.cssText = `
        position: fixed;
        top: ${y}px;
        left: ${x}px;
        width: 0px;
        height: 0px;
        border-radius: 50%;
        background-color: ${isNewDark ? "#090d16" : "#ffffff"};
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 999999;
        transition: width 0.78s cubic-bezier(0.35, 0, 0.15, 1), height 0.78s cubic-bezier(0.35, 0, 0.15, 1);
      `;

      document.body.appendChild(overlay);

      requestAnimationFrame(() => {
        overlay.style.width = `${endRadius * 2}px`;
        overlay.style.height = `${endRadius * 2}px`;
      });

      setTimeout(() => {
        updateThemeState();
      }, 450);

      setTimeout(() => {
        overlay.remove();
        document.documentElement.classList.remove("is-animating-theme");
        isTransitioningRef.current = false;
      }, 800);
    }
  };

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const isDark = theme === "dark";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/40 dark:border-slate-700/40">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-7xl mx-auto font-inter">
        {/* Logo */}
        <div className="text-lg md:text-xl font-black tracking-tight text-slate-900 dark:text-slate-50">
          Khaled<span className="text-blue-600 dark:text-blue-400">.</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#about"
            className="nav-link text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            className="nav-link text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="nav-link text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="nav-link text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Skills
          </a>
          <a
            href="#education"
            className="nav-link text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Education
          </a>
          <a
            href="#certifications"
            className="nav-link text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Certifications
          </a>
          <a
            href="#awards"
            className="nav-link text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Awards
          </a>
          <a
            href="#contact"
            className="nav-link text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Contact
          </a>

          <button
            id="theme-toggle"
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition group"
          >
            <span
              id="theme-icon"
              className="material-symbols-outlined text-lg group-hover:scale-110 transition"
            >
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2 relative">
          <button
            id="theme-toggle-mobile"
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            <span id="theme-icon-mobile" className="material-symbols-outlined text-lg">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>

          <button
            id="mobile-menu-button"
            ref={buttonRef}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            <span id="mobile-menu-icon" className="material-symbols-outlined text-xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>

          {/* Small Right Menu */}
          <div
            id="mobile-menu"
            ref={menuRef}
            className={`${
              isMenuOpen ? "" : "hidden"
            } absolute top-14 right-0 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-4`}
          >
            <div className="flex flex-col gap-1 text-sm font-medium">
              <a
                href="#about"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Skills
              </a>
              <a
                href="#education"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Education
              </a>
              <a
                href="#certifications"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Certifications
              </a>
              <a
                href="#awards"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Awards
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
