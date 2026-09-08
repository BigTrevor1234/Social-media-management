# Sheriff Opatola — Portfolio

A modern, high-performance personal portfolio website showcasing social media management, content strategy, and workflow automation.

Built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Motion**.

---

## Overview

This repository houses the personal portfolio for **Sheriff Opatola**, a Social Media Manager, Content Strategist, and Technical Virtual Assistant specializing in beauty, skincare, and e-commerce brands.

### Key Highlights
- **Strategic Information Architecture**: Single-page scroll layout with sticky navigation, active section tracking, and responsive mobile drawer.
- **GlowSkincare Case Studies & Live Proof**: Interactive gallery featuring 10 verified multi-channel artifacts across LinkedIn, Instagram, TikTok, X, and Notion.
- **Detailed Lightbox Modal**: High-resolution metric inspection, key deliverables breakdown, and tools applied for each case study.
- **Core Frameworks & Workflows**: Presentation of proprietary models including the *4-Pillar Content Ecosystem* and *Audience-First Positioning Framework*.
- **Integrated Tech Stack**: Highlights of platforms, creative tools, and workflow automation systems (Zapier, Airtable, Notion, Google Workspace).
- **Direct Conversion Channels**: Integrated Calendly scheduling, WhatsApp direct messaging, LinkedIn connection, and interactive email copy utilities.

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern component-based UI library |
| **TypeScript** | Strict static typing and code reliability |
| **Vite** | Fast development server and production bundler |
| **Tailwind CSS** | Utility-first styling with custom typography and warm neutral palette |
| **Motion** | Fluid, restrained layout and entrance animations |
| **Lucide React** | Clean, accessible vector icons |

---

## Project Structure

```
├── public/                 # Static assets and icons
├── src/
│   ├── components/         # Modular UI components
│   │   ├── Navbar.tsx             # Sticky header with active scroll spy
│   │   ├── Hero.tsx               # Header showcase with availability status
│   │   ├── AboutSection.tsx       # Narrative story and core competencies
│   │   ├── OutcomesSection.tsx    # 6 measurable client deliverables
│   │   ├── ServicesSection.tsx    # 4 core service packages
│   │   ├── ProcessSection.tsx     # 4-stage execution roadmap
│   │   ├── WorkSamplesGallery.tsx # Filterable case study cards
│   │   ├── WorkSampleModal.tsx    # Detailed case study inspection lightbox
│   │   ├── WorkSampleVisual.tsx   # Dashboard and artifact renderer
│   │   ├── FrameworksSection.tsx  # Strategic methodologies
│   │   ├── ToolsSection.tsx       # Tech and automation stack
│   │   ├── CertificationsSection.tsx # Technical credentials
│   │   ├── ContactSection.tsx     # Booking and contact channels
│   │   └── Footer.tsx             # Brand footer and navigation
│   ├── data/
│   │   └── portfolioData.ts       # Centralized content and case study data
│   ├── types.ts                   # Global TypeScript interfaces
│   ├── App.tsx                    # Main application wrapper
│   ├── main.tsx                   # React root entry point
│   └── index.css                  # Tailwind CSS configuration and theme tokens
├── index.html              # HTML entry point with web fonts & meta tags
├── package.json            # Scripts and project dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## Getting Started

### Prerequisites
Make sure you have Node.js (version 18 or higher) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` to view the site.

---

## Available Scripts

- `npm run dev` — Runs the application in development mode with live preview.
- `npm run build` — Compiles TypeScript and creates an optimized production build in the `dist/` directory.
- `npm run lint` — Runs TypeScript type-checking across the codebase.

---

## Customization

All copy, case study metrics, services, and contact details are organized in a single configuration file:
- **`src/data/portfolioData.ts`**: Update personal links, email, phone numbers, case study details, or service offerings without modifying component code.

---

## Author

**Sheriff Opatola**
- Email: [sheriffopatola@gmail.com](mailto:sheriffopatola@gmail.com)
- LinkedIn: [Sheriff Opatola](https://www.linkedin.com/in/sheriff-opatola-599b2a128)
- WhatsApp: [+234 806 812 7977](https://wa.me/2348068127977)
- Calendly: [Book a Discovery Call](https://calendly.com/sheriffopatola/30min)

---

## License

This project is licensed under the MIT License.
