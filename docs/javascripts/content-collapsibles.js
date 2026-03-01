(function () {
  function cleanText(value) {
    return (value || "").trim().replace(/\s+/g, " ");
  }

  function labelFromCode(block) {
    const code = block.matches("pre")
      ? block.querySelector("code")
      : block.querySelector("code");
    if (!code || !code.className) return "Show code";
    const langClass = code.className
      .split(/\s+/)
      .find((name) => name.startsWith("language-"));
    if (!langClass) return "Show code";
    const lang = langClass.replace("language-", "");
    if (!lang) return "Show code";
    return `Show code (${lang})`;
  }

  function wrapWithDetails(target, label, type) {
    if (!target || target.closest("details.auto-collapsible")) return;
    const details = document.createElement("details");
    details.className = `auto-collapsible auto-collapsible--${type}`;
    const summary = document.createElement("summary");
    summary.textContent = label;
    details.appendChild(summary);
    target.parentNode.insertBefore(details, target);
    details.appendChild(target);
  }

  function collapseCodeBlocks() {
    const nodes = Array.from(
      document.querySelectorAll(
        ".md-content__inner.md-typeset div.highlight, .md-content__inner.md-typeset pre"
      )
    );

    nodes.forEach((node) => {
      if (node.matches("pre") && node.parentElement && node.parentElement.matches("div.highlight")) {
        return;
      }
      if (node.closest(".tabbed-content")) return;
      wrapWithDetails(node, labelFromCode(node), "code");
    });
  }

  function collapseImages() {
    const images = Array.from(document.querySelectorAll(".md-content__inner.md-typeset img"));
    images.forEach((img) => {
      if (img.closest("a.md-logo, .md-header, .md-footer, .md-nav, .md-search, .twemoji")) return;
      if (img.classList.contains("emojione")) return;

      const figure = img.closest("figure");
      const target = figure || img;
      const alt = cleanText(img.getAttribute("alt"));
      const label = alt ? `Show image: ${alt}` : "Show image";
      wrapWithDetails(target, label, "image");
    });
  }

  function run() {
    collapseCodeBlocks();
    collapseImages();
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(run);
  } else {
    document.addEventListener("DOMContentLoaded", run);
  }
})();
