# Current Feature

## Page
Contact — accessibilité + réassurance (rôle défini dans `docs/sitemap-de-contenu.md` §CONTACT)

## Scope
Passage du stub ("Page en construction.") à une page complète, volontairement simple (2 chapitres, pas de storytelling long) : localisation, horaires, téléphone/e-mail, réseaux sociaux, et un formulaire de demande de réservation lié aux événements récurrents.

## Structure (3 sections + footer)
1. **Hero** — image intérieur (`photo-interieur.webp`), label "On vous répond vite", H1 "Passez la porte, ou décrochez le téléphone."
2. **01 — Nous trouver** (`section-brown`) — split carte/infos : `.map-placeholder` (encadré pointillé, pas d'embed réel — respecte "no backend/API") à gauche, `.info-row` (adresse, horaires, téléphone/e-mail, réseaux sociaux avec icônes SVG inline) à droite.
3. **02 — Nous écrire** (`section-dusk`) — formulaire simple dans `.form-card` : nom, téléphone/e-mail, nombre de personnes ("je souhaite réserver pour"), jour souhaité (`<select>` avec options Jeudi/Vendredi/Samedi calquées sur les 3 événements de `evenements.html`, + option "jour simple, sans événement"), message facultatif. Validation UI simple côté client (pas de vraie soumission), message de confirmation affiché après envoi.
4. Footer identique aux autres pages.

Pas de CTA final séparé : la demande explicite était "fait simple", et le footer + le formulaire couvrent déjà la conversion attendue pour cette page (contrairement à homepage/à-propos/événements qui ont un rôle plus narratif).

## Nouveaux composants CSS (`src/css/input.css`)
`.form-field`, `.form-label`, `.form-input`, `.form-select`, `.form-textarea`, `.form-error`, `.form-card`, `.form-success`, `.map-placeholder`, `.info-row`, `.info-icon` — première page du prototype à utiliser un vrai formulaire, ces classes seront réutilisables telles quelles sur `reservation.html`.

## GSAP / JS
- Réutilise les hooks existants de `animations.js` (`data-reveal`), pas de nouveau script d'animation.
- Nouveau module `src/js/forms.js` (`initForms`) : validation UI simple (champs `required` vides → classe `.has-error` + focus sur le premier champ en erreur), pas d'appel réseau, affichage d'un message de succès et reset du formulaire. Importé et appelé depuis `main.js`.

## Contenu source
`docs/sitemap-de-contenu.md` §CONTACT (infos pratiques / localisation / horaires / réseaux sociaux) et les 3 événements déjà rédigés dans `evenements.html` (Jeudi dégustation bière, Vendredi concert acoustique, Samedi apéro des voisins) pour les options du select.

## Images
Réutilisation de `photo-interieur.webp` (déjà présent dans `/public/images/hero/`) pour le hero. Pas de nouvelle image nécessaire (carte = placeholder stylé, pas de photo).

## Files touched
- `contact.html` (stub → page complète)
- `src/css/input.css` (classes formulaire + map placeholder + info rows)
- `src/js/forms.js` (nouveau)
- `src/js/main.js` (import + init `initForms`)
- `context/current-feature.md`

## Status
Contenu terminé. À vérifier : `npm run build`, puis test visuel desktop/tablette/mobile (en particulier le formulaire en 1 colonne sous `sm:` et la lisibilité du `.map-placeholder`).

## Historique
- Homepage complète (8 chapitres + footer). **Terminée.**
- Page Menu : stub → refonte immersive split-screen. **Terminée.**
- Page À propos : stub → contenu final FR + chapitre équipe. **Terminée.**
- Page Événements : stub → page complète. **Terminée.**
- Page Contact : stub → page complète (cette itération). **Terminée.**
