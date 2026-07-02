# CLAUDE.md

This file gives Claude Code the operating rules for working inside the **Chez Nono** prototype repository.

The project has changed direction: **do not use Claude Design wireframes as the source of truth anymore**. The repo itself is now the prototyping space.

---

# Project Identity

**Chez Nono** is a fictional neighborhood sandwich shop and beer bar.

The website must feel like a real local place:

- warm;
- generous;
- human;
- slightly rustic;
- modern, but not sterile;
- rooted in sandwiches, beers, terrace life and neighborhood atmosphere.

Creative direction: **Bistrot Moderne de Quartier**.

Immersion reference: **Ammolite – House of Light**

```txt
https://ammolite-restaurant.de/en/
```

Ammolite is a reference for immersion, rhythm and atmosphere-first storytelling.
It is not a reference for luxury styling.

This is not a luxury restaurant website.
This is not a premium WordPress template.
This is not a startup landing page with a sandwich accidentally dropped into it.

The goal is to create **dynamic HTML/CSS/JS mockups directly in the repo**, page by page.

---

# Ammolite Reference Usage

Ammolite must be studied as an immersive restaurant website reference.

Do not copy its luxury restaurant aesthetic.

Use it to understand how to:

- build a strong central concept;
- make the first screen atmospheric;
- reduce navigation noise;
- create chapter-like page rhythm;
- use large visuals as emotional anchors;
- keep copy short, calm and intentional;
- place proof after immersion;
- make the restaurant feel like a real place before pushing conversion;
- connect atmosphere, product, service and team into one coherent world.

Ammolite's concept is:

```txt
House of Light
```

Chez Nono's equivalent should feel closer to:

```txt
La table du quartier
Le comptoir vivant
Pain chaud, bière fraîche, vraies gueules
```

These phrases are not mandatory final copy.
They are creative anchors.

The adaptation rule is simple:

```txt
Copy the immersive logic, not the luxury costume.
```

Ammolite = light, silence, precision, elegance.

Chez Nono = wood, amber beer, warm bread, terrace life, generous food, local humans.

If the page starts looking like fine dining, pull it back toward bistrot, sandwiches, beer and neighborhood warmth.
Nobody needs a contemplative chicken sandwich floating in spiritual emptiness.

---

# Current Working Mode

## We are now in direct HTML mockup mode

The repo is the design prototype.

Work directly with:

- HTML;
- Tailwind CSS v4;
- vanilla JavaScript;
- GSAP;
- curated images;
- responsive layouts;
- reusable frontend patterns.

Do not wait for separate static wireframes.
Do not recreate a Figma process.
Do not generate all pages at once unless explicitly requested.

## Page-by-page workflow

Implement one page at a time.

Default first page, unless the user says otherwise:

```txt
Homepage + responsive navbar
```

For every page task:

1. Read the required documentation.
2. Identify the current page scope.
3. Build only that page and the shared components required for it.
4. Use GSAP to add subtle, meaningful movement.
5. Test desktop, tablet and mobile.
6. Run the build.
7. Explain what changed and what remains.

Shared components may be improved while working on a page, but avoid redesigning the entire project every time. Civilization has suffered enough from scope creep.

---

# Mandatory Reading Order

Before any major implementation, read these in order:

1. `/context/project-overview.md` — scope, workflow, goals, target users
2. `/docs/charte-graphique.md` — colors, typography, button styles, spacing
3. `/docs/strategie-de-marque.md` — brand positioning, tone of voice
4. `/docs/sitemap-de-contenu.md` — page sections and content hierarchy
5. `/docs/references-inspiration.md` — if available, reference analysis and inspiration notes
6. Relevant content file for the current page, if available

Important filename note:

```txt
/docs/sitemap-de-contenu.md
```

If a documentation file is missing, continue with what is available and mention the gap.

Priority when docs conflict:

1. `/docs/charte-graphique.md`
2. `/docs/strategie-de-marque.md`
3. `/docs/sitemap-de-contenu.md`
4. `/docs/strategie-de-contenu.md`
5. `/context/project-overview.md`
6. Existing implementation

---

# Commands

The project uses **Vite + Tailwind CSS v4 + vanilla JavaScript + GSAP**.

If `package.json` does not exist yet, initialize the project:

```bash
npm init -y
npm install --save-dev vite @tailwindcss/vite tailwindcss
npm install gsap
```

Recommended scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Daily commands:

```bash
npm run dev
npm run build
npm run preview
```

Always run:

```bash
npm run build
```

before considering a page task complete.

---

# Tech Stack

Use:

- HTML5
- Tailwind CSS v4
- Vanilla JavaScript
- GSAP
- Vite
- Unsplash prototype images stored locally in `/public/images/`
- Optional icons: Lucide, Phosphor, Remix Icon

Do not use:

- React
- Vue
- Svelte
- Next.js
- TypeScript
- Backend
- CMS
- Auth
- Database
- Booking API
- Over-engineered state management, because apparently even sandwiches need architecture diagrams now

---

# Tailwind CSS v4 Rules

Define design tokens in:

```txt
/src/css/input.css
```

Use Tailwind v4 `@theme`.

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

Use only brand palette tokens for main UI colors.

Avoid arbitrary hex values inside markup.

Do not use pure black `#000000` or pure white `#FFFFFF`.

Use:

- `nono-slate` for deep contrast;
- `nono-cream` for light backgrounds;
- `nono-brown`, `nono-green`, `nono-copper`, `nono-amber` for brand atmosphere.

---

# Fonts

Use:

- **Fraunces** for titles;
- **Manrope** for body text;
- **Caveat** for handwritten accents.

Caveat must be used sparingly.

Acceptable uses:

- a short label;
- a handwritten annotation;
- one emotional accent in a section;
- a signature-like detail.

Do not use Caveat for navigation, long paragraphs, cards, or UI labels.

Caveat is seasoning, not dinner.

---

# Visual Direction

Chez Nono must communicate:

- immersion before explanation;
- local warmth;
- honest food;
- beer culture;
- neighborhood conviviality;
- artisanal imperfection;
- simple pleasure;
- a place run by humans, not by a design system with attachment issues;
- the feeling of entering a place rather than landing on a template.

## Avoid

Avoid anything that feels like:

- generic restaurant template;
- premium WordPress theme;
- luxury gastronomy;
- polished corporate café;
- startup hero section;
- fake minimalism;
- stock-photo lifestyle with dead eyes;
- perfectly symmetrical blandness.

## Seek

Use visual cues like:

- chapter-like scroll rhythm;
- atmosphere-first hero section;
- warm textured backgrounds;
- editorial title rhythm;
- asymmetrical section composition;
- image overlays;
- soft paper/card effects;
- labels, stamps, stickers, underlines;
- visible beer identity;
- honest menu cards;
- terrace / counter / wood / amber light atmosphere;
- small handcrafted details;
- details that make the room believable: tables, hands, glasses, crumbs, paper, bottles, copper, wood, terrace light.

The design should feel made, not assembled from a template graveyard.

---

# GSAP Rules

GSAP is not optional for this prototype direction.

Use GSAP to add controlled, meaningful motion that reinforces authenticity and atmosphere.

Motion should feel like the user is moving through a warm local place, not clicking through a component library wearing perfume.

Install:

```bash
npm install gsap
```

Suggested file:

```txt
/src/js/animations.js
```

Import it from:

```txt
/src/js/main.js
```

Example structure:

```js
import { initNavigation } from "./navigation.js";
import { initMobileMenu } from "./mobile-menu.js";
import { initAnimations } from "./animations.js";

initNavigation();
initMobileMenu();
initAnimations();
```

## Good GSAP uses

Use GSAP for:

- hero entrance;
- image reveal masks;
- section reveal on scroll;
- cards appearing with slight stagger;
- beer section atmosphere;
- slow chapter transitions inspired by Ammolite's editorial rhythm, adapted to Chez Nono's warmer identity;
- small handwritten accent reveal;
- navigation transition;
- mobile menu opening;
- subtle CTA hover effects;
- footer reveal;
- menu item stagger.

Use `ScrollTrigger` only if it genuinely improves the page.

## Bad GSAP uses

Do not create:

- aggressive parallax;
- constant motion;
- spinning icons;
- bouncy food;
- beer foam circus animations;
- delayed reading;
- fake “award-winning” motion;
- anything that makes the site feel like a crypto launch for sandwiches.

Animation must support clarity, warmth and rhythm.

## Accessibility

Respect reduced motion.

Use a helper like:

```js
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  return;
}
```

Do not animate essential information in a way that prevents access.

---

# JavaScript Guidelines

Vanilla JavaScript only.

Suggested modules:

```txt
/src/js/main.js
/src/js/navigation.js
/src/js/mobile-menu.js
/src/js/animations.js
/src/js/forms.js
/src/js/menu-tabs.js
```

Allowed interactions:

- responsive mobile menu;
- sticky header state;
- active nav link;
- smooth anchor scrolling;
- scroll reveal;
- form validation UI;
- menu category tabs;
- reservation step UI if useful;
- simple image reveal;
- simple event filtering if useful.

Keep code readable.

No framework behavior simulation.
No homemade router.
No unnecessary abstraction.

This is a static prototype, not a small government.

---

# Pages

Prototype these pages, one by one:

```txt
index.html          homepage
a-propos.html       story, concept, philosophy
menu.html           sandwiches, salads, drinks, beers
evenements.html     event cards, recurring events, beer nights
reservation.html    form UI only
contact.html        address, hours, form UI, map placeholder
```

All pages share:

- responsive header;
- mobile navigation;
- footer;
- typography system;
- color system;
- button styles;
- section spacing;
- animation language.

Do not implement all pages unless the user asks for all pages.

---

# Page Expectations

## Homepage

Must include:

- responsive navbar;
- hero with clear positioning and immediate atmosphere;
- CTA to reservation and menu;
- short explanation of Chez Nono;
- a chapter-like narrative progression: enter the place, understand the offer, feel the products, discover beers/events, then convert;
- values or promise cards;
- menu preview;
- beer highlight section;
- events preview;
- atmosphere / place section;
- social proof;
- final CTA;
- footer.

The homepage must immediately make the user feel:

```txt
sandwiches + beers + neighborhood warmth
```

It should borrow Ammolite's atmospheric discipline while rejecting its luxury silence.

Not:

```txt
premium template + empty slogan + dead stock photo
```

## À propos

Must include:

- editorial hero;
- Notre histoire;
- Notre concept;
- Notre philosophie;
- place / team atmosphere;
- CTA.

## Menu

Must include:

- intro;
- sandwiches;
- salads;
- soft drinks;
- beer section;
- optional tabs or filters;
- CTA.

The beer section must have stronger visual identity than the other sections.

## Événements

Must include:

- intro;
- event cards;
- recurring events;
- beer tasting highlight;
- local evening atmosphere;
- CTA.

## Réservation

Must include:

- front-end reservation form;
- date / time / number of people / contact details;
- practical information;
- reassurance copy;
- opening hours reminder;
- no backend.

## Contact

Must include:

- address;
- hours;
- phone / email;
- contact form UI;
- map placeholder;
- practical information;
- social links placeholder.

---

# Component Rules

## Buttons

Primary:

- amber background;
- cream text;
- clear hover state;
- visible focus state.

Secondary:

- copper or brown border;
- transparent or cream background;
- calm hover state.

Do not make buttons look like SaaS CTAs begging for investor approval.

## Cards

Cards should feel warm and tangible.

Use:

- beige / cream backgrounds;
- subtle borders;
- restrained shadows;
- small labels;
- menu-friendly spacing;
- slightly editorial layout.

Avoid sterile floating glassmorphism.

Chez Nono serves sandwiches, not login modals for a fintech.

## Layout

Use:

- mobile-first structure;
- strong section rhythm;
- split image/text blocks;
- grids where useful;
- asymmetry when it adds life;
- enough spacing to breathe.

Spacing should follow multiples of 8:

```txt
8 / 16 / 24 / 32 / 48 / 64 / 96
```

## Forms

Forms are UI prototypes only.

Rules:

- visible labels;
- useful placeholders;
- clear focus styles;
- simple validation feedback;
- accessible structure;
- no fake backend calls.

---

# Images

Use Unsplash or project-generated images as temporary prototype assets.

Store images locally:

```txt
/public/images/
```

Suggested folders:

```txt
/public/images/hero
/public/images/interior
/public/images/menu
/public/images/beers
/public/images/events
/public/images/people
/public/images/textures
```

Image direction:

- immersive first-screen atmosphere;
- warm restaurant interior;
- sandwich closeups;
- beer bar counter;
- craft beer glasses;
- terrace morning light;
- neighborhood bistro;
- friends at a table;
- staff serving;
- wood, paper, copper, amber light;
- sensory details: foam, toasted bread, hands preparing sandwiches, lived-in tables, handwritten menu fragments.

Avoid:

- luxury plating;
- corporate smiling nonsense;
- nightclub beer photos;
- fast-food franchise visuals;
- overly polished generic lifestyle photos;
- fine-dining visuals that make Chez Nono feel inaccessible.

Images must have meaningful filenames.

Example:

```txt
/public/images/hero/chez-nono-terrasse-hero.jpg
/public/images/beers/beer-counter-amber-light.jpg
/public/images/menu/sandwich-rustic-board.jpg
```

---

# Content Rules

Write in French when missing content is needed.

Tone:

- warm;
- direct;
- local;
- human;
- slightly informal;
- confident;
- simple.

Avoid:

- “expérience culinaire unique”
- “saveurs d’exception”
- “authenticité revisitée”
- “voyage gustatif”
- “lieu incontournable”
- any phrase that smells like a brochure left in the rain

Use content from `/docs` first.

If content is missing, write plausible placeholder copy that matches the brand.

No lorem ipsum.

---

# Current Feature File

For every page task, create or update:

```txt
/context/current-feature.md
```

Recommended template:

```md
# Current Feature

## Page
Homepage

## Scope
Responsive homepage + navbar + footer

## Files touched
- index.html
- src/css/input.css
- src/js/main.js
- src/js/navigation.js
- src/js/mobile-menu.js
- src/js/animations.js

## Design intention
Create a warm, local, artisanal showcase wetbsite with a stronger beer-bar identity and Ammolite-inspired immersive rhythm adapted to Chez Nono.

## GSAP intention
Hero reveal, image mask reveal, slow chapter reveals, staggered cards, beer section reveal.

## Status
In progress
```

Keep it short and useful.

---

# Quality Checklist

Before finishing a task, verify:

- page works on mobile;
- page works on tablet;
- page works on desktop;
- navbar is usable;
- focus states are visible;
- fonts and colors follow the charter;
- GSAP does not block reading;
- reduced motion is respected;
- images have alt text;
- no pure black or white;
- no lorem ipsum;
- build passes.

Run:

```bash
npm run build
```

---

# After Each Task

Explain:

- what was created;
- what files changed;
- what GSAP animations were added;
- what design decisions were made;
- what remains to improve.

Keep the explanation practical.

Do not write a novel unless the task deserves one.
The sandwich will not read it anyway.



---

# Reference Website

Use this reference for immersion and rhythm only:

```txt
https://ammolite-restaurant.de/en/
```

Do not copy the luxury restaurant aesthetic.
