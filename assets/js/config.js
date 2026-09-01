/* ============================================================
 * QDev Digital — Configuration centrale
 * ------------------------------------------------------------
 * Modifie uniquement ce fichier pour mettre à jour :
 * coordonnées, WhatsApp, réseaux sociaux, services, portfolio…
 * Aucune autre modification n'est nécessaire ailleurs.
 * ============================================================ */

const QDEV_CONFIG = {
  /* ---------- Identité ---------- */
  name: "QDev Digital",
  shortName: "QDev",
  slogan: "Donnons vie à vos idées numériques.",
  tagline:
    "Agence numérique freelance spécialisée dans la création de solutions digitales sur mesure : sites vitrines, développements web et supports visuels professionnels.",

  /* ---------- Coordonnées ---------- */
  /* WhatsApp : format international sans "+", espaces ni tirets (ex: "33612345678") */
  whatsapp: "221708448676",
  whatsappDisplay: "+221 70 844 86 76",
  phone: "+221 70 844 86 76",
  email: "qassimdv@gmail.com",

  /* ---------- Domaine de production (définitif) ---------- */
  /* Sans slash final. Sert à : canonical, og:url, og:image, JSON-LD et sitemap. */
  siteUrl: "https://www.qdev-digital.com",

  /* ---------- Réseaux sociaux (laisser vide si non fournis) ---------- */
  /* Format attendu : pseudo/handle uniquement, sans "https://" ni "@" */
  /* Ex. instagram: "moncompte" → https://instagram.com/moncompte            */
  social: {
    instagram: "qdevdigital",
    facebook: "",
    linkedin: "",
    twitter: "",
    tiktok: "qdevdigital",
  },

  /* ---------- Services ---------- */
  services: [
    {
      id: "cv",
      title: "CV professionnels",
      icon: "document",
      description:
        "Un CV clair, moderne et percutant qui met en valeur vos compétences et vos expériences pour maximiser vos chances.",
      advantages: [
        "Design moderne et professionnel",
        "Adapté aux logiciels de recrutement",
        "Version PDF haute qualité",
        "Livraison rapide",
      ],
      featured: true,
    },
    {
      id: "flyers",
      title: "Flyers & affiches",
      icon: "image",
      description:
        "Des supports visuels attractifs pour promouvoir vos événements, offres et communications papier ou numériques.",
      advantages: [
        "Visuels accrocheurs et lisibles",
        "Adaptés impression et réseaux sociaux",
        "Déclinaisons multi-formats",
        "Respect de votre identité visuelle",
      ],
      featured: true,
    },
    {
      id: "catalogues",
      title: "Catalogues WhatsApp",
      icon: "whatsapp",
      description:
        "Des catalogues produits professionnels, organisés et faciles à partager sur WhatsApp pour vendre plus simplement.",
      advantages: [
        "Présentation claire de vos produits",
        "Faciles à partager sur WhatsApp",
        "Mise à jour simple et rapide",
        "Format adapté mobile",
      ],
      featured: true,
    },
    {
      id: "vitrines",
      title: "Sites vitrines",
      icon: "globe",
      description:
        "Un site internet élégant et rapide pour présenter votre activité, rassurer vos clients et générer des contacts.",
      advantages: [
        "Design sur mesure et professionnel",
        "Optimisé mobile et tablette",
        "Rapide et accessible",
        "Boutons de contact intégrés",
      ],
      featured: true,
    },
    {
      id: "webdev",
      title: "Développement web personnalisé",
      icon: "code",
      description:
        "Des applications et fonctionnalités web développées sur mesure pour répondre précisément à vos besoins.",
      advantages: [
        "Développement sur mesure",
        "Technologies modernes et fiables",
        "Code propre et évolutif",
        "Accompagnement technique complet",
      ],
      featured: false,
    },
    {
      id: "surmesure",
      title: "Solutions digitales sur mesure",
      icon: "gear",
      description:
        "Un accompagnement global pour toutes vos idées numériques : analyse, conception et réalisation de votre projet.",
      advantages: [
        "Analyse de vos besoins",
        "Conception adaptée à votre activité",
        "Réalisation complète de A à Z",
        "Suivi et améliorations continues",
      ],
      featured: false,
    },
  ],

  /* ---------- Avantages QDev Digital ---------- */
  advantages: [
    {
      title: "Sur mesure",
      text: "Chaque projet est pensé pour votre activité, jamais de solution copiée-collée.",
    },
    {
      title: "Écoute & conseil",
      text: "Un interlocuteur unique qui comprend votre besoin et vous guide à chaque étape.",
    },
    {
      title: "Qualité & soin",
      text: "Design soigné, code fiable et finitions propres à chaque livraison.",
    },
    {
      title: "Accompagnement",
      text: "Vous n'êtes jamais seul : je vous forme et vous assiste après la livraison.",
    },
  ],

  /* ---------- Portfolio ---------- */
  /* Une seule réalisation actuellement : PRODUIT, projet personnel EN COURS DE DÉVELOPPEMENT.
     Il n'est pas finalisé : ne le présenter jamais comme une livraison terminée.
     Pour ajouter un futur projet terminé : copier une entrée, remplacer les champs
     (titre, catégorie, description, technologies, image, lien) et retirer `status` (ou
     le laisser absent) pour qu'il soit affiché comme une réalisation finalisée. */
  portfolio: [
    {
      id: "produit",
      title: "PRODUIT",
      category: "personnels",
      status: "in-progress",
      description:
        "Projet personnel en cours de développement : une solution digitale que je conçois et développe de A à Z. Cette section sera enrichie des réalisations finalisées au fil des livraisons.",
      technologies: [],
      image: "assets/images/placeholder-portfolio.svg",
      link: "",
    },
  ],

  /* ---------- Catégories portfolio (filtres) ---------- */
  portfolioCategories: [
    { id: "all", label: "Tous" },
    { id: "sites", label: "Sites web" },
    { id: "cv", label: "CV" },
    { id: "flyers", label: "Flyers & affiches" },
    { id: "catalogues", label: "Catalogues" },
    { id: "applications", label: "Applications" },
    { id: "personnels", label: "Projets personnels" },
  ],

  /* ---------- Processus ---------- */
  process: [
    {
      step: 1,
      title: "Besoin du client",
      text: "Nous échangeons pour comprendre votre besoin, votre activité et vos objectifs.",
    },
    {
      step: 2,
      title: "Analyse",
      text: "Analyse du contexte, des contraintes et des pistes de solution adaptées.",
    },
    {
      step: 3,
      title: "Devis",
      text: "Proposition claire : périmètre, délais et tarifs, sans surprise.",
    },
    {
      step: 4,
      title: "Réalisation",
      text: "Conception et développement de votre projet avec des points réguliers.",
    },
    {
      step: 5,
      title: "Validation",
      text: "Vous testez et validez chaque livraison avant sa mise en ligne.",
    },
    {
      step: 6,
      title: "Livraison",
      text: "Remise du projet finalisé, accompagnée des explications nécessaires.",
    },
  ],

  /* ---------- Tarifs ---------- */
  /* Monnaie de référence : FCFA (XOF). L'euro est calculé automatiquement.
     `price` : tarif de départ en FCFA (source unique).
     `quoteOnly: true` : affiche « Sur devis » dans les deux monnaies.
     `service` : id d'un service pour pré-remplir le formulaire de devis (laisser vide sinon). */
  currency: {
    base: "FCFA",
    rate: 656, /* Taux fixe : 1 EUR = 656 FCFA */
  },
  pricing: [
    {
      id: "cv",
      title: "CV professionnel",
      icon: "document",
      price: 5000,
      service: "cv",
      description: "Un CV clair, moderne et percutant, adapté aux logiciels de recrutement.",
    },
    {
      id: "flyers",
      title: "Flyer / affiche",
      icon: "image",
      price: 5000,
      service: "flyers",
      description: "Des visuels attractifs pour promouvoir vos offres, événements et communications.",
    },
    {
      id: "catalogues",
      title: "Catalogue WhatsApp",
      icon: "whatsapp",
      price: 10000,
      service: "catalogues",
      description: "Des catalogues produits professionnels, clairs et faciles à partager.",
    },
    {
      id: "vitrines",
      title: "Site vitrine",
      icon: "globe",
      price: 75000,
      service: "vitrines",
      description: "Un site élégant et rapide pour présenter votre activité et générer des contacts.",
    },
    {
      id: "entreprise",
      title: "Pack entreprise",
      icon: "gear",
      price: 150000,
      service: "",
      description: "Une offre complète pour les entreprises : site, supports visuels et accompagnement.",
    },
    {
      id: "personnalise",
      title: "Projet personnalisé",
      icon: "code",
      quoteOnly: true,
      service: "surmesure",
      description: "Une idée, un besoin spécifique ? Une solution sur mesure vous sera proposée.",
    },
  ],

  /* ---------- Budgets & délais (formulaire devis) ---------- */
  budgets: [
    "Moins de 50 000 FCFA",
    "50 000 – 150 000 FCFA",
    "150 000 – 500 000 FCFA",
    "500 000 – 1 000 000 FCFA",
    "1 000 000 FCFA et plus",
  ],
  delais: ["Urgent (moins d'une semaine)", "1 à 3 semaines", "1 à 2 mois", "Je ne sais pas encore"],

  /* ---------- Message WhatsApp prérempli ---------- */
  whatsappMessage:
    "Bonjour QDev Digital, je souhaite obtenir plus d'informations.",

  /* ---------- URL helper WhatsApp ---------- */
  whatsappUrl(message) {
    const text = encodeURIComponent(message || this.whatsappMessage);
    return "https://wa.me/" + this.whatsapp + "?text=" + text;
  },
};
