# 🎓 CampusPe — AI-Powered Campus & Placement Ecosystem

[![Next.js](https://img.shields.io/badge/Next.js-15%2B-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![CSS3](https://img.shields.io/badge/Vanilla_CSS-Pixel_Perfect-1572B6?style=for-the-badge&logo=css3)](https://www.w3.org/Style/CSS/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Blazing_Fast-000000?style=for-the-badge&logo=vercel)](https://turbo.build/)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile_First-success?style=for-the-badge)](#-responsive-breakpoints--zero-horizontal-scroll)
[![Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)](#)

> A pixel-accurate, ultra-responsive, and high-performance frontend replication of the **CampusPe** design system. Built with Next.js App Router and Vanilla CSS following strict outside-in architectural standards, modern accessibility, and zero-horizontal-scroll guarantees across all device viewports.

---

## 🌐 Live Deployment & Source Code

- **GitHub Repository**: [https://github.com/Ajay913954/Campuspe-landing-page](https://github.com/Ajay913954/Campuspe-landing-page)
- **Live Demo Link**: [https://campuspe-landing-page.vercel.app](https://campuspe-landing-page.vercel.app) *(or your deployed production URL)*

---

## 📐 Strategic Implementation Approach

This application was engineered according to the **Frontend UI Replication Assignment Guide**:

```
┌────────────────────────────────────────────────────────────────────────┐
│  Phase 1: The Blueprint        Phase 2: Structural Integrity           │
│  • Figma token extraction      • 1240px Centered Container Grid        │
│  • Typography & color palette  • Mobile-first architecture             │
│  • Asset optimization (WebP)   • Zero horizontal scroll rule           │
├────────────────────────────────────────────────────────────────────────┤
│  Phase 3: Pixel-Perfect Match  Phase 4: Quality Assurance              │
│  • 1:1 Side-by-side overlay    • iPhone 13 mini (390px) DevTools QA    │
│  • Spacing & gutter audit      • All button/link interactive states    │
│  • Real partner logo SVGs      • Production bundle validation          │
└────────────────────────────────────────────────────────────────────────┘
```

### 1. The Blueprint (Design Analysis)
- Extracted all foundational design tokens: primary blue (`#0084ff`), dark slate (`#0f172a`), border neutrals (`#e2e8f0`), and soft surface fills into `:root` CSS variables.
- Standardized container constraints to the Figma `1240px` artboard content grid, eliminating unintended side-gutter compounding.
- Sourced and optimized authentic institutional assets (DPIIT #startupindia, GINSERV, Startup Karnataka, VTU emblem, TalentSpotify, Radiant Info) as lossless WebP/PNGs.

### 2. Structural Integrity (The Outside-In Method)
- Implemented clean outer containers with `width: 100%; box-sizing: border-box; overflow-x: hidden;` and centered inner wrappers at `max-width: 1240px; margin: 0 auto; padding: 0 24px;`.
- Eliminated percentage-based margin bloating (`padding: 0 7%`), ensuring seamless vertical rhythm and uniform alignment from the Navbar to the Footer.
- Applied mobile-first CSS architecture with targeted breakpoints (`1100px`, `900px`, `768px`, `640px`, and `480px`).

### 3. Pixel-Perfect Matching
- **3-Column Top Hero Grid**: Perfectly balanced `280px - 1fr - 280px` desktop layout featuring the live WhatsApp alert card and student matching pill on the left, central assistant pill & heading in the center, and resume builder & recruiter shortlist card on the right.
- **5-Phone App Showcase**: High-resolution synchronized showcase displaying all 5 mobile screens together with interactive pagination indicators.
- **Micro-Interactions**: Hover elevations, active role-card selections, gradient glows, and transition curves on all interactive elements.

### 4. Quality Assurance & Audits
- Tested on standard desktop (1440×900), iPad Pro / tablets (1024px & 768px), and narrow mobile devices (iPhone 13 mini at 390px width).
- Verified `document.documentElement.scrollWidth <= document.documentElement.clientWidth` across all breakpoints to guarantee **0 horizontal scroll**.

---

## ✨ Features & Section Breakdown

### 1. Sticky Navigation Bar
- **Glassmorphism Header**: `backdrop-filter: blur(14px)` with dynamic scroll shadow detection.
- **Brand Identity**: High-res CampusPe logo with graduation cap branding.
- **Quick Links**: Semantic navigation links (`Colleges`, `Employers`, `Jobs`, `Blogs`) with smooth hover states.
- **Auth Actions**: Minimalist `Sign In` text link and high-visibility pill `Sign Up` button with glow shadow.
- **Responsive Mobile Drawer**: Animated hamburger menu with keyboard-accessible focus states.

### 2. Hero Section (`1240 × 720` Figma Frame)
- **Ambient Aura**: Multi-color radial gradients (`#38bdf8`, `#a855f7`, `#34d399`) creating a modern glow.
- **Top 3-Column Grid**:
  - **Left**: `WhatsApp Alert` notification card + `🔥 142 students matched today` live avatar pill (`IIT, BITS, VIT`).
  - **Center**: `🤖 AI-Powered Campus Assistant` pill + `Connect 10X Faster.` headline + `✦ What are you looking for? ✦` sparkler subtitle.
  - **Right**: `⚡ Resume Builder` notification card + `🏢 Radiant Info shortlisted 8 interns` verified pill.
- **3 Interactive Role Cards**:
  - `College`: Explore colleges, courses, fees, placements + `Join Waitlist 🔔`.
  - `I'm Looking for a Job` *(Default Active)*: Resume document illustration with magnifying lens, 3 checkmarks + `Explore Jobs →`.
  - `I'm Hiring`: Code snippet illustration `< / >`, direct placement connectivity + `Join Waitlist 🔔`.
- **Metrics Bar**: 4-column divided statistics card (`800+ Students`, `130+ colleges`, `100+ jobs & internships`, `100% Safe & Trusted`).

### 3. Infinite Partner Marquee
- Continuous smooth RTL scrolling marquee with CSS hardware acceleration (`will-change: transform`).
- Pause-on-hover interaction and automatic `prefers-reduced-motion` compliance.
- Authentic logos: **GINSERV**, **Startup Karnataka**, **VTU / Karnataka Govt**, **TalentSpotify**, **Radiant Info**, and **DPIIT #startupindia**.

### 4. Opportunity Discovery Feed (For Job Seekers)
- Dual-column split layout with badge pill `01 • OPPORTUNITY DISCOVERY`.
- Left: 3-step structured cards (`Set your preferences`, `Discover relevant opportunities`, `Get notified when something fits`).
- Right: Interactive opportunity feed mockup with category filters (`All`, `Colleges`, `Jobs`, `Internships`, `Freelance`, `Part-time`), live job cards (IIM Bangalore, Product Intern, Marketing Gig), and handwritten cursive note annotation.

### 5. AI Resume Scanner & Match Simulation
- Central drag-and-drop dropzone supporting PDF/DOCX file uploads with live scanning simulation.
- Real-time ATS analytics feedback: ATS Score (88/100), Skill Gap Analysis, Role Match % (94%), and AI Keyword Matching.

### 6. Institutional & Employer Workflow Showcases
- **College Section (`02 • FOR COLLEGES`)**: 4-step workflow cards with badges (`NAAC A++ Ready`, `98% Match`, `3.2x Placement Growth`, `Direct Recruiter Access`).
- **Employer Section (`03 • FOR EMPLOYERS`)**: 4-step workflow cards with badges (`Instant Setup`, `100% Pre-screened`, `Direct TPO Access`, `0 Fraud Guarantee`).

### 7. App Interface Showcase (5 Phones)
- Ultra-sharp showcase presenting all 5 mobile app screens simultaneously.
- 5 dot pagination indicator bar matching the active center view.

### 8. 3D Isometric App Download Section
- Dual angled isometric phones on a dark perspective stage.
- Direct store download pills: **Google Play** and **Apple App Store** with authentic brand icons.

### 9. Still Have Questions? & Ready for What's Next?
- **Glass Support Card**: Frosted glass card with radial glow, `Download App` pill button, and `Talk to our Team` button.
- **Ready for What's Next Card**: Bordered banner with 4 pill action buttons in a single desktop row (`Explore Colleges →`, `Find Opportunities →`, `List Your College →`, `Post a Job →`).

### 10. Comprehensive Modern Footer
- 5 categorized navigation columns (`For Students`, `For Colleges`, `For Employers`, `Company`, `Legal & Policies`).
- Policy callout info card and active ecosystem indicator (`● Students • Colleges • Employers`).
- Interactive contact pills: `contactus@campuspe.com` and `+91 6362606464`.
- Social icons (LinkedIn, Instagram, X/Twitter, Facebook, WhatsApp, YouTube) and copyright bar.

---

## 🎨 Design Tokens & System

```css
:root {
  /* Brand Palette */
  --color-primary: #0084ff;
  --color-primary-hover: #0070db;
  --color-primary-light: #f0f7ff;
  --color-dark: #0f172a;
  --color-text: #334155;
  --color-text-muted: #64748b;
  --color-border: #e2e8f0;

  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Elevation */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.04);
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.06);
  --shadow-primary: 0 6px 20px rgba(0, 132, 255, 0.28);

  /* Border Radii */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
}
```

---

## 📱 Responsive Breakpoints & Zero Horizontal Scroll

| Breakpoint | Target Devices | Layout Adaptations |
| :--- | :--- | :--- |
| **> 1100px** | Standard Desktop & Laptops | 3-column hero top grid, 3 role cards, 4-column stats, 2-column discovery & split sections |
| **900px – 1100px** | Tablets & Small Laptops | Hero top grid reflows to centered stack, role cards switch to 2-column grid, footer reflows to 3 columns |
| **768px – 900px** | Tablets (Portrait) | Desktop navigation collapses to hamburger menu, download section stacks vertically |
| **480px – 768px** | Large Mobile Phones | Role cards stack to single column, stats box displays 2x2 grid, resume metrics 2x2 |
| **≤ 480px** | iPhone 13 mini / Small Mobile | 16px container padding, 1-column full width cards, zero side overflow (`100vw` bound) |

---

## 📁 Project Directory Structure

```
campuspe/
├── public/
│   ├── app_interface_mockup.png   # 5-phone showcase graphic
│   ├── download_phones_mockup.png # Dual isometric phones graphic
│   ├── logo_campuspe.png          # High-resolution brand logo
│   └── partners/                  # Real partner brand assets
│       ├── dpiit_startupindia.png
│       ├── ginserv.png
│       ├── karnataka_govt.png
│       ├── radiant_info.png
│       ├── startup_karnataka.png
│       └── talentspotify.png
├── src/
│   └── app/
│       ├── components/
│       │   ├── Navbar.jsx         # Sticky header with mobile drawer
│       │   ├── Hero.jsx           # 3-column top grid + 3 role cards + stats
│       │   ├── Partners.jsx       # Infinite continuous RTL marquee
│       │   ├── MatchSection.jsx   # Filterable opportunity discovery feed
│       │   ├── ResumeSection.jsx  # Interactive resume scanner simulation
│       │   ├── CollegeSection.jsx # Institutional 4-card workflow
│       │   ├── EmployerSection.jsx# Employer 4-card workflow
│       │   ├── AppSection.jsx     # 5-phone interface look with indicators
│       │   ├── DownloadSection.jsx# Store badges & isometric visual
│       │   ├── CTASection.jsx     # Glass card & Ready for what's next card
│       │   └── Footer.jsx         # 5-column navigation & contact strip
│       ├── globals.css            # Unified 1240px design system & utilities
│       ├── layout.js              # HTML metadata & global font integration
│       └── page.js                # Consolidated landing page layout
├── next.config.mjs                # Turbopack & Next.js configuration
├── package.json                   # Dependencies and npm scripts
└── README.md                      # Comprehensive project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or later
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/Ajay913954/Campuspe-landing-page.git
cd Campuspe-landing-page
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with hot module replacement (HMR).

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 🛠️ Key Architectural Decisions

1. **Vanilla CSS over Tailwind**:
   - Gives 100% fine-grained control over complex CSS Grid definitions (`.hero-top-grid`), perspective 3D isometric transforms, and continuous keyframe marquees without utility bloat.
2. **Unified 1240px Layout System**:
   - Avoids percentage-based gutter compounding on ultra-wide screens. Every section shares the identical container constraint for crisp vertical line alignment.
3. **Optimized Next.js App Router**:
   - Fully statically pre-rendered (`○ Static`) during build time for instant Time-to-First-Byte (TTFB) and high Core Web Vitals scores.

---

## 📄 License

This project is developed as a frontend assignment for demonstration purposes. All rights to trademarks and logos belong to their respective owners.
