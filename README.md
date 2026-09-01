# QDev Digital — Site vitrine

Site vitrine professionnel pour **QDev Digital**, agence numérique freelance spécialisée dans la création de solutions digitales.

Slogan : *« Donnons vie à vos idées numériques. »*

## Structure

```
index.html                  Accueil (hero, services, avantages, portfolio, processus, CTA)
pages/
  services.html             Présentation détaillée des services
  portfolio.html            Réalisations avec filtres par catégorie
  apropos.html              Présentation, mission et vision
  processus.html            Processus en 6 étapes
  devis.html                Formulaire de devis fonctionnel (envoi via WhatsApp)
  contact.html              Coordonnées et réseaux sociaux
assets/
  css/styles.css            Design system complet (responsive + dark mode)
  js/config.js              Configuration centrale (coordonnées, services, portfolio…)
  js/main.js                Interactions, rendu dynamique, validation + envoi WhatsApp
  images/                   Favicon, image Open Graph, placeholders SVG
robots.txt                  Autorisations crawl + sitemap
sitemap.xml                 Sitemap (7 pages)
README.md
```

## Personnalisation

Toutes les informations réutilisées sur le site sont centralisées dans **`assets/js/config.js`** :

| Élément | Champ à modifier |
| --- | --- |
| Nom / slogan | `name`, `slogan`, `tagline` |
| Domaine de production | `siteUrl` (canonical, og:url, og:image, JSON-LD et sitemap sont synchronisés automatiquement) |
| Numéro WhatsApp | `whatsapp` (format international, sans `+`) et `whatsappDisplay` |
| Téléphone / email | `phone`, `email` |
| Réseaux sociaux | `social` (pseudo uniquement ; laisser vide pour masquer) |
| Services | tableau `services` (titre, description, avantages, icône) |
| Tarifs | `pricing` (prix de départ en FCFA ; `quoteOnly: true` pour « Sur devis ») et `currency` (taux fixe `rate` : 1 € = 656 FCFA) |
| Portfolio | tableau `portfolio` (ajouter de vraies réalisations ; `status: "in-progress"` affiche le badge « En cours de développement ») |
| Processus | tableau `process` |
| Monnaie des tarifs | `currency` (base = FCFA, `rate` = 656) et `pricing` (prix sources en FCFA) ; bascule FCFA/EUR sans rechargement, choix mémorisé |
| Budgets / délais du formulaire | `budgets`, `delais` |

> **À compléter avant mise en ligne** : le domaine (`https://www.qdev-digital.com`) et le numéro WhatsApp (`+221 70 844 86 76`) sont configurés. L'email (`qassimdv@gmail.com`) et les réseaux sociaux (TikTok / Instagram `@qdevdigital`) sont renseignés. Le portfolio ne contient qu'un seul projet personnel, **PRODUIT**, encore **en cours de développement** : ajouter les futures réalisations terminées dans `portfolio` (sans `status` pour les présenter comme finalisées).

## Lancement en local

```bash
# Depuis la racine du projet
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Formulaire de devis

Le formulaire (`pages/devis.html`) est entièrement fonctionnel : validation en direct, messages d'erreur, anti-spam (honeypot) et état d'envoi.

**L'envoi se fait via WhatsApp** : à la soumission, la demande (nom, téléphone, service, budget, délai, description) est compilée dans un message pré-rempli ouvert vers `whatsapp` (config.js). Aucun backend n'est nécessaire.

## Checklist de mise en production

1. **Domaine** — `siteUrl` dans `config.js` (définitif : `https://www.qdev-digital.com`). Les URLs canoniques, og:url, og:image, le JSON-LD et le sitemap se synchronisent dessus.
2. **Coordonnées** — confirmer `whatsapp`, `whatsappDisplay`, `phone` et surtout `email` dans `config.js`.
3. **Portfolio** — ajouter les réalisations finalisées dans `portfolio` (image, lien, description) ; retirer `status` pour les présenter comme terminées. Ne pas présenter **PRODUIT** comme finalisé (il reste marqué `status: "in-progress"`).
4. **Réseaux sociaux** — renseigner `social` (pseudo uniquement ; sinon les blocs restent masqués).
5. **Vérifier l'envoi WhatsApp** — soumettre le formulaire et confirmer que le message pré-rempli arrive bien sur le bon numéro.
6. **Test final** — parcourir les 7 pages sur mobile et desktop, vérifier la console (0 erreur).

## Technologie

HTML5 + CSS3 + JavaScript moderne, sans framework. Fichiers statiques, aucun build requis.

## Notes

- À compléter avant mise en ligne : ajouter les réalisations finalisées au portfolio (le seul projet présent, **PRODUIT**, est personnel et en cours de développement).
- URL canonique, balises Open Graph, `robots.txt`, `sitemap.xml` et données structurées JSON-LD (`ProfessionalService`) en place, tous synchronisés sur `siteUrl`.
- Dark mode géré automatiquement via `prefers-color-scheme`.
