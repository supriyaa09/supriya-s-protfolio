# Supriya — The Illustrated Editorial Portfolio

> **“An illustrated journey through ideas, technology and things I build.”**  
> *“Technology is what I build. Creativity is how I bring it to life.”*

A distinct, highly interactive personal portfolio built for **Supriya**, Computer Science and Engineering student at Sreenidhi University (GPA: 9.1), software developer, AI/ML enthusiast, and creative problem solver.

Inspired by Hacktoberfest, modern literary publications, editorial magazine spreads, and award-winning interactive portfolios.

---

## ✨ Features & Architecture

- **Editorial Magazine Layout**: Oversized typography (**DM Serif Display**), modern UI typography (**Manrope**), and handwritten marginal annotations (**Caveat**).
- **Extracted Doodle Character System**: Supriya's original illustrated developer character integrated across the Hero, Projects, Skills, Achievements, and Connect sections.
- **Dedicated Portrait Frame**: Supriya's actual portrait photograph integrated at `public/images/supriya-portrait.jpg` with responsive cover framing (`aspect-[3/4]`, `object-[center_25%]`).
- **Comprehensive Project Case Studies**:
  - **RailAssist**: Intelligent Railway Pension & Settlement Advisory System (Architecture Phase Completed) — [GitHub](https://github.com/supriyaa09/RailBenifits)
  - **VAVE**: The Personal AI Control Plane (Contributed AI Clarification Engine with fine-tuned 0.5B model) — [GitHub](https://github.com/sohail-bhai/VAVE-main)
  - **AethelGard**: Real-Time Competitive Learning Arena (1v1 Duel Mode Live) — [GitHub](https://github.com/supriyaa09/Aethelgard.git)
  - **NYRA**: Need Your Rapid Assistance (50Hz Tri-Axial HAR Edge Sensor Pipeline, <2s Response Time)
  - **Curalight**: Lightweight Pancreatic CT Image Classification with int8 TFLite CPU-First Inference — [GitHub](https://github.com/supriyaa09/Curalight.git)
  - **Empower Her Path**: Career & Mentorship Platform for Women in Technology — [GitHub](https://github.com/supriyaa09/empower-her-path)
- **Professional History & Experience**:
  - **Digital Marketing & Backend Developer** — *StudentKare (SK) & Student Alumni Hyderabad* (2026 – Present)
  - **Technology Intern — Billing Department** — *Indian Railways, South Central Railway Headquarters* (Jul 2026)
- **Leadership & Beyond Code**:
  - Chairperson — Association for Computing Machinery (ACM), Led Build-AI-Thon (Nov 2025)
  - Junior Under Officer (JUO) — National Cadet Corps (NCC), Guard of Honor & Contingent Commander (Sept 2023–24)
  - 10+ Hackathons & Ideathons Competitor
- **Honours & Certifications**:
  - Winner — HackWave 2026
  - Winner — RoboVeda 2025 Ideathon
  - Facilitator — SIP 2025 Social Internship
  - NPTEL — Industry 4.0 Certification
  - NCC — B Certificate
  - GitHub — Career Essentials in GitHub Professional Certificate
- **Direct Dispatch & Contact Form**: Fully functional form with client-side validation, Formspree API endpoint support, and automatic email client fallback to `supriyaaa.926@gmail.com`.
- **Integrated Resume**: Latest approved resume wired to download button at `public/resume/Supriya_Resume.pdf`.

---

## 🎨 Design System

| Element | Specification | Hex / Value |
| :--- | :--- | :--- |
| **Warm Cream** | Background & Canvas | `#F4F0E8` |
| **Deep Charcoal** | Primary Text & Borders | `#292B25` |
| **Sage Green** | Accents & Milestones | `#788568` |
| **Terracotta** | Highlights & Actions | `#C8795C` |
| **Beige** | Secondary Containers & Tape | `#E5DED1` |
| **Secondary Text** | Subheadings & Descriptions | `#77756D` |
| **Heading Font** | Editorial Display | `DM Serif Display` |
| **Body Font** | Sans-Serif Interface | `Manrope` |
| **Script Font** | Marginal Doodles & Notes | `Caveat` |

---

## 🚀 Local Development Setup

### 1. Prerequisites
- **Node.js** (v18+ recommended)
- **npm** (v9+)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### 4. Build for Production
```bash
npm run build
```
Compiles TypeScript and creates an optimized static build in `dist/`.

---

## 🌐 Deploying to Vercel

This repository is configured for one-click deployment on **[Vercel](https://vercel.com)**:

### Option A: Via Vercel Dashboard (Recommended)
1. Push your repository to your GitHub account: `https://github.com/supriyaa09/<your-repo-name>`
2. Go to [vercel.com/new](https://vercel.com/new) and log in.
3. Import your portfolio repository.
4. Vercel automatically detects the configuration from `vercel.json` and `package.json`:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. *(Optional)* Add the following Environment Variable in Vercel settings if you have a custom Formspree form:
   - `VITE_FORMSPREE_ENDPOINT`: `https://formspree.io/f/your_form_id`
6. Click **Deploy**. Your site will be live on `https://your-portfolio.vercel.app` with SSL and global edge caching!

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Vercel Routing Configuration (`vercel.json`)
The included `vercel.json` provides:
- Single Page Application (SPA) catch-all rewrite to `/index.html`.
- Direct static file serving with correct `Content-Type: application/pdf` and `Content-Disposition: inline` headers for `/resume/Supriya_Resume.pdf`.
- 1-year immutable caching for static assets (`/assets/`, `/images/`, `/illustrations/`).

---

## 📁 Repository Directory Map

```
supriya-portfolio/
├── vercel.json                 # Vercel deployment, SPA rewrites & cache headers
├── package.json                # Project scripts & dependencies
├── vite.config.ts              # Vite bundler configuration
├── tailwind.config.js          # Custom editorial color & typography palette
├── tsconfig.json               # TypeScript strict configuration
│
├── public/
│   ├── favicon.svg             # Hand-drawn monogram favicon
│   ├── resume/
│   │   └── Supriya_Resume.pdf  # Latest uploaded resume PDF
│   ├── images/
│   │   ├── supriya-portrait.jpg# Supriya's actual portrait photo
│   │   ├── supriya-portrait.webp
│   │   └── supriya-hero.jpg
│   └── illustrations/
│       ├── supriya_doodle_character.webp # Extracted high-res doodle character
│       ├── supriya_doodle_character.png
│       └── supriya_exact_doodle_image.svg
│
└── src/
    ├── components/
    │   ├── Navbar/             # Sticky navigation with active indicator & drawer
    │   ├── Hero/               # Editorial headline, doodle character & actions
    │   ├── About/              # 2-column layout with actual portrait photo
    │   ├── Projects/           # Filterable projects & Case Study modal
    │   ├── ProjectCard/        # Asymmetric cards with SVG diagrams
    │   ├── Skills/             # Categorized toolboxes (zero arbitrary bars)
    │   ├── Experience/         # Vertical timeline (StudentKare & Indian Railways)
    │   ├── BeyondCode/         # Scrapbook layout (ACM, NCC, Hackathons)
    │   ├── Achievements/       # Celebration cards with interactive confetti
    │   ├── Certifications/     # Verified diploma certificates
    │   ├── Contact/            # Transmission dispatch form & paper plane visual
    │   ├── Footer/             # Closing creative statement & colophon
    │   └── Illustrations/      # Bespoke SVG diagrams & character components
    │
    ├── data/
    │   ├── projects.ts         # Centralized project case study details
    │   ├── skills.ts           # Technical, AI & creative skill taxonomy
    │   ├── experience.ts       # Work history matching latest resume
    │   ├── beyondCode.ts       # Leadership, NCC & hackathon records
    │   └── achievements.ts     # Honours & certified credentials
    │
    ├── styles/
    │   └── index.css           # Paper grain texture, sketch borders & typography
    ├── App.tsx                 # Root application with scroll spy
    └── main.tsx                # React DOM entry point
```

---

## 📬 Contact & Inquiries

- **Email**: [supriyaaa.926@gmail.com](mailto:supriyaaa.926@gmail.com)
- **LinkedIn**: [linkedin.com/in/supriya-09dev](https://linkedin.com/in/supriya-09dev)
- **GitHub**: [github.com/supriyaa09](https://github.com/supriyaa09)
