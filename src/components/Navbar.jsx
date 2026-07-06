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

  // Sync theme
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
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
