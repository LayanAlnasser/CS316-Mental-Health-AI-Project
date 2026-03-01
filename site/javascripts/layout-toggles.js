(function () {
  const PRIMARY_KEY = "cs316_primary_collapsed";
  const TOC_KEY = "cs316_toc_collapsed";
  const VERSION_KEY = "cs316_layout_version";
  const LAYOUT_VERSION = "3";

  function readBool(key) {
    try {
      return localStorage.getItem(key) === "1";
    } catch (e) {
      return false;
    }
  }

  function writeBool(key, value) {
    try {
      localStorage.setItem(key, value ? "1" : "0");
    } catch (e) {}
  }

  function state() {
    return {
      primaryCollapsed: readBool(PRIMARY_KEY),
      tocCollapsed: readBool(TOC_KEY),
    };
  }

  function buildTocFallback() {
    const navList = document.querySelector(
      ".md-sidebar--secondary .md-nav--secondary .md-nav__list"
    );
    if (!navList || navList.querySelector(".md-nav__item")) return;

    const headings = Array.from(
      document.querySelectorAll(".md-content__inner .md-typeset h2, .md-content__inner .md-typeset h3")
    ).filter((heading) => heading.id);

    if (headings.length > 0) {
      headings.slice(0, 10).forEach((heading) => {
        const item = document.createElement("li");
        item.className = "md-nav__item";
        const link = document.createElement("a");
        link.className = "md-nav__link";
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent.trim();
        item.appendChild(link);
        navList.appendChild(item);
      });
      return;
    }

    const firstTitle = document.querySelector(
      ".md-content__inner .md-typeset h1, .md-content__inner .md-typeset h2"
    );
    if (firstTitle) {
      if (!firstTitle.id) firstTitle.id = "page-top";
      const item = document.createElement("li");
      item.className = "md-nav__item";
      const link = document.createElement("a");
      link.className = "md-nav__link";
      link.href = `#${firstTitle.id}`;
      link.textContent = "Top";
      item.appendChild(link);
      navList.appendChild(item);
    }
  }

  function hasToc() {
    return (
      document.querySelectorAll(".md-sidebar--secondary .md-nav__link").length > 0
    );
  }

  function applyState() {
    const html = document.documentElement;
    const current = state();
    const secondarySidebar = document.querySelector(".md-sidebar--secondary");
    if (secondarySidebar && hasToc()) secondarySidebar.hidden = false;
    html.classList.toggle("sidebar-primary-collapsed", current.primaryCollapsed);
    html.classList.toggle(
      "sidebar-secondary-collapsed",
      current.tocCollapsed && hasToc()
    );
    refreshButtonState(current);
  }

  function refreshButtonState(current) {
    const primaryButton = document.querySelector("[data-layout-toggle='primary']");
    const tocButton = document.querySelector("[data-layout-toggle='toc']");
    if (!primaryButton || !tocButton) return;
    const tocPresent = hasToc();

    primaryButton.classList.toggle("is-collapsed", current.primaryCollapsed);
    primaryButton.setAttribute("aria-pressed", String(current.primaryCollapsed));
    primaryButton.textContent = current.primaryCollapsed ? "Show Nav" : "Hide Nav";

    tocButton.classList.toggle("is-collapsed", current.tocCollapsed && tocPresent);
    tocButton.setAttribute("aria-pressed", String(current.tocCollapsed && tocPresent));
    tocButton.textContent = current.tocCollapsed ? "Show TOC" : "Hide TOC";
    tocButton.hidden = !tocPresent;
    tocButton.disabled = !tocPresent;
  }

  function shouldShowDesktopButtons() {
    return window.matchMedia("(min-width: 76.25em)").matches;
  }

  function syncButtonVisibility() {
    const bar = document.querySelector(".layout-toggle-bar");
    if (!bar) return;
    bar.hidden = !shouldShowDesktopButtons();
  }

  function togglePrimary() {
    const next = !readBool(PRIMARY_KEY);
    writeBool(PRIMARY_KEY, next);
    applyState();
  }

  function toggleToc() {
    if (!hasToc()) return;
    const next = !readBool(TOC_KEY);
    writeBool(TOC_KEY, next);
    applyState();
  }

  function migrateState() {
    try {
      if (localStorage.getItem(VERSION_KEY) === LAYOUT_VERSION) return;
      localStorage.setItem(TOC_KEY, "0");
      localStorage.setItem(VERSION_KEY, LAYOUT_VERSION);
    } catch (e) {}
  }

  function mountButtons() {
    if (document.querySelector(".layout-toggle-bar")) return;

    const bar = document.createElement("div");
    bar.className = "layout-toggle-bar";

    const primaryButton = document.createElement("button");
    primaryButton.type = "button";
    primaryButton.className = "layout-toggle-btn";
    primaryButton.dataset.layoutToggle = "primary";
    primaryButton.addEventListener("click", togglePrimary);

    const tocButton = document.createElement("button");
    tocButton.type = "button";
    tocButton.className = "layout-toggle-btn";
    tocButton.dataset.layoutToggle = "toc";
    tocButton.addEventListener("click", toggleToc);

    bar.appendChild(primaryButton);
    bar.appendChild(tocButton);
    document.body.appendChild(bar);
  }

  function run() {
    migrateState();
    buildTocFallback();
    mountButtons();
    applyState();
    syncButtonVisibility();
  }

  window.addEventListener("resize", syncButtonVisibility);

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(run);
  } else {
    document.addEventListener("DOMContentLoaded", run);
  }
})();
