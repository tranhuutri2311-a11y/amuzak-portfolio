# Engineering Portfolio — Clean Architecture

A high-performance, responsive portfolio website architected with **Clean Architecture** principles and modular Separation of Concerns (SoC).

Live Deployments:
- **Production Hostless:** [https://amuzak-portfolio.hostless.site](https://amuzak-portfolio.hostless.site)
- **GitHub Pages:** [https://tranhuutri2311-a11y.github.io/amuzak-portfolio/](https://tranhuutri2311-a11y.github.io/amuzak-portfolio/)

---

## 🏛️ Clean Architecture Breakdown

The project separates presentation markup, style rules, static data dictionaries, feature modules, and bootstrapper orchestration into distinct layers:

```
amuzak-portfolio/
├── assets/                     # Static media & high-res project assets
│   ├── avatar.jpg              # Professional developer headshot
│   ├── huyhoang.jpg            # Enterprise platform live system preview
│   ├── moneymate.png           # Financial application & Android companion
│   └── viphenix.png            # Global technical solutions portal
│
├── css/
│   └── style.css               # Presentation Styling Layer
│                               # Custom scrollbars, glassmorphism (.glass-panel),
│                               # and engineering grid background (.tech-grid)
│
├── js/
│   ├── data/                   # Data Layer (Entities / Data Models)
│   │   ├── i18n.js             # Bilingual dictionary (English & Vietnamese)
│   │   └── projects.js         # Case study specs & lightbox visual components
│   │
│   ├── modules/                # Feature & Domain Services Layer
│   │   ├── spotlight.js        # Mouse spotlight cursor tracking
│   │   ├── i18n.js             # Language toggle & dynamic DOM translation
│   │   ├── modal.js            # Case study details & in-page image lightbox modal
│   │   ├── filter.js           # Project category filter controller
│   │   └── contact.js          # Web3Forms API submission & email copy utility
│   │
│   └── app.js                  # Application Bootstrapper (Orchestrator)
│                               # Initializes Lucide icons and boots subsystems
│
├── index.html                  # Pure Semantic HTML Markup Layer
└── README.md                   # Architecture documentation
```

---

## ✨ Features & Capabilities

- **Separation of Concerns:** 
  - `index.html` reduced from a 1,365-line monolithic file to pure semantic markup.
  - Zero bloated bundle dependencies — 100% native Vanilla JS that runs smoothly in local preview (`file:///`) and on static CDNs (`https://`).
- **Bilingual (i18n):** Instant runtime switching between **English (EN)** and **Vietnamese (VI)** without full-page reloads.
- **In-Page Image Lightbox:** Modal system with ESC key shortcuts, deep click outside handlers, and scroll locking.
- **Enterprise Contact Form:** Direct asynchronous submission via [Web3Forms](https://web3forms.com) with graceful client-side `mailto:` fallback.
- **Dynamic Category Filtering:** Instant filtering of projects by category (Enterprise, Full Stack & App).
- **Subtle Modern Aesthetics:** Dark mode engineering palette (`#0b0f17`), ambient radial gradients, glassmorphism cards, and pointer-aware spotlighting.

---

## 🚀 Local Development & Preview

No Node build steps or package managers required. Simply open:

```bash
# Option 1: Direct browser preview
open index.html

# Option 2: Local HTTP server
npx serve .
# or
python -m http.server 8000
```

---

## 📄 License
MIT © Trần Hữu Trí (Amuzak)
