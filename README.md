# Khaled Almorse — Backend Developer Portfolio

A pixel-perfect, highly-interactive portfolio built for **Khaled Almorse**, specializing in building secure, scalable, and high-performance RESTful APIs. 

This project is a 1:1 migration from a static HTML/CSS/JS architecture to a modern, component-driven **React + Vite** application using **Tailwind CSS v4**.

---

## 🚀 Live Demo

Check out the live reference site: [khaled-elmorse-portfolio.vercel.app](https://khaled-elmorse-portfolio.vercel.app/)

---

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/) (Boilerplate with Fast HMR)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configuration) + PostCSS
- **Animations**: Standard CSS keyframes & transitions (e.g. scroll reveals, 3D tilts)
- **Icons & Fonts**: Google Fonts (Inter) & Material Symbols Outlined

---

## ✨ Key Features

1. **Pixel-Parity & Theme Toggle**: Synchronized dark/light mode toggle with preference persistence (`localStorage` & `prefers-color-scheme`).
2. **Interactive Hero Canvas**: High-performance 2D Canvas particle simulation that automatically adapts color palettes based on active theme modes.
3. **Dynamic Typing Effect**: Infinite typing loop rotation effect in the Hero section.
4. **Scroll Progress & Highlights**: Dynamic scroll progress bar indicator at the top and Intersection Observer highlighting active navigation section links.
5. **3D Tilt Project Cards**: Native mouse-movement 3D perspective tilting card behavior on the projects list.
6. **Suez Canal University Grade Counter**: Scroll-triggered counting animation that counts up to **87%** with cubic-bezier ease-out.

---

## 📦 Directory Structure

```
PortoflioV2/
├─ public/              ← Global static assets
├─ src/
│  ├─ assets/
│  │  └─ images/        ← Profile and project images
│  ├─ components/       ← Reusable page sections (Navbar, Hero, About, etc.)
│  ├─ styles/
│  │  └─ style.css      ← Custom transition styles and keyframes
│  ├─ App.jsx           ← Main assembly, global scroll observers, and ripple click triggers
│  ├─ index.css          ← Tailwind CSS v4 CSS-first theme config
│  └─ main.jsx          ← React app entry point
├─ .gitignore
├─ index.html
├─ package.json
├─ postcss.config.js
└─ vite.config.js
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Vite will compile the code and generate the optimized distribution bundle under the `dist/` directory.
