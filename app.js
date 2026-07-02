(function () {
  const data = window.SEO_HANEUL_SHOWCASE;

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function prettyId(value) {
    return value.replaceAll("_", " ").replace(/\b\w/g, (m) => m.toUpperCase());
  }

  function renderSummary() {
    const grid = document.getElementById("summary-grid");
    data.model_totals.forEach((row) => {
      const item = el("article", "metric");
      item.appendChild(el("h3", "", row.model));
      item.appendChild(el("span", "value", `${row.identity}/${row.n}`));
      item.appendChild(el("p", "", "Cells with an explicit Seo/identity marker in a crude lexical pass."));
      const dl = el("dl");
      [
        ["Average chars", row.avg_chars],
        ["Korean chars", row.korean_chars],
        ["Facts/docs hits", row.facts_docs],
        ["Korea/legal hits", row.korea_legal],
        ["Not-lawyer hits", row.not_lawyer],
      ].forEach(([k, v]) => {
        dl.appendChild(el("dt", "", k));
        dl.appendChild(el("dd", "", String(v)));
      });
      item.appendChild(dl);
      grid.appendChild(item);
    });
  }

  function renderCards() {
    const list = document.getElementById("card-list");
    data.cards.forEach((card, index) => {
      const details = el("details", "profile-card");
      if (index === 1) details.open = true;
      const summary = document.createElement("summary");
      summary.innerHTML = `<strong>${card.title}</strong> <span>${card.chars.toLocaleString()} chars · <a href="${card.file}">raw markdown</a></span>`;
      const pre = el("pre", "", card.text);
      details.appendChild(summary);
      details.appendChild(pre);
      list.appendChild(details);
    });
  }

  function renderOutputs(filter) {
    const grid = document.getElementById("output-grid");
    grid.innerHTML = "";
    data.outputs
      .filter((row) => filter === "all" || row.model === filter)
      .forEach((row) => {
        const item = el("article", "output-item");
        item.dataset.model = row.model;
        item.appendChild(el("h3", "", prettyId(row.task)));
        const meta = el("div", "meta");
        meta.appendChild(el("span", "pill", row.model));
        meta.appendChild(el("span", "pill", prettyId(row.card)));
        meta.appendChild(el("span", "pill", `${row.chars.toLocaleString()} chars`));
        item.appendChild(meta);
        item.appendChild(el("p", "", row.excerpt));
        const link = el("a", "", "Open Markdown output");
        link.href = row.file;
        item.appendChild(link);
        grid.appendChild(item);
      });
  }

  function formatNumber(value) {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return "n/a";
    return Number(value).toFixed(3);
  }

  function renderPsychometrics() {
    const grid = document.getElementById("psychometric-grid");
    if (!grid || !data.psychometrics || !Array.isArray(data.psychometrics.rows)) return;
    if (!data.psychometrics.rows.length) {
      const item = el("article", "metric");
      item.appendChild(el("h3", "", "Scoring queued"));
      item.appendChild(el("p", "", "The IPIP-NEO 120 judge pass will appear here after the OpenRouter scoring run completes."));
      grid.appendChild(item);
      return;
    }
    data.psychometrics.rows.forEach((row) => {
      const item = el("article", "metric");
      item.appendChild(el("h3", "", row.label));
      item.appendChild(el("span", "value", formatNumber(row.facet_r_mean)));
      item.appendChild(el("p", "", "Mean card-to-LSI facet correlation across scored card states."));
      const dl = el("dl");
      [
        ["Domain r", formatNumber(row.domain_r_mean)],
        ["Facet r", formatNumber(row.facet_r_mean)],
        ["Item r", formatNumber(row.item_r_mean)],
        ["Mean facet MAE", formatNumber(row.facet_mae_mean)],
        ["Judge", row.judge],
      ].forEach(([k, v]) => {
        dl.appendChild(el("dt", "", k));
        dl.appendChild(el("dd", "", String(v)));
      });
      item.appendChild(dl);
      grid.appendChild(item);
    });
  }

  function signed(value) {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return "n/a";
    const num = Number(value);
    return `${num >= 0 ? "+" : ""}${num.toFixed(2)}`;
  }

  function renderDefaultShift() {
    const grid = document.getElementById("default-shift-grid");
    if (!grid || !data.default_shift || !Array.isArray(data.default_shift.rows)) return;
    data.default_shift.rows.forEach((row) => {
      const item = el("article", "metric shift-card");
      item.appendChild(el("h3", "", row.label));
      item.appendChild(el("span", "value", formatNumber(row.improvement)));
      item.appendChild(el("p", "", "Mean Big Five distance-to-card improvement from no-card LSI to card-conditioned LSI."));
      const dl = el("dl");
      [
        ["Default to card MAE", formatNumber(row.default_to_target_mae)],
        ["Conditioned to card MAE", formatNumber(row.conditioned_to_target_mae)],
        ["Mean domain movement", formatNumber(row.mean_domain_movement)],
      ].forEach(([k, v]) => {
        dl.appendChild(el("dt", "", k));
        dl.appendChild(el("dd", "", String(v)));
      });
      row.domains.forEach((domain) => {
        dl.appendChild(el("dt", "", domain.domain));
        dl.appendChild(el("dd", "", signed(domain.conditioned_minus_default)));
      });
      item.appendChild(dl);
      grid.appendChild(item);
    });
  }

  function renderQualityJudges() {
    const grid = document.getElementById("quality-grid");
    if (!grid || !data.quality_judges || !Array.isArray(data.quality_judges.rows)) return;
    data.quality_judges.rows.forEach((row) => {
      const item = el("article", "metric");
      item.appendChild(el("h3", "", row.label));
      item.appendChild(el("span", "value", formatNumber(row.writing_overall_mean)));
      item.appendChild(el("p", "", "Mean writing-quality score across DeepSeek V4 Pro, GLM-5.2, and GPT-5.5."));
      const dl = el("dl");
      [
        ["Writing overall", formatNumber(row.writing_overall_mean)],
        ["Voice", formatNumber(row.writing_voice_mean)],
        ["Persona adherence", formatNumber(row.writing_persona_adherence_mean)],
        ["Task fit", formatNumber(row.writing_task_fit_mean)],
        ["Legal overall", formatNumber(row.legal_overall_mean)],
        ["Legal issue spotting", formatNumber(row.legal_issue_spotting_mean)],
        ["Legal safety", formatNumber(row.legal_safety_boundaries_mean)],
        ["Judge rows", `${row.n} writing / ${row.n_legal} legal`],
      ].forEach(([k, v]) => {
        dl.appendChild(el("dt", "", k));
        dl.appendChild(el("dd", "", String(v)));
      });
      item.appendChild(dl);
      grid.appendChild(item);
    });

    const empath = document.getElementById("empath-readout");
    if (empath) {
      const writingR = formatNumber(data.quality_judges.writing_interjudge_r_mean);
      const legalR = formatNumber(data.quality_judges.legal_interjudge_r_mean);
      const ext = data.quality_judges.rows.find((row) => row.model_under_test === "extgemma4-44b");
      const official = data.quality_judges.rows.find((row) => row.model_under_test === "gemma4-31b-it");
      empath.innerHTML = `
        <p>
          Judge agreement was respectable for writing (mean interjudge r ${writingR}) and noisier but usable
          for legal quality (mean interjudge r ${legalR}). The official Gemma4-31B-it row scored higher on
          both rubrics, while the earlier qualitative read still stands: extGemma4-44B more readily foregrounds
          the Seo Haneul persona.
        </p>
        <p>
          Empath is installed locally, so we also ran the real lexicon pass over assistant text only.
          It is a texture read rather than a semantic verdict: extGemma averaged ${formatNumber(ext && ext.empath_law_mean)}
          law-category density and ${formatNumber(ext && ext.empath_trust_mean)} trust density, versus
          ${formatNumber(official && official.empath_law_mean)} and ${formatNumber(official && official.empath_trust_mean)}
          for official Gemma.
        </p>
      `;
      empath.classList.remove("is-empty");
    }
  }

  function wireFilters() {
    document.querySelectorAll(".filter").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
        button.classList.add("is-active");
        renderOutputs(button.dataset.filter);
      });
    });
  }

  renderSummary();
  renderCards();
  renderOutputs("all");
  renderPsychometrics();
  renderDefaultShift();
  renderQualityJudges();
  wireFilters();
})();
