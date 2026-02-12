# SEO-TECHNICAL.md — SEO Configuration & Structured Data

Complete SEO specifications for every page.

---

## META TAGS PER PAGE

Use `react-helmet-async` with the SEOHead component. Every page MUST have unique title + description.

### SEOHead Component Usage
```jsx
<SEOHead
  title="Page Title | Altinbas Moustiquaire"
  description="Meta description (150-160 chars)"
  canonical="https://altinbasmoustiquaire.fr/page-path"
  ogImage="/images/og/page-og-image.jpg"
/>
```

### Per-Page SEO Config

```js
// src/lib/seo.js

export const seoConfig = {
  home: {
    title: "Moustiquaire Plissée Sur Mesure | Fabricant en Isère (38) | Altinbas",
    description: "Fabricant artisanal de moustiquaires plissées sur mesure à Pont-Évêque, Isère. Fenêtre, porte-fenêtre, baie vitrée jusqu'à 6m. Devis gratuit, pose dans toute la France. Garantie 2 ans.",
    canonical: "https://altinbasmoustiquaire.fr",
  },
  products: {
    title: "Nos Moustiquaires Plissées Sur Mesure | Altinbas Moustiquaire",
    description: "Découvrez nos moustiquaires plissées sur mesure pour fenêtre, porte-fenêtre et baie vitrée. Cadre aluminium, toile fibre de verre. Fabrication en Isère, installation dans toute la France.",
    canonical: "https://altinbasmoustiquaire.fr/nos-produits",
  },
  productFenetre: {
    title: "Moustiquaire Plissée pour Fenêtre Sur Mesure | Altinbas",
    description: "Moustiquaire plissée pour fenêtre, fabriquée sur mesure en aluminium. Fermeture magnétique, encombrement minimal (25mm). Fabrication Isère. Devis gratuit.",
    canonical: "https://altinbasmoustiquaire.fr/nos-produits/moustiquaire-fenetre",
  },
  productPorte: {
    title: "Moustiquaire Plissée pour Porte-Fenêtre Sur Mesure | Altinbas",
    description: "Moustiquaire plissée pour porte-fenêtre avec rail au sol ultra fin. Compatible PMR, fermeture magnétique automatique. Fabrication sur mesure en Isère. Devis gratuit.",
    canonical: "https://altinbasmoustiquaire.fr/nos-produits/moustiquaire-porte-fenetre",
  },
  productBaieVitree: {
    title: "Moustiquaire Plissée pour Baie Vitrée Jusqu'à 6m | Altinbas",
    description: "Moustiquaire plissée pour baie vitrée jusqu'à 6 mètres de large. Système 1 ou 2 vantaux sur mesure. Notre spécialité. Fabrication Isère, pose toute France. Devis gratuit.",
    canonical: "https://altinbasmoustiquaire.fr/nos-produits/moustiquaire-baie-vitree",
  },
  productRideaux: {
    title: "Rideaux Sur Mesure — S-Pile et Tül Vertical | Altinbas",
    description: "Rideaux sur mesure S-pile (wave) et tül vertical. Confection artisanale, tombée parfaite. Complétez votre intérieur avec nos solutions textiles sur mesure.",
    canonical: "https://altinbasmoustiquaire.fr/nos-produits/rideaux-sur-mesure",
  },
  gallery: {
    title: "Nos Réalisations | Installations de Moustiquaires Plissées | Altinbas",
    description: "Découvrez nos réalisations : installations de moustiquaires plissées sur mesure pour fenêtres, portes-fenêtres et baies vitrées en Isère et dans toute la France.",
    canonical: "https://altinbasmoustiquaire.fr/nos-realisations",
  },
  devis: {
    title: "Devis Gratuit Moustiquaire Plissée Sur Mesure | Altinbas",
    description: "Demandez votre devis gratuit pour une moustiquaire plissée sur mesure. Réponse sous 24h. Fabrication en Isère, installation dans toute la France.",
    canonical: "https://altinbasmoustiquaire.fr/devis-gratuit",
  },
  about: {
    title: "À Propos | Altinbas Moustiquaire — Artisan Fabricant en Isère",
    description: "Découvrez Altinbas Moustiquaire, artisan fabricant de moustiquaires plissées sur mesure à Pont-Évêque en Isère. Notre savoir-faire, nos valeurs, notre atelier.",
    canonical: "https://altinbasmoustiquaire.fr/a-propos",
  },
  faq: {
    title: "FAQ — Questions Fréquentes Moustiquaire Plissée | Altinbas",
    description: "Réponses à toutes vos questions sur les moustiquaires plissées : installation, entretien, prix, garantie, dimensions, coloris. Tout savoir avant de commander.",
    canonical: "https://altinbasmoustiquaire.fr/faq",
  },
  contact: {
    title: "Contact | Altinbas Moustiquaire | Pont-Évêque, Isère (38)",
    description: "Contactez Altinbas Moustiquaire : 06 60 99 03 70 ou ent.altinbas@gmail.com. 24 Rue Francisque Cartallier, 38780 Pont-Évêque. Devis gratuit sous 24h.",
    canonical: "https://altinbasmoustiquaire.fr/contact",
  },
  zone: {
    title: "Zone d'Intervention | Moustiquaire Isère, Grenoble, Lyon | Altinbas",
    description: "Installation de moustiquaires plissées en Isère, Rhône-Alpes et toute la France. Grenoble, Lyon, Vienne, Valence, Chambéry. Devis gratuit, pose professionnelle.",
    canonical: "https://altinbasmoustiquaire.fr/zone-intervention",
  },
  mentionsLegales: {
    title: "Mentions Légales | Altinbas Moustiquaire",
    description: "Mentions légales du site altinbasmoustiquaire.fr. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.",
    canonical: "https://altinbasmoustiquaire.fr/mentions-legales",
    noindex: true,
  },
  confidentialite: {
    title: "Politique de Confidentialité | Altinbas Moustiquaire",
    description: "Politique de confidentialité et protection des données personnelles du site altinbasmoustiquaire.fr. Conformité RGPD.",
    canonical: "https://altinbasmoustiquaire.fr/politique-de-confidentialite",
    noindex: true,
  },
  cookies: {
    title: "Politique de Cookies | Altinbas Moustiquaire",
    description: "Politique de cookies du site altinbasmoustiquaire.fr. Informations sur les cookies utilisés et vos droits.",
    canonical: "https://altinbasmoustiquaire.fr/politique-cookies",
    noindex: true,
  },
  cgv: {
    title: "Conditions Générales de Vente | Altinbas Moustiquaire",
    description: "Conditions générales de vente d'Altinbas Moustiquaire. Modalités de commande, livraison, installation et garantie.",
    canonical: "https://altinbasmoustiquaire.fr/conditions-generales-de-vente",
    noindex: true,
  },
}
```

---

## OPEN GRAPH + TWITTER CARDS

Add to every page via SEOHead:

```html
<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Altinbas Moustiquaire" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:title" content="{page title}" />
<meta property="og:description" content="{page description}" />
<meta property="og:url" content="{canonical URL}" />
<meta property="og:image" content="https://altinbasmoustiquaire.fr/images/og/altinbas-og-default.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{page title}" />
<meta name="twitter:description" content="{page description}" />
<meta name="twitter:image" content="https://altinbasmoustiquaire.fr/images/og/altinbas-og-default.jpg" />

<!-- Language -->
<link rel="alternate" hreflang="fr" href="{canonical URL}" />
<html lang="fr" />
```

---

## SCHEMA.ORG STRUCTURED DATA

### Homepage — LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://altinbasmoustiquaire.fr/#organization",
  "name": "Altinbas Moustiquaire",
  "alternateName": "ALTINBAS",
  "description": "Fabricant artisanal de moustiquaires plissées sur mesure en Isère. Installation dans toute la France.",
  "url": "https://altinbasmoustiquaire.fr",
  "telephone": "+33660990370",
  "email": "ent.altinbas@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "24 Rue Francisque Cartallier",
    "addressLocality": "Pont-Évêque",
    "postalCode": "38780",
    "addressRegion": "Isère",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.5264,
    "longitude": 4.8683
  },
  "areaServed": [
    { "@type": "State", "name": "Isère" },
    { "@type": "State", "name": "Rhône" },
    { "@type": "State", "name": "Drôme" },
    { "@type": "State", "name": "Savoie" },
    { "@type": "State", "name": "Loire" },
    { "@type": "Country", "name": "France" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "12:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/moustiquairealtinbas/",
    "https://www.facebook.com/altinbasmoustiquaire"
  ],
  "image": "https://altinbasmoustiquaire.fr/images/og/altinbas-og-default.jpg",
  "priceRange": "€€",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "282",
    "bestRating": "5"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Moustiquaires plissées sur mesure",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Moustiquaire plissée pour fenêtre",
          "description": "Moustiquaire plissée sur mesure pour fenêtre en aluminium"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Moustiquaire plissée pour porte-fenêtre",
          "description": "Moustiquaire plissée sur mesure pour porte-fenêtre avec rail ultra fin"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Moustiquaire plissée pour baie vitrée",
          "description": "Moustiquaire plissée sur mesure pour baie vitrée jusqu'à 6 mètres"
        }
      }
    ]
  }
}
```

### Product Pages — Product Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Moustiquaire Plissée pour Fenêtre Sur Mesure",
  "description": "Moustiquaire plissée pour fenêtre fabriquée sur mesure en aluminium avec toile fibre de verre.",
  "brand": {
    "@type": "Brand",
    "name": "Altinbas"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Altinbas Moustiquaire"
  },
  "material": ["Aluminium", "Fibre de verre"],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "EUR"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "seller": {
      "@id": "https://altinbasmoustiquaire.fr/#organization"
    }
  }
}
```

### FAQ Page — FAQPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'une moustiquaire plissée ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une moustiquaire plissée est un système de protection contre les insectes qui se replie en accordéon..."
      }
    }
    // ... all FAQ questions
  ]
}
```

### All Pages — BreadcrumbList

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://altinbasmoustiquaire.fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Nos Produits",
      "item": "https://altinbasmoustiquaire.fr/nos-produits"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Moustiquaire Fenêtre",
      "item": "https://altinbasmoustiquaire.fr/nos-produits/moustiquaire-fenetre"
    }
  ]
}
```

---

## SITEMAP.XML

Place in `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://altinbasmoustiquaire.fr/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://altinbasmoustiquaire.fr/nos-produits</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://altinbasmoustiquaire.fr/nos-produits/moustiquaire-fenetre</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://altinbasmoustiquaire.fr/nos-produits/moustiquaire-porte-fenetre</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://altinbasmoustiquaire.fr/nos-produits/moustiquaire-baie-vitree</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://altinbasmoustiquaire.fr/nos-produits/rideaux-sur-mesure</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://altinbasmoustiquaire.fr/nos-realisations</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://altinbasmoustiquaire.fr/devis-gratuit</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://altinbasmoustiquaire.fr/a-propos</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://altinbasmoustiquaire.fr/faq</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://altinbasmoustiquaire.fr/contact</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://altinbasmoustiquaire.fr/zone-intervention</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
</urlset>
```

---

## ROBOTS.TXT

Place in `public/robots.txt`:

```
User-agent: *
Allow: /
Disallow: /mentions-legales
Disallow: /politique-de-confidentialite
Disallow: /politique-cookies
Disallow: /conditions-generales-de-vente

Sitemap: https://altinbasmoustiquaire.fr/sitemap.xml
```

---

## INDEX.HTML HEAD TAGS

Update `index.html` with:

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/logo/altinbas-favicon-logo.svg" />
    <link rel="apple-touch-icon" href="/logo/altinbas-favicon-logo.svg" />
    
    <!-- Default meta (overridden by react-helmet-async per page) -->
    <title>Moustiquaire Plissée Sur Mesure | Fabricant Isère | Altinbas</title>
    <meta name="description" content="Fabricant artisanal de moustiquaires plissées sur mesure à Pont-Évêque, Isère. Devis gratuit, pose dans toute la France." />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
    
    <!-- Theme color -->
    <meta name="theme-color" content="#4FBDBA" />
    
    <!-- Geo meta tags for local SEO -->
    <meta name="geo.region" content="FR-38" />
    <meta name="geo.placename" content="Pont-Évêque" />
    <meta name="geo.position" content="45.5264;4.8683" />
    <meta name="ICBM" content="45.5264, 4.8683" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## PERFORMANCE CHECKLIST

- [ ] All images lazy-loaded with IntersectionObserver
- [ ] All routes code-split with React.lazy + Suspense
- [ ] Fonts preconnected and loaded with display=swap
- [ ] Hero image preloaded with fetchpriority="high" (when real image added)
- [ ] Vite manualChunks configured (vendor, animations)
- [ ] All CSS via Tailwind (no unused CSS)
- [ ] SVG logos inlined or optimized
- [ ] No render-blocking resources
- [ ] Target: LCP < 2.5s, CLS < 0.1, INP < 200ms
