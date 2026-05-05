const tailwindConfig = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-container": "#2170e4",
        "on-primary-fixed": "#131b2e",
        "inverse-primary": "#bec6e0",
        secondary: "#0058be",
        "on-error-container": "#93000a",
        "on-tertiary-container": "#98805d",
        outline: "#76777d",
        "on-secondary-fixed": "#001a42",
        "tertiary-fixed": "#fcdeb5",
        "on-secondary": "#ffffff",
        "on-error": "#ffffff",
        "on-primary-fixed-variant": "#3f465c",
        "outline-variant": "#c6c6cd",
        "error-container": "#ffdad6",
        "tertiary-fixed-dim": "#dec29a",
        "on-surface": "#191c1e",
        "surface-dim": "#d8dadc",
        "on-primary": "#ffffff",
        "surface-variant": "#e0e3e5",
        tertiary: "#000000",
        "secondary-fixed": "#d8e2ff",
        "surface-bright": "#f7f9fb",
        "on-tertiary": "#ffffff",
        "on-primary-container": "#7c839b",
        background: "#f7f9fb",
        surface: "#f7f9fb",
        "surface-container-lowest": "#ffffff",
        "on-secondary-container": "#fefcff",
        "inverse-on-surface": "#eff1f3",
        "on-tertiary-fixed-variant": "#574425",
        "primary-container": "#131b2e",
        "on-surface-variant": "#45464d",
        "surface-container": "#eceef0",
        "primary-fixed": "#dae2fd",
        primary: "#000000",
        "surface-container-highest": "#e0e3e5",
        "secondary-fixed-dim": "#adc6ff",
        "tertiary-container": "#271901",
        error: "#ba1a1a",
        "surface-container-low": "#f2f4f6",
        "on-secondary-fixed-variant": "#004395",
        "surface-tint": "#565e74",
        "on-tertiary-fixed": "#271901",
        "inverse-surface": "#2d3133",
        "on-background": "#191c1e",
        "primary-fixed-dim": "#bec6e0",
        "surface-container-high": "#e6e8ea",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      fontFamily: {
        headline: ["Inter"],
        body: ["Inter"],
        label: ["Inter"],
      },
    },
  },
};

if (window.tailwind) {
  window.tailwind.config = tailwindConfig;
  if (typeof window.tailwind.refresh === "function") {
    window.tailwind.refresh();
  }
}

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

applyTheme(getPreferredTheme());

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const desktopThemeBtn = document.getElementById("theme-toggle");
  const desktopThemeIcon = document.getElementById("theme-icon");
  const mobileThemeBtn = document.getElementById("theme-toggle-mobile");
  const mobileThemeIcon = document.getElementById("theme-icon-mobile");
  const mobileMenuBtn = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");
  const backToTopBtn = document.getElementById("back-to-top");

  const syncThemeIcons = () => {
    const isDark = html.classList.contains("dark");
    if (desktopThemeIcon) {
      desktopThemeIcon.textContent = isDark ? "light_mode" : "dark_mode";
    }
    if (mobileThemeIcon) {
      mobileThemeIcon.textContent = isDark ? "light_mode" : "dark_mode";
    }
  };

  const toggleTheme = () => {
    const nextTheme = html.classList.contains("dark") ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    syncThemeIcons();
  };

  applyTheme(getPreferredTheme());

  if (desktopThemeBtn) {
    desktopThemeBtn.addEventListener("click", toggleTheme);
  }
  if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener("click", toggleTheme);
  }

  syncThemeIcons();

  if (mobileMenuBtn && mobileMenu && mobileMenuIcon) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenuIcon.textContent = isOpen ? "close" : "menu";
    });

    document.addEventListener("click", (event) => {
      const isInsideMenu = mobileMenu.contains(event.target);
      const isButton = mobileMenuBtn.contains(event.target);
      if (!isInsideMenu && !isButton) {
        mobileMenu.classList.add("hidden");
        mobileMenuIcon.textContent = "menu";
      }
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenuIcon.textContent = "menu";
      });
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const progressBar = document.getElementById("scroll-progress");
  if (progressBar) {
    window.addEventListener(
      "scroll",
      () => {
        const scrolled = window.scrollY;
        const total =
          document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width =
          total > 0 ? `${(scrolled / total) * 100}%` : "0%";
      },
      { passive: true },
    );
  }

  if (!prefersReducedMotion) {
    const revealEls = document.querySelectorAll(
      ".reveal, .reveal-left, .stagger-children",
    );

    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
      );

      revealEls.forEach((element) => revealObserver.observe(element));
    } else {
      revealEls.forEach((element) => element.classList.add("visible"));
    }
  } else {
    document
      .querySelectorAll(".reveal, .reveal-left, .stagger-children")
      .forEach((element) => {
        element.classList.add("visible");
      });
  }

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href") === `#${entry.target.id}`) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  if (!prefersReducedMotion) {
    document.querySelectorAll(".tilt-card").forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(700px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateY(-4px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  document.querySelectorAll(".btn-ripple").forEach((button) => {
    button.addEventListener("click", (event) => {
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.className = "ripple-effect";
      ripple.style.cssText =
        `width:${size}px;height:${size}px;` +
        `left:${event.clientX - rect.left - size / 2}px;` +
        `top:${event.clientY - rect.top - size / 2}px;`;
      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });

  const gradeEl = document.getElementById("grade-counter");
  if (gradeEl && !prefersReducedMotion) {
    let counted = false;
    const counterObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          const target = 87;
          const duration = 1400;
          const start = performance.now();

          const update = (now) => {
            const pct = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - pct, 3);
            gradeEl.textContent = `${Math.round(eased * target)}%`;
            if (pct < 1) {
              requestAnimationFrame(update);
            }
          };

          requestAnimationFrame(update);
          counterObserver.disconnect();
        }
      },
      { threshold: 0.6 },
    );

    counterObserver.observe(gradeEl);
  }

  if (!prefersReducedMotion) {
    const canvas = document.getElementById("hero-canvas");
    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const isDark = () => document.documentElement.classList.contains("dark");
        let width;
        let height;
        let particles = [];
        const count = 28;

        const resize = () => {
          width = canvas.width = canvas.offsetWidth;
          height = canvas.height = canvas.offsetHeight;
        };

        const rand = (min, max) => min + Math.random() * (max - min);

        const createParticle = () => ({
          x: rand(0, width || 800),
          y: rand(height || 600, (height || 600) + 200),
          size: rand(1, 2.5),
          speed: rand(0.3, 0.9),
          drift: rand(-0.2, 0.2),
          opacity: rand(0.1, 0.5),
          life: 0,
          maxLife: rand(200, 400),
        });

        const initParticles = () => {
          resize();
          particles = Array.from({ length: count }, createParticle);
          particles.forEach((particle) => {
            particle.y = rand(0, height);
            particle.life = rand(0, particle.maxLife);
          });
        };

        const drawParticles = () => {
          ctx.clearRect(0, 0, width, height);
          const color = isDark() ? "96, 165, 250" : "0, 88, 190";

          particles.forEach((particle) => {
            const lifePct = particle.life / particle.maxLife;
            const alpha = particle.opacity * Math.sin(lifePct * Math.PI);

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color}, ${alpha.toFixed(3)})`;
            ctx.fill();

            particle.y -= particle.speed;
            particle.x += particle.drift;
            particle.life += 1;

            if (particle.life >= particle.maxLife || particle.y < -10) {
              Object.assign(particle, createParticle());
              particle.y = height + 10;
              particle.life = 0;
            }
          });

          requestAnimationFrame(drawParticles);
        };

        initParticles();
        drawParticles();

        window.addEventListener(
          "resize",
          () => {
            resize();
          },
          { passive: true },
        );
      }
    }
  }

  if (!prefersReducedMotion) {
    const roleSpan = document.querySelector("#hero .hero-desc .font-bold");
    if (roleSpan) {
      const phrases = [
        "backend developer",
        "API architect",
        "Node.js engineer",
        "backend developer",
      ];

      let phraseIdx = 0;
      let charIdx = 0;
      let deleting = false;
      let paused = false;

      roleSpan.classList.add("typing-cursor");

      const type = () => {
        const current = phrases[phraseIdx];

        if (paused) {
          paused = false;
          setTimeout(type, deleting ? 80 : 1800);
          return;
        }

        if (deleting) {
          roleSpan.textContent = current.slice(0, charIdx - 1);
          charIdx -= 1;
          if (charIdx === 0) {
            deleting = false;
            phraseIdx = (phraseIdx + 1) % (phrases.length - 1);
            paused = true;
          }
          setTimeout(type, 60);
        } else {
          roleSpan.textContent = current.slice(0, charIdx + 1);
          charIdx += 1;
          if (charIdx === current.length) {
            if (phraseIdx === phrases.length - 1) {
              roleSpan.classList.remove("typing-cursor");
              return;
            }
            deleting = true;
            paused = true;
          }
          setTimeout(type, 90);
        }
      };

      setTimeout(type, 1400);
    }
  }
});
