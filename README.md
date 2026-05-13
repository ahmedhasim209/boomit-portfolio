# 🚀 BOOMIT! — Marketing Agency Portfolio Website

> **A strategic growth agency website for B2B and consumer brands across Egypt & the GCC.**  
> Built with precision, performance, and premium front-end execution.

---

## 📌 Overview

**BOOMIT!** is a multi-page portfolio website developed for a strategic marketing agency specializing in brand growth, performance marketing, and digital strategy. The site communicates BOOMIT's identity as a results-driven agency serving brands across Egypt and the GCC region — combining clean UX, conversion-focused copywriting, and a polished visual design system.

---

## 🌐 Live Demo

> 🔗 **[View Live Project]((https://boomit.agency/))**

| Platform | Link |
|---|---|
| GitHub Pages | [pages.github.com]([https://pages.github.com](https://ahmedhasim209.github.io/boomit-portfolio/)) |

---

## 🖥️ Pages

| Page | Description |
|------|-------------|
| `index.html` | Home — Hero, Trusted Brands, Services Overview, How We Work, Insights |
| `pages/services.html` | Full services breakdown |
| `pages/contact.html` | Contact & inquiry form |
| `pages/about.html` | About the agency & team |
| `pages/form.html` | Book a free consultation form |
| `pages/blogs.html` | Insights & blog posts for founders |
| `pages/subPages/blogOne.html` | Blog post — Article One |
| `pages/subPages/blogTwo.html` | Blog post — Article Two |
| `pages/subPages/blogThree.html` | Blog post — Article Three |
| `pages/subPages/blogFour.html` | Blog post — Article Four |
| `pages/subPages/blogFive.html` | Blog post — Article Five |

---

## 🗂️ Project Structure

```
boomit-portfolio/
├── index.html                    # Home page (entry point)
├── pages/                        # Inner pages
│   ├── services.html
│   ├── blogs.html
│   ├── contact.html
│   ├── about.html
│   ├── form.html
│   └── subPages/                 # Blog sub-pages
│       ├── blogOne.html
│       ├── blogTwo.html
│       ├── blogThree.html
│       ├── blogFour.html
│       └── blogFive.html
├── css/                          # Stylesheets
│   ├── home.css                  # Home page styles
│   ├── service.css               # Services page styles
│   ├── contact-us.css            # Contact page styles
│   ├── about.css                 # About page styles
│   ├── blogs.css                 # Blogs page styles
│   ├── blogOne.css               # Blog One page styles
│   ├── blogTwo.css               # Blog Two page styles
│   ├── blogThree.css             # Blog Three page styles
│   ├── blogFour.css              # Blog Four page styles
│   ├── blogFive.css              # Blog Five page styles
│   ├── shared.css                # Global/shared styles
│   └── all.min.css               # Compiled icon styles
├── js/                           # JavaScript files
│   ├── main.js                   # Core interactions & UI logic
│   ├── active-nav.js             # Active navigation state handler
│   └── form.js                   # Form page interactions & logic
└── assets/                       # Static assets
    ├── favicon.svg
    ├── boomit-logo.svg
    ├── boomit-logo-white.svg
    └── images/
        └── home/                 # Page-specific images & icons
```

---

## ✨ Features

- **Responsive Navigation** — Mobile hamburger menu with open/close toggle
- **Hero Section** — Bold headline with CTA buttons linking to consultation & WhatsApp
- **Trusted Brands Showcase** — Client logo grid (Sweileh, Wanaan, Limo, Aludam, Zaino, Elfahham, Linae, Mom Corner)
- **Services Grid** — 10 service cards covering Brand Strategy, Performance Marketing, SEO, Social Media, UGC, Influencer Marketing, B2B Growth, and more
- **Industry Targeting Section** — Visual industry tiles (Food & Beverage, Fashion, Pharmacy, Beauty, B2B, eCommerce, Services, Real Estate)
- **4-Step Process Timeline** — Diagnose → Design → Execute → Optimize
- **Free Consultation CTA** — Structured value proposition for booking calls
- **Blog/Insights System** — Visual preview cards + 5 dedicated full blog article pages
- **Newsletter Subscription** — Footer newsletter input with social media links
- **Active Nav Highlighting** — JavaScript-driven current-page detection across all pages
- **Consultation Form** — Dedicated booking form page with custom JS logic

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic page structure |
| **CSS3** | Custom styling, layout, animations |
| **JavaScript (Vanilla)** | UI interactions, nav toggling, active page state, form logic |
| **Font Awesome 6.5.2** | Icon library (via CDN) |
| **Normalize.css 8.0.1** | Cross-browser CSS reset (via CDN) |

> No frameworks or build tools — pure, performant front-end code.

---

## 🚀 Getting Started

### Prerequisites
All you need is a modern web browser. No build process required.

### Run Locally

```bash
# Clone the repository
git clone https://github.com/ahmedhasim209/boomit-portfolio.git

# Navigate into the project
cd boomit-portfolio

# Open in browser (or use Live Server in VS Code)
open index.html
```

> **Tip:** Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension for the best local development experience with hot reload.

---

## 📐 Design Highlights

- **Visual Identity** — Custom SVG logo assets, binocular motif used as a recurring brand element
- **Animation** — CSS-animated plan cards with flip/shadow effects
- **Typography** — Clean hierarchy with strategic use of `<h1>`–`<h4>` tags
- **Color System** — Consistent brand color palette applied across all sections
- **Imagery** — `.webp` format images for performance-optimized loading

---

## 📄 Pages Breakdown

### 🏠 Home (`index.html`)
The main landing page with the full brand narrative:
- **Hero** — Brand statement, binoculars visual, dual CTAs (consultation & WhatsApp)
- **Trusted** — Client logos with social proof messaging
- **Brief** — Agency positioning & value pillars (Strategy, Content, Ads, Growth)
- **Industries** — 8 target industry verticals
- **Consultation** — What clients receive in a free 30-minute session
- **Services** — 10 service offerings with Read More links
- **How We Work** — 4-step process timeline (Diagnose, Design, Execute, Optimize)
- **Insights** — Blog preview cards
- **Booking CTA** — Final conversion section
- **Footer** — Logo, tagline, newsletter form, social icons (Instagram, Facebook, TikTok)

### 📋 Services (`pages/services.html`)
Detailed breakdown of all 10 service offerings.

### 📰 Blogs (`pages/blogs.html`)
Insight articles and resources for founders and brand teams, with 5 individual full blog article pages under `pages/subPages/`.

### 📞 Contact (`pages/contact.html`)
Contact information and inquiry options.

### 👥 About (`pages/about.html`)
Agency story, team, and mission.

### 📅 Form (`pages/form.html`)
Free consultation booking form — the primary conversion endpoint.

---

## 🌍 Target Market

BOOMIT! serves **B2B and consumer brands** across:
- 🇪🇬 Egypt
- 🇦🇪 GCC Region (Gulf Cooperation Council)

Industries: Food & Beverage, Fashion, Pharmacy Retail, Beauty, B2B, eCommerce, Services, Real Estate.

---

## 👤 Author

**Ahmed Hasim**  
Front-End Developer  
🔗 [GitHub — ahmedhasim209](https://github.com/ahmedhasim209)

---

## 📬 Contact & Booking

Interested in working with BOOMIT!?  
👉 Book a free consultation directly on the site via the **BOOM IT!** button.

---

## 📝 License

This project was built as a client portfolio project for **BOOMIT! Marketing Agency**.  
All brand assets, logos, and content belong to their respective owners.

---

<div align="center">
  <strong>Built with intention. Designed for brands built to lead.</strong>
</div>
