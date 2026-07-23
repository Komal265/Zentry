# Zentry

**Enter a world where motion tells the story.**

Zentry is an animated web experience inspired by [Zentry](https://zentry.com/), built to explore just how far you can push a browser with scroll, video, and geometry. Words rotate into place. Clip-paths carve open to reveal new scenes. Video scales and blends between chapters as you move down the page. Every section is a small piece of choreography, built with GSAP and React.

This project was built as an educational exercise — a hands-on way to learn advanced frontend animation techniques and extract patterns worth reusing elsewhere.

> Built as a learning exercise to study and extract animation patterns for use in other projects — not intended as a 1:1 clone of the original.

## Features

- 🎬 Video-based hero section with smooth click-triggered transitions
- ✨ Scroll-triggered text animations with 3D word transforms
- 🔷 Geometric clip-path masks and reveal animations
- 🧩 Bento grid layout for feature showcases
- 🧭 Floating navbar with scroll-aware behavior
- 🎞️ GSAP timelines composing multiple animated layers per section

## Stack

| Category | Technology |
|---|---|
| Language | JavaScript (React) |
| Framework / Runtime | React 18.3 + Vite + Node.js |
| Animation | GSAP 3.12.5 (with ScrollTrigger) |
| Styling | Tailwind CSS 3.4 |
| Icons | react-icons |
| Utilities | react-use |

## Project Structure

```
src/
  components/          React components for each page section
    Hero.jsx           Video-based hero with smooth transitions
    AnimatedTitle.jsx  Scroll-triggered text animations
    About.jsx          About section with scroll effects
    Features.jsx       Bento grid layout with animations
    Story.jsx          Story section with clip-path masks
    Contact.jsx         Contact section with geometric clip-paths
    Navbar.jsx          Navigation with floating effect
    Footer.jsx           Footer component
    Button.jsx           Reusable button component
    VideoPreview.jsx    Video preview component
  index.css             Global styles + GSAP utilities + custom animations
  App.jsx                Main component orchestrating all sections
  main.jsx               React root entry point

public/
  videos/                Hero section videos (4 video files)
  fonts/                 Custom font files (Zentry, circular-web, robert)
  audio/                 Audio assets
  img/                   Image assets

vite.config.js           Vite build tool configuration
tailwind.config.js       Tailwind CSS theming (custom fonts, colors)
```

## How It Works

The app renders a single-page experience with a fixed navbar at the top. As users scroll, GSAP's ScrollTrigger animates sections into view:

- Text words rotate in via 3D transforms
- Clip-paths animate to reveal images
- Video scales smoothly into place

The **Hero** section uses component state to handle video transitions, triggering scaling animations when users click preview thumbnails. Each component composes multiple animated layers — backgrounds, text, and clip-masks — using Tailwind utility classes combined with GSAP timelines.

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Komal265/zentry.git
cd zentry

# Install dependencies
npm install
```

### Development

```bash
# Start dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Linting

```bash
npm run lint
```

## What I Learned

This project was built to study GSAP's animation system alongside my existing React knowledge, including:

- Setting up and sequencing **GSAP timelines**
- Triggering animations on scroll with **ScrollTrigger**
- Using **clip-path** for geometric reveal/mask effects
- Structuring layered, animated UI sections with Tailwind CSS
