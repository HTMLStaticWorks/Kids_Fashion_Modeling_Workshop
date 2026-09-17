# Little Vogue Studio — Kids Fashion & Modeling Workshop

A modern, responsive, multi-page website for **Little Vogue Studio**, designed for kids fashion and modeling workshops focusing on confidence, runway presence, camera posing, and personal style.

---

## 📁 Project Architecture & Page Structure

```
Kids_Fashion_Modeling_Workshop/
├── assets/                  # Dedicated Assets directory (SVG icons, favicons, branding assets)
│   └── favicon.svg
├── images/                  # Standalone Images directory (all photos stored locally)
│   ├── hero-kids-studio.jpg
│   ├── fashion-presentation.jpg
│   ├── camera-confidence.jpg
│   ├── style-awareness.jpg
│   ├── supportive-approach.jpg
│   ├── everyday-style.jpg
│   ├── natural-expressions.jpg
│   ├── creative-presentation.jpg
│   ├── more-than-modeling.jpg
│   ├── gallery-checked-pants.jpg
│   ├── gallery-streetwear.jpg
│   ├── gallery-studio-portrait.jpg
│   ├── showcase-journey.jpg
│   ├── hero-colorful-outfits.jpg
│   ├── posing-satin-dress.jpg
│   ├── teamwork-kids.jpg
│   ├── presentation-blue-outfit.jpg
│   ├── style-indoor-posing.jpg
│   ├── runway-preparation.jpg
│   ├── group-sessions.jpg
│   ├── portrait-practice.jpg
│   ├── style-discovery.jpg
│   ├── creative-showcase.jpg
│   ├── style-gallery-traditional.jpg
│   ├── style-gallery-suit.jpg
│   ├── style-gallery-lavender.jpg
│   ├── banner-programs.jpg
│   ├── runway-basics.jpg
│   ├── etiquette-presentation.jpg
│   ├── learning-path.jpg
│   ├── studio-experience-workshop.jpg
│   ├── banner-events.jpg
│   ├── mini-fashion-day.jpg
│   ├── portrait-showcase.jpg
│   ├── showcase-prep-display.jpg
│   ├── showcase-experience.jpg
│   ├── banner-about.jpg
│   ├── value-encouragement.jpg
│   ├── value-individuality.jpg
│   └── banner-contact-store.jpg
├── css/
│   └── style.css            # Centralized stylesheet (Design tokens, Dark Mode, RTL, Grids, Responsive Breakpoints)
├── js/
│   └── script.js            # Shared logic (Theme toggle, RTL toggle, Mobile nav, Scroll animations, Form toast)
├── index.html               # Home 1 — Main Workshop Landing Page
├── home2.html               # Home 2 — Studio Experience Page
├── programs.html            # Programs — Runway, Photo Posing, Etiquette & Presentation
├── events.html              # Events & Showcases — Mini Fashion Day, Portrait Showcase, Style Showcase
├── about.html               # About Us — Studio Philosophy, Values, Stats & Approach
├── contact.html             # Contact & Enrollment — Studio details, interactive form, OpenStreetMap embed
└── README.md                # Project documentation
```

---

## 🌟 Features Included

- **Separate Images & Assets Directories**: Dedicated `images/` directory for high-res photography and `assets/` directory for SVG branding/icons.
- **Dedicated Multi-Page Routing**: Clean page separation with consistent topbar, sticky navbar, and footer across all pages.
- **Active Navigation States**: Automatically marks and styles active page links.
- **Dark Mode & Light Mode**: Persistent theme toggle via `localStorage`.
- **Full RTL (Right-to-Left) Support**: Native bidirectional layout support with sticky LTR/RTL toggle.
- **Micro-Animations & Scroll Reveals**: Smooth entry transitions via `IntersectionObserver`.
- **Balanced Studio Galleries**: Strict 4:3 equal-dimension gallery grids without layout shifts.
- **Interactive Enrollment Form**: Built-in validation with animated feedback toast notification.
- **Fully Responsive**: Mobile-friendly navigation drawer and flexible CSS grids adapted for smartphones, tablets, and desktop displays.
