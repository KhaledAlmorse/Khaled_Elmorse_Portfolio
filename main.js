document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;

  const desktopThemeBtn = document.getElementById("theme-toggle");
  const desktopThemeIcon = document.getElementById("theme-icon");

  const mobileThemeBtn = document.getElementById("theme-toggle-mobile");
  const mobileThemeIcon = document.getElementById("theme-icon-mobile");

  const mobileMenuBtn = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");

  const syncThemeIcons = () => {
    const isDark = html.classList.contains("dark");
    if (desktopThemeIcon)
      desktopThemeIcon.textContent = isDark ? "light_mode" : "dark_mode";
    if (mobileThemeIcon)
      mobileThemeIcon.textContent = isDark ? "light_mode" : "dark_mode";
  };

  const toggleTheme = () => {
    html.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      html.classList.contains("dark") ? "dark" : "light",
    );
    syncThemeIcons();
  };

  if (desktopThemeBtn) desktopThemeBtn.addEventListener("click", toggleTheme);
  if (mobileThemeBtn) mobileThemeBtn.addEventListener("click", toggleTheme);

  syncThemeIcons();

  if (mobileMenuBtn && mobileMenu && mobileMenuIcon) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenuIcon.textContent = isOpen ? "close" : "menu";
    });

    document.addEventListener("click", (e) => {
      const isInsideMenu = mobileMenu.contains(e.target);
      const isButton = mobileMenuBtn.contains(e.target);
      if (!isInsideMenu && !isButton) {
        mobileMenu.classList.add("hidden");
        mobileMenuIcon.textContent = "menu";
      }
    });

    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenuIcon.textContent = "menu";
      });
    });
  }
});
