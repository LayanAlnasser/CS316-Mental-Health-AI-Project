(function () {
  const EMAIL = "Layanaalnasser@gmail.com";
  const LINKEDIN = "https://www.linkedin.com/in/layan-alnasser";
  const GITHUB = "https://github.com/LayanAlnasser";

  function getBase() {
    try {
      if (typeof __md_get === "function") return __md_get("__base") || "";
    } catch (e) {}
    return "";
  }

  function url(path) {
    const base = getBase();
    return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
  }

  function getSiteName() {
    const titleEl = document.querySelector(".md-header__title .md-ellipsis");
    return titleEl ? titleEl.textContent.trim() : "Website";
  }

  function addHeaderCTA() {
    const headerInner = document.querySelector(".md-header__inner");
    if (!headerInner) return;
    if (headerInner.querySelector(".header-actions")) return;

    const actions = document.createElement("div");
    actions.className = "header-actions";

    const github = document.createElement("a");
    github.className = "header-cta header-cta--github";
    github.href = GITHUB;
    github.target = "_blank";
    github.rel = "noopener";
    github.textContent = "GitHub";
    github.setAttribute("aria-label", "GitHub");

    const contact = document.createElement("a");
    contact.className = "header-cta";
    contact.href = `mailto:${EMAIL}`;
    contact.textContent = "Contact";
    contact.setAttribute("aria-label", "Contact");

    actions.appendChild(github);
    actions.appendChild(contact);
    headerInner.appendChild(actions);
  }

  function styleFooterMetaToMatch() {
    const meta = document.querySelector(".md-footer-meta");
    if (!meta) return;

    const scheme =
      document.documentElement.getAttribute("data-md-color-scheme") || "default";

    if (scheme === "slate") {
      meta.style.background =
        "linear-gradient(90deg, #3b0a0d, #65141b)";
      meta.style.borderTop = "1px solid rgba(255, 255, 255, 0.18)";
      meta.style.color = "rgba(255, 240, 241, 0.96)";
    } else {
      meta.style.background =
        "linear-gradient(90deg, #8b1220, #db2446)";
      meta.style.borderTop = "1px solid rgba(255, 255, 255, 0.24)";
      meta.style.color = "rgba(255, 244, 245, 0.98)";
    }

    meta.querySelectorAll("*").forEach((el) => {
      el.style.color = "inherit";
    });

    const copyright = meta.querySelector(".md-copyright");
    if (copyright) {
      const materialLink = copyright.querySelector(
        'a[href*="squidfunk.github.io/mkdocs-material"]'
      );
      if (materialLink) materialLink.remove();

      // Remove leftover plain text nodes like "Made with" while keeping the highlight line.
      Array.from(copyright.childNodes).forEach((node) => {
        if (node.nodeType !== Node.TEXT_NODE) return;
        const text = (node.textContent || "").trim();
        if (!text || /made with/i.test(text)) {
          node.remove();
        }
      });
    }
  }

  function addFooterBlock() {
    const footer = document.querySelector(".md-footer");
    if (!footer) return;
    if (footer.querySelector(".custom-footer")) return;

    const meta = footer.querySelector(".md-footer-meta");
    const block = document.createElement("section");
    block.className = "custom-footer";

    const siteName = getSiteName();

    block.innerHTML = `
      <div class="custom-footer__inner">
        <div class="custom-footer__left">
          <div class="custom-footer__eyebrow">Mental Health AI Research</div>
          <div class="custom-footer__title">${siteName}</div>
          <div class="custom-footer__subtitle">
            Embedding-based monitoring for depression and anxiety severity with responsible AI design.
          </div>

          <div class="custom-footer__chips">
            <span class="footer-chip">Arabic NLP</span>
            <span class="footer-chip">Longitudinal Alerts</span>
            <span class="footer-chip">Reproducible Research</span>
          </div>

          <form class="custom-footer__form" action="mailto:${EMAIL}" method="get">
            <input
              class="custom-footer__input"
              type="email"
              name="email"
              placeholder="Your email for project updates"
              autocomplete="email"
              required
            >
            <button class="custom-footer__button" type="submit">
              Join Updates
            </button>
          </form>

          <div class="custom-footer__note">
            Questions or collaboration ideas are welcome. We respond by email.
          </div>
        </div>

        <div class="custom-footer__right">
          <div class="footer-col">
            <div class="footer-col__title">Project</div>
            <a class="footer-link" href="${url("")}">Home</a>
            <a class="footer-link" href="${url("introduction/")}">Overview</a>
            <a class="footer-link" href="${url("methodology/models/")}">Models</a>
            <a class="footer-link" href="${url("results/findings/")}">Findings</a>
          </div>

          <div class="footer-col">
            <div class="footer-col__title">Research</div>
            <a class="footer-link" href="${url("paper/paper/")}">IEEE Paper</a>
            <a class="footer-link" href="${url("paper/slides/")}">Slides</a>
            <a class="footer-link" href="${url("dataset/")}">Dataset</a>
            <a class="footer-link" href="${url("documentation/ethics/")}">Ethics</a>
          </div>

          <div class="footer-col footer-col--connect">
            <div class="footer-col__title">Connect</div>
            <a class="footer-link footer-link--email" href="mailto:${EMAIL}">${EMAIL}</a>
            <a class="footer-link" href="${LINKEDIN}" target="_blank" rel="noopener">LinkedIn</a>
            <a class="footer-link" href="${GITHUB}" target="_blank" rel="noopener">GitHub</a>
            <a class="footer-link" href="${url("privacy-notice/")}">Privacy Notice</a>
            <a class="footer-link" href="${url("copyright/")}">Copyright</a>
          </div>
        </div>
      </div>
    `;

    if (meta) footer.insertBefore(block, meta);
    else footer.prepend(block);
  }

  function run() {
    addHeaderCTA();
    addFooterBlock();
    styleFooterMetaToMatch();
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(run);
  } else {
    document.addEventListener("DOMContentLoaded", run);
  }
})();
