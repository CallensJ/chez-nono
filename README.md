# Chez Nono — Prototype web immersif

Chez Nono est un projet fictif de site vitrine pour une sandwicherie et bar à bières de quartier.

L’objectif du projet est de concevoir une expérience web chaleureuse, authentique et immersive, loin des interfaces génériques trop lisses. Le site met en avant l’ambiance du lieu, la convivialité, les produits simples mais généreux, et l’identité d’un établissement de quartier vivant.

Ce projet a été réalisé comme une maquette dynamique haute fidélité, directement intégrée en HTML, CSS et JavaScript, avec animations et responsive design.

## Objectif du projet

Le but principal est de démontrer une démarche complète de conception front-end :

* direction artistique
* structure de site vitrine
* intégration responsive
* animations GSAP
* interactions JavaScript vanilla
* expérience utilisateur cohérente
* présentation portfolio

Chez Nono n’est pas une application connectée à une base de données. Il s’agit d’un prototype statique publiable, conçu pour simuler l’expérience d’un véritable site de restaurant ou commerce local.

## Aperçu

Le site comprend plusieurs pages :

* Accueil
* Menu
* À propos
* Événements
* Réservation
* Contact

Chaque page a été pensée pour conserver une ambiance visuelle cohérente : tons chauds, esprit bistrot moderne, photographies immersives, typographies expressives et animations discrètes.

## Stack utilisée

* Vite
* HTML
* Tailwind CSS
* JavaScript vanilla
* GSAP
* CSS personnalisé
* GitHub Pages ou Vercel pour le déploiement

## Fonctionnalités

* Site multi-pages
* Design responsive desktop, tablette et mobile
* Navigation adaptée au mobile
* Animations d’apparition avec GSAP
* Effets visuels sur les sections principales
* Pages statiques structurées
* Formulaire de réservation fictif
* Images organisées dans le dossier public
* Code JavaScript séparé par responsabilités

## Structure du projet

```txt
chez-nono/
├── public/
│   └── images/
├── src/
│   ├── css/
│   └── js/
├── index.html
├── menu.html
├── a-propos.html
├── evenements.html
├── reservation.html
├── contact.html
├── package.json
└── README.md
```

La structure peut évoluer selon l’organisation finale du projet, mais l’idée générale est de garder un prototype simple, lisible et facilement maintenable.

## Installation locale

Cloner le projet :

```bash
git clone https://github.com/username/chez-nono.git
```

Se placer dans le dossier :

```bash
cd chez-nono
```

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

Le projet sera accessible localement à l’adresse indiquée par Vite.

## Build de production

Pour générer la version de production :

```bash
npm run build
```

Pour prévisualiser le build :

```bash
npm run preview
```

## Pages du site

### Accueil

La page d’accueil présente l’univers Chez Nono, l’ambiance du lieu, les promesses principales, les produits phares et les appels à l’action.

### Menu

La page menu met en avant les sandwiches, salades, boissons et bières. Elle est pensée pour être simple à parcourir, avec une lecture claire des catégories.

### À propos

La page À propos raconte l’histoire fictive du lieu, son concept et sa philosophie : un commerce de quartier accessible, humain et généreux.

### Événements

La page événements présente les animations fictives du lieu : soirées, dégustations, moments conviviaux et rendez-vous réguliers.

### Réservation

La page réservation propose un formulaire frontend uniquement, sans traitement réel côté serveur.

### Contact

La page contact rassemble les informations pratiques : adresse fictive, horaires, accès et moyens de contact.

## Direction artistique

L’identité visuelle repose sur une atmosphère de bistrot moderne de quartier.

Palette principale :

* Brun foncé : `#3B2A20`
* Cuivre / brun chaud : `#A35A2A`
* Vert foncé : `#2E3D32`
* Ambre bière : `#D97A28`
* Ardoise très sombre : `#1E1E20`

Palette secondaire :

* Crème : `#F7F4EF`
* Beige chaud : `#E8E1D6`
* Gris chaud : `#8E8A83`
* Vert sauge clair : `#A0A58F`
* Or doux : `#D8B369`

Typographies utilisées dans la direction graphique :

* Fraunces pour les titres
* Manrope pour les textes
* Caveat pour les accents visuels et signatures

## Ce que ce projet démontre

Ce projet montre la capacité à transformer une direction artistique en prototype web complet, responsive et animé.

Il démontre notamment :

* une approche front-end sans dépendance excessive à un framework
* une capacité à construire une expérience visuelle cohérente
* une maîtrise des bases HTML, CSS, Tailwind et JavaScript
* une utilisation de GSAP pour renforcer l’ambiance sans surcharger l’interface
* une logique de site vitrine adaptée à un commerce local
* une attention portée à l’identité, au contenu et à l’expérience utilisateur

## Limites du projet

Le projet est volontairement statique.

Il ne comprend pas :

* de backend
* de base de données
* de système réel de réservation
* de CMS
* d’authentification
* de paiement en ligne

Ces choix sont assumés : l’objectif est de présenter un prototype front-end abouti, clair et publiable.

## Améliorations possibles

Des évolutions futures pourraient inclure :

* migration vers Next.js
* intégration d’un CMS headless
* formulaire de réservation fonctionnel
* optimisation SEO avancée
* génération dynamique du menu
* système d’actualités ou d’événements administrable
* version multilingue

## Statut

Prototype terminé et publiable.

Projet fictif réalisé dans un objectif de portfolio front-end, design web et intégration responsive.

## Auteur

Projet réalisé par JohanWebStudio.

Site : https://johanwebstudio.fr
