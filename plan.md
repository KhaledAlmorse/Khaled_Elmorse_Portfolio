PROMPT

You are working inside my existing portfolio project (React + Vite). I want you to refactor only the Projects section — its layout mechanism only, nothing else.

Hard Rules — DO NOT BREAK

Do NOT change any project content: no title, description, tech tags, stats, or link changes.
Do NOT rename projects or reorder them (keep current order as the carousel order).
Do NOT touch any other section (Hero, About, Skills, Education, Certifications, Awards, Footer, etc.).
Do NOT change the design language anywhere: typography, spacing, colors, shadows, border-radius, hover effects, icons, badges, section title styling.
Do NOT redesign the project card component itself — its internal markup/classes/styling must stay pixel-identical. You are only changing the container/layout mechanism that arranges the cards.
Do NOT touch the logo, favicon, or global theme/color tokens.
Preserve existing TypeScript types if the project uses TS.
Don't introduce unused dependencies; only add the one carousel library actually used.

Step 0 — Before Writing Any Code

Locate the current Projects section component and the project-card component/data source (likely src/components/Projects.jsx or similar, plus a data/constants file with the project array).
Confirm whether the project uses plain CSS, CSS Modules, or Tailwind, so the new carousel wrapper matches the existing styling approach exactly.
Check package.json for the package manager (npm/yarn/pnpm) before installing anything.

Goal

Replace the current static grid (all project cards shown at once) with a carousel/slider that reuses the exact same, unmodified project card component — only how the cards are grouped and navigated changes.

Library

Use Embla Carousel (embla-carousel-react) — lightweight, unstyled, plays well with Tailwind/CSS. Use Swiper.js only if Embla conflicts with something already in the project. Do not build a custom carousel from scratch.

Install command (adjust to the package manager found in package.json):

npm install embla-carousel-react

Layout Behavior

Desktop (≥1024px): 2 project cards per view.
Tablet (≥640px and <1024px): 2 cards per view if there's enough width, otherwise 1 — base this on the same breakpoints already used elsewhere in the project (check tailwind.config or existing media queries instead of inventing new breakpoint values).
Mobile (<640px): 1 project card per view.
Cards keep their exact current width/height/styling — only the number visible per "page" and the sliding mechanism change.

Navigation

Add Previous and Next arrow buttons.
Disable (or visually gray out) the Previous/Next arrow at the start/end — unless you implement infinite loop cleanly, in which case that's fine too, your call.
Add pagination dots below the carousel, one per "page" of cards, with the active dot visually highlighted (reuse existing accent color from the theme, don't introduce a new color).

UX / Interaction

Smooth slide transition: 300–500ms, easing consistent with any existing transitions in the codebase (check for a shared easing/duration used elsewhere, e.g., in Tailwind config or existing transition classes, and match it).
Mouse drag support on desktop.
Touch swipe support on mobile.
Keyboard navigation (left/right arrow keys) — nice to have, implement if Embla supports it easily.
No flashy effects — subtle, consistent with the current minimal portfolio feel.

Accessibility

Prev/Next buttons need proper aria-label (e.g., "Previous projects", "Next projects").
Pagination dots need aria-label per dot (e.g., "Go to slide 2") and aria-current on the active one.
Ensure visible focus states on buttons/dots (don't remove outline without replacing it with a visible custom focus style).
Carousel container should be reachable/operable via keyboard (tab to buttons, arrow keys if implemented).

Code Quality

New carousel logic goes in its own component (e.g., ProjectsCarousel.jsx) that wraps the existing, untouched ProjectCard component.
Keep it modular and reusable; avoid unnecessary re-renders (memoize the project card list if needed).
Follow the existing folder/naming conventions of the project.
No dead code, no leftover unused imports from the old grid implementation — remove the old grid layout code once the carousel replaces it (but do NOT delete the ProjectCard component or the project data).

Final Checklist Before You Finish

Project cards look 100% visually identical to before (same padding, shadow, colors, icons, badges, stats).
No project content/links/tags were changed, removed, or reordered.
No other section of the site was touched.
Desktop shows 2 cards/view, tablet shows 2 or 1 depending on width, mobile shows 1 card/view.
Prev/Next buttons work and disable/loop correctly at the edges.
Pagination dots reflect the current page and are clickable to jump to a page.
Drag (desktop) and swipe (mobile) both work.
Keyboard focus states are visible on all interactive carousel elements.
npm run build (or equivalent) completes with no errors or new warnings.
Give me a summary of exactly which files were added/changed and why.
