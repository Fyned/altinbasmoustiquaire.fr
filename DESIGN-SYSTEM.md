# DESIGN SYSTEM — ALTINBAS Moustiquaire

Complete design system specification. Reference this for ALL visual decisions.

---

## COLOR PALETTE

Extracted from ALTINBAS brochure and business card. Uses 60-30-10 rule:
60% white/cream backgrounds, 30% charcoal text, 10% teal accents.

### Tailwind CSS Custom Colors

Add to your Tailwind config or CSS custom properties:

```css
/* src/styles/index.css */
@import "tailwindcss";

@theme {
  --color-primary: #4FBDBA;
  --color-primary-dark: #3A8F8C;
  --color-primary-light: #A8E0DE;
  --color-primary-50: #E8F8F7;
  --color-primary-100: #D1F0EF;
  --color-primary-200: #A8E0DE;
  --color-primary-300: #7DD1CD;
  --color-primary-400: #4FBDBA;
  --color-primary-500: #3A8F8C;
  --color-primary-600: #2D706E;
  --color-primary-700: #205250;
  --color-primary-800: #133433;
  --color-primary-900: #091A1A;

  --color-cream: #FDF8F3;
  --color-beige: #F5EDE3;
  --color-sand: #D4C5B2;
  --color-terracotta: #C17B5D;

  --color-charcoal: #2D2D2D;
  --color-gray-700: #4A4A4A;
  --color-gray-500: #7A7A7A;
  --color-gray-300: #B0B0B0;
  --color-gray-100: #F0F0F0;

  --color-success: #4CAF50;
  --color-error: #E05555;
  --color-warning: #F5A623;
  --color-whatsapp: #25D366;

  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-ui: 'Inter', system-ui, sans-serif;
}
```

### Color Usage Rules

| Element | Color | Notes |
|---------|-------|-------|
| Page background | `#FFFFFF` or `cream` | Alternate white/cream per section |
| Body text | `charcoal` (#2D2D2D) | Primary text |
| Secondary text | `gray-700` (#4A4A4A) | Descriptions, captions |
| Muted text | `gray-500` (#7A7A7A) | Labels, timestamps |
| Primary buttons | `primary` (#4FBDBA) | CTA buttons, links |
| Primary hover | `primary-dark` (#3A8F8C) | Button hover states |
| Section alt bg | `beige` (#F5EDE3) | Every other section |
| Card backgrounds | `cream` (#FDF8F3) | Product cards, testimonials |
| Warm accent | `terracotta` (#C17B5D) | Special callouts, badges |
| Borders | `sand` (#D4C5B2) | Subtle dividers |
| Header bg | `white/90` backdrop-blur | Sticky header |
| Footer bg | `charcoal` (#2D2D2D) | Dark footer |
| Footer text | `white` / `gray-300` | Footer content |

### Gradient
```css
.gradient-primary {
  background: linear-gradient(135deg, #4FBDBA 0%, #3A8F8C 100%);
}
.gradient-hero-overlay {
  background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%);
}
```

---

## TYPOGRAPHY

### Font Loading

Self-host these fonts. Download from Google Fonts and place in `public/fonts/`:

```
public/fonts/
├── PlayfairDisplay-SemiBold.woff2    (600)
├── PlayfairDisplay-Bold.woff2        (700)
├── Inter-Regular.woff2               (400)
├── Inter-Medium.woff2                (500)
└── Inter-SemiBold.woff2              (600)
```

**ALTERNATIVE if self-hosting is complex:** Use Google Fonts CDN in index.html:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
```

### Type Scale

| Element | Font | Size (mobile) | Size (desktop) | Weight | Line Height | Letter Spacing |
|---------|------|---------------|----------------|--------|-------------|----------------|
| H1 (Hero) | Playfair Display | 36px | 56px | 700 | 1.1 | -0.02em |
| H2 (Section) | Playfair Display | 30px | 42px | 700 | 1.2 | -0.01em |
| H3 (Card title) | Playfair Display | 22px | 26px | 600 | 1.3 | 0 |
| H4 (Subsection) | Inter | 18px | 20px | 600 | 1.4 | 0 |
| Body Large | Inter | 17px | 18px | 400 | 1.7 | 0 |
| Body | Inter | 15px | 16px | 400 | 1.6 | 0 |
| Body Small | Inter | 13px | 14px | 400 | 1.5 | 0 |
| Button | Inter | 15px | 16px | 600 | 1 | 0.02em |
| Caption | Inter | 12px | 13px | 500 | 1.4 | 0.01em |
| Badge | Inter | 12px | 13px | 600 | 1 | 0.03em |
| Nav Link | Inter | 15px | 15px | 500 | 1 | 0.01em |

### Heading Decoration
Section H2 headings get a small teal underline accent:
```css
.section-heading::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: var(--color-primary);
  margin-top: 12px;
  border-radius: 2px;
}
/* If centered heading, add margin: 12px auto 0; */
```

---

## SPACING SYSTEM

Use Tailwind's default spacing scale. Key patterns:

| Context | Spacing |
|---------|---------|
| Section padding (vertical) | `py-16 md:py-24` (64px / 96px) |
| Section padding (horizontal) | `px-4 md:px-8 lg:px-16` |
| Container max-width | `max-w-7xl mx-auto` (1280px) |
| Between sections | Sections stack with 0 gap (padding handles spacing) |
| Card padding | `p-6 md:p-8` |
| Card gap (grid) | `gap-6 md:gap-8` |
| Between heading and content | `mb-4 md:mb-6` |
| Between section heading and grid | `mb-10 md:mb-14` |
| Between paragraphs | `mb-4` |
| Icon to text | `gap-3` or `ml-3` |

---

## BORDER RADIUS

| Element | Radius |
|---------|--------|
| Buttons | `rounded-lg` (8px) |
| Cards | `rounded-xl` (12px) |
| Images | `rounded-lg` (8px) or `rounded-xl` |
| Badges | `rounded-full` |
| Input fields | `rounded-lg` (8px) |
| Modal | `rounded-2xl` (16px) |
| Hero section | none (full-width) |

---

## SHADOWS

```css
/* Card default */
.shadow-card { box-shadow: 0 2px 12px rgba(0,0,0,0.06); }

/* Card hover */
.shadow-card-hover { box-shadow: 0 8px 30px rgba(0,0,0,0.1); }

/* Button */
.shadow-button { box-shadow: 0 4px 14px rgba(79,189,186,0.3); }

/* Sticky header */
.shadow-header { box-shadow: 0 1px 3px rgba(0,0,0,0.08); }

/* Modal overlay */
.shadow-modal { box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
```

---

## COMPONENT SPECS

### Button Component

Three variants, two sizes:

```
Primary:   bg-primary text-white hover:bg-primary-dark shadow-button
Secondary: bg-white text-primary border-2 border-primary hover:bg-primary-50
Ghost:     bg-transparent text-charcoal hover:bg-gray-100

Size sm:   px-4 py-2 text-sm rounded-lg
Size md:   px-6 py-3 text-base rounded-lg  (default)
Size lg:   px-8 py-4 text-lg rounded-lg

Transition: all 0.2s ease
Hover lift: translateY(-1px)
Active: translateY(0) scale(0.98)
```

Primary CTA button always has right arrow icon (→ or ChevronRight from lucide).

### Card Component

```
Background: white or cream
Border: 1px solid transparent (hover: border-primary/20)
Radius: rounded-xl
Padding: p-6 md:p-8
Shadow: shadow-card → shadow-card-hover on hover
Transition: all 0.3s ease
Hover: translateY(-4px)
```

### Input / Textarea

```
Background: white
Border: 1px solid #D4C5B2 (sand)
Focus border: primary (#4FBDBA)
Focus ring: ring-2 ring-primary/20
Radius: rounded-lg
Padding: px-4 py-3
Font: Inter 16px (prevents iOS zoom)
Label: text-sm font-medium text-gray-700 mb-1.5
Error: border-error text-error text-sm mt-1
```

### Badge

```
Background: primary-50 (#E8F8F7)
Text: primary-dark (#3A8F8C)
Padding: px-3 py-1
Font: text-xs font-semibold uppercase tracking-wide
Radius: rounded-full
```

### Accordion (FAQ)

```
Container: border-b border-sand
Question: py-5 flex justify-between items-center cursor-pointer
  Text: font-medium text-charcoal text-base md:text-lg
  Icon: ChevronDown, rotate 180° when open, transition 0.3s
Answer: pb-5 text-gray-700 leading-relaxed
  Expand: framer-motion AnimatePresence, height auto
```

---

## LAYOUT PATTERNS

### Header (Desktop)
```
Height: 72px
Background: white/90 + backdrop-blur-md (when scrolled)
Position: fixed top-0 w-full z-50
Content: logo left — nav center — CTA button right
Nav links: Nos Produits (dropdown), Réalisations, À Propos, FAQ, Contact
CTA: "Devis Gratuit" primary button (small)
Transition: background and shadow appear after 50px scroll
```

### Header (Mobile)
```
Height: 56px
Background: same as desktop
Content: logo left — phone icon + hamburger right
Phone icon: taps to call 06 60 99 03 70
Hamburger: opens MobileNav overlay
```

### MobileNav Overlay
```
Full screen, bg-white, z-60
Logo top-left, close (X) top-right
Nav links stacked, large touch targets (py-4 each)
Social icons at bottom
Animate: slide in from right (framer-motion)
```

### Products Dropdown (Desktop)
```
On hover over "Nos Produits" nav link
Dropdown panel: bg-white shadow-modal rounded-xl p-6
3 columns for moustiquaire types + 1 for rideaux
Each item: icon + title + one-line description
Animate: opacity + translateY fade in
Close: on mouse leave with 200ms delay
```

### Footer
```
Background: charcoal (#2D2D2D)
Text: white (headings), gray-300 (body)
4 columns desktop, stacked mobile:
  1. Logo (white version) + short description + social icons
  2. Nos Produits — links to each product page
  3. Informations — À Propos, FAQ, Zone d'intervention, Blog
  4. Contact — address, phones, email, map link
Bottom bar: © 2025 ALTINBAS | Mentions Légales | Confidentialité | CGV | Cookies
Separator: thin line (border-t border-white/10)
```

### StickyMobileCTA
```
Position: fixed bottom-0 w-full z-40
Show: after scrolling 400px (use scroll listener)
Hide: on /devis-gratuit page
Background: white, border-t border-gray-200
3 equal buttons in a row:
  📞 Appeler     → tel:+33660990370
  💬 WhatsApp    → wa.me link (green)
  📋 Devis       → /devis-gratuit (primary teal)
Height: ~60px + safe-area-inset-bottom padding
Animate: slide up from bottom
```

---

## SECTION BACKGROUNDS (Alternating Pattern)

Homepage sections should alternate backgrounds for visual rhythm:

```
Hero:              Full-bleed image with dark overlay
TrustBadges:       white
ProductCards:       beige (#F5EDE3)
BeforeAfter:       white
ProcessSteps:      beige (#F5EDE3)
StatsCounter:      gradient-primary (teal) with white text
GalleryPreview:    white
Testimonials:      beige (#F5EDE3)
AboutPreview:      white
FAQPreview:        cream (#FDF8F3)
CTABanner:         charcoal (#2D2D2D) with white text
```

---

## ANIMATION PRESETS

### AnimatedSection wrapper (use framer-motion)
```jsx
// Wraps any section for scroll-triggered reveal
const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}
// Use whileInView="visible" initial="hidden" viewport={{ once: true, margin: "-100px" }}
```

### Stagger children
```jsx
const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}
// Apply to parent, each child gets the hidden→visible variant
```

### Counter animation (useCountUp hook)
```
Duration: 2 seconds
Easing: easeOut
Trigger: when element enters viewport
Format: add + suffix for numbers (ex: "30 000+", "282+", "2 ans")
```

### Hover effects
```css
/* Card hover */
transition: transform 0.3s ease, box-shadow 0.3s ease;
&:hover { transform: translateY(-4px); }

/* Button hover */
transition: all 0.2s ease;
&:hover { transform: translateY(-1px); }

/* Image hover (gallery) */
transition: transform 0.5s ease;
&:hover { transform: scale(1.05); }
overflow: hidden on parent
```

### Page transition
```jsx
// Wrap page content in framer-motion
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
```

---

## RESPONSIVE BREAKPOINTS

```
Mobile:  0 - 639px       (base styles)
Tablet:  640px - 1023px   (sm: and md:)
Desktop: 1024px - 1279px  (lg:)
Wide:    1280px+           (xl:)
```

### Grid patterns
```
Product cards:    grid-cols-1 md:grid-cols-2 lg:grid-cols-3
Gallery:          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
Trust badges:     grid-cols-2 md:grid-cols-3 lg:grid-cols-5
Process steps:    grid-cols-1 md:grid-cols-3
Footer:           grid-cols-1 md:grid-cols-2 lg:grid-cols-4
Stats:            grid-cols-2 lg:grid-cols-4
FAQ:              single column, max-w-3xl mx-auto
```

---

## ICONS

Use `lucide-react` for all icons. Key icons used:

```
Phone, Truck, Mail, MapPin, Instagram, Facebook
ChevronRight, ChevronDown, ChevronLeft, ArrowRight
Menu, X (hamburger/close)
MessageCircle (WhatsApp)
Shield, Award, Ruler, Wrench, Clock, Star
Home, Grid3X3, Image, FileText, HelpCircle, Users
Check, CheckCircle, AlertCircle, Info
Maximize2 (expand), MoveHorizontal (before/after)
Factory, MapPinned, Calendar
```

Size: 20px default, 24px for navigation/actions, 32-40px for feature icons in sections.

---

## PLACEHOLDER IMAGE COMPONENT

Since no real images exist yet, create a polished placeholder:

```jsx
// PlaceholderImage.jsx
// Props: aspect (e.g. "16/9", "4/3", "1/1"), label (string), icon (lucide component)
// Renders:
//   - Container with aspect-ratio set
//   - Background: bg-primary-50 (very light teal)
//   - Dashed border: border-2 border-dashed border-primary/30
//   - Centered: icon (teal, 48px) + label text below
//   - Rounded corners matching parent context
```

Use these labels in data files:
- Hero: "Photo principale — moustiquaire plissée installée"
- Product fenêtre: "Moustiquaire plissée sur fenêtre"
- Product porte: "Moustiquaire plissée sur porte-fenêtre"
- Product baie vitrée: "Moustiquaire plissée sur baie vitrée — 6m"
- Gallery items: "Réalisation — [city]"
- About: "Atelier de fabrication Pont-Évêque"
- Testimonial avatar: "Photo client"
