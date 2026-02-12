# PAGES — Section-by-Section Specification

Every page described in detail. Build exactly as specified.

---

## 1. HOMEPAGE (`/`)

The homepage is the flagship — every section must be polished and impressive.

### Section 1: Hero
```
Layout: Full viewport height (100vh), full-width
Background: PlaceholderImage with dark gradient overlay
  → When real image: high-quality photo of installed moustiquaire plissée on a bay window
Content (centered, white text):
  Badge: "Fabricant artisanal en Isère" (small, uppercase, border-white/30)
  H1: "Moustiquaire Plissée Sur Mesure"
  Subtitle: "Protection élégante contre les insectes, fabriquée et installée par nos soins"
  CTA buttons (row):
    Primary: "Demander un Devis Gratuit" → /devis-gratuit
    Secondary: "Découvrir nos produits" → /nos-produits (outlined white button)
  Trust micro-bar below CTAs (horizontal, small text):
    "⭐ 4.6/5 (282 avis) • 🇫🇷 Fabriqué en Isère • 🛡️ Garantie 2 ans"
Scroll indicator: animated chevron-down at bottom center
Animation: H1 slides up 0.6s, subtitle fades in 0.3s delay, CTAs scale in 0.5s delay
```

### Section 2: Trust Badges
```
Layout: Full-width, white bg, py-8 md:py-12
Content: 5 badges in horizontal row (scrollable on mobile)
  1. Icon: Factory → "Fabrication en Isère (38)"
  2. Icon: Ruler → "100% Sur Mesure"
  3. Icon: Shield → "Garantie 2 ans"
  4. Icon: Maximize2 → "Jusqu'à 6m de large"
  5. Icon: Truck → "Pose dans toute la France"
Style: Each badge = icon (teal, 28px) + text (font-medium, gray-700)
  Dividers between items (hidden on mobile)
Animation: Stagger fade-in from left
```

### Section 3: Product Cards (Nos Solutions)
```
Layout: max-w-7xl, beige bg, section padding
Heading: "Nos Solutions Sur Mesure" (centered, with teal underline)
Subheading: "Une moustiquaire adaptée à chaque ouverture de votre maison"
Grid: 3 cards (md:grid-cols-3)
Each card:
  - PlaceholderImage (4:3 aspect)
  - Badge: type label ("Fenêtre" / "Porte-Fenêtre" / "Baie Vitrée")
  - H3: product name
  - Description: 2 lines max
  - Key spec: one highlighted feature (e.g. "Jusqu'à 6m de large")
  - CTA link: "En savoir plus →" → product detail page
Animation: Cards stagger up from bottom, hover lift
```

### Section 4: Before/After Slider
```
Layout: max-w-5xl centered, white bg
Heading: "La Différence Altinbas" (centered)
Subheading: "Faites glisser pour comparer avant et après l'installation"
Component: Side-by-side comparison with draggable divider
  Left: "Avant" — PlaceholderImage showing open window (bugs, sun)
  Right: "Après" — PlaceholderImage showing window with moustiquaire
  Divider: vertical line + circular handle (primary teal)
  Drag: horizontal mouse/touch drag moves the divider
Mobile: full-width, touch-friendly handle (44px)
Animation: Section fades in, handle pulses once to hint at interaction
```

### Section 5: Process Steps (Comment Ça Marche)
```
Layout: max-w-7xl, beige bg
Heading: "Comment Ça Marche" (centered)
Subheading: "3 étapes simples pour protéger votre intérieur"
Grid: 3 columns (stacked on mobile)
Each step:
  - Large number: "01" / "02" / "03" (Playfair, 48px, primary-light color)
  - Icon: Ruler / Factory / Wrench (teal, 40px)
  - H3: "Prise de Mesure" / "Fabrication" / "Installation"
  - Description: 2-3 sentences
  - Connector line between steps on desktop (horizontal dashed line)
Step details:
  01 Prise de Mesure: "Nous nous déplaçons chez vous pour prendre les mesures exactes de vos ouvertures. Devis détaillé sous 48h."
  02 Fabrication: "Votre moustiquaire est fabriquée sur mesure dans notre atelier en Isère. Cadre aluminium, toile fibre de verre."
  03 Installation: "Nos techniciens installent votre moustiquaire avec soin. Propre, rapide, garanti 2 ans."
Animation: Steps appear one by one (stagger 0.2s)
```

### Section 6: Stats Counter
```
Layout: Full-width, gradient-primary bg (teal), white text
Grid: 4 stats in a row (2x2 on mobile)
  - "30 000+" → "Abonnés Instagram"
  - "282+" → "Avis Clients"
  - "6m" → "Largeur Maximum"
  - "2 ans" → "Garantie"
Each: large animated number (Playfair, 42px, white) + label (Inter, 14px, white/80)
Animation: Numbers count up from 0 when section enters viewport
```

### Section 7: Gallery Preview (Nos Réalisations)
```
Layout: max-w-7xl, white bg
Heading: "Nos Réalisations" (left-aligned on desktop)
Subheading: "Découvrez nos dernières installations"
Grid: 2x3 grid of PlaceholderImages (masonry-style optional)
  Each: rounded-xl, overflow-hidden, hover zoom effect
  Overlay on hover: city name + project type
CTA below grid: "Voir toutes nos réalisations →" → /nos-realisations
Animation: Grid items stagger in
```

### Section 8: Testimonials
```
Layout: max-w-5xl centered, beige bg
Heading: "Ce Que Disent Nos Clients" (centered)
Component: Horizontal carousel (swipeable on mobile)
Each testimonial card:
  - Star rating (5 yellow stars, one row)
  - Quote text (italic, 18px)
  - Client name (bold) + city
  - Small "Google" or "Facebook" source badge
Navigation: left/right arrows (desktop) + dots indicator
Auto-play: every 5s, pause on hover
3 placeholder testimonials (see CONTENT-FR.md)
Animation: Fade-in section, cards slide horizontally
```

### Section 9: About Preview
```
Layout: max-w-7xl, white bg, 2-column (image left, text right)
Left: PlaceholderImage (workshop/team photo, 1:1 aspect)
Right:
  Badge: "Notre Savoir-Faire"
  H2: "Artisans Passionnés Depuis Notre Atelier en Isère"
  Paragraph: Brief company story (3-4 sentences, see CONTENT-FR.md)
  Feature list (3 items with check icons):
    - "Fabrication locale en Isère (38)"
    - "Équipe qualifiée et expérimentée"
    - "Service personnalisé du devis à la pose"
  CTA: "En savoir plus sur notre entreprise →" → /a-propos
Mobile: stack image on top, text below
Animation: Image slides from left, text slides from right
```

### Section 10: FAQ Preview
```
Layout: max-w-3xl centered, cream bg
Heading: "Questions Fréquentes" (centered)
Show: 5 most important FAQ items as accordion (see CONTENT-FR.md)
CTA below: "Voir toutes les questions →" → /faq
Animation: Accordion items stagger in
```

### Section 11: CTA Banner
```
Layout: Full-width, charcoal (#2D2D2D) bg, white text
Content (centered):
  H2: "Prêt à Protéger Votre Intérieur ?"
  Subtitle: "Obtenez votre devis gratuit en moins de 2 minutes"
  Buttons (row):
    Primary: "Demander un Devis" → /devis-gratuit
    Secondary: "Nous Appeler" → tel:+33660990370 (white outlined)
Animation: Fade in
```

---

## 2. PRODUCTS OVERVIEW PAGE (`/nos-produits`)

```
SEO Title: "Nos Moustiquaires Plissées Sur Mesure | Altinbas Moustiquaire"

Hero: Short hero banner (50vh max)
  H1: "Nos Produits Sur Mesure"
  Subtitle: "Chaque ouverture mérite une protection parfaitement adaptée"

Product Grid: 4 cards (3 moustiquaires + 1 rideaux)
  Each card = larger version of homepage product cards
  Full description visible
  2-3 key specs with icons
  CTA: "Découvrir →" to detail page

Comparison Table (below grid):
  Heading: "Quelle moustiquaire choisir ?"
  Table comparing: Fenêtre vs Porte-Fenêtre vs Baie Vitrée
  Rows: Largeur max, Type d'ouverture, Nombre de vantaux, Idéal pour
  Highlight: Baie vitrée row slightly emphasized (flagship)

CTA Banner: Same as homepage
```

---

## 3. PRODUCT DETAIL PAGES

### Moustiquaire Fenêtre (`/nos-produits/moustiquaire-fenetre`)
### Moustiquaire Porte-Fenêtre (`/nos-produits/moustiquaire-porte-fenetre`)
### Moustiquaire Baie Vitrée (`/nos-produits/moustiquaire-baie-vitree`)

All three follow the same template:

```
Section 1 — Product Hero
  2-column: PlaceholderImage left (large), content right
  Badge: product type
  H1: Full product name
  Description: 3-4 sentences
  Key features (icon + text list, 4-5 items)
  Price note: "À partir de [X]€ — Devis personnalisé"
    → Only if client provides pricing, otherwise: "Prix sur devis"
  CTA: "Demander un Devis" (primary, large)

Section 2 — Technical Specs
  Beige bg, 2-column grid
  Specs table:
    - Largeur maximale
    - Hauteur maximale  
    - Matériau cadre: Aluminium
    - Toile: Fibre de verre ultra résistante
    - Coloris disponibles: Blanc, Noir, Gris anthracite, Marron
    - Type: 1 vantail / 2 vantaux
    - Garantie: 2 ans
  Right column: PlaceholderImage showing technical detail

Section 3 — Avantages
  Icon grid (2x3): 6 advantages specific to this product type
  See CONTENT-FR.md for per-product advantages

Section 4 — Installation Process
  Reuse ProcessSteps component

Section 5 — Product FAQ
  3-5 questions specific to this product type
  With FAQPage schema markup

Section 6 — Related Products
  Show other 2 moustiquaire products + rideaux
  Small cards, "Voir aussi" heading

Section 7 — CTA Banner
```

### Rideaux Sur Mesure (`/nos-produits/rideaux-sur-mesure`)
```
Same template but for S-pile curtains and vertical tulle:
  - 2 sub-sections: one for S-pile, one for tül vertical
  - Each with PlaceholderImage + description + specs
  - Position as complementary products: "Complétez votre intérieur"
  - Lighter content than moustiquaire pages (secondary products)
```

---

## 4. GALLERY PAGE (`/nos-realisations`)

```
SEO Title: "Nos Réalisations | Installations de Moustiquaires | Altinbas"

Hero: Short banner
  H1: "Nos Réalisations"
  Subtitle: "Découvrez nos installations à travers la France"

Filter bar:
  Tabs: Tout / Fenêtre / Porte-Fenêtre / Baie Vitrée / Rideaux
  Animated tab switching with framer-motion layout

Grid: Masonry or uniform grid (3 columns desktop, 2 tablet, 1 mobile)
  12 PlaceholderImage items
  Each item:
    - Image with hover overlay
    - Overlay shows: product type + city
    - Click: opens lightbox modal (full-size image + details)

Lightbox Modal:
  Full-screen overlay with image
  Navigation: prev/next arrows + keyboard support
  Info panel: product type, city, description
  Close: X button + click outside + Escape key

If no images yet, show message:
  "Nos réalisations arrivent bientôt ! En attendant, suivez-nous sur Instagram."
  Instagram CTA button → instagram.com/moustiquairealtinbas
```

---

## 5. DEVIS PAGE (`/devis-gratuit`)

```
SEO Title: "Devis Gratuit Moustiquaire Sur Mesure | Altinbas"

Layout: 2-column on desktop (form left 60%, info right 40%)

Left — Multi-step form (4 steps with progress bar):
  Progress: Step 1/4, 2/4, etc. with teal progress bar
  See CLAUDE.md for detailed form fields per step
  
  Navigation: "Précédent" / "Suivant" buttons
  Final step: "Envoyer ma demande" button
  
  Validation: real-time with react-hook-form + zod
  Error messages in French
  
  Success state: replace form with:
    CheckCircle icon (green, 64px)
    "Merci pour votre demande !"
    "Nous vous recontacterons sous 24h."
    "En attendant, n'hésitez pas à nous appeler au 06 60 99 03 70"
    Button: "Retour à l'accueil"

Right — Info sidebar:
  Card with:
    H3: "Pourquoi demander un devis ?"
    List: "✓ 100% gratuit et sans engagement"
          "✓ Réponse sous 24h"
          "✓ Conseils personnalisés"
          "✓ Prix sur mesure adapté à vos besoins"
  
  Contact card:
    "Vous préférez nous appeler ?"
    Phone: 06 60 99 03 70
    "Ou via WhatsApp :"
    WhatsApp button
  
  Trust badges (vertical):
    Garantie 2 ans | Fabrication Isère | 282+ avis

Mobile: sidebar content moves below form (or as collapsible)
Hide WhatsApp floating button on this page
```

---

## 6. ABOUT PAGE (`/a-propos`)

```
SEO Title: "À Propos | Altinbas Moustiquaire — Artisan en Isère"

Section 1 — Hero
  H1: "Notre Histoire"
  Subtitle: "Artisans fabricants de moustiquaires plissées en Isère"

Section 2 — Story (2 columns)
  PlaceholderImage left (atelier photo)
  Right: Company story (see CONTENT-FR.md)

Section 3 — Values (3 cards)
  "Savoir-Faire Artisanal" / "Qualité Sans Compromis" / "Service Client"
  Each: icon + title + description

Section 4 — Workshop (full-width image)
  PlaceholderImage: "Notre atelier de fabrication à Pont-Évêque"

Section 5 — Stats Counter (reuse from homepage)

Section 6 — CTA Banner
```

---

## 7. FAQ PAGE (`/faq`)

```
SEO Title: "FAQ | Moustiquaire Plissée Sur Mesure | Altinbas"

H1: "Questions Fréquentes"
Subtitle: "Tout ce que vous devez savoir sur nos moustiquaires"

Organized by category (tabs or sections):
  1. Nos Produits (5-6 questions)
  2. Installation (4-5 questions)
  3. Devis et Tarifs (3-4 questions)
  4. Entretien et Garantie (4-5 questions)

All questions use Accordion component
Full Schema.org FAQPage markup (see SEO-TECHNICAL.md)

Bottom CTA: "Vous avez d'autres questions ?" + Contact button + Phone
```

---

## 8. CONTACT PAGE (`/contact`)

```
SEO Title: "Contact | Altinbas Moustiquaire | Pont-Évêque, Isère"

2-column layout:

Left — Contact form (simple, not multi-step):
  Fields: Nom, Email, Téléphone, Sujet (select), Message
  Submit: "Envoyer votre message"

Right — Contact info:
  Address card with Google Maps embed (or link)
  Phone numbers (both)
  Email
  Hours: Lundi-Vendredi 8h-18h, Samedi sur RDV
  Social links: Instagram, Facebook

Full-width Google Maps embed below (or large map link)
```

---

## 9. ZONE D'INTERVENTION PAGE (`/zone-intervention`)

```
SEO Title: "Zone d'Intervention | Moustiquaire Isère, Grenoble, Lyon | Altinbas"

H1: "Notre Zone d'Intervention"
Subtitle: "Installation de moustiquaires en Isère, Rhône-Alpes et dans toute la France"

Map section: Large France map (can be SVG or image) highlighting:
  - Isère (primary zone, dark teal)
  - Rhône-Alpes region (secondary, light teal)
  - Rest of France (available, very light)

City list (for SEO):
  Grid of city cards with distances from Pont-Évêque:
  - Vienne (5 km)
  - Grenoble (90 km)
  - Lyon (30 km)
  - Bourgoin-Jallieu (35 km)
  - Valence (80 km)
  - Saint-Étienne (60 km)
  - Chambéry (100 km)
  - Annecy (150 km)

Each card: city name, distance, "Devis gratuit" link
Bottom: "Nous intervenons dans toute la France. Contactez-nous !"
```

---

## 10. LEGAL PAGES

All legal pages use simple, clean layout:
- Max-width 3xl (768px) centered
- White background
- Proper heading hierarchy (H1 > H2 > H3)
- Body text at comfortable reading width
- Last updated date at top
- Back to homepage link

Pages:
- `/mentions-legales` — See LEGAL-CONTENT.md
- `/politique-de-confidentialite` — See LEGAL-CONTENT.md
- `/politique-cookies` — See LEGAL-CONTENT.md
- `/conditions-generales-de-vente` — See LEGAL-CONTENT.md

---

## 11. 404 PAGE

```
Layout: centered on screen
Icon: Large compass icon (references ALTINBAS logo)
H1: "Page Introuvable"
Text: "La page que vous cherchez n'existe pas ou a été déplacée."
CTA: "Retour à l'accueil" primary button
Secondary: "Contactez-nous" ghost button
Background: subtle teal gradient or pattern
```

---

## GLOBAL ELEMENTS (present on ALL pages)

1. **Header** — sticky, with navigation (see DESIGN-SYSTEM.md)
2. **Footer** — full footer with all links
3. **WhatsAppButton** — floating bottom-right (except on /devis-gratuit)
4. **StickyMobileCTA** — mobile only, after 400px scroll
5. **CookieBanner** — CNIL compliant, z-50
6. **ScrollToTop** — reset scroll on route change
7. **SEOHead** — unique meta tags per page
