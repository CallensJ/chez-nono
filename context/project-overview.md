# Chez Nono - Project Overview

> Repo de prototype dynamique HTML/CSS/JS pour une sandwicherie et bar à bières de quartier

---

## Table of Contents

- [Project Context](#project-context)
- [Direction Change](#direction-change)
- [Problem Statement](#problem-statement)
- [Project Goals](#project-goals)
- [Prototype Objective](#prototype-objective)
- [Target Users](#target-users)
- [Website Scope](#website-scope)
- [Page-by-Page Workflow](#page-by-page-workflow)
- [Documentation Architecture](#documentation-architecture)
- [Tech Stack](#tech-stack)
- [Design Direction](#design-direction)
- [Immersion Reference: Ammolite](#immersion-reference-ammolite)
- [Immersion Strategy for Chez Nono](#immersion-strategy-for-chez-nono)
- [Authenticity Rules](#authenticity-rules)
- [UI/UX Guidelines](#uiux-guidelines)
- [Photography Guidelines](#photography-guidelines)
- [GSAP Animation Guidelines](#gsap-animation-guidelines)
- [JavaScript Guidelines](#javascript-guidelines)
- [Content Guidelines](#content-guidelines)
- [Page Expectations](#page-expectations)
- [Suggested Project Structure](#suggested-project-structure)
- [Development Workflow](#development-workflow)
- [Expected Result](#expected-result)

---

# Project Context

Chez Nono is a fictional showcase website project for a local sandwich shop and beer bar.

This repository is now the main creative prototype.

The goal is to create complete responsive dynamic mockups directly in the repo, using:

- semantic HTML;
- Tailwind CSS v4;
- vanilla JavaScript;
- GSAP;
- curated photography;
- reusable visual components;
- responsive layouts;
- subtle interactions;
- page-by-page execution.

This repo is not the final production website.

It is a design and frontend prototyping space used to explore:

- visual direction;
- layout;
- page structure;
- interaction;
- motion;
- responsive behavior;
- content hierarchy.

The expected output is a polished set of static but dynamic mockups that could later be implemented in a production stack such as Next.js, Vue, Svelte or another frontend framework.

No backend.
No CMS.
No fake booking system.
No heroic architecture for six HTML pages, because humanity already has enough complicated ways to display a menu.

---

# Direction Change

The project is no longer based on static wireframes generated elsewhere.

The current direction is:

```txt
Direct HTML/CSS/JS dynamic mockups inside the prototype repo.
```

Claude Code should work directly in the codebase and create the visual prototype page by page.

The prototype must use GSAP to create a more tactile, authentic and memorable feel.

The previous “wireframe first, mockup after” approach is paused.

Current method:

1. Build one page in HTML/CSS/JS.
2. Add responsive behavior.
3. Add GSAP motion.
4. Review visually.
5. Refine.
6. Move to the next page only after validation.

This prevents the design from drifting into generic template territory, that peaceful cemetery where brand personality goes to decompose.

---

# Problem Statement

Small local restaurants often have a strong physical personality but a weak digital presence.

Chez Nono must feel like a real neighborhood place:

- warm;
- generous;
- alive;
- accessible;
- slightly rustic;
- modern enough;
- focused on sandwiches, beers and conviviality.

The website must avoid the generic restaurant-template feeling.

The previous visual direction risked feeling:

- too clean;
- too premium-template;
- too polished;
- not artisanal enough;
- not rooted enough in the brand personality.

The challenge is to create a complete visual experience that communicates:

- the warmth of the place;
- the generosity of the food;
- the beer bar identity;
- the neighborhood atmosphere;
- the simplicity of booking or contacting the restaurant;
- the feeling of a place run by real humans.

---

# Project Goals

| Goal | Description |
| --- | --- |
| Brand clarity | Make users understand what Chez Nono is in a few seconds |
| Authentic atmosphere | Translate the bistrot moderne de quartier identity into layout, colors, type, image and motion |
| Menu discovery | Make sandwiches, salads, drinks and beers easy to browse |
| Beer positioning | Make the bar à bières identity visible and memorable |
| Conversion | Encourage users to reserve, contact or visit |
| Responsive prototype | Create desktop, tablet and mobile-ready mockups |
| Motion identity | Use GSAP to add warmth, rhythm and tactile transitions |
| Immersive storytelling | Build pages as atmospheric chapters, not as generic stacked sections |
| Portfolio value | Produce a credible case study asset for a freelance web design/development portfolio |

---

# Prototype Objective

This repository should produce a complete responsive static prototype with dynamic frontend interactions.

Claude Code has creative freedom to propose layouts, components and interactions, but must respect the project documentation.

The goal is not to blindly reproduce external wireframes.

The goal is to create a strong, coherent and polished visual interpretation based on:

- brand strategy;
- graphic charter;
- content sitemap;
- editorial direction;
- authentic neighborhood restaurant atmosphere;
- Ammolite-inspired immersion principles, adapted to a local bistrot identity;
- page-by-page visual refinement.

The prototype should include:

- complete responsive pages;
- realistic French content;
- strong visual hierarchy;
- consistent components;
- accessible navigation;
- forms UI;
- menu cards;
- event cards;
- image-based atmosphere sections;
- GSAP-based motion;
- tasteful micro-interactions;
- warm and tactile visual details.

If a layout idea improves the experience while respecting the brand, Claude Code may propose and implement it.

If a design choice contradicts the documentation, the documentation wins.

---

# Target Users

| User Type | Needs |
| --- | --- |
| Local customer | Quickly understand the place, check opening hours, see the menu |
| Lunch visitor | Find sandwiches, salads and practical information fast |
| Group of friends | Discover the atmosphere, beers, events and reservation options |
| Beer lover | Identify the beer culture and selection |
| Portfolio visitor | Evaluate strategy, visual direction, UX and frontend execution |
| Potential freelance client | Understand how a small business website can be designed professionally |

---

# Website Scope

## Pages to Prototype

| Page | File | Purpose |
| --- | --- | --- |
| Accueil | `index.html` | Present the brand, atmosphere, menu preview, beer identity and CTA |
| À propos | `a-propos.html` | Tell the story, concept and philosophy |
| Menu | `menu.html` | Present sandwiches, salads, drinks and beers |
| Événements | `evenements.html` | Present tasting nights, local events and special evenings |
| Réservation | `reservation.html` | Create a front-end reservation form experience |
| Contact | `contact.html` | Show address, hours, contact form and map section |

## Core Features

- Responsive navigation
- Mobile menu
- Sticky header behavior
- Homepage hero
- Editorial sections
- Menu preview
- Full menu page
- Beer highlight section
- Event cards
- Reservation form UI
- Contact form UI
- Practical information blocks
- Footer
- Responsive layout
- Accessible buttons and forms
- Smooth scrolling
- GSAP reveal animations
- GSAP image reveals
- Simple JavaScript interactions

## Out of Scope

- Backend
- Database
- Authentication
- CMS
- Real booking system
- Real email sending
- Payment
- Admin interface

The reservation and contact forms are UI prototypes only.

---

# Page-by-Page Workflow

The project must progress one page at a time.

Default first page:

```txt
Homepage + navbar
```

Do not build all pages at once unless explicitly requested.

For each page:

1. Read the relevant docs.
2. Define the page scope in `/context/current-feature.md`.
3. Implement the page structure.
4. Add responsive layout.
5. Add GSAP animations.
6. Test mobile, tablet and desktop.
7. Run the build.
8. Report changes.

Shared components are allowed when needed:

- header;
- mobile menu;
- footer;
- buttons;
- cards;
- section headers;
- form patterns;
- animation utilities.

But avoid using one page task as an excuse to redesign everything. Scope creep is where projects go to quietly rot under nice commit messages.

---

# Documentation Architecture

The project contains two important documentation folders at the root:

```txt
/context
/docs
```

---

## `/context`

This folder contains operational context for Claude Code.

Expected files:

```txt
/context
├── project-overview.md
└── current-feature.md
```

Optional files may be added later:

```txt
/context
├── coding-standards.md
└── ai-interaction.md
```

Claude Code must read the files inside `/context` before starting any major implementation task.

The `project-overview.md` file is the main reference for product scope, creative direction, technical expectations and page-by-page workflow.

---

## `/docs`

This folder contains project documentation and strategic source material.

Expected files may include:

```txt
/docs
├── charte-graphique.md
├── strategie-de-marque.md
├── strategie-de-contenu.md
├── sitemap.md
├── sitemap-de-contenu.md
├── homepage-content.md
├── menu-content.md
├── a-propos-content.md
├── references-inspiration.md
└── notes-ux.md
```

Claude Code must use `/docs` as the source of truth for:

- brand strategy;
- tone of voice;
- page structure;
- sitemap;
- content hierarchy;
- visual identity;
- color palette;
- typography;
- component direction;
- editorial style;
- reference analysis and inspiration notes.

If `/context/project-overview.md` and `/docs` conflict, Claude Code should prioritize:

1. `/docs/charte-graphique.md` for visual identity;
2. `/docs/strategie-de-marque.md` for positioning;
3. `/docs/sitemap-de-contenu.md` for content structure;
4. `/docs/strategie-de-contenu.md` for content goals;
5. `/context/project-overview.md` for implementation workflow.

---

# Tech Stack

| Category | Technology | Notes |
| --- | --- | --- |
| Markup | HTML5 | Semantic and accessible |
| Styling | Tailwind CSS v4 | Utility-first CSS |
| Custom CSS | CSS variables / layered CSS | Useful for textures, masks, reusable effects |
| JavaScript | Vanilla JS | No framework |
| Animations | GSAP | Required for motion identity |
| Build Tool | Vite | Static frontend workflow |
| Icons | Lucide, Phosphor Icons, Remix Icon or similar | Optional |
| Images | Unsplash / project-generated images | Stored locally |
| Deployment | Vercel / Netlify / GitHub Pages | Static deployment |

---

# Tailwind CSS v4 Rules

Use Tailwind CSS v4.

Do not create a Tailwind v3-style config unless explicitly required.

Theme tokens should be declared in CSS.

Example:

```css
@import "tailwindcss";

@theme {
  --color-nono-brown: #3B2A20;
  --color-nono-copper: #A35A2A;
  --color-nono-green: #2E3D32;
  --color-nono-amber: #D97A28;
  --color-nono-slate: #1E1E20;

  --color-nono-cream: #F7F4EF;
  --color-nono-beige: #E8E1D6;
  --color-nono-gray: #8E8A83;
  --color-nono-sage: #A0A58F;
  --color-nono-gold: #D8B369;

  --font-title: "Fraunces", serif;
  --font-body: "Manrope", sans-serif;
  --font-accent: "Caveat", cursive;
}
```

Use these tokens consistently.

Avoid arbitrary colors unless there is a clear reason.

No pure black.
No pure white.

Use `nono-slate` and `nono-cream` instead.

---

# Design Direction

## Core Direction

**Bistrot Moderne de Quartier**

Chez Nono should feel like:

- a warm neighborhood place;
- a modern bistrot;
- a generous sandwich shop;
- a beer bar with personality;
- a simple, human and lively place;
- a place where people actually sit, talk, eat and stay longer than planned.

It should not feel like:

- a luxury restaurant;
- a cold startup landing page;
- a generic café template;
- a fast-food chain;
- a fake gastronomic experience;
- a sterile Dribbble layout made by someone who has never eaten bread.

---

# Immersion Reference: Ammolite

Reference website:

```txt
https://ammolite-restaurant.de/en/
```

Ammolite is not a visual style to copy.

It is an immersion benchmark.

The useful lesson from Ammolite is not luxury, gastronomy or minimal prestige.
The useful lesson is how a restaurant website can make the user feel a place before explaining it.

Ammolite creates immersion through:

- a clear central concept: `House of Light`;
- a calm, cinematic first impression;
- a reduced navigation focused on essential choices;
- strong atmosphere before commercial pressure;
- editorial page rhythm, like chapters in a story;
- large visual moments;
- short section titles with emotional intent;
- careful use of silence, spacing and restrained copy;
- details about place, service, team, product and atmosphere;
- music/sound as part of the restaurant identity;
- proof and awards placed after the world has already been established.

For Chez Nono, the goal is to translate the method, not the aesthetic.

Ammolite says:

```txt
light + precision + silence + refined service
```

Chez Nono must say:

```txt
warm table + generous sandwich + amber beer + neighborhood life
```

Do not turn Chez Nono into fake fine dining.
The site must never feel like a two-star restaurant wearing a sandwich costume. That would be sad, expensive and probably served on slate.

---

# Immersion Strategy for Chez Nono

## Central Experience Idea

Chez Nono needs its own immersive anchor.

Recommended creative anchors:

```txt
La table du quartier
Le comptoir vivant
Sandwichs, bières et vraies gueules
Un bistrot de quartier, entre pain chaud et mousse ambrée
```

The prototype should not necessarily display all these phrases.
They are creative direction anchors for layout, images, rhythm and copy.

## Page Rhythm

Each page should feel like a short visit, not a pile of sections.

Preferred rhythm:

1. Enter the place.
2. Understand what Chez Nono is.
3. Feel the atmosphere.
4. See the products.
5. Meet the human side.
6. Discover beers / events / practical details.
7. Reach a calm, obvious CTA.

The user should feel the room before being asked to book.

## Sensory Design Principles

Use design to suggest:

- warm bread;
- crispy chicken;
- beer foam;
- amber light;
- wooden tables;
- handwritten notes;
- terrace life;
- counter details;
- people talking;
- service that feels human;
- a place that exists beyond the screen.

This can be done with photography, composition, microcopy, texture, motion and spacing.

## Ammolite Principles Adapted to Chez Nono

| Ammolite Principle | Chez Nono Adaptation |
| --- | --- |
| House of Light | Table du quartier / comptoir vivant |
| Calm luxury | Warm local atmosphere |
| Precise fine dining | Honest generous craft |
| Wine pairing | Beer selection and sandwich pairing |
| Elegant silence | Lively but controlled conviviality |
| Awards after immersion | Reviews / local trust after atmosphere |
| Music as identity | Optional ambient cue: bar noise, playlist mention, evening rhythm |
| Large cinematic visuals | Warm closeups of food, beer, counter, terrace and people |
| Minimal copy | Direct, sensory French copy |

## What to Avoid When Using Ammolite as Reference

Do not copy:

- luxury spacing without warmth;
- white-tablecloth elegance;
- gastronomic plating;
- elitist tone;
- overly quiet minimalism;
- fine-dining vocabulary;
- award-driven prestige;
- a website that feels inaccessible.

Do use:

- atmosphere-first storytelling;
- chapter-like sections;
- restrained but sensory copy;
- strong image rhythm;
- precise transitions;
- confident empty space;
- details that make the place believable.

---

# Visual Identity

## Color Palette

### Main Palette

| Name | Hex | Usage |
| --- | --- | --- |
| Dark Brown | `#3B2A20` | Main dark backgrounds, headings |
| Warm Copper | `#A35A2A` | Buttons, accents, highlights |
| Dark Green | `#2E3D32` | Secondary backgrounds, calm contrast |
| Beer Amber | `#D97A28` | Beer section, CTA accents |
| Dark Slate | `#1E1E20` | Deep contrast, footer, text |

### Secondary Palette

| Name | Hex | Usage |
| --- | --- | --- |
| Cream | `#F7F4EF` | Main background |
| Warm Beige | `#E8E1D6` | Cards, soft sections |
| Warm Gray | `#8E8A83` | Secondary text |
| Light Sage | `#A0A58F` | Soft accents |
| Soft Gold | `#D8B369` | Details, badges, subtle highlights |

---

## Typography

| Usage | Font |
| --- | --- |
| Titles | Fraunces |
| Body | Manrope |
| Accent / handwritten details | Caveat |

Use typography to create contrast:

- strong editorial titles;
- readable body text;
- small handwritten accents for warmth;
- clear hierarchy between sections.

Do not overuse the accent font.

Caveat is a spice, not a structural beam. Apparently this needs to be said because fonts, like humans, become unbearable when overexposed.

---

# Authenticity Rules

The design must actively avoid the “template premium” feeling.

Use visual authenticity through:

- atmosphere-first storytelling;
- asymmetry;
- slight imperfection;
- tactile cards;
- editorial composition;
- warm image treatment;
- handcrafted-looking labels;
- small marks, stamps or underlines;
- grounded copywriting;
- visible beer-bar identity;
- generous spacing without sterile minimalism.

Suggested details:

- section labels like handwritten notes;
- cards that feel printed rather than floating;
- image masks or reveals;
- subtle paper texture using CSS;
- amber/copper accents;
- beer section with darker and warmer atmosphere;
- content blocks that feel local, not corporate;
- visual details that make the user feel the place before reading the full content.

Avoid:

- excessive gradients;
- glassmorphism;
- generic floating cards;
- perfect SaaS grids;
- empty icon blocks;
- over-polished hero sections;
- vague marketing copy;
- identical card layouts everywhere.

Authenticity does not mean making the site ugly.
It means making it feel less dead.

---

# UI/UX Guidelines

## Layout Principles

- Think in chapters, not generic sections.
- Use strong section rhythm.
- Alternate large visual sections and compact content blocks.
- Use image/text split layouts.
- Use cards for menu items and events.
- Use warm backgrounds and dark contrast.
- Keep mobile layouts clean and readable.
- Make CTAs visible without becoming aggressive.
- Give the beer section a stronger visual identity.
- Create a clear first-screen message: sandwiches, beers, neighborhood place.
- Let the first screen create mood before it asks for conversion.
- Place trust signals after the atmosphere has been established, not before.

## Responsive Behavior

| Viewport | Behavior |
| --- | --- |
| Desktop ≥ 1024px | Rich layouts, split sections, grid systems, editorial rhythm |
| Tablet 768-1023px | Simplified grids, reduced spacing |
| Mobile < 768px | Stacked layout, clear CTA, readable cards, accessible menu |

## Accessibility

- Use semantic HTML.
- Use proper heading hierarchy.
- Use descriptive alt attributes.
- Use visible focus states.
- Ensure sufficient color contrast.
- Make buttons and links keyboard accessible.
- Forms must have labels.
- Do not rely only on color to communicate information.
- Respect `prefers-reduced-motion`.

---

# Photography Guidelines

Use Unsplash or generated project visuals for prototype photography.

Images should support the identity:

- immersive hero images or short video-like compositions;
- warm restaurant interiors;
- beer bar atmosphere;
- sandwiches;
- salads;
- terrace;
- friends at a table;
- neighborhood bistrot;
- wooden textures;
- warm morning or evening light;
- casual dining;
- people sharing food and drinks;
- counter details;
- beer taps;
- handwritten menu boards;
- detail shots: hands preparing food, condensation on glasses, paper menus, tables, plates, crumbs, wood grain, copper reflections.

Avoid images that feel:

- too luxury;
- too corporate;
- too polished;
- too fast-food;
- too dark and nightclub-like;
- too silent fine-dining;
- unrelated to sandwiches, beer or neighborhood life.

## Suggested Unsplash Search Terms

Use combinations such as:

```txt
warm restaurant interior
neighborhood bistro
beer bar interior
craft beer bar
sandwich cafe
french bistro
restaurant terrace
friends drinking beer
casual restaurant food
bar counter beer
wood table sandwich
beer taps bar
```

Images must be used as temporary mockup assets only.

Prefer downloading images into:

```txt
/public/images
```

Suggested folders:

```txt
/public/images
├── hero
├── interior
├── menu
├── beers
├── events
├── people
└── textures
```

Each image should have a meaningful filename.

Example:

```txt
/public/images/hero/chez-nono-terrace-hero.jpg
/public/images/beers/craft-beer-counter.jpg
/public/images/menu/sandwich-board.jpg
```

---

# GSAP Animation Guidelines

GSAP is part of the prototype identity.

Use GSAP to make the mockups feel:

- immersive;
- alive;
- tactile;
- warm;
- editorial;
- less template;
- more handcrafted;
- like a calm visit through the place, not a carousel of effects.

Animation must support the brand.
It must not turn the site into a theme park for bread.

## Allowed GSAP Uses

- hero text reveal;
- image mask reveal;
- section reveal on scroll;
- staggered card entrance;
- subtle beer section reveal;
- atmospheric chapter transitions inspired by Ammolite's slow editorial rhythm, but warmer and more local;
- handwritten accent reveal;
- navbar open/close transition;
- menu card reveal;
- footer reveal;
- small hover interactions;
- reservation form step transition if useful.

## Avoid

- aggressive parallax;
- constant movement;
- infinite floating elements;
- spinning objects;
- bouncy food;
- heavy page transitions;
- motion that delays reading;
- decorative animation with no purpose;
- anything that screams “look, I installed a library”.

## Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

and in JavaScript:

```js
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  // Skip non-essential animation
}
```

Essential content must remain visible without animation.

---

# JavaScript Guidelines

Use vanilla JavaScript only.

Allowed interactions:

- mobile menu open/close;
- sticky header state on scroll;
- active nav link;
- form validation UI;
- accordion sections if useful;
- tabs for menu categories if useful;
- scroll reveal animation;
- simple carousel only if justified;
- GSAP page animation setup.

Suggested files:

```txt
/src/js/main.js
/src/js/navigation.js
/src/js/mobile-menu.js
/src/js/animations.js
/src/js/forms.js
/src/js/menu-tabs.js
```

Avoid overengineering.

This is a static prototype, not a spacecraft control panel.

---

# Content Guidelines

Use the content and tone from `/docs`.

The editorial tone should be:

- sensory without becoming precious;
- warm;
- direct;
- human;
- local;
- slightly informal;
- confident without sounding fake.

Avoid:

- luxury clichés;
- empty marketing phrases;
- exaggerated promises;
- “expérience culinaire unique”;
- “saveurs d'exception”;
- “voyage gustatif”;
- “lieu incontournable”;
- soulless filler copy;
- fine-dining vocabulary that would make a sandwich look embarrassed.

Chez Nono should sound like a real neighborhood place, not like a PDF generated by a hospitality consultant after one espresso too many.

Use short chapter labels when useful, similar in function to Ammolite's section rhythm, but adapted to Chez Nono.

Examples:

```txt
Pain chaud, bière fraîche
Le comptoir du quartier
Ici, on prend le temps
La carte qui nourrit vraiment
Des bières avec du caractère
```

If content is missing, write realistic French placeholder copy.

No lorem ipsum.

---

# Page Expectations

## Homepage

Must include:

- responsive navbar;
- hero section with strong positioning and immersive atmosphere;
- CTA to reservation and menu;
- short explanation of Chez Nono;
- chapter-like narrative rhythm inspired by Ammolite, but warmer, busier and more local;
- values or promise cards;
- menu preview;
- beer highlight;
- events preview;
- atmosphere section;
- reviews or social proof;
- final CTA;
- footer.

Homepage must open with atmosphere first, then clarify the offer. The user should understand sandwiches + beers + neighborhood warmth within seconds, but the page should still feel like entering a place, not reading a flyer.

Homepage motion should include:

- hero entrance;
- image reveal;
- staggered cards;
- beer section reveal.

## À propos

Must include:

- editorial hero;
- story section;
- concept section;
- philosophy section;
- human/place atmosphere;
- CTA.

Motion direction:

- slower editorial reveal;
- image details;
- subtle handwritten accents.

## Menu

Must include:

- intro section;
- sandwiches;
- salads;
- soft drinks;
- beer section;
- optional filters or category tabs;
- CTA.

Motion direction:

- category reveal;
- menu card stagger;
- beer section stronger atmosphere.

## Événements

Must include:

- intro;
- event cards;
- recurring event types;
- beer tasting or local evening highlight;
- CTA.

Motion direction:

- cards reveal;
- date labels;
- local evening atmosphere.

## Réservation

Must include:

- reservation form UI;
- practical information;
- reassurance copy;
- opening hours reminder;
- no backend logic.

Motion direction:

- form sections reveal;
- clear interaction feedback;
- no animation that makes form filling annoying.

## Contact

Must include:

- address;
- opening hours;
- phone/email;
- contact form UI;
- map placeholder;
- practical information;
- social links placeholder.

Motion direction:

- practical blocks reveal;
- map placeholder reveal;
- calm transitions.

---

# Suggested Project Structure

```txt
chez-nono-prototype/
├── context/
│   ├── project-overview.md
│   └── current-feature.md
├── docs/
│   ├── charte-graphique.md
│   ├── strategie-de-marque.md
│   ├── strategie-de-contenu.md
│   ├── sitemap.md
│   ├── sitemap-de-contenu.md
│   ├── homepage-content.md
│   ├── menu-content.md
│   ├── a-propos-content.md
│   ├── references-inspiration.md
│   └── notes-ux.md
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── interior/
│   │   ├── menu/
│   │   ├── beers/
│   │   ├── events/
│   │   ├── people/
│   │   └── textures/
│   └── favicon.svg
├── src/
│   ├── css/
│   │   ├── input.css
│   │   └── output.css
│   ├── js/
│   │   ├── main.js
│   │   ├── navigation.js
│   │   ├── mobile-menu.js
│   │   ├── animations.js
│   │   ├── forms.js
│   │   └── menu-tabs.js
│   └── data/
│       ├── menu.js
│       ├── events.js
│       └── testimonials.js
├── index.html
├── a-propos.html
├── menu.html
├── evenements.html
├── reservation.html
├── contact.html
├── CLAUDE.md
├── README.md
├── package.json
└── vite.config.js
```

---

# Development Workflow

For every major task:

1. Read `/context/project-overview.md`.
2. Read relevant files from `/docs`.
3. Create or update `/context/current-feature.md`.
4. Implement only the current page scope.
5. Keep HTML semantic.
6. Keep Tailwind classes readable.
7. Use reusable visual patterns.
8. Add GSAP motion intentionally.
9. Respect reduced motion.
10. Test desktop, tablet and mobile.
11. Run the build command.
12. Explain what changed.

---

# Suggested Commands

Setup:

```bash
npm init -y
npm install --save-dev vite @tailwindcss/vite tailwindcss
npm install gsap
```

Daily usage:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Suggested scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

---

# Expected Result

The final result should be a complete responsive static prototype for Chez Nono.

It should feel like a real website for a real neighborhood sandwich shop and beer bar.

The prototype should be strong enough to:

- validate the visual direction;
- test page hierarchy;
- review responsive behavior;
- explore motion identity;
- serve as a base for final development;
- be shown in a portfolio case study.

The result should be polished, coherent and human.

Not perfect.
Perfect is usually where websites go to die quietly.
