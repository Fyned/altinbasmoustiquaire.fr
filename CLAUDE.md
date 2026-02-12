# ALTINBAS Moustiquaire — altinbasmoustiquaire.fr
## Claude Code Master Specification

> **READ ALL .md FILES BEFORE WRITING ANY CODE.**
> Order: CLAUDE.md → DESIGN-SYSTEM.md → PAGES.md → CONTENT-FR.md → SEO-TECHNICAL.md → LEGAL-CONTENT.md

---

## PROJECT OVERVIEW

Build a **premium, ultra-professional single-page-application website** for ALTINBAS Moustiquaire — a French artisan manufacturer of custom pleated mosquito screens (moustiquaire plissée sur mesure) based in Pont-Évêque, Isère (38), France.

**Domain:** altinbasmoustiquaire.fr
**Language:** 100% French (fr-FR) — all UI, content, meta tags, alt texts, aria-labels in French
**Current state:** Maintenance mode site exists — REPLACE ENTIRELY with new site

### Business Info
- **Company:** ALTINBAS (SARL), SIREN: 947801841
- **Owner / Gérant:** Kubilay ALTINBAS
- **Brand contact:** Bilge TEZGIN
- **Address:** 24 Rue Francisque Cartallier, 38780 Pont-Évêque, France
- **GPS:** 45.5264, 4.8683
- **Phone (Devis/RDV):** 06 60 99 03 70
- **Phone (Livraison/Pose):** 07 81 60 90 26
- **Email:** ent.altinbas@gmail.com
- **Instagram:** @moustiquairealtinbas (30K+ followers)
- **Facebook:** altinbasmoustiquaire
- **Website:** https://altinbasmoustiquaire.fr

### Core Products
1. **Moustiquaire plissée pour fenêtre** — custom pleated screens for windows
2. **Moustiquaire plissée pour porte-fenêtre** — for French doors
3. **Moustiquaire plissée pour baie vitrée** — for sliding glass doors, up to 6 meters wide (flagship)
4. **Rideaux S-pile** — S-fold curtains (secondary)
5. **Rideaux tül vertical** — vertical tulle curtains (secondary)

### Key Selling Points (use everywhere)
- Fabrication artisanale en Isère (38)
- Sur mesure uniquement — no standard sizes
- Cadre aluminium, toile fibre de verre ultra résistante
- Jusqu'à 6 mètres de largeur (unique selling point)
- Tous types d'ouvertures: fenêtre, porte-fenêtre, baie vitrée
- Prise de mesure et installation par nos soins
- Garantie 2 ans
- Intervention dans toute la France
- Devis gratuit
- 30 000+ abonnés Instagram, 280+ avis clients

### Logo Files (already in project)
Located in `logolar/` directory:
- `altinbas-logo-siyah.svg` — dark logo (for light backgrounds) **← PRIMARY**
- `altinbas-logo-beyaz.svg` — white logo (for dark backgrounds)
- `altinbas-logo-tan.svg` — tan/beige logo
- `altinbas-header-logo-siyah.svg` — header variant dark
- `altinbas-header-logo-beyaz.svg` — header variant white
- `altinbas-header-logo-tan.svg` — header variant tan
- `altinbas-favicon-logo.svg` — favicon

---

## TECH STACK

The project already has React 19 + Vite 7 initialized. **Keep JSX** (do not convert to TypeScript).

### Current dependencies (keep):
- react 19.x
- react-dom 19.x
- lucide-react
- vite 7.x

### Install these additional packages:
```bash
npm install react-router-dom framer-motion gsap @studio-freight/lenis react-hook-form zod @hookform/resolvers react-helmet-async @emailjs/browser
npm install -D tailwindcss @tailwindcss/vite
```

### After install, update vite.config.js:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion', 'gsap'],
        }
      }
    }
  },
})
```

---

## PROJECT STRUCTURE

```
src/
├── components/
│   ├── ui/                    # Reusable atoms
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   ├── Badge.jsx
│   │   ├── Modal.jsx
│   │   ├── Accordion.jsx
│   │   └── index.js           # barrel export
│   ├── layout/
│   │   ├── Header.jsx         # Sticky header, transparent→solid on scroll
│   │   ├── Footer.jsx         # Full footer with all links
│   │   ├── MobileNav.jsx      # Full-screen overlay menu
│   │   ├── PageWrapper.jsx    # Layout wrapper + SEO + scroll reset
│   │   └── StickyMobileCTA.jsx# Sticky bottom bar on mobile
│   ├── sections/              # Homepage sections (reusable)
│   │   ├── Hero.jsx
│   │   ├── TrustBadges.jsx
│   │   ├── ProductCards.jsx
│   │   ├── BeforeAfter.jsx    # Drag comparison slider
│   │   ├── ProcessSteps.jsx   # 3-step animated process
│   │   ├── GalleryPreview.jsx
│   │   ├── Testimonials.jsx
│   │   ├── AboutPreview.jsx
│   │   ├── FAQPreview.jsx
│   │   ├── CTABanner.jsx
│   │   ├── StatsCounter.jsx   # Animated number counters
│   │   └── ZoneIntervention.jsx
│   └── common/
│       ├── SEOHead.jsx        # react-helmet-async wrapper
│       ├── JsonLd.jsx         # Schema.org structured data
│       ├── WhatsAppButton.jsx # Floating green bubble
│       ├── ScrollToTop.jsx    # Scroll to top on route change
│       ├── CookieBanner.jsx   # CNIL-compliant cookie consent
│       ├── LazyImage.jsx      # IntersectionObserver lazy loading
│       └── AnimatedSection.jsx# framer-motion scroll reveal
├── pages/
│   ├── HomePage.jsx
│   ├── ProductsPage.jsx       # Overview of all products
│   ├── ProductFenetrePage.jsx
│   ├── ProductPortePage.jsx
│   ├── ProductBaieVitreePage.jsx
│   ├── ProductRideauxPage.jsx
│   ├── GalleryPage.jsx        # Nos Réalisations
│   ├── DevisPage.jsx          # Multi-step quote form
│   ├── AboutPage.jsx          # L'Entreprise / À Propos
│   ├── FAQPage.jsx
│   ├── ContactPage.jsx
│   ├── ZonePage.jsx           # Zone d'intervention + city pages
│   ├── MentionsLegalesPage.jsx
│   ├── ConfidentialitePage.jsx
│   ├── CookiesPage.jsx
│   ├── CGVPage.jsx
│   └── NotFoundPage.jsx       # Custom 404
├── hooks/
│   ├── useScrollAnimation.js
│   ├── useInView.js
│   ├── useMediaQuery.js
│   ├── useSmoothScroll.js     # Lenis initialization
│   └── useCountUp.js          # Animated counter
├── lib/
│   ├── animations.js          # Motion + GSAP animation presets
│   ├── seo.js                 # Per-page SEO configs
│   ├── constants.js           # Company data, phones, colors
│   ├── routes.js              # All route paths
│   └── utils.js               # formatPhone, scrollToElement, etc.
├── services/
│   └── emailService.js        # EmailJS send function
├── data/
│   ├── products.js            # Product objects with specs
│   ├── faq.js                 # FAQ Q&A pairs
│   ├── testimonials.js        # Customer reviews
│   ├── gallery.js             # Gallery items (placeholder paths)
│   └── navigation.js          # Nav menu structure
├── styles/
│   └── index.css              # Tailwind + custom styles
├── App.jsx                    # Router + Layout
└── main.jsx                   # Entry + providers
```

---

## ROUTING

```js
// All routes — use React Router 7
const routes = {
  home: '/',
  products: '/nos-produits',
  productFenetre: '/nos-produits/moustiquaire-fenetre',
  productPorte: '/nos-produits/moustiquaire-porte-fenetre',
  productBaieVitree: '/nos-produits/moustiquaire-baie-vitree',
  productRideaux: '/nos-produits/rideaux-sur-mesure',
  gallery: '/nos-realisations',
  devis: '/devis-gratuit',
  about: '/a-propos',
  faq: '/faq',
  contact: '/contact',
  zone: '/zone-intervention',
  mentionsLegales: '/mentions-legales',
  confidentialite: '/politique-de-confidentialite',
  cookies: '/politique-cookies',
  cgv: '/conditions-generales-de-vente',
}
```

ALL routes must use `React.lazy()` + `<Suspense>` for code splitting.

---

## CRITICAL RULES

### Images — PLACEHOLDER SYSTEM
**The client has NOT provided product/gallery images yet.** Use this placeholder system:

```jsx
// LazyImage.jsx should handle missing images gracefully
// Use a branded placeholder with the ALTINBAS teal color + icon

// For ALL image references in data files, use descriptive paths:
// "/images/hero/hero-moustiquaire-plissee.jpg"
// "/images/products/moustiquaire-fenetre-1.jpg"
// "/images/gallery/realisation-baie-vitree-lyon.jpg"
// etc.

// Create a PlaceholderImage component that shows:
// - Teal (#4FBDBA) background with 10% opacity
// - Centered icon (relevant lucide icon)
// - Text label describing what image goes there
// - Maintains aspect ratio
```

Create `public/images/` directory structure:
```
public/images/
├── hero/          # Hero section images
├── products/      # Product photos  
├── gallery/       # Réalisations
├── about/         # Workshop, team
├── testimonials/  # Client photos (optional)
└── blog/          # Blog post images
```

### Animation Rules
- **Professional and subtle** — this is an artisan business, not a tech startup
- Every section: fade-in + slight translateY(20px→0) on scroll enter
- Stagger children by 0.08-0.12s
- Hero: heading slides up, subtitle fades in delayed, CTA scales in with spring
- Stats counters: animate from 0 to target number when section enters viewport
- Product cards: subtle lift on hover (y: -4px, shadow increase)
- Page transitions: opacity fade 0.3s
- **Use framer-motion** for component animations (AnimatedSection, hover, layout)
- **Use GSAP ScrollTrigger** for: parallax backgrounds, pinned sections, staggered reveals
- **Use Lenis** for smooth scroll foundation
- NEVER use animation on reduced-motion preference: `@media (prefers-reduced-motion: reduce)`

### Mobile First
- Design mobile-first, enhance for desktop
- Breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px
- **StickyMobileCTA**: appears after scrolling 400px, shows 3 buttons:
  - 📞 Appeler (tel: link)
  - 💬 WhatsApp (wa.me link)  
  - 📋 Devis (navigates to /devis-gratuit)
- Touch targets: minimum 44x44px
- Header mobile: 56px height, logo left, phone icon + hamburger right
- Test all pages at 375px width

### Performance
- Lazy load ALL images with IntersectionObserver
- Code split ALL route pages
- Self-host fonts (Playfair Display 600,700 + Inter 400,500,600)
- Hero image: `fetchpriority="high"`, preload in HTML `<head>`
- Target: Lighthouse 90+ performance
- Image paths ready for WebP when client provides images

### SEO Critical
- Every page gets unique `<title>` and `<meta description>` via react-helmet-async
- Use SEOHead component on every page — see SEO-TECHNICAL.md for per-page configs
- Implement Schema.org JSON-LD on homepage (LocalBusiness), product pages (Product), FAQ page (FAQPage)
- Generate sitemap.xml (can be static file in public/)
- robots.txt allowing all crawlers
- Canonical URLs on every page
- French hreflang: `<link rel="alternate" hreflang="fr" href="..." />`
- Open Graph + Twitter Card meta tags on every page

### Cookie Consent (CNIL Compliance)
- **"Tout accepter" and "Tout refuser" buttons MUST be equally prominent** (same size, same visual weight)
- No cookies before consent
- Cookie preference saved in localStorage
- Banner appears on first visit, bottom of screen
- Categories: Nécessaires (always on), Analytiques (optional), Marketing (optional)
- Link to /politique-cookies page

---

## EMAILJS CONFIGURATION

The devis form sends emails via EmailJS. Set up placeholder config that client will fill in:

```js
// src/services/emailService.js
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'    // Client fills this
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // Client fills this
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'     // Client fills this
```

### Devis Form Fields (multi-step):
**Step 1 — Type de projet**
- Type d'ouverture: Fenêtre / Porte-fenêtre / Baie vitrée (visual card selection)
- Nombre d'ouvertures: 1-10 (number input)

**Step 2 — Détails**
- Dimensions approximatives: Largeur (cm) × Hauteur (cm)
- Coloris souhaité: Blanc / Noir / Gris anthracite / Marron / Autre
- Étage: RDC / 1er / 2ème / 3ème+
- Commentaire: textarea (optional)

**Step 3 — Vos coordonnées**
- Nom complet (required)
- Téléphone (required, French format validation)
- Email (required)
- Ville (required)
- Code postal (required, 5 digits)

**Step 4 — Récapitulatif**
- Show summary of all entered data
- Checkbox: consent RGPD (required)
- Submit button: "Envoyer ma demande de devis"

After submit: success screen with "Merci ! Nous vous recontacterons sous 24h."

### Phone validation regex:
```
/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
```

---

## WHATSAPP INTEGRATION

Floating button bottom-right on desktop, integrated in StickyMobileCTA on mobile.

```
URL: https://wa.me/33660990370?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20une%20moustiquaire%20pliss%C3%A9e%20sur%20mesure.%20Merci%20!
```

- Green (#25D366) circular button, 56px diameter
- WhatsApp icon (use lucide MessageCircle or custom SVG)
- Pulse animation on first appearance
- Hide on /devis-gratuit page (avoid distraction)
- z-index: 40 (below cookie banner at 50)

---

## COLOR REFERENCE (Quick — see DESIGN-SYSTEM.md for full)

```
Primary:      #4FBDBA (teal)
Primary Dark: #3A8F8C
Cream:        #FDF8F3
Beige:        #F5EDE3
Sand:         #D4C5B2
Charcoal:     #2D2D2D
Dark Gray:    #4A4A4A
Terracotta:   #C17B5D (warm accent)
```

---

## BUILD & DEPLOY

```bash
npm run build    # outputs to dist/
```

Deploy target: **Cloudflare Pages** or **Vercel** (client decides)
- Both support custom domain altinbasmoustiquaire.fr
- Automatic HTTPS
- SPA redirect: all routes → index.html (configure _redirects or vercel.json)

### For Vercel, add vercel.json:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### For Cloudflare Pages, add public/_redirects:
```
/*  /index.html  200
```

---

## IMPLEMENTATION ORDER

Follow this exact order:

1. **Install dependencies** + update vite.config.js
2. **Setup Tailwind** — replace global.css with Tailwind directives + custom properties
3. **Create lib/** — constants.js, routes.js, utils.js, animations.js, seo.js
4. **Create data/** — products.js, faq.js, testimonials.js, gallery.js, navigation.js
5. **Create hooks/** — all custom hooks
6. **Create components/common/** — SEOHead, JsonLd, LazyImage, PlaceholderImage, AnimatedSection, WhatsAppButton, ScrollToTop, CookieBanner
7. **Create components/ui/** — Button, Card, Input, Badge, Modal, Accordion
8. **Create components/layout/** — Header, Footer, MobileNav, PageWrapper, StickyMobileCTA
9. **Create components/sections/** — all homepage sections
10. **Create pages/** — HomePage first, then product pages, then other pages, legal pages last
11. **Wire up App.jsx** — Router with all routes, lazy loading, layout
12. **Update main.jsx** — add HelmetProvider, ScrollToTop
13. **Update index.html** — add font preloads, favicon, structured data
14. **Create public files** — sitemap.xml, robots.txt, image directory structure
15. **Test** — all routes, mobile responsiveness, animations, form validation

**READ THE OTHER .md FILES NOW:**
- DESIGN-SYSTEM.md — complete color/typography/spacing/component specs
- PAGES.md — every page section-by-section
- CONTENT-FR.md — all French text content ready to copy
- SEO-TECHNICAL.md — meta tags, schema.org, sitemap
- LEGAL-CONTENT.md — French legal page content
