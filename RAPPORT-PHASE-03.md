# RAPPORT PHASE 03

**Projet :** QDev Digital — site vitrine statique  
**Phase :** 03 — Amélioration de la fondation responsive mobile  
**Branche :** `main` (commit stable `7966bf2` = fin Phase 02)  
**Fichiers modifiés :** `assets/css/styles.css`, `assets/js/main.js` uniquement  
**Commit / push :** aucun (conformément aux consignes)

---

## 1. Objectif

Consolider la fondation responsive mobile du site sans redesign : aucun changement de branding, de couleurs, de texte ni de fonctionnalité. Ne pas toucher au routage de la Phase 02.

## 2. Fichiers modifiés

| Fichier | Nature |
|---|---|
| `assets/css/styles.css` | ~179 lignes ajoutées/modifiées (responsive, boutons, zones tactiles, formulaire, hero, icônes, scroll-lock) |
| `assets/js/main.js` | `bindMobileMenu()` réécrit (scroll-lock + fermeture clic extérieur / Escape / resize) |

`getSiteRoot()` / `ROOT` (routage Phase 02) : **non modifiés**. HTML : non modifié.

## 3. Modifications CSS

### 3.1 Navigation mobile (breakpoint ≤ 900px)
- `.nav` : `max-height: calc(100vh - var(--header-height))`, `overflow-y: auto`, `-webkit-overflow-scrolling: touch`, `overscroll-behavior: contain` (les longs menus restent défilables sans bloquer la page).
- `.nav__link` : padding `12px 14px` → `14px 16px` (meilleure zone tactile).
- Scroll-lock : ajout de `body.nav-open { overflow: hidden; }` (classe posée par JS).

### 3.2 Grilles
- `.adv-grid` et `.about-audience` basculent désormais en 1 colonne à `≤ 600px` (au lieu de `≤ 500px`) pour cohérence avec les autres grilles.

### 3.3 Boutons
- Bloc `≤ 600px` : `.hero__actions`, `.cta-dark__actions`, `.service-detail__actions` empilés en colonne ; boutons `width:100%; min-width:0; white-space:normal` (évite le débordement des libellés longs) ; `btn-lg` padding `15px 20px`.
- Bloc `≤ 400px` : `btn-lg` → `14px 18px`, `font-size: 1rem`.

### 3.4 Zones tactiles (≤ 600px)
- `.filter-btn` `12px 20px`, `.pricing-toggle__btn` `12px 24px`, `.social-row a` `12px 20px` (cibles ≥ 44px vérifiées).

### 3.5 Formulaire (≤ 600px)
- `min-height: 48px` sur `.form-field input, select` uniquement ; textarea exclu (préserve `min-height: 110px`).
- **Pas** de `appearance: none` sur les select (affordance natale iOS conservée).

### 3.6 Headings
- `overflow-wrap: break-word` sur `h1, h2, h3, h4` (évite les débordements de mots longs).

### 3.7 Hero
- Bloc `≤ 600px` : `.hero__eyebrow` `white-space: normal`, `.hero__stats` gap 20px, `.hero__card` padding 22px.
- Bloc `≤ 400px` : `.hero__inner` `48px 20px 56px`, `.hero__card` 18px, `.hero__text` 1.05rem.
- **Correction padding horizontal** : `.hero__inner` ne reçoit plus de `padding-left/right: 0` ; les paddings horizontaux (`20px` desktop/≤900/≤400, `16px` ≤359) ramènent le contenu à l'alignement de la grille `.container`. Résultat : les boutons du hero sont alignés (288px à 320px de viewport au lieu de 320px full-bleed).

### 3.8 Breakpoint ≤ 359px (« très petit mobile » / 320px)
- `.container` 16px, `.section` 56px, `.page-hero` 48/44, `.hero__inner` 40/48, `.form-card` 20/16, `.cta-dark` 34/18, cartes 20px, `.footer__main` 40/28.

### 3.9 Icônes SVG non dimensionnées
- `.service-card__link .arrow`, `.service-detail__adv .check svg`, `.hero__card-item .icon-badge svg` : dimensions fixées (18/18, 18/18, 38px badge + 20/20) — corrige l'affichage d'un SVG géant (173 px) qui déformait les cartes.

## 4. Modifications JavaScript (`bindMobileMenu()`)

- Refactorisation en `openMenu()` / `closeMenu()` qui gèrent : classe `is-open` (nav + toggle), `aria-expanded`, `aria-label`, et scroll-lock `body.nav-open`.
- Fermeture : clic sur un lien de nav, clic extérieur (`closest(".nav" / ".nav-toggle")`), touche `Escape`.
- Reset automatique au `resize` quand `window.innerWidth > 900` (retour au layout desktop propre).
- Routage Phase 02 intact.

## 5. Overflow horizontal

Audit CDP (Edge headless) sur **7 pages × 9 résolutions** (320, 360, 375, 390, 414, 430, 768, 1024, desktop) :
**aucun débordement** (`scrollWidth == clientWidth` partout, `bodyScroll == clientWidth`). Nav et footer rendus par JS sur toutes les pages.

## 6. Boutons

Empilement en colonne et pleine largeur documentés en section 3.3 ; mesurés à 320px : boutons hero 288×58, CTA 252×58, submit formulaire 254×56 — aucun débordement.

## 7. Navigation mobile

Test CDP dédié : **19/19 PASS** :
ouverture (`is-open`, `aria-expanded=true`, label « Fermer le menu », `body.nav-open`, overflow hidden), fermeture par clic lien, clic extérieur et Escape (avec retrait de `nav-open`), reset au resize desktop avec toggle masqué, retour mobile avec toggle visible (`display:flex`).

## 8. Breakpoints

28 blocs `@media` : `900px` (10 : nav mobile + grilles 2 colonnes), `600px` (13 : grilles 1 colonne, formulaire, hero, boutons, zones tactiles, cta-dark, footer), `400px` (2 : boutons/hero compacts), `359px` (1 : très petit mobile). Restent `prefers-color-scheme: dark` et `prefers-reduced-motion`.

## 9. Tests

- `node --check main.js` → `JS_SYNTAX_OK`.
- Équilibre des accolades CSS → `CSS_BRACES_OK`.
- Scan media queries → répartition 359×1 / 400×2 / 600×13 / 900×10.
- Audit overflow CDP → aucun débordement à toutes résolutions.
- Audit zones tactiles CDP (320px) : hauteurs ≥ 44px sur toggle, boutons, filtres, toggle pricing, liens réseaux, champs de formulaire ; largeurs ≤ container.
- Audit desktop (1440px) : hero en 2 colonnes (gap 48), nav toggle masqué, actions `row`, aucun overflow.
- **Limite de test** : vérification visuelle (screenshot) impossible — ce modèle ne lit pas les images ; la validation repose sur les mesures programmatiques CDP.

## 10. Desktop (non-régression)

Le hero conserve son layout 2 colonnes (1.15fr/0.85fr, gap 48px) ; la nav reste horizontale, le toggle masqué, les actions en rangée. Aucune régression constatée sur le rendu desktop.

## 11. Risques

- Éléments vides de contenu JS (nav/footer) visibles avant injection : risque déjà couvert en Phase 02, non aggravé.
- `white-space: normal` sur les boutons peut augmenter leur hauteur sur très petit écran pour les libellés longs (comportement attendu et désiré).

## 12. Git

Aucun commit ni push effectué. Seuls `assets/css/styles.css` et `assets/js/main.js` sont modifiés (non suivis pour staging).

---

## VERDICT : PASS

La Phase 03 est validée : aucun débordement horizontal sur toutes les résolutions testées (320→desktop, 7 pages), navigation mobile pleinement fonctionnelle (19/19 tests CDP), zones tactiles conformes, breakpoints cohérents, aucun changement de design/couleurs/texte, routage Phase 02 intact, aucun commit ni push.
