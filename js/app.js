import {  photographyConfig,  phisicalPropertyConfig,  visibilityConfig
} from "./config/index.js";

// ==========================================

// DOM ELEMENTS

// ==========================================

const promptElement = document.getElementById("generatedPrompt");

const copyButton = document.getElementById("copyButton");

const feedbackElement = document.getElementById("feedback");

// ==========================================

// MODULE CONFIGURATION

// ==========================================

// Yeni modülleri sadece buraya ekle

const moduleConfigs = {

  photography: photographyConfig,

  phisicalProperty: phisicalPropertyConfig,

  visibility:visibilityConfig

  // lighting: lightingConfig,

  // camera: cameraConfig,

};

// ==========================================

// MODULE STATES

// ==========================================

const switchStates = {};

const selectedValues = {};

// Her modül için başlangıç değerleri

for (const [moduleId, config] of Object.entries(moduleConfigs)) {

  const switchElement = document.querySelector(

    `[data-module-switch="${moduleId}"]`

  );

  switchStates[moduleId] = switchElement

    ? switchElement.checked

    : false;

  selectedValues[moduleId] = Object.fromEntries(

    config.map(category => [

      category.id,

      category.defaultValue

    ])

  );

}

// ==========================================

// CONFIG VALIDATION

// ==========================================

function validateConfig() {

  for (const [moduleId, config] of Object.entries(moduleConfigs)) {

    if (!Array.isArray(config)) {

      throw new Error(

        `Invalid configuration for module: ${moduleId}`

      );

    }

    const ids = new Set();

    for (const category of config) {

      if (!category.id || ids.has(category.id)) {

        throw new Error(

          `Duplicate or missing category id in ${moduleId}: ${category.id}`

        );

      }

      ids.add(category.id);

      if (

        !Array.isArray(category.options) ||

        category.options.length === 0

      ) {

        throw new Error(

          `Missing options in ${moduleId}: ${category.id}`

        );

      }

      const values = new Set();

      for (const option of category.options) {

        if (values.has(option.value)) {

          throw new Error(

            `Duplicate option in ${moduleId}/${category.id}: ${option.value}`

          );

        }

        values.add(option.value);

      }

      if (

        !category.options.some(

          option => option.value === category.defaultValue

        )

      ) {

        throw new Error(

          `Invalid defaultValue in ${moduleId}: ${category.id}`

        );

      }

    }

  }

}

// ==========================================

// RENDER CATEGORIES

// ==========================================

function renderCategories(moduleId, config) {

  const container = document.querySelector(

    `[data-module-content="${moduleId}"]`

  );

  if (!container) {

    console.warn(

      `Container not found for module: ${moduleId}`

    );

    return;

  }

  const fragment = document.createDocumentFragment();
  const sections = moduleId === "phisicalProperty" ? [
    { title: "Subject & framing", ids: ["Subject Age", "Subject Gender", "Position In Frame", "Shot Type"] },
    { title: "Body & proportions", ids: ["Body Frame", "Height Impression", "Body Build", "Arm Shape", "Thigh Shape", "Waist Shape", "Proportion Style"] },
    { title: "Skin", ids: ["Skin Tone", "Skin Color Detail", "Tan Level", "Skin Texture"] },
    { title: "Avoid", ids: ["Avoid Body Shape", "Avoid Waist", "Avoid Leg Shape"] }
  ] : [];
  const targets = new Map();
  for (const [index, section] of sections.entries()) {
    const details = document.createElement("details");
    details.className = "category-section";
    details.open = index === 0;
    const summary = document.createElement("summary");
    summary.textContent = `${section.title} (${section.ids.length})`;
    const grid = document.createElement("div");
    grid.className = "categories-grid";
    details.append(summary, grid);
    fragment.append(details);
    for (const id of section.ids) targets.set(id, grid);
  }
  // New categories still render without needing a group definition.
  const ungrouped = document.createElement("div");
  ungrouped.className = "categories-grid";

  for (const category of config) {

    const group = document.createElement("div");

    group.className = "category";

    const label = document.createElement("label");

    label.className = "category-label";

    const selectId = `category-${moduleId}-${category.id}`;

    label.htmlFor = selectId;

    label.textContent = category.title;

    const wrapper = document.createElement("div");

    wrapper.className = "select-wrap";

    const select = document.createElement("select");

    select.className = "category-select";

    select.id = selectId;

    select.name = `${moduleId}-${category.id}`;

    for (const option of category.options) {

      const item = document.createElement("option");

      item.value = option.value;

      item.textContent = option.label;

      select.appendChild(item);

    }

    select.value = selectedValues[moduleId][category.id];

    select.addEventListener("change", () => {

      selectedValues[moduleId][category.id] = select.value;

      updatePrompt();

    });

    wrapper.appendChild(select);

    group.append(label, wrapper);

    (targets.get(category.id) || ungrouped).appendChild(group);

  }

  if (ungrouped.childElementCount) fragment.appendChild(ungrouped);
  container.replaceChildren(fragment);

}

// ==========================================

// MODULE VISIBILITY

// ==========================================

function updateModuleVisibility(moduleId) {

  const container = document.querySelector(

    `[data-module-content="${moduleId}"]`

  );

  const switchElement = document.querySelector(

    `[data-module-switch="${moduleId}"]`

  );

  const enabled = switchStates[moduleId];

  if (container) {

    // Inclusion in the prompt is independent from panel expansion.
    container.querySelectorAll("select").forEach(select => {
      select.disabled = !enabled;
    });

  }

  if (switchElement) {

    switchElement.checked = enabled;

  }

}

// ==========================================

// SWITCH EVENT LISTENERS

// ==========================================

function initializeSwitches() {

  for (const moduleId of Object.keys(moduleConfigs)) {

    const switchElement = document.querySelector(

      `[data-module-switch="${moduleId}"]`

    );

    if (!switchElement) {

      console.warn(

        `Switch not found for module: ${moduleId}`

      );

      continue;

    }

    switchElement.addEventListener("change", () => {

      switchStates[moduleId] = switchElement.checked;

      updateModuleVisibility(moduleId);

      updatePrompt();

    });

    updateModuleVisibility(moduleId);

  }

}

// ==========================================

// PROMPT GENERATOR

// ==========================================

function buildPrompt() {

  const pieces = [];

  // Tüm aktif modülleri dolaş

  for (const [moduleId, config] of Object.entries(moduleConfigs)) {

    // Kapalı modülleri atla

    if (!switchStates[moduleId]) {

      continue;

    }

    // İlgili modülün kategorilerini dolaş

    for (const category of config) {

      const selectedValue =

        selectedValues[moduleId][category.id];

      const choice = category.options.find(

        option => option.value === selectedValue

      );

      if (

        typeof choice?.prompt === "string" &&

        choice.prompt.trim()

      ) {

        pieces.push(choice.prompt.trim());

      }

    }

  }

  // Hiçbir aktif prompt yoksa boş döndür

  if (pieces.length === 0) {

    return "";

  }

  return [

    "Edit the uploaded photograph according to the following instructions:",

    ...pieces

  ].join(" ");

}

// ==========================================

// UPDATE PROMPT

// ==========================================

function updatePrompt() {

  if (!promptElement) return;

  promptElement.textContent = buildPrompt();

}

// ==========================================

// COPY PROMPT

// ==========================================

function initializeCopyButton() {

  if (!copyButton || !feedbackElement) {

    return;

  }

  copyButton.addEventListener("click", async () => {

    const prompt = buildPrompt();

    if (!prompt.trim()) {

      feedbackElement.textContent =

        "No active prompt sections to copy.";

      return;

    }

    try {

      await navigator.clipboard.writeText(prompt);

      feedbackElement.textContent =

        "Prompt copied.";

    } catch {

      feedbackElement.textContent =

        "Copy unavailable. Select the prompt text to copy manually.";

    }

  });

}

// ==========================================
// MODULE EXPANSION
// ==========================================

function initializeModuleToggles() {
  document.querySelectorAll(".module-toggle").forEach(button => {
    const container = document.getElementById(button.getAttribute("aria-controls"));
    if (!container) return;
    const setExpanded = expanded => {
      button.setAttribute("aria-expanded", String(expanded));
      container.hidden = !expanded;
    };
    setExpanded(button.closest(".module-card").dataset.module === "photography");
    button.addEventListener("click", () => {
      setExpanded(button.getAttribute("aria-expanded") !== "true");
    });
  });
}

// ==========================================

// INITIALIZATION

// ==========================================

function initializeApp() {

  // Validate all configurations

  validateConfig();

  // Render every module

  for (const [moduleId, config] of Object.entries(moduleConfigs)) {

    renderCategories(moduleId, config);

  }

  // Initialize switches

  initializeSwitches();
  initializeModuleToggles();

  // Initialize copy functionality

  initializeCopyButton();

  // Generate initial prompt

  updatePrompt();

}

initializeApp();
