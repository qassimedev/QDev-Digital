/* ============================================================
 * QDev Digital — Script principal
 * Gère : header/footer partagés, menu mobile, portfolio,
 * formulaire de devis, boutons WhatsApp et animations.
 * ============================================================ */

(function () {
  "use strict";

  /* ---------- Chemins ---------- */
  const IS_PAGES = window.location.pathname.includes("/pages/");
  const ROOT = IS_PAGES ? "../" : "./";

  /* ---------- Petites icônes SVG (inline, sans dépendance) ---------- */
  const ICONS = {
    document:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    image:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
    whatsapp:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>',
    globe:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    code:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    gear:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    check:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
    arrow:
      '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    "arrow-down":
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    twitter:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>',
    tiktok:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 5.82A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3c-1.08 0-2.08-.5-2.69-1.48z"/></svg>',
  };

  const SOCIAL_NAMES = {
    instagram: "Instagram",
    facebook: "Facebook",
    linkedin: "LinkedIn",
    twitter: "Twitter",
    tiktok: "TikTok",
  };

  const SOCIAL_URLS = {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
    tiktok: "https://tiktok.com/@",
  };

  /* ---------- Helpers ---------- */
  let formStatusEl = null;

  /* Monnaie affichée pour les tarifs (FCFA par défaut, mémorisée dans localStorage). */
  let currentCurrency = "FCFA";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const esc = (str) =>
    String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  function icon(name, cls) {
    const svg = ICONS[name] || "";
    return cls ? svg.replace('<svg ', `<svg class="${esc(cls)}" `) : svg;
  }

  function assetPath(p) {
    return ROOT + p.replace(/^\.\//, "");
  }

  /* ---------- Navigation ---------- */
  const NAV_ITEMS = [
    { href: "index.html", label: "Accueil" },
    { href: "pages/services.html", label: "Services" },
    { href: "pages/portfolio.html", label: "Portfolio" },
    { href: "pages/apropos.html", label: "À propos" },
    { href: "pages/processus.html", label: "Processus" },
    { href: "pages/contact.html", label: "Contact" },
  ];

  function currentPage() {
    return window.location.pathname.split("/").pop() || "index.html";
  }

  function renderNav() {
    const wrap = $("#nav-placeholder");
    if (!wrap) return;

    const page = currentPage();

    const links = NAV_ITEMS.map((item) => {
      const active = item.href.split("/").pop() === page;
      const ariaCurrent = active ? ' aria-current="page"' : "";
      return `<a class="nav__link${active ? " is-active" : ""}" href="${ROOT}${item.href}"${ariaCurrent}>${esc(item.label)}</a>`;
    }).join("");

    wrap.innerHTML = `
      <a class="brand" href="${ROOT}index.html" aria-label="${esc(QDEV_CONFIG.name)} — Accueil">
        <span class="brand__logo">Q</span>
        <span>${esc(QDEV_CONFIG.name)}</span>
      </a>
      <button class="nav-toggle" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="site-nav">
        <span class="nav-toggle__bar"></span>
        <span class="nav-toggle__bar"></span>
        <span class="nav-toggle__bar"></span>
      </button>
      <nav class="nav" id="site-nav" aria-label="Navigation principale">
        ${links}
        <div class="nav__cta">
          <a class="btn btn-primary btn-sm${page === "devis.html" ? " is-active" : ""}" href="${ROOT}pages/devis.html"${page === "devis.html" ? ' aria-current="page"' : ""}>Demander un devis</a>
        </div>
      </nav>`;

    bindMobileMenu();
  }

  function bindMobileMenu() {
    const toggle = $(".nav-toggle");
    const nav = $(".nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });

    $$(".nav__link", nav).forEach((link) =>
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    const wrap = $("#footer-placeholder");
    if (!wrap) return;

    const year = new Date().getFullYear();
    const socials = Object.keys(QDEV_CONFIG.social)
      .filter((key) => QDEV_CONFIG.social[key])
      .map(
        (key) =>
          `<li><a href="${SOCIAL_URLS[key]}${esc(QDEV_CONFIG.social[key])}" target="_blank" rel="noopener noreferrer">${icon(key, "icon")}${esc(SOCIAL_NAMES[key])}</a></li>`
      )
      .join("");

    wrap.innerHTML = `
      <div class="footer__main container">
        <div class="footer__brand">
          <a class="brand" href="${ROOT}index.html" aria-label="${esc(QDEV_CONFIG.name)} — Accueil">
            <span class="brand__logo">Q</span>
            <span>${esc(QDEV_CONFIG.name)}</span>
          </a>
          <p>${esc(QDEV_CONFIG.slogan)}</p>
        </div>
        <div class="footer__col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="${ROOT}index.html">Accueil</a></li>
            <li><a href="${ROOT}pages/services.html">Services</a></li>
            <li><a href="${ROOT}pages/portfolio.html">Portfolio</a></li>
            <li><a href="${ROOT}pages/processus.html">Processus</a></li>
            <li><a href="${ROOT}pages/apropos.html">À propos</a></li>
            <li><a href="${ROOT}pages/contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Contact</h4>
          <ul>
            <li><a href="${QDEV_CONFIG.whatsappUrl()}" target="_blank" rel="noopener noreferrer">WhatsApp : ${esc(QDEV_CONFIG.whatsappDisplay)}</a></li>
            <li><a href="mailto:${esc(QDEV_CONFIG.email)}">${esc(QDEV_CONFIG.email)}</a></li>
            <li><a href="${ROOT}pages/devis.html">Demander un devis</a></li>
            ${socials}
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container">
          &copy; ${year} ${esc(QDEV_CONFIG.name)} — ${esc(QDEV_CONFIG.slogan)}
        </div>
      </div>`;
  }

  /* ---------- Icônes via attribut data-icon ---------- */
  function renderDataIcons() {
    $$("[data-icon]").forEach((el) => {
      el.innerHTML = icon(el.dataset.icon);
    });
  }

  /* ---------- Boutons WhatsApp dynamiques ---------- */
  function bindWhatsAppButtons() {
    const cfg = QDEV_CONFIG;

    $$("[data-whatsapp]").forEach((btn) => {
      const service = btn.getAttribute("data-whatsapp");
      if (service && service !== "true") {
        let label = null;
        const svc = cfg.services.find((s) => s.id === service);
        if (svc) {
          label = svc.title;
        } else {
          const pr = cfg.pricing && cfg.pricing.find((p) => p.id === service);
          label = pr ? pr.title : service;
        }
        btn.href = QDEV_CONFIG.whatsappUrl(
          `Bonjour QDev Digital, je suis intéressé(e) par le service « ${label} ».`
        );
      } else {
        btn.href = QDEV_CONFIG.whatsappUrl();
      }
      btn.setAttribute("target", "_blank");
      btn.setAttribute("rel", "noopener noreferrer");
    });
  }

  /* ---------- Services (cartes d'aperçu) ---------- */
  function renderServiceCards() {
    const list = $("#services-list");
    if (!list) return;

    const featured = QDEV_CONFIG.services.filter((s) => s.featured);

    list.innerHTML = featured
      .map(
        (s) => `
        <article class="service-card">
          <div class="service-card__icon" aria-hidden="true">${icon(s.icon)}</div>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.description)}</p>
          <a class="service-card__link" href="${ROOT}pages/services.html#${esc(s.id)}">
            En savoir plus ${icon("arrow")}
          </a>
        </article>`
      )
      .join("");
  }

  /* ---------- Services (détail complet, page services) ---------- */
  function renderServicesDetails() {
    const list = $("#services-detail-list");
    if (!list) return;

    list.innerHTML = QDEV_CONFIG.services
      .map(
        (s) => `
        <article class="service-detail" id="${esc(s.id)}">
          <div class="service-detail__icon" aria-hidden="true">${icon(s.icon)}</div>
          <h2>${esc(s.title)}</h2>
          <p>${esc(s.description)}</p>
          <ul class="service-detail__adv">
            ${s.advantages
              .map((a) => `<li><span class="check">${icon("check")}</span>${esc(a)}</li>`)
              .join("")}
          </ul>
          <div class="service-detail__actions">
            <a class="btn btn-primary" href="${ROOT}pages/devis.html?service=${esc(s.id)}">Demander un devis</a>
            <a class="btn btn-whatsapp" href="#" data-whatsapp="${esc(s.id)}">
              <span class="icon" data-icon="whatsapp"></span> WhatsApp
            </a>
          </div>
        </article>`
      )
      .join("");

    renderDataIcons();
    bindWhatsAppButtons();
  }

  /* ---------- Tarifs ---------- */
  /* Formate un prix FCFA (source) dans la monnaie demandée. */
  function formatPrice(priceFcfa, currency) {
    if (priceFcfa == null) return "Sur devis";
    if (currency === "EUR") {
      const rate = QDEV_CONFIG.currency && QDEV_CONFIG.currency.rate;
      const euros = Math.round(priceFcfa / (rate || 656));
      return `${euros} €`;
    }
    return `${priceFcfa.toLocaleString("fr-FR")} FCFA`;
  }

  function renderPricing() {
    const grid = $("#pricing-grid");
    if (!grid) return;

    const list = QDEV_CONFIG.pricing || [];

    grid.innerHTML = list
      .map((p) => {
        const quoteOnly = p.quoteOnly || p.price == null;
        const priceBlock = quoteOnly
          ? `<span class="pricing-card__from">Sur devis</span>
             <strong class="pricing-card__amount">Sur devis</strong>`
          : `<span class="pricing-card__from">À partir de</span>
             <strong class="pricing-card__amount">${esc(formatPrice(p.price, currentCurrency))}</strong>`;

        const devisHref = p.service
          ? `${ROOT}pages/devis.html?service=${esc(p.service)}`
          : `${ROOT}pages/devis.html`;

        return `
        <article class="pricing-card">
          <div class="pricing-card__icon" aria-hidden="true">${icon(p.icon)}</div>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.description)}</p>
          <div class="pricing-card__price">${priceBlock}</div>
          <div class="pricing-card__actions">
            <a class="btn btn-primary btn-block" href="${devisHref}">Commander</a>
            <a class="btn btn-whatsapp btn-block" href="#" data-whatsapp="${esc(p.id)}">
              <span class="icon" data-icon="whatsapp"></span> WhatsApp
            </a>
          </div>
        </article>`;
      })
      .join("");

    renderDataIcons();
    bindWhatsAppButtons();
  }

  /* Sélecteur FCFA / EUR (€) — bascule les prix sans rechargement. */
  function bindPricingToggle() {
    const toggle = $("#pricing-toggle");
    if (!toggle) return;

    try {
      const saved = localStorage.getItem("qdev-currency");
      if (saved === "EUR" || saved === "FCFA") currentCurrency = saved;
    } catch (e) {
      /* ignore */
    }

    $$("[data-currency]", toggle).forEach((btn) =>
      btn.classList.toggle("is-active", btn.dataset.currency === currentCurrency)
    );

    toggle.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-currency]");
      if (!btn || btn.dataset.currency === currentCurrency) return;
      currentCurrency = btn.dataset.currency;
      $$("[data-currency]", toggle).forEach((b) =>
        b.classList.toggle("is-active", b === btn)
      );
      renderPricing();
      try {
        localStorage.setItem("qdev-currency", currentCurrency);
      } catch (err) {
        /* ignore */
      }
    });
  }

  /* ---------- Avantages ---------- */
  function renderAdvantages() {
    const list = $("#advantages-list");
    if (!list) return;

    list.innerHTML = QDEV_CONFIG.advantages
      .map(
        (a, i) => `
        <article class="adv-card">
          <div class="adv-card__num" aria-hidden="true">${i + 1}</div>
          <h3>${esc(a.title)}</h3>
          <p>${esc(a.text)}</p>
        </article>`
      )
      .join("");
  }

  /* ---------- Processus ---------- */
  function renderProcess() {
    const list = $("#process-list");
    if (!list) return;

    list.innerHTML = QDEV_CONFIG.process
      .map(
        (p) => `
        <article class="process-card">
          <div class="process-card__num" aria-hidden="true">${p.step}</div>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.text)}</p>
        </article>`
      )
      .join("");
  }

  /* ---------- Portfolio ---------- */
  function renderPortfolio(filterId) {
    const grid = $("#portfolio-grid");
    const empty = $("#portfolio-empty");
    if (!grid) return;

    let items = QDEV_CONFIG.portfolio.filter(
      (p) => !filterId || filterId === "all" || p.category === filterId
    );

    const limit = parseInt(grid.getAttribute("data-limit") || "0", 10);
    if (limit > 0) items = items.slice(0, limit);

    if (items.length === 0) {
      grid.innerHTML = "";
      if (empty) empty.classList.remove("hide");
      return;
    }
    if (empty) empty.classList.add("hide");

    grid.innerHTML = items
      .map((p) => {
        const cat = QDEV_CONFIG.portfolioCategories.find((c) => c.id === p.category);
        const techs = (p.technologies || [])
          .map((t) => `<span class="tech-tag">${esc(t)}</span>`)
          .join("");
        const badge = p.placeholder
          ? '<span class="project-card__badge is-placeholder">Démonstration</span>'
          : p.status === "in-progress"
            ? '<span class="project-card__badge is-in-progress">En cours de développement</span>'
            : `<span class="project-card__badge">${esc(cat ? cat.label : p.category)}</span>`;
        const link = p.link
          ? `<a class="service-card__link" href="${esc(p.link)}" target="_blank" rel="noopener noreferrer">Voir le projet ${icon("arrow")}</a>`
          : `<span class="service-card__link" style="color:var(--color-text-soft)">Disponible prochainement</span>`;

        return `
        <article class="project-card">
          <div class="project-card__media">
            <img src="${assetPath(p.image)}" alt="${esc(p.title)}" loading="lazy">
            ${badge}
          </div>
          <div class="project-card__body">
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.description)}</p>
            <div class="project-card__tech">${techs}</div>
            ${link}
          </div>
        </article>`;
      })
      .join("");
  }

  function bindPortfolioFilters() {
    const filters = $("#portfolio-filters");
    if (!filters) return;

    filters.innerHTML = QDEV_CONFIG.portfolioCategories
      .map(
        (c) =>
          `<button class="filter-btn${c.id === "all" ? " is-active" : ""}" type="button" data-filter="${c.id}">${esc(c.label)}</button>`
      )
      .join("");

    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      $$(".filter-btn", filters).forEach((b) => b.classList.toggle("is-active", b === btn));
      renderPortfolio(btn.dataset.filter);
    });
  }

  /* ---------- Contact ---------- */
  function renderContact() {
    const list = $("#contact-list");
    if (!list) return;
    const cfg = QDEV_CONFIG;

    const cards = [
      {
        icon: "whatsapp",
        isWhatsapp: true,
        title: "WhatsApp",
        body: `<a href="${cfg.whatsappUrl()}" target="_blank" rel="noopener noreferrer">${esc(cfg.whatsappDisplay)}</a>`,
        hint: "Réponse rapide",
      },
      {
        icon: "phone",
        title: "Téléphone",
        body: `<a href="tel:${esc(cfg.phone.replace(/\s/g, ""))}">${esc(cfg.phone)}</a>`,
        hint: "Rappel rapide",
      },
      {
        icon: "mail",
        title: "Email",
        body: `<a href="mailto:${esc(cfg.email)}">${esc(cfg.email)}</a>`,
        hint: "Réponse sous 24h",
      },
    ];

    list.innerHTML = cards
      .map(
        (c) => `
        <article class="contact-card">
          <div class="contact-card__icon${c.isWhatsapp ? " is-whatsapp" : ""}" aria-hidden="true">${icon(c.icon)}</div>
          <h3>${esc(c.title)}</h3>
          ${c.body}
          <p>${esc(c.hint)}</p>
        </article>`
      )
      .join("");
  }

  function renderSocial() {
    const block = $("#social-block");
    const row = $("#social-row");
    if (!block || !row) return;

    const socials = Object.keys(QDEV_CONFIG.social).filter((key) => QDEV_CONFIG.social[key]);
    if (socials.length === 0) return;

    row.innerHTML = socials
      .map(
        (key) => `
        <a href="${SOCIAL_URLS[key]}${esc(QDEV_CONFIG.social[key])}" target="_blank" rel="noopener noreferrer" aria-label="${esc(SOCIAL_NAMES[key])}">
          ${icon(key)} ${esc(SOCIAL_NAMES[key])}
        </a>`
      )
      .join("");

    block.hidden = false;
  }

  /* ---------- Formulaires de devis ---------- */
  function populateFormOptions() {
    const selectService = $("#f-service");
    if (selectService) {
      const options = QDEV_CONFIG.services
        .map((s) => `<option value="${esc(s.id)}">${esc(s.title)}</option>`)
        .join("");
      selectService.insertAdjacentHTML(
        "beforeend",
        options
      );
    }
    const selectBudget = $("#f-budget");
    if (selectBudget) {
      selectBudget.insertAdjacentHTML(
        "beforeend",
        QDEV_CONFIG.budgets.map((b) => `<option value="${esc(b)}">${esc(b)}</option>`).join("")
      );
    }
    const selectDelai = $("#f-delai");
    if (selectDelai) {
      selectDelai.insertAdjacentHTML(
        "beforeend",
        QDEV_CONFIG.delais.map((d) => `<option value="${esc(d)}">${esc(d)}</option>`).join("")
      );
    }

    // Pré-sélection du service via ?service=id (ex. pages/devis.html?service=vitrines)
    try {
      const params = new URLSearchParams(window.location.search);
      const serviceId = params.get("service");
      if (serviceId && selectService) {
        const option = Array.from(selectService.options).find((o) => o.value === serviceId);
        if (option) selectService.value = serviceId;
      }
    } catch (e) {
      /* ignore */
    }
  }

  function setFieldState(field, valid, message) {
    field.classList.toggle("is-invalid", !valid);
    field.classList.toggle("is-valid", valid);
    const error = field.querySelector(".field-error");
    if (error) error.textContent = message || "";
    return valid;
  }

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const PHONE_RE = /^[+\d][\d\s().-]{6,}$/;

  function validateField(fieldEl) {
    const field = fieldEl.closest(".form-field");
    const value = fieldEl.value.trim();
    let valid = true;
    let msg = "";

    if (fieldEl.required && !value) {
      valid = false;
      msg = "Ce champ est obligatoire.";
    } else if (value) {
      if (fieldEl.type === "email" && !EMAIL_RE.test(value)) {
        valid = false;
        msg = "Veuillez saisir une adresse email valide (ex. nom@domaine.com).";
      }
      if (fieldEl.id === "f-phone" && !PHONE_RE.test(value)) {
        valid = false;
        msg = "Veuillez saisir un numéro de téléphone / WhatsApp valide.";
      }
      if (fieldEl.minLength && value.length < fieldEl.minLength) {
        valid = false;
        msg = `Veuillez saisir au moins ${fieldEl.minLength} caractères.`;
      }
    }

    setFieldState(field, valid, msg);
    return valid;
  }

  function bindDevvisForm() {
    const form = $("#devis-form");
    if (!form) return;

    formStatusEl = $("#form-status");
    const submitBtn = form.querySelector("[type='submit']");
    const fields = $$("input, select, textarea", form);

    // Anti-spam : champ piège (honeypot) invisible
    const honeypot = document.createElement("input");
    honeypot.type = "text";
    honeypot.name = "website";
    honeypot.tabIndex = -1;
    honeypot.autocomplete = "off";
    honeypot.setAttribute("aria-hidden", "true");
    honeypot.style.cssText = "position:absolute;left:-9999px;opacity:0;height:0;width:0;";
    form.appendChild(honeypot);

    // Validation en direct
    fields.forEach((el) => {
      el.addEventListener("blur", () => validateField(el));
      el.addEventListener("input", () => {
        const field = el.closest(".form-field");
        if (field && (field.classList.contains("is-invalid") || field.classList.contains("is-valid"))) {
          validateField(el);
        }
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Protection contre les robots (honeypot rempli automatiquement)
      if (honeypot.value !== "") {
        showFormStatus(
          "error",
          "La soumission a été rejetée automatiquement. Veuillez réessayer."
        );
        return;
      }

      let allValid = true;
      fields.forEach((el) => {
        if (!validateField(el)) allValid = false;
      });

      if (!allValid) {
        const firstInvalid = form.querySelector(".is-invalid input, .is-invalid select, .is-invalid textarea");
        showFormStatus("error", "Veuillez corriger les champs indiqués en rouge.");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Collecte des données
      const data = {};
      fields.forEach((el) => {
        if (el.name && el.name !== "website") data[el.name] = el.value.trim();
      });

      // Envoi de la demande via WhatsApp (message pré-rempli)
      const waUrl = buildQuoteMessage(data);

      submitBtn.disabled = true;
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Ouverture de WhatsApp…";
      showFormStatus("success", "Votre demande est prête : WhatsApp s'ouvre pour l'envoyer.");
      if (formStatusEl) formStatusEl.scrollIntoView({ behavior: "smooth", block: "center" });

      form.reset();
      fields.forEach((el) => {
        const field = el.closest(".form-field");
        if (field) field.classList.remove("is-invalid", "is-valid");
      });

      const win = window.open(waUrl, "_blank", "noopener,noreferrer");
      if (!win) window.location.href = waUrl;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 2500);
    });
  }

  /* Construit le message WhatsApp de demande de devis à partir du formulaire. */
  function buildQuoteMessage(data) {
    const lines = [
      `Bonjour ${QDEV_CONFIG.name}, je souhaite demander un devis.`,
      "",
      `• Nom : ${data.nom || ""} ${data.prenom || ""}`.replace(/\s+/g, " ").trim(),
      `• Téléphone : ${data.telephone || ""}`,
      `• Email : ${data.email || ""}`,
    ];
    if (data.service) {
      const svc = QDEV_CONFIG.services.find((s) => s.id === data.service);
      lines.push(`• Service souhaité : ${svc ? svc.title : data.service}`);
    }
    if (data.budget) lines.push(`• Budget approximatif : ${data.budget}`);
    if (data.delai) lines.push(`• Délai souhaité : ${data.delai}`);
    lines.push("", `Projet : ${data.description || ""}`);
    return QDEV_CONFIG.whatsappUrl(lines.join("\n"));
  }

  function showFormStatus(type, message) {
    if (!formStatusEl) return;
    formStatusEl.className = "form-status";
    formStatusEl.classList.add(type === "success" ? "is-success" : "is-error");
    formStatusEl.textContent = message;
  }

  /* ---------- Animations reveal ---------- */
  function bindReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Stats du hero (compteur de services dynamique) ---------- */
  function renderHeroStats() {
    const stat = $("#stat-services");
    if (!stat) return;
    stat.textContent = String(QDEV_CONFIG.services.length);
  }

  /* ---------- SEO : synchronise canonical / og:url / og:image depuis config.js ---------- */
  function syncSeoMeta() {
    const siteUrl = String(QDEV_CONFIG.siteUrl || "").replace(/\/+$/, "");
    if (!siteUrl) return;

    const pagePath = window.location.pathname.replace(/^\//, "");
    const abs =
      pagePath && pagePath !== "index.html" ? siteUrl + "/" + pagePath : siteUrl + "/";

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = abs;

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = abs;

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.content = siteUrl + "/assets/images/og-image.png";
  }

  /* ---------- Données structurées (JSON-LD) ---------- */
  function injectStructuredData() {
    if (document.getElementById("ld-json")) return;

    const url = String(QDEV_CONFIG.siteUrl || "").replace(/\/+$/, "");
    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: QDEV_CONFIG.name,
      slogan: QDEV_CONFIG.slogan,
      description: QDEV_CONFIG.tagline,
      url: url,
      email: QDEV_CONFIG.email,
      telephone: QDEV_CONFIG.phone,
      priceRange: "5 000 FCFA – 150 000 FCFA et +",
    };

    const socials = Object.keys(QDEV_CONFIG.social).filter((k) => QDEV_CONFIG.social[k]);
    if (socials.length) {
      schema.sameAs = socials.map((k) => (SOCIAL_URLS[k] || "") + QDEV_CONFIG.social[k]);
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ld-json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  /* ---------- Avertissement si coordonnées manquantes (filet de sécurité) ---------- */
  function warnPlaceholders() {
    if (!QDEV_CONFIG.whatsapp || /^0{6,}/.test(QDEV_CONFIG.whatsapp)) {
      console.warn("[QDev Digital] Config : le numéro WhatsApp est encore un placeholder (config.js).");
    }
    if (!QDEV_CONFIG.email || !QDEV_CONFIG.email.includes("@")) {
      console.warn("[QDev Digital] Config : l'adresse email n'est pas renseignée (config.js).");
    }
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderNav();
    renderFooter();
    renderDataIcons();
    bindWhatsAppButtons();
    populateFormOptions();
    renderServiceCards();
    renderServicesDetails();
    renderPricing();
    bindPricingToggle();
    renderAdvantages();
    renderProcess();
    bindPortfolioFilters();
    renderPortfolio("all");
    renderContact();
    renderSocial();
    renderHeroStats();
    bindDevvisForm();
    injectStructuredData();
    syncSeoMeta();
    warnPlaceholders();
    bindReveal();
  });
})();
