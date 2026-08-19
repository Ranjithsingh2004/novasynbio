# NovaSyn Biosciences — Biotech Animated Landing Page

A premium, animation-driven biotechnology company landing page built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Three.js (React Three Fiber)**.

![Hero Section Preview](/public/images/hero-bg.jpg)

## 🚀 Live Demo

[View Live Site →](#) *(deployment link)*

---

## 🧬 Design & Animation Approach

### Visual Identity
NovaSyn Biosciences is a fictional next-generation biotech company focused on AI-driven drug discovery and gene therapy. The design language draws from:

- **Dark futuristic aesthetic**: Deep space dark (`#040B14`) backgrounds with cyan (`#0AFFEF`) and purple (`#7B61FF`) accent glows, evoking the precision and cutting-edge nature of biotech research.
- **Glassmorphism UI**: Frosted glass cards and navigation for depth and visual hierarchy.
- **Scientific visualizations**: AI-generated imagery depicting molecular structures, DNA editing, and neural networks.

### Typography
- **Headings**: [Outfit](https://fonts.google.com/specimen/Outfit) — modern geometric sans-serif for bold, clean headlines.
- **Body**: [Inter](https://fonts.google.com/specimen/Inter) — optimized for screen readability.

### Animation Strategy
Animations serve purpose, not decoration. Each interaction reinforces the biotech narrative:

1. **3D DNA Double Helix** (Three.js / React Three Fiber): An interactive, continuously rotating DNA helix with base pair connections renders in the hero section. Built with `@react-three/fiber` and `@react-three/drei`, it uses procedurally generated geometry with emissive materials for a bioluminescent glow.

2. **Scroll-triggered reveals** (Framer Motion): Content fades and slides into view using `useInView` with directional variants (up, down, left, right). Each section uses staggered delays for a natural cascading effect.

3. **Particle field** (Canvas 2D): A full-page animated particle system with connection lines between nearby particles creates a neural-network-like ambient background.

4. **Animated counters**: Statistics count up from zero when they enter the viewport, using cubic easing for natural deceleration.

5. **Micro-interactions**: Hover states include 3D tilt effects, glow intensification, border animations, and scale transforms on cards. The navbar transitions from transparent to glassmorphism on scroll.

6. **Pipeline progress bar**: An animated gradient bar visualizes the research pipeline from discovery to market approval.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with App Router, SSR, and optimized builds |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling with custom design tokens |
| [Framer Motion](https://www.framer.com/motion/) | Scroll-based animations, page transitions, hover effects |
| [Three.js](https://threejs.org/) / React Three Fiber | Interactive 3D DNA helix in hero section |
| [@react-three/drei](https://github.com/pmndrs/drei) | Three.js helpers (Float, Points, PointMaterial) |

---

## 📁 Project Structure

```
novasyn-bio/
├── public/
│   └── images/           # Generated biotech imagery
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout, fonts, metadata, SEO
│   │   ├── page.tsx      # Main landing page (assembles all sections)
│   │   └── globals.css   # Design system, utilities, animations
│   ├── components/
│   │   ├── Navbar.tsx       # Glassmorphism sticky navigation
│   │   ├── Hero.tsx         # Hero with 3D DNA + headline + CTA
│   │   ├── DnaHelix.tsx     # Three.js DNA double helix
│   │   ├── ParticleField.tsx# Canvas particle background
│   │   ├── About.tsx        # Innovation section
│   │   ├── Technology.tsx   # Research & technology platforms
│   │   ├── Capabilities.tsx # Services grid
│   │   ├── Statistics.tsx   # Impact stats with counters
│   │   ├── CTA.tsx          # Final call-to-action
│   │   ├── Footer.tsx       # Multi-column footer
│   │   └── SectionReveal.tsx# Reusable scroll-reveal wrapper
│   └── lib/
│       └── constants.ts  # Brand copy, data, configuration
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 📦 Getting Started

### Prerequisites
- **Node.js** 18.x or later
- **npm** 9.x or later

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/novasyn-bio.git
cd novasyn-bio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 🎨 Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#0AFFEF` | Cyan accent, CTAs, highlights |
| `--color-secondary` | `#7B61FF` | Purple accent, gradient endpoints |
| `--color-background` | `#040B14` | Deep dark base |
| `--color-surface` | `#0A1628` | Card and section backgrounds |
| `--color-text-primary` | `#F0F6FC` | Main text color |
| `--color-text-muted` | `#8B9CC0` | Secondary text |

---

## ✅ Key Features

- **Fully responsive** — optimized for desktop, tablet, and mobile breakpoints
- **Accessible** — semantic HTML, proper heading hierarchy, ARIA labels, keyboard-navigable
- **Performance optimized** — dynamic imports for Three.js, lazy canvas rendering, optimized images
- **SEO ready** — comprehensive meta tags, Open Graph, Twitter Cards, semantic structure
- **Clean code** — TypeScript throughout, reusable component architecture, consistent patterns

---

## 📄 License

This project was built as a submission for the Capitova Ventures Creative Frontend Developer assessment. All code is original.
